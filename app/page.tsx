import Footer from "./footer";
import Posts from "./posts";
import { useState } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (typeof document !== "undefined") {
            if (darkMode) {
                document.documentElement.classList.remove("dark");
            } else {
                document.documentElement.classList.add("dark");
            }
        }
    };

    return (
        <div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col row-start-2 items-center sm:items-start">
                    <h4 className="text-xl font-semibold text-gray-500 mb-2">Hello, I'm</h4>
                    <h1 className="text-5xl font-bold mb-10">Dylan Mazurek</h1>
                    <p className="text-center sm:text-left">
                        I'm a software engineer and musical theatre performer based in Melbourne, Australia.
                    </p>
                    <button onClick={toggleDarkMode} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">
                        Toggle Dark Mode
                    </button>
                    <Posts />
                </main>
                <Footer />
            </div>
        </div>
    );
}
