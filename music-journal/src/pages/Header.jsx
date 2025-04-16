import { Button } from "flowbite-react";
import React from "react";

const Header = () => {
    return (
        <nav className="flex justify-between w-full items-center p-6 h-[10vh]">
            <h1 className="font-semibold sm:text-2xl md:text-4xl">
                🎵Music Journal
            </h1>
            <Button className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 sm:scale-125 md:scale-150">
                Login
            </Button>
        </nav>
    );
};

export default Header;
