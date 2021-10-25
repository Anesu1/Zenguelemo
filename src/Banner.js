import React, { useState } from 'react';
import Header from './styled/Header';
import styled from 'styled-components';
import { CloseRounded, KeyboardArrowDownRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Banner() {

    const [popup, setPopup] = useState(false);

    
    window.onclick = function(event) {
        
        let myPopup = document.querySelector(".popup")
        if (event.target == myPopup) {
            setPopup(false);
        }
    }


    return (
        <>
        <BannerSec img="./imgs/banner.png" >
            <Header />
            <div className="text">
                <h3>Find Yourself Here</h3>
                <h1>Zenguelemo Lodge</h1>
            </div>
            <div className="bottom">
                <p>Come And Discover</p>
                <span>Scroll To Begin 
                    <div class="container1">
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                    </div>
                </span>
                
            </div>
            <div className="book_now" onClick={() => setPopup(true)}>
                <p>Book Now</p>
            </div>
        </BannerSec>
        <div className={popup ? 'popup display' : 'popup'}>
                <div className="popup-inner" >
                    <IconButton onClick={() => setPopup(false)}>
                        <CloseRounded /> 
                    </IconButton>

                </div>
            </div>
        </>
    )
}

const BannerSec = styled.section`
    height:100vh;
    position:relative;
    overflow:hidden;
    width:100%;
    background:linear-gradient(to bottom,rgba(20, 20, 20, 0.68),rgba(20, 20, 20, 0.68)),url('${props => props.img}');
    background-size:cover;
    background-position:top top;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    @media(min-width:768px){
        height:660px;
    }
    @media(min-width:1200px){
        height:100vh;
    }
    .text{
        margin:0 5%;
        color:${props => props.theme.color.light};
        @media(min-width:992px){
            margin:0 110px;
        }
        h3{
            font-size:29px;
            margin:0;
            font-weight:100;
            letter-spacing:1px;
            font-family:${props => props.theme.fam.proxima};
            @media(min-width:768px){
                font-size:32px;
                margin-bottom: 15px;
            }
        }
        h1{
            font-size:-webkit-xxx-large;
            margin:0;
            letter-spacing:1.5px;
            font-family:${props => props.theme.fam.rockb};
            @media(min-width:768px){
                font-size:55px;
            }
        }
    }
    .bottom{
        position:absolute;
        bottom:10%;
        left:9%;
        color:white;
        p{
            margin:0;
            font-family:${props => props.theme.fam.proximab};
            font-size:16px;
        }
        span{
            margin:10px 30px 0 0;
            font-family:${props => props.theme.fam.proxima};
            font-size:15px;
            display:flex;
            align-items:center;
        }







        .container1 {
            position: relative;
            width: 15px;
            height: 15px;
            top:-10px;
            left:15px;
            }

            .chevron {
            position: absolute;
            width: 15px;
            height: 4px;
            opacity: 0;
            transform: scale3d(0.5, 0.5, 0.5);
            animation: move 3s ease-out infinite;
            }

            .chevron:first-child {
            animation: move 3s ease-out 1s infinite;
            }

            .chevron:nth-child(2) {
            animation: move 3s ease-out 2s infinite;
            }

            .chevron:before,
            .chevron:after {
            content: ' ';
            position: absolute;
            top: 0;
            height: 100%;
            width: 51%;
            background: #fff;
            }

            .chevron:before {
            left: 0;
            transform: skew(0deg, 30deg);
            
            border-radius:3px  0 0 3px;
            }

            .chevron:after {
            right: 0;
            width: 50%;
            transform: skew(0deg, -30deg);
            
            border-radius:0 3px 3px 0; 
            }

            @keyframes move {
            25% {
                opacity: 1;

            }
            33% {
                opacity: 1;
                transform: translateY(10px);
            }
            67% {
                opacity: 1;
                transform: translateY(20px);
            }
            100% {
                opacity: 0;
                transform: translateY(35px) scale3d(0.5, 0.5, 0.5);
            }
            }

            

            @keyframes pulse {
            to {
                opacity: 1;
            }
            }














    }
    .book_now{
        position:absolute;
        bottom:0;
        right:8%;
        height:100px;
        width:100px;
        background:white;
        border-radius:50% 50% 0 0;
        display:flex;
        justify-content:center;
        align-items:center;
        @media(min-width:992px){
            height:170px;
            width:170px;
        }
        p{
            font-size:13px;
            font-family:${props => props.theme.fam.rockb};

            color:${props  => props.theme.color.dark};
            @media(min-width:992px){
                font-size:16px;
            }
        }
    }


    .menu-open{
        position:absolute;
        right:0;
        top:0;
        transform:translateX(100%);
        overflow:hidden;
        width:100%;
        background:#fff;
        transition:0.7s;
        height:100vh;
        z-index:7;
        display:flex;
        @media(min-width:768px){
        height:660px;
         }
        @media(min-width:992px){
            width:20%;
            padding:5%;
            display:unset;
        }
        @media(min-width:1200px){
        height:100vh;
    }
        ul{
            margin:auto;
            li{
                a{
                    text-decoration:none;
                    color:${props => props.theme.color.dark};
                    font-family: ${props => props.theme.fam.proxima};
                    text-transform:uppercase;
                    display:block;
                    padding:20px;
                    text-align:center;
                }
            }
        }
        p{
            font-family:${props => props.theme.fam.proxima};
            color:${props => props.theme.color.dark};
            line-height:25px;
            margin-bottom:30px;
        }
        img{
            width:150px;
        }
        .MuiButtonBase-root {
            position:absolute;
            right:10%;
            top:50px;
        }
    }
    .change{
        transform:translateX(0);
    }
    .footer-contact{
            margin-bottom:10px;
            display: flex;
            align-items: center;
            img{
                width:20px;
                margin-right:20px;
                object-fit:contain;
            }
            span{
                width:100%;
                letter-spacing:1.5px;
                font-family:${props => props.theme.fam.proxima};
                color:${props => props.theme.color.dark};
                font-size:12px;
                line-height:20px;
            }
        }
        .icons{
            width:100%;
            margin-top:50px;
            display:flex;
            justify-content:space-between ;
            img{
            width:25px;
            object-fit: contain;
            &:first-child{
                height:30px;
            }
            &:last-child{
                height:30px;
            }
        }
        }
    `;

export default Banner
