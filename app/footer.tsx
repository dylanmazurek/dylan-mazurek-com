import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="row-start-3 grid grid-cols-2 sm:grid-cols-4 gap-6 text-lg">
            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://bsky.app/profile/dylanmazurek.com" target="_blank">
                <Image src="/bluesky.svg" alt="Bluesky" width={20} height={20} />
                <span>Bluesky</span>
            </Link>
            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.linkedin.com/in/dylanmazurek" target="_blank">
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                <span>LinkedIn</span>
            </Link>
            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://facebook.com/dylanmazurek" target="_blank">
                <Image src="/facebook.svg" alt="Facebook" width={20} height={20}/>
                <span>Facebook</span>
            </Link>
            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://instagram.com/dylanmazurek" target="_blank">
                <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                <span>Instagram</span>
            </Link>
        </footer>
    )
}