import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListPage from "../pages/list";
import CreatePage from "../pages/add";
import ViewPage from "../pages/view/[id]";
import EditPage from "../pages/edit/[id]";
import HomePage from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "list", element: <ListPage />},
            {path: "create", element: <CreatePage />},
            {path: "view/:id", element: <ViewPage />},
            {path: "edit/:id", element: <EditPage />},
        ]
    }
])