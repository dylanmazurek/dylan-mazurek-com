
import Footer from "./footer";
import Posts from "./posts";

export default function Home() {
    return (
        <div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col row-start-2 items-center sm:items-start">
                    <h4 className="text-xl font-semibold text-gray-500 mb-2">Hello, I'm</h4>
                    <h1 className="text-5xl font-bold mb-10">Dylan Mazurek</h1>
                    <p className="text-center sm:text-left">
                        I'm a software engineer and musical theatre performer based in Melbourne, Australia.
                    </p>
                    <Posts />
                </main>
                <Footer />
            </div>
        </div>
    );
}
