/* global kakao*/
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
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
    // 장소검색
    // var places = new kakao.maps.services.Places();

    // var callback = function(result, status) {
    //     if (status === kakao.maps.services.Status.OK) {
    //         console.log(result);
    //     }
    // };
    
    // places.keywordSearch('판교 치킨', callback);

    const [state,SetState] = useState([])
    const onKakaoAPI =(x,y,radius,category)=> {
        axios.post('Kakao/Front/category',{
            x:{x},
            y:{y},
            radius:{radius},
            category:{category}
        }).then(function(response) {
            console.log(response.data.place.documents)
            for(let i=0; i<response.data.place.documents.length; i++) {
                data.push(response.data.place.documents[i])
                
                addMarker(new kakao.maps.LatLng(parseFloat(data[i]['y']),parseFloat(data[i]['x'])));
              
            }
            
            console.log(data[0])
            
            

        }).catch(function(error) {
            console.log(error)
        })
    }
   
   
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
        onKakaoAPI(
            "37.506502",
            "127.053617",
            radius.toString(),
            "MT1"
            
            )
            addMarker(new kakao.maps.LatLng(37.506051888130386,127.05897078335246))

        
        console.log(markers)
             
    },[radius])
  
    const addMarker=(position) =>{
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: position
        });
    
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map_copy[0]);
        
        // 생성된 마커를 배열에 추가합니다
        markers.push(marker);
        
    }
    return (
        <>
            <MapShowBlock id="Mymap">
                
            </MapShowBlock>
        </>
    )
}
export default MapShow