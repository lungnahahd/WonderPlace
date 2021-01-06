
import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import Header from './Header'
import LeftSection from './LeftSection'
import MapShow from './MapShow'
const MainBlock = styled.div`
        position:relative;
        display:flex;
        flex-direction:column;
        width:100vw;
        height:100vh;
    `
    const HeaderBlock = styled.div`
        display:flex;
        flex-direction:row;
        z-index:999;
        height:10%;
        justify-content:center;
        &:active{
            z-index:1000;
        }
        @media(max-width:768px){
            display:none;
        }
       
       
    `
    const MapBlock = styled.div`
        position:absolute;
        width:100vw;
        height:100vh;
    `
    const LeftBlock = styled.div`
        position:absolute;
        top:0;
        left:0
        display:flex;
        z-index:999;
        align-items:center;
        justify-content:center;
    `
    const ButtonBlock = styled.div`
        position: absolute;
        right:5vw;
        bottom:2vh;
        width: 6rem;
        height: 6rem;
        background:#cccccc;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:6rem;
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
        font-size:1.5rem;
        cursor:pointer;
        
        text-decoration: none;
        color: rgba(30, 22, 54, 0.6);
	    box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
        padding: 20px 30px;
        -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        &:hover {
            color: rgba(255, 255, 255, 0.85);
	        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
        }
    
    
       
    `
    const ButtonBlock2 = styled.div`
        position: absolute;
        right:5vw;
        bottom:12vh;
        width: 6rem;
        height: 6rem;
        background:#cccccc;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:6rem;
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
        font-size:1.5rem;
        cursor:pointer;
        
        text-decoration: none;
        color: rgba(30, 22, 54, 0.6);
	    box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
        padding: 20px 30px;
        -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        &:hover {
            color: rgba(255, 255, 255, 0.85);
	        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
        }
    
    
       
    `
function Map() {
    const [radius,SetRadius] = useState(1000)
    const onClick =() => {
        SetRadius(radius+1000)
      
    }
    const onClick_reset = () => {
        SetRadius(1000)
    }
    
    return (
        <>
            <MainBlock>
                <HeaderBlock>
                    <Header/>
                </HeaderBlock>
                <MapBlock >
                    <MapShow radius={radius}/>
                </MapBlock>
                <LeftBlock>
                    <LeftSection />
                </LeftBlock>
                <ButtonBlock onClick={onClick}>
                    확장
                </ButtonBlock>
                <ButtonBlock2 onClick={onClick_reset}>
                    초기화
                </ButtonBlock2>
                
            </MainBlock>
            
        </>
    )
}
export default Map