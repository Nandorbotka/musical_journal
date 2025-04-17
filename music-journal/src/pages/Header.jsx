import React from "react";
import { Link } from "react-router-dom";
import LoginBtn from "../buttons/LoginBtn";

const Header = ({ btnLabel }) => {
    return (
        <nav className="flex justify-between w-full items-center p-10 pt-14 h-[10vh] xl:pr-14 2xl:pr-24">
            <h1 className="font-semibold sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl">
                🎵Music Journal
            </h1>
            <Link to="/login">
                <LoginBtn label={btnLabel} />
            </Link>
        </nav>
    );
};

export default Header;
