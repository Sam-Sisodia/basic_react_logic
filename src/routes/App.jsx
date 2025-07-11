import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from "../strore/posts-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedtTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedtTab={selectedtTab} setselectedTab={setselectedTab} />
        <div className="content">
          <Header />
          <Outlet />
         
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
