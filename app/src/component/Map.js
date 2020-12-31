/* global kakao*/
import React,{useEffect} from 'react'
import styled from 'styled-components'
import {Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import SingleHeader from './SingleHeader'
import Header from './Header'
function Map() {
   
    const MainBlock = styled.div`
        display:flex;
        flex-direction:column;
        width:100%;
    `
    const HeaderBlock = styled.div`
        display:flex;
        flex-direction:row;
        z-index:999;
        height:10%;
        justify-content:center;
       
       
    `
    const MapBlock = styled.div`
        position:absolute;
        width:100vw;
        height:100vh;
    `
    useEffect(()=> {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=721d7ceadb415bbc24862d208a6b1619&autoload=true";
        document.head.appendChild(script);
    
        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("Mymap");
                let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
                };
        
                const map = new window.kakao.maps.Map(container, options);
            })
        }
         
        
    },[])
    
    return (
        <>
            <MainBlock>
                <HeaderBlock>
                    <Header/>
                </HeaderBlock>
                <MapBlock id="Mymap">
                </MapBlock>
            </MainBlock>
            
        </>
    )
}
export default Map