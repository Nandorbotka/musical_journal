import { Button } from "flowbite-react";
import React from "react";
import vinylImg from "../assets/vinyl.png";
import vinylStack from "../assets/vinyl-stack.jpg";
import Header from "./Header";

const LandingPage = () => {
    return (
        <>
            <Header />
            <main className="h-[90vh] w-full flex flex-col justify-between lg:flex-row">
                <div className="flex flex-col items-center mt-16 gap-7 w-full">
                    <h1 className="text-3xl font-bold text-center sm:text-5xl md:text-7xl">
                        Track Your Tunes,
                        <br /> Share Your Story.
                    </h1>
                    <img
                        src={vinylImg}
                        alt="vinyl image"
                        className="w-10 sm:w-12 md:w-16"
                    />
                    <p className="text-center sm:text-xl w-2/3 md:text-2xl">
                        Create your own musical journej share it with your
                        friends and connect with each other trough music from
                        month to month
                    </p>
                </div>
                <div
                    className="h-full mt-4 flex justify-center items-center w-full lg:rounded-l-2xl"
                    style={{
                        backgroundImage: `url(${vinylStack})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Button className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 sm:scale-150 md:scale-200">
                        Create your own music journal.
                    </Button>
                </div>
            </main>
        </>
    );
};

export default LandingPage;
