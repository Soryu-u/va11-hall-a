import React from "react";
import PostView from "../PostView/PostView";
import style from "./Home.module.css"

export default function Home(){
    return(
        <div className={style.container}>
            <PostView />
        </div>
    )
}