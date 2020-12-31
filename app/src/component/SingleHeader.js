import React from 'react'
import {MdLocalHospital} from 'react-icons/md'
import {IoIosCafe} from 'react-icons/io'
import {IoFastFood }from 'react-icons/io5'
import styled from 'styled-components'
function SingleHeader({key,text,icon}) {
   
    const SingleheaderBlock = styled.div`
        display:flex;
        flex-direction:row;
        padding:1rem;
        background:white;
        border-radius:4px;
        box-shadow:rgba(0, 0, 0, 0.08) 0px 4px 16px 0px;
        transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
        overflow:hidden;
        
        .wrap {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            margin-left:10px;
        }
        .p {
            text-align:center;
            padding:.5rem;
            font-size:15px;
            font-weight:600;
            color:#242424;
            
        }
    `
    console.log(icon)
    return (
        <>  
            
            <SingleheaderBlock>
                <div className="wrap wrap1">
                    <MdLocalHospital size="36"/>
                    <p className="p">선별진료소</p>
                </div>
                <div className="wrap wrap2">
                    <IoFastFood size="32"/>
                    <p className="p">음식점</p>
                </div>
                <div className="wrap wrap3">
                    <IoIosCafe size="32"/>
                    <p className="p">카페</p>
                </div>
                

            </SingleheaderBlock>
        </>
    )
}
export default SingleHeader