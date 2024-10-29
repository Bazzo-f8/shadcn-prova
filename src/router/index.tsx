import {createBrowserRouter} from "react-router-dom";
import {CustomChart} from "@/components/template/CustomChart.tsx";
import Layout from "@/layouts/layout.tsx";
// import {HomePage} from "@/pages/home/HomePage.tsx";
import {HomeTable} from "@/pages/home/components/HomeTable.tsx";
import LoginPage from "@/pages/login/LoginPage.tsx";
import ProtectedRoute from "@/guards/ProtectedRoute.tsx";


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <ProtectedRoute/>, // Protects nested routes
                children: [
                    {
                        path: "",
                        element: <HomeTable/>
                    },
                    {
                        path: "graph",
                        element: <CustomChart/>
                    }
                ]
            }
        ]

    },
]);
