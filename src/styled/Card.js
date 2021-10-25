import { ArrowForward } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Card({img, text}) {
    return (
        <CardDiv>
            <img src={img} alt="" />
            <div className="overlay">
                <h5>{text}</h5>
                <ArrowForward />
            </div>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    width:152px;
    position:relative;
    height:auto;
    overflow:hidden;
    &:not(:last-child){
        margin-right:10px;
    }
    @media(min-width:768px){
        margin-right:0;
    }
    @media(min-width:992px){
        width:19.5%;

    }
    &:hover{
        img{
            transform:scale(1.4) ;
        }
        
    }
    img{
        width:100%;
        transition:0.7s;
        transform:scale(1.1);
    }
    .overlay{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:5;
        
        color:${props => props.theme.color.light};
        background:rgba(0, 0, 0, 0.5);
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h5{
            font-size:18px;
            letter-spacing:2px;
            font-family:${props => props.theme.fam.rockb};
        }
        .MuiSvgIcon-root{
            border:1px solid white;
            border-radius:50%;
            padding:5%;
            transition:0.7s;
            cursor:pointer;
            &:hover{
                background:#fff;
                color:#000000;
            }
        }
    }
`;



export default Card
