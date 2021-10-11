import React, { useState,useEffect } from "react";
import './App.css';
import Login from './components/login/login'
import Createacc from './components/login/createacc'
import Home from './components/home/home'


let token=localStorage.getItem("toke")
function App() {
  const[page,setPage]=useState("login")
  useEffect(() => {
      
    if(token ===null || token===""){
        setPage("login")
    }
    else if(token !== null){
      
        setPage("homepage")
    }
   else if(token !== ""){
    
        setPage("homepage")
    }
}, [])
const changepage=(a)=>{
    setPage(a)
}
const tokenmanage=(t)=>{
    // console.log(t);
    localStorage.setItem("toke", t);
    token=localStorage.getItem("toke")
    // token=t
    if(token!==""){
        setPage("homepage")
    }else{
        setPage("login")
    }     
}


if(page==="login" ){
    return(
        <div>
            <Login tokenmanage={tokenmanage} changepage={changepage} />
        </div>
    )
}else if(page==="createacc"){
    return(
        <div>
            <Createacc  changepage={changepage} />
        </div>
    )
}else if(page==="homepage" ){
    return(
        <div>
            <Home token={token} tokenmanage={tokenmanage} />
        </div>
    )
}
}

export default App;
