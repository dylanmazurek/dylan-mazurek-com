import { AppBskyFeedGetAuthorFeed, AppBskyFeedGetPosts, AtpAgent } from "@atproto/api";
import { PostView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

export default async function Posts() {
  const blueskyAgent = new AtpAgent({
    service: "https://api.bsky.app",
  });

  const authorFeedResponse: AppBskyFeedGetAuthorFeed.Response = await blueskyAgent.getAuthorFeed({
    actor: "did:plc:yid2z3ewm4div4bnexxhmfve",
    limit: 5,
  });

  const allPostsResponse: AppBskyFeedGetPosts.Response = await blueskyAgent.getPosts({
    uris: authorFeedResponse.data.feed.map((post) => post.post.uri),
  });

  const allPosts = allPostsResponse.data.posts;

  return (
    <div>
      {allPosts.map((post: PostView) => (
        <div key={post.uri}>
          <h2>{post.indexedAt}</h2>
        </div>
      ))}
    </div>
  );
}