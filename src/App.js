import './App.module.css';
import Header from "./components/Header/Header";
import style from './App.module.css'

export default function App() {
  return (
    <div className={style.main}>
      <Header/>
    </div>
  );
}
