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
      console.log(process.env.REACT_APP_API_URL)
      const res = await axios.get(`${process.env.REACT_APP_API_URL}posts` + search)
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
