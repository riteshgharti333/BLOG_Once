import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../component/header/Header"
import Posts from "../../component/posts/Posts"
import Sidebar from "../../component/sidebar/Sidebar"
import "./home.css"

export default function Home() {


  const [posts , setposts] = useState([]);
  const {search} = useLocation();


  useEffect(() =>{
    const fetchPosts = async () =>{
      const res = await axios.get("/posts" + search)
      setposts(res.data);
    }
    fetchPosts();
  } , [search]);

   return (
    <>
    <Header/>
    <div className="home">
     <Posts posts={posts}/>
     <Sidebar/>
    </div>
    </>
   )

}
