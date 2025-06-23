import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import  PostList, {PostLoader}  from "./components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: PostLoader },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },

  // { path: "/", element: <App /> },
  // { path: "create-new-post", element: <CreatePost /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
    
    </RouterProvider>
  </StrictMode>
);



// onl for undertand routes 