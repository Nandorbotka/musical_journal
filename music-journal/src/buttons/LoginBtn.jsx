import React from "react";
import { Button } from "flowbite-react";

const LoginBtn = ({ label }) => {
    return (
        <Button className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 sm:scale-125 md:scale-150 xl:scale-200 2xl:w-32 2xl:h-14 2xl:text-2xl cursor-pointer">
            {label}
        </Button>
    );
};

export default LoginBtn;
