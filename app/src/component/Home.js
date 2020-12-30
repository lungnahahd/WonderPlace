/* global kakao*/
import React,{useEffect} from 'react'
import styled,{keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
import './Home.css'
import BackgroundPerson from '../images/backgroundperson.jpg'
function Home() {
    const HomeBlock = styled.img`
        position: absolute;
        box-sizing: border-box;
        left: 0px;
        top: 0rem;
        width: 1280px;
        height: 1280px;
        z-index: 0;
        transform: rotate(0deg);
        transform-origin: 50% 50%;
        opacity: 1;
        border: 0px none rgb(0, 0, 0);
        border-radius: 0px;
        -webkit-user-drag: none;
    `
    const TitleBlock = styled.div`
        position: absolute;
        box-sizing: border-box;
        left: 31rem;
        top: 12rem;
        width: 288px;
        height: 90.4px;
        transform: rotate(0deg);
        color: rgb(255, 255, 255);
        transform-origin: 50% 50%;
        z-index: 4;
        opacity: 1;
        text-align: center;
        font-family: Nanum Brush Script;
        padding: 0px;
        letter-spacing: 0px;
        line-height: 1.3;
        border: 0px none rgb(0, 0, 0);
        word-break: break-word;
        -webkit-user-drag: none;
        .p{
            text-align:center;
            .span{
                font-size: 70px;
                font-family: 'Nanum Brush Script', sans-serif;
                color: rgb(255, 255, 255);
                z-index:0;
            }
        }
    
    `
    const boxhover = keyframes`
        0% {
            background:#764ABC;
        }
        100% {
            background:#0095D5;
        }
    `
    const EnterBox = styled.div`
        position: absolute;
        box-sizing: border-box;
        left: 52rem;
        top: 35rem;
        width: 288px;
        height: 90.4px;
        background:#0095D5;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:15px;
        transform: rotate(0deg);
        color: rgb(255, 255, 255);
        transform-origin: 50% 50%;
        z-index: 4;
        opacity: 1;
        text-align: center;
        font-family: Nanum Brush Script;
        padding: 0px;
        letter-spacing: 0px;
        line-height: 1.3;
        border: 0px none rgb(0, 0, 0);
        word-break: break-word;
        -webkit-user-drag: none;
        &:hover {
            transform: translateY(-8px);
            animation: boxhover 2s 1s infinite linear alternate;
        }
        ${(props) => props.hover && `
            animation:${boxhover} 2s 1s infinite linear alternate;
        `}
       
        .p{
            text-align:center;
            .span{
                font-size: 70px;
                font-family: 'Nanum Brush Script', sans-serif;
                color: rgb(255, 255, 255);
                z-index:0;
            }
        }
    `
    // setTimeout(() => {
    //     document.body.classList.add("reveal")},1000)
    // document.addEventListener("click",()=> {
    //     document.body.classList.toggle("reveal")
    // })
    
    
    return (
        <>  
            <HomeBlock src={BackgroundPerson}/>
            
            <TitleBlock>
                <p className="p">
                    <span className="span">
                        우리 지금 만나
                    </span>
                </p>
            </TitleBlock>
            <Link to ="/Map">
                <EnterBox prop={boxhover}>
                    <div id="hoverbox">
                        
                    </div>
                    <p className="p">
                        <span className="span">
                            만날래?
                        </span>
                    </p>

                 </EnterBox>
            </Link>
            
            
        </>
    )
}
export default Home