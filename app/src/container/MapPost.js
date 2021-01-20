// import axios from 'axios'
// import {useState,useEffect} from 'react'
// export const MapPost=(x,y,radius,category) => {
//     const [state,SetState] = useState([])
//     useEffect(()=> {
//         axios.post('Kakao/Front/category',{
//             x:{x},
//             y:{y},
//             radius:{radius},
//             category:{category}
//         }).then(function(response) {
//             console.log(response)
//             SetState(response.data.place.documents[0])
//             console.log(state)

//         }).catch(function(error) {
//             // console.log(error)
//         })

//     },[])
   
// }