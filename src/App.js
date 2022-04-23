import './App.module.css';
import Header from "./components/Header/Header";
import style from './App.module.css'
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";

export default function App() {
    return (
        <div className={style.main}>
            <Routes>
                <Route path='/' element={
                    <div>
                        <Header/>
                        <Sidebar/>
                        <Main/>
                    </div>
                }>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<div>About</div>}/>
                </Route>
            </Routes>
        </div>
    );
}
