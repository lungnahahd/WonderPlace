/* global kakao*/
import React,{useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import './MapShow.scss'
var data=[]
//맵 컨테이너 잠깐 카피
var map_copy=[]
// 지도에 표시된 마커 객체를 가지고 있을 배열입니다
var markers = [];


function MapShow({radius}) {
    const MapShowBlock = styled.div`
        position:absolute;
        width:100vw;
        height:100vh;
    `
    console.log({radius})
    const onKakaoAPICategory =(x,y,radius,category)=> {
        axios.post('Kakao/Front/category',{
            x:{x},
            y:{y},
            radius:{radius},
            category:{category}
        }).then(function(response) {
            console.log(response.data.place.documents)
            for(let i=0; i<response.data.place.documents.length; i++) {
                data.push(response.data.place.documents[i])
                
                addMarker(new kakao.maps.LatLng(parseFloat(data[i]['y']),parseFloat(data[i]['x'])),data[i]['place_name']);
              
            }
            
            console.log(response)

        }).catch(function(error) {
            console.log(error)
        })
    }
   
   //렌더링 될때 맵 표시
    useEffect(()=> {
        let container = document.getElementById("Mymap");
        var a= new kakao.maps.LatLng(37.506502, 127.053617 )
        var b= new kakao.maps.LatLng(37.568532, 127.056637 )
        var c =  new kakao.maps.LatLng((37.568532+37.506502)/2, (127.056637+ 127.053617)/2 )
        let options = {
            center: c,
            level: 7
        }
        const map = new window.kakao.maps.Map(container, options);
        map_copy.push(map)
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
            radius: radius, // 미터 단위의 원의 반지름입니다 
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
        circle.setMap(map)
        onKakaoAPICategory(
            "37.506502",
            "127.053617",
            (radius).toString(),
            "AT4"
            
            )   
    },[radius])
    
    const addMarker=(position,title) =>{
        var content = '<div class="customoverlay" >' +
            '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
            '    <span class="title">'+title+'</span>' +
            '  </a>' +
            '</div>'
                
        //커스텀
        var customOverlay = new kakao.maps.CustomOverlay({
            map: map_copy[0],
            position: position,
            content: content,
         
        });
        console.log(customOverlay)
        customOverlay.setMap(map_copy[0])
      
       
        
        
    }
    return (
        <>
            <MapShowBlock id="Mymap">
                
            </MapShowBlock>
        </>
    )
}
export default MapShow