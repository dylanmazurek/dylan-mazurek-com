import { Domine } from 'next/font/google';
import Footer from "./footer";
import Projects from './projects';

const domine = Domine({ subsets: ['latin'], display: "swap" });

export default function Home() {
    return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
            <main className="flex flex-col row-start-2 items-center sm:items-start">
                <h1 className={`text-5xl font-bold mb-10 ${domine.className}`}>Engineer &<br/><span className="animate-wiggle">Theatre Performer</span></h1>
                <p className="text-lg">
                    Hi! I&apos;m Dylan Mazurek, a software engineer and musical theatre performer based in Melbourne, Australia.
                </p>
                <Projects />
                {/* <Posts /> */}
            </main>
            <Footer />
        </div>
    );
}
