import React from "react";
import style from "./PostView.module.css"

export default function PostView() {
    let created_at = Date()
    return (
        <div className={style.container}>
            <img />
            <h1>title</h1>
            <p>lorem</p>
            <div>
                <div>{created_at}</div>
            </div>
        </div>
    )
}