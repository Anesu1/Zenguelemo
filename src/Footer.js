import React from 'react';
import styled, {css} from 'styled-components';
import Heading from './styled/Heading';

function Footer() {
    
    return (
        <FooterSec>
            <div className="footer-inner">
                <p>Zenguelemo Lodge: An eco friendly community
                    driven project with a vision of sustainability for the
                    future.</p>
                <h4>Find us on</h4>
                <div className="icons">
                    {icons.map((icon,i) =>{
                        return  <a key={i} href={icon.link} target="_blank">
                                    <img src={icon.src} alt="" />
                                </a>
                    })}
                </div>
            </div>
            <div className="footer-inner">
                <Heading footertext>Contact us</Heading>
                <div className="footer-contact">
                    <img src="./imgs/icons/whatsapp.png" alt="" />
                    <span>+258………………………….</span>
                </div>
                <div className="footer-contact">
                    <img src="./imgs/icons/email.png" alt="" />
                    <span email>bookings@zengulemolodge.com</span>
                </div>
            </div>
            <div className="links">
                <Heading maxContent footertext>Quick Links </Heading>
                <ul>
                    <li>
                        <a href="#">How to get here</a>
                    </li>
                    <li>
                        <a href="#">FAQs</a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="footer-bottom">
                <img src="imgs/logo1.png" alt="" />
                <p>© 2021 Zenguelemo lodge. Privacy Policy</p>
            </div>
        </FooterSec>
    )
}

export const icons = [
    {
        src:"./imgs/icons/fb.png",
        link:"https://www.facebook.com/"
    },
    {
        src:"./imgs/icons/ig.png",
        link:"https://www.instagram.com/"
    },
    {
        src:"./imgs/icons/in.png",
        link:"https://www.linkedin.com/"
    },
    {
        src:"./imgs/icons/ta.png",
        link:"https://www.tripadvisor.com/"
    }
]

const FooterSec = styled.footer`
    padding:10% 5% 2%;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    @media(min-width:1200px){
        padding:10% 10% 2%;
    }
    .footer-inner{
        width:100%;
        margin-bottom:30px;
        @media(min-width:768px){
            width:40%;
            margin-bottom:0;
        }
        p{
            width:100%;
            font-family:${props => props.theme.fam.proxima};
            color:${props => props.theme.color.dark};
            font-size:13px;
            line-height:20px;
            @media(min-width:768px){
                width:75%;
            }
        }
        h4{
            font-family:${props => props.theme.fam.proxima};
            font-size:13px;
            letter-spacing:2px;
            font-weight:100;
            color:${props => props.theme.color.dark};

        }
        .icons{
            display:flex;
            width:90%;
            justify-content:space-between ;
            @media(min-width:768px){
                width:60%;
            }
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
        .footer-contact{
            margin-bottom:30px;
            display: flex;
            align-items: center;
            img{
                width:25px;
                margin-right:20px;
                object-fit:contain;
            }
            span{
                width:100%;
                letter-spacing:1.5px;
                font-family:${props => props.theme.fam.proxima};
                color:${props => props.theme.color.dark};
                font-size:15px;
                line-height:20px;
                
        ${email => email && css `
            @media(min-width:768px){
                font-size:12px;
            }
            @media(min-width:992px){
                font-size:15px;
            }
        `}
            }
        }
    }
    .links{
        @media(min-width:768px){
            width:20%;
        }
        a{
            text-decoration:none;
            font-family:${props => props.theme.fam.proxima};
            color:${props => props.theme.color.dark};
            padding:10px 10px 10px 0;
            display:block;
        }
    }
    hr{
        width:100%;
        border:none;
        height:0.1px;
        margin-top:50px;
        background:${props => props.theme.color.dark};
    }
    .footer-bottom{
        display:flex;
        align-items:center;
        img{
            width:80px;
        }
        p{
            font-family:${props => props.theme.fam.proxima};
            color:${props => props.theme.color.dark};
            @media(min-width:768px){
                font-size:15px;
            }
        }
    }
`;

export default Footer
