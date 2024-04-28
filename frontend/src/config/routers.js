import CreateItinerary from "../pages/CreateItinerary";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ResetPassword from "../pages/ResetPassword";
import PrivateLayout from "./PrivateLayout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Auth } = require("../pages/Auth");

const router = createBrowserRouter([
    { path: "/", element: <Auth /> },
    { path: "/auth/activate/:token/", element: <Auth /> },
    {
        path: "/auth/reset-password/:uid/:token",
        element: <ResetPassword />,
    },
    {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/createItinerary",
        element: <CreateItinerary />,
    },
]);

export default router;
