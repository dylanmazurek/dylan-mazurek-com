
import Footer from "./footer";

export default function Home() {
    return (
        <div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col row-start-2 items-center sm:items-start">
                    <h1 className="text-5xl font-bold mb-10">Engineer & Theatre Performer</h1>
                    <p className="text-center sm:text-left">
                        Hi! I&apos;m Dylan Mazurek, a software engineer and musical theatre performer based in Melbourne, Australia.
                    </p>
                    {/* <Posts /> */}
                </main>
                <Footer />
            </div>
        </div>
    );
}
