import React from "react";
import style from  "./Sidebar.module.css"
import sidebarHeader from '../../image/sidebarHeader1.jpg'
import avatar from "../../image/avatar.jpg"
import twitter from "../../image/twitter.png"
import vk from "../../image/vk.png"
import insta from "../../image/insta.png"

export default function Sidebar () {
    return(
        <div className={style.sidebar}>
            <div className={style.sidebar__header}>
                <img src={sidebarHeader} alt={"sidebarHeader"} />
            </div>
            <div className={style.sidebar__content}>
                <div className="profile">
                    <img className={style.profile__avatar} src={avatar} alt={"avatar"} />
                    <div className={style.profile__name}>VA11-hall-A</div>
                    <div className={style.profile__description}>Добро пожаловать. Снова</div>

                    <ul className={style.social}>
                        <li className={style.social__item}>
                            <a className="social__link" href="https://twitter.com/SoryuuChan" target="_blank">
                                <img className={style.social__icon} src={twitter} alt={"Twitter"} />
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a className="social__link" href="https://vk.com/solo7" target="_blank">
                                <img className={style.social__icon} src={vk} alt={"ВКонтакте"} />
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a className="social__link" href="https://www.instagram.com/soryu_u/" target="_blank">
                                <img className={style.social__icon} src={insta} alt={"instagram"} />
                            </a>
                        </li>
                    </ul>

                    <div className={style.profile__status}>
                        <p>
                            оставь надежду <br />
                            всяк сюда входящий
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}