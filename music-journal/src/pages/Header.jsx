import { Button } from "flowbite-react";
import React from "react";

const Header = () => {
    return (
        <nav className="flex justify-between w-full items-center p-10 pt-14 h-[10vh] xl:pr-14 2xl:pr-24">
            <h1 className="font-semibold sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl">
                🎵Music Journal
            </h1>
            <Button className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 sm:scale-125 md:scale-150 xl:scale-200 2xl:w-32 2xl:h-14 2xl:text-2xl">
                Login
            </Button>
        </nav>
    );
};

export default Header;
