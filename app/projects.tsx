import Link from 'next/link'

export default function List() {
    return (
        <div className='mt-8'>
        <h2 className='text-2xl font-bold'>Projects</h2>
        <ul className='list-disc ml-8'>
            <li className='mt-4'>
                <Link href="https://charliebrownthemusical.com">You&apos;re a Good Man, Charlie Brown - MICF 2025</Link>
            </li>
        </ul>
        </div>

    )
}