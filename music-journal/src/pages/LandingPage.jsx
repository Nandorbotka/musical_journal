import React from "react";
import vinylImg from "../assets/vinyl.png";
import vinylStack from "../assets/vinyl-stack.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";
import CreateProfileBtn from "../buttons/CreateProfileBtn";

const LandingPage = () => {
    return (
        <>
            <Header />
            <main className="h-[90vh] w-full flex flex-col justify-between lg:flex-row">
                <div className="flex flex-col items-center mt-16 gap-7 w-full lg:pt-14 xl:pt-32 xl:gap-10 2xl:gap-16 2xl:pt-54">
                    <h1 className="text-3xl font-bold text-center sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl 2xl:text-9xl">
                        Track Your Tunes,
                        <br /> Share Your Story.
                    </h1>
                    <img
                        src={vinylImg}
                        alt="vinyl image"
                        className="w-10 sm:w-12 md:w-16 xl:w-20 2xl:w-32"
                    />
                    <p className="text-center sm:text-xl w-2/3 md:text-2xl xl:text-3xl 2xl:text-5xl">
                        Create your own musical journej share it with your
                        friends and connect with each other trough music from
                        month to month
                    </p>
                </div>
                <div
                    className="h-full mt-4 flex justify-center items-center w-full lg:rounded-l-2xl lg:h-5/6 lg:mt-10 xl:mt-14"
                    style={{
                        backgroundImage: `url(${vinylStack})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Link to="/create-profile">
                        <CreateProfileBtn>
                            Create your own music journal.
                        </CreateProfileBtn>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default LandingPage;
