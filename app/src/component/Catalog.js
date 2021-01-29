import React from 'react'
import styled from 'styled-components'
import {BiGasPump} from 'react-icons/bi'
import {AiFillBank, AiFillShop} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaCut} from 'react-icons/fa'
import {MdLocalParking} from 'react-icons/md'
//Grid를 이용해서 붙여주기
function Catalog() {
    const CatalogBlock= styled.div`
        display:flex;
        flex-direction:row;
        alingn-items:center;
        justify-content:space-around;
        .wrapper {
            display:flex;
            flex-direction:row;
            alingn-items:center;
            justify-content:center;
            background:#96999C;
            width:96px;
            height:36px;
            border-radius:18px;
            margin-top:1rem;
            border:1px solid #96999C;
            
        }
        .image {
            width:2rem;
            height:2rem;
            margin:auto 1px;
            color:#d1eb1c;
        }
        .h4 {
            color:#d1eb1c;
            font-size:1rem;
            margin:auto 0;
        }
        .wrapper1 {
            margin-left:1rem;
        }
        
    `
    return (
        <>
            <CatalogBlock>
                <div className="wrapper">
                    <AiFillShop className="image"/>
                    <h4 className="h4">
                        편의점
                    </h4>
                </div>
                <div className="wrapper wrapper1">
                    <BiGasPump className="image"/>
                    <h4 className="h4">
                        주유소
                    </h4>
                </div>
                <div className="wrapper wrapper1">
                    <AiOutlineShoppingCart className="image"/>
                    <h4 className="h4">
                        마트
                    </h4>
                </div>
                <div className="wrapper wrapper1">
                    <AiFillBank className="image"/>
                    <h4 className="h4">
                        은행
                    </h4>
                </div>
                <div className="wrapper wrapper1">
                    <FaCut className="image"/>
                    <h4 className="h4">
                        헤어샵
                    </h4>
                </div>
                <div className="wrapper wrapper1">
                    <MdLocalParking className="image"/>
                    <h4 className="h4">
                        주차장
                    </h4>
                </div>
                
            </CatalogBlock>
        </>
    )
}
export default Catalog