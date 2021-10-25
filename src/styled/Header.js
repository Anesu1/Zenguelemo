import { IconButton } from '@material-ui/core';
import { CloseRounded, MenuRounded } from '@material-ui/icons';
import { EmailRounded, Facebook, Instagram, LinkedIn, WhatsApp } from '@material-ui/icons';
import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'
import { icons } from '../Footer'

function Header() {

    const [open, setOpen] = useState(false);

    const [menuChange, setMenuChange] = useState();

    useEffect(() => {
        if(window.innerWidth > 992){
            setMenuChange(true)
        }else{
            setMenuChange(false)
        }
    }, [])
    const ChangeMenu = () =>{
        if(window.innerWidth > 992){
            setMenuChange(true)
        }else{
            setMenuChange(false)
        }
    }
    window.addEventListener('resize', ChangeMenu);
    return (
        <>
        <HeaderSec>
            <img src="./imgs/logo.png" alt="" className="logo" />
            <ul className="menu">
                <li>
                    <a href="#">Activities</a>
                </li>
                <li>
                    <a href="#">Our Story</a>
                </li>
                <li>
                    <a href="#">Accommodations</a>
                </li>
                <li>
                    <a href="#">Enquires/Bookings</a>
                </li>
            </ul>
           
            <IconButton color="white" onClick={() => setOpen(true)}>
                <MenuRounded />
            </IconButton>
        </HeaderSec>
         {menuChange ?
            <div className={open ? 'menu-open change' : 'menu-open'}>
                <IconButton color="black" onClick={() => setOpen(false)}>
                    <CloseRounded />
                </IconButton>
                <img src="./imgs/logo.png" alt="" />
                <p>Zenguelemo Lodge: An eco friendly community
                    driven project with a vision of sustainability for the
                    future</p>
                    <div className="footer-contact">
                    <img src="./imgs/icons/whatsapp.png" alt="" />
                    <span>+258………………………….</span>
                </div>
                <div className="footer-contact">
                    <img src="./imgs/icons/email.png" alt="" />
                    <span>bookings@zengulemolodge.com</span>
                </div>
                <div className="icons">
                    {icons.map((icon,i) =>{
                        return  <a key={i} href={icon.link} target="_blank">
                                    <img src={icon.src} alt="" />
                                </a>
                    })}
                </div>
            </div> : 
            <div className={open ? 'menu-open change' : 'menu-open'}>
                <IconButton color="black" onClick={() => setOpen(false)}>
                    <CloseRounded />
                </IconButton>
                <ul>
                    <li>
                        <a href="#">Activities</a>
                    </li>
                    <li>
                        <a href="#">Our Story</a>
                    </li>
                    <li>
                        <a href="#">Accommodations</a>
                    </li>
                    <li>
                        <a href="#">Enquires/Bookings</a>
                    </li>
                </ul>
            </div>}
        </>
    )
}

const HeaderSec = styled.header`
    padding:0 7%;
    display:flex;
    position:absolute;
    top:2%;
    transform:translateX(-50%);
    left:50%;
    font-family:${props => props.theme.fam.proxima};
    width:95%;
    justify-content:space-between;
    @media(min-width:768px){
        width:85%;
    }
    img{
        height:150px;
    }
   
    .menu{
        display:none;
        @media(min-width:992px){
            display:block;
            flex:1;
            display:flex;
            justify-content:flex-end;
            align-items:center;
            margin-right:40px;
        }
        li{
            a{
                display:block;
                text-decoration:none;
                color:#000000;
                letter-spacing:2px;
                width:max-content;
                padding:20px;
                @media(min-width:992px){
                    color:#fff;
                }
                
            }
        }
    }
     
    .MuiIconButton-label{
        transition:0.7s;
        position:relative;
        z-index:99;
        svg{ 
        font-size:35px !important;
        color:#fff;
        }
    }

    
`;

export default Header
