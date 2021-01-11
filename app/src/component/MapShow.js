/* global kakao*/
import React,{useEffect} from 'react'

import styled from 'styled-components';
function MapShow({radius}) {
    const MapShowBlock = styled.div`
        position:absolute;
        width:100vw;
        height:100vh;
    `
    console.log({radius})
    var places = new kakao.maps.services.Places();

    var callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(result);
        }
    };
    
    places.keywordSearch('판교 치킨', callback);
   
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
        circle.setMap(map); 
             
    },[radius])
    return (
        <>
            <MapShowBlock id="Mymap">
                
            </MapShowBlock>
        </>
    )
}
export default MapShow