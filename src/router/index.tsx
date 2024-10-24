import {createBrowserRouter} from "react-router-dom";
import {CustomChart} from "@/components/template/CustomChart.tsx";
import Layout from "@/app/layout.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            // {
            //   path: "",
            //   element: </>
            // },
            {
                path: "graph",
                element: <CustomChart/>
            }
        ]

    },
]);
