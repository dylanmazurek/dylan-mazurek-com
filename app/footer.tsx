export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://bsky.app/profile/dylanmazurek.com"
                target="_blank">
                <img className="w-6 h-6" src="/bluesky.svg" alt="Bluesky" />
                Bluesky
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.linkedin.com/in/dylanmazurek"
                target="_blank">
                <img className="w-6 h-6" src="/linkedin.svg" alt="Instagram" />
                LinkedIn
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://facebook.com/dylanmazurek"
                target="_blank">
                <img className="w-6 h-6" src="/facebook.svg" alt="Facebook" />
                Facebook
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://instagram.com/dylanmazurek"
                target="_blank">
                <img className="w-6 h-6" src="/instagram.svg" alt="Instagram" />
                Instagram
            </a>
        </footer>
    )
}