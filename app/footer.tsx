import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://bsky.app/profile/dylanmazurek.com"
                target="_blank">
                <Image src="/bluesky.svg" alt="Bluesky" width={20} height={20} />
                Bluesky
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.linkedin.com/in/dylanmazurek"
                target="_blank">
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                LinkedIn
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://facebook.com/dylanmazurek"
                target="_blank">
                <Image src="/facebook.svg" alt="Facebook" width={20} height={20}/>
                Facebook
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://instagram.com/dylanmazurek"
                target="_blank">
                <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                Instagram
            </a>
        </footer>
    )
}