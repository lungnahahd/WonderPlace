/* global kakao*/
import axios from 'axios'
import {useEffect} from 'react'
import Marker from '../component/Marker/Marker'

var data=[]
function MapPost(radius) {
    
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
                
                Marker(new kakao.maps.LatLng(parseFloat(data[i]['y']),parseFloat(data[i]['x'])),data[i]['place_name']);
              
            }
            
            console.log(response)

        }).catch(function(error) {
            console.log(error)
        })
    }
    useEffect(()=> {
        onKakaoAPI(
            "37.506502",
            "127.053617",
            (radius).toString(),
            "AT4"
            
        )

    },[])
   
}
export default MapPost