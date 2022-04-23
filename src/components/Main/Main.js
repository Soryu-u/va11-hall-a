import React from "react";
import style from "./Main.module.css"
import {Outlet} from "react-router-dom";

export default function Main () {
    return(
        <div className={style.container}>
            <main className={style.main}>
                <Outlet/>
            </main>
        </div>
    )
}
