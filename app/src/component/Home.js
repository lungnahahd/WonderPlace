import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import './Home.scss'
function Home() {
    return (
        <>
            <div className="wrapper">
                <header className="video-header">
                    <video src="" autoplay loop playsinline muted type="video/mp4"></video>
                    <div className="viewport-header">
                        <h1 className="h1">
                        우리 어디서 볼까?
                        <span className="span">Wonderplace</span>
                        </h1>
                    </div>
                </header>
                <Link to="/map">
                     <button className="button">Enter</button>
                </Link>
               
                <main className="main">
                    <p className="p">
                    시들으면 그만인 것을
                        피는 꽃도 지고 마는데
                        바람에 등 떠밀려 가는 인생아
                        한 줌도 안되는구나
                        무심한 저 세월은 눈치도 없이
                        시치미 떼고 가는데
                        한 번 왔다 갈 길인걸 뭣하러 왔소
                        뜨네기 손님이더냐
                        야속하다 원망을 말자
                        세상사 별 거 없더라
                        무심한 저 세월은 눈치도 없이
                        시치미 떼고 가는데
                        한번 왔다 갈 길인걸 뭣하러 왔소
                        뜨네기 손님이더냐
                        야속하다 원망을 말자
                        세상사 별 거 없더라
                        사는 게 별 거 없더라
                        시들으면 그만인 것을
                        피는 꽃도 지고 마는데
                        바람에 등 떠밀려 가는 인생아
                        한 줌도 안되는구나
                        무심한 저 세월은 눈치도 없이
                        시치미 떼고 가는데
                        한 번 왔다 갈 길인걸 뭣하러 왔소
                        뜨네기 손님이더냐
                        야속하다 원망을 말자
                        세상사 별 거 없더라
                        무심한 저 세월은 눈치도 없이
                        시치미 떼고 가는데
                        한번 왔다 갈 길인걸 뭣하러 왔소
                        뜨네기 손님이더냐
                        야속하다 원망을 말자
                        세상사 별 거 없더라
                        사는 게 별 거 없더라

                    </p>
            
                </main>
            </div>
           
        </>
    )
}
export default Home