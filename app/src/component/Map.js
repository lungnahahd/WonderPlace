/* global kakao*/
import React,{useEffect} from 'react'
import styled from 'styled-components'

function Map() {
    const MapBlock = styled.div`
        width:400px;
        height:400px;
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
            <MapBlock id="Mymap">
            </MapBlock>
        </>
    )
}
export default Map