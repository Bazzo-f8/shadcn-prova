import {createBrowserRouter} from "react-router-dom";
import {CustomChart} from "@/components/template/CustomChart.tsx";
import Layout from "@/app/layout.tsx";
// import {HomePage} from "@/pages/home/HomePage.tsx";
import {HomeTable} from "@/pages/home/components/HomeTable.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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

    },
]);
