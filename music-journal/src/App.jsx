import CreateProfile from "./pages/CreateProfile.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
    { index: true, element: <LandingPage /> },
    { path: "create-profile", element: <CreateProfile /> },
    { path: "login", element: <Login /> },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
