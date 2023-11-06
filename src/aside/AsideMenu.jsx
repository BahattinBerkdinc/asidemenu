import React, { useState } from 'react'
import "./aside-menu.scss"
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import { GiNotebook } from "react-icons/gi"
import { BiMessageEdit } from "react-icons/bi"
import { AiOutlineProject } from "react-icons/ai"
import { MdOutlineWorkOutline } from "react-icons/md"
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs"
const AsideMenu = () => {

    const [active, setActive] = useState(false)


    return (
        <div id="aside-menu" className={active ? "active" : ""}  >
            <div className="top-icons">
                <div onClick={() => setActive(!active)}>
                    {
                        active ? <BsChevronBarRight /> : <BsChevronBarLeft />
                    }
                </div>
            </div>
            <div className="top">
                <div className="logo">LOGO</div>
                <div className="line"></div>
                <span> App</span>
            </div>
            <div className="links">
                <a rel='noreferrer' href="#">
                    <AiOutlineHome />
                    <span>Home</span></a>
                <a rel='noreferrer' href="#">
                    <GiNotebook />
                    <span>About</span></a>
                <a rel='noreferrer' href="#">
                    <AiOutlineProject />
                    <span>Projects</span></a>
                <a rel='noreferrer' href="#">
                    <MdOutlineWorkOutline />
                    <span>Portfolio</span></a>
                <a rel='noreferrer' href="#">
                    <BiMessageEdit />
                    <span>Contact</span></a>
                <a rel='noreferrer' href="#">
                    <AiOutlineSetting />
                    <span>Settings</span></a>
            </div>
            <div className="bottom">
                <div className="account">
                    <AiOutlineUser />
                </div>
                <span>Username</span>
            </div>
        </div>
    )
}

export default AsideMenu
