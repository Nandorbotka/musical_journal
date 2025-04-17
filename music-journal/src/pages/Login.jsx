import React from "react";
import Header from "./Header";

const Login = () => {
    return (
        <>
            <Header btnLabel="Register" />
            <main className="h-[80vh] w-full flex flex-col items-center justify-center">
                <div className=" flex flex-col ">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        className="border border-solid rounded-lg p-2"
                    />
                    <label htmlFor="password" className="mt">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="border border-solid rounded-lg p-2"
                    />
                </div>
            </main>
        </>
    );
};

export default Login;
