import React from "react";
import { FaPlay } from "react-icons/fa";
import { TiBatteryHigh } from "react-icons/ti";

const Ipod = () => {
    return (
        <div className="border border-solid border-gray-400 h-5/6 w-4/5 rounded-2xl bg-linear-to-tr from-teal-400 to-teal-200 flex flex-col items-center gap-20">
            <div className=" w-5/6 h-1/3 bg-linear-to-r mt-8 from-gray-300 to-gray-200 rounded-2xl inset-shadow-2xs border border-solid border-gray-400 flex flex-col gap-4 p-2">
                <span className="flex justify-between items-center p-4 border-b border-solid">
                    <FaPlay className="scale-150" />
                    <p className="scale-125">Login</p>
                    <TiBatteryHigh className="scale-200" />
                </span>
                <span className=" flex justify-between m-auto w-5/6 items-center">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className=" rounded-2xl inset-shadow-2xs shadow-black bg-gray-300 p-1"
                    />
                </span>
                <span className=" flex justify-between m-auto w-5/6 items-center">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className=" rounded-2xl inset-shadow-2xs shadow-black bg-gray-300 p-1"
                    />
                </span>
            </div>
            <div className=" w-[80%] h-[47%] bg-linear-to-r from-gray-300 to-gray-200 rounded-full inset-shadow-2xs border border-solid border-gray-400 flex justify-center items-center">
                <div className="w-[47%] h-[47%] border border-solid border-gray-400 inset-shadow-2xs inset-shadow-gray-400 rounded-full flex justify-center items-center">
                    <p className="text-3xl font-semibold text-gray-500">
                        Login
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ipod;
