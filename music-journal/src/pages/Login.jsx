import React from "react";
import Header from "./Header";
import Casette from "../UI/Casette";
import Ipod from "../UI/Ipod";
import { useScreenWidth } from "../hooks/useScreenWidth";

const Login = () => {
    const screenWidth = useScreenWidth();

    return (
        <>
            <Header btnLabel="Register" />
            <main className="h-[80vh] w-full flex flex-col items-center justify-center">
                {screenWidth < 641 ? <Ipod /> : <Casette />}
            </main>
        </>
    );
};

export default Login;
