/* global kakao*/
import React,{useEffect} from 'react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import Header from './Header'
import LeftSection from './LeftSection'
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
        &:active{
            z-index:1000;
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
    useEffect(()=> {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=721d7ceadb415bbc24862d208a6b1619&autoload=true";
        document.head.appendChild(script);
        const script2 = document.createElement("script");
        script2.async = true;
        script2.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=721d7ceadb415bbc24862d208a6b1619&libraries=services,clusterer,drawing";
        document.head.appendChild(script2);
        script2.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("Mymap");
                let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
                }
                
                const map = new window.kakao.maps.Map(container, options);
                var a= new kakao.maps.LatLng(37.506502, 127.053617 )
                var b= new kakao.maps.LatLng(37.568532, 127.056637 )
                var c =  new kakao.maps.LatLng((37.568532+37.506502)/2, (127.056637+ 127.053617)/2 )
                var marker = new kakao.maps.Marker({
                    position: a
                })
                var marker2 = new kakao.maps.Marker({
                    position: b
                })
                var marker3 = new kakao.maps.Marker({
                    position:c
                })
                var linePath = [
                    a,b,c
                ];
                var polyline = new kakao.maps.Polyline({
                    path: linePath, // 선을 구성하는 좌표배열 입니다
                    strokeWeight: 5, // 선의 두께 입니다
                    strokeColor: '#000', // 선의 색깔입니다
                    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid' // 선의 스타일입니다
                });
                var circle = new kakao.maps.Circle({
                    center : c,  // 원의 중심좌표 입니다 
                    radius: 1000, // 미터 단위의 원의 반지름입니다 
                    strokeWeight: 5, // 선의 두께입니다 
                    strokeColor: '#75B8FA', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'dashed', // 선의 스타일 입니다
                    fillColor: '#CFE7FF', // 채우기 색깔입니다
                    fillOpacity: 0.7  // 채우기 불투명도 입니다   
                }); 
                marker.setMap(map)
                marker2.setMap(map)
                marker3.setMap(map)
                polyline.setMap(map)
                circle.setMap(map); 
                map.setCursor('move') 
  
                          
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
                <LeftBlock>
                    <LeftSection />
                </LeftBlock>
            </MainBlock>
            
        </>
    )
}
export default Map