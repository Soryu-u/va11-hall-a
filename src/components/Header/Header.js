import React from "react";
import style from './Header.module.css'
import {Link} from "react-router-dom";

export default function Header (){
    return (
        <div className={style.header}>
            <Link className={style.link} to='/'>Home</Link>
            <Link className={style.link} to='/about'>About</Link>
        </div>
    )
}