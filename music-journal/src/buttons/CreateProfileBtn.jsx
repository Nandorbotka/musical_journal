import React from "react";
import { Button } from "flowbite-react";

const CreateProfileBtn = ({ children }) => {
    return (
        <Button className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 sm:scale-150 md:scale-200 2xl:w-100 2xl:h-16 2xl:text-2xl cursor-pointer">
            {children}
        </Button>
    );
};

export default CreateProfileBtn;
