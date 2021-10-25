import React from 'react'
import styled from 'styled-components'
import BookCard from './styled/BookCard'

function Bookings() {
    return (
        <BookSec>
            <img src="./imgs/Zenguelemo              Escape.png" className="img-top" alt="" />
            <BookCard  img="./imgs/left.png" name="Camping Units"/>
            <BookCard img="./imgs/right.png" name="Bungalow"/>
        </BookSec>
    )
}

const BookSec = styled.section`
    position:relative;
    width:100%;
    margin-top:10%;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    .img-top{
        display:none;
        @media(min-width:768px){
            display:block;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            z-index:5;
            width:30%;
        }
    }
    .book-inner{
        width:100%;
        position:relative;
        overflow:hidden;
        @media(min-width:768px){
            width:49.7%;
            margin-top:0;
        }
        .book_now{
            position:absolute;
            bottom:0;
            right:8%;
            height:80px;
            width:80px;
            background:white;
            border-radius:50% 50% 0 0;
            display:flex;
            justify-content:center;
            align-items:center;
            @media(min-width:992px){
                width:130px;
                height:130px;
            }
            p{
                font-size:13px;
                font-weight:bold;
                color:${props  => props.theme.color.dark};
                font-family:${props => props.theme.fam.rockb};
            }
        }
        img{
            width:100%;
            transform:scale(1.05);
        }
        .text{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:rgba(0,0,0,0.2);
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            h4{
                padding:0 0 0 5%;
                color:white;
                font-size:18px;
                margin:7px 0;
                font-family:${props => props.theme.fam.rockb};
                @media(min-width:1200px){
                    padding-left:17%;
                }
            }
            a{
                color:white;
                display:block;
                margin:0 0 30% 5%;
                width:max-content;
                font-family:${props => props.theme.fam.rock};
                font-weight:100;
                font-size:13px;
                @media(min-width:768px){
                    margin-bottom:15%;
                }
                @media(min-width:992px){
                    margin-bottom:10%;
                }
                @media(min-width:1200px){
                    margin:0 0 9% 17%;
                }
            }
        }
    }
`;

export default Bookings
