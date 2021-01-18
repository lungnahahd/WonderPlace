import React,{useState} from 'react'
import {MdLocalHospital} from 'react-icons/md'
import {IoIosCafe} from 'react-icons/io'
import {IoFastFood }from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineArrowsExpand} from 'react-icons/hi'
import styled from 'styled-components'
import SearchInput from './SearchInput'


function SingleHeader({key,text,icon}) {
    
    const SingleheaderBlock = styled.div`
        display:flex;
        flex-direction:row;
        padding:1rem;
        background:white;
        border-radius:4px;
        box-shadow:rgba(0, 0, 0, 0.28) 0px 4px 16px 2px;
        transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
        overflow:hidden;
        
        .wrap {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            margin-left:10px;
            cursor:pointer;
            &:hover {
                
                .p {
                    color:blue;
                }
            }
        }
        .p {
            text-align:center;
            padding:.5rem;
            font-size:15px;
            font-weight:600;
            color:#242424;
            
        }
        .contain-input {
            width:10rem;
            display:flex;
            justify-content:space-around;
            align-items:center;
            border:1px solid lightgray;
            border-radius: 5px;
            &:hover {
                width:12rem;
                transition:1s;
                .input {
                    width:9rem;
                    transition:1s;
                }
            }
           
            
            .fa-search{
                width:2rem;
                cursor:pointer;
               
            }
        }
    `
    console.log(icon)
    return (
        <>  
            
            <SingleheaderBlock>
                <div className="wrap wrap0">
                    <HiOutlineArrowsExpand size="36"/>
                    <p className="p">전체</p>
                </div>
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
                <div className="wrap wrap4">
                    <div className="contain-input">
                        <SearchInput/>
                        <AiOutlineSearch className="fa-search" size="32"/>
                    </div>
                    
                   
                    
                </div>

            </SingleheaderBlock>
        </>
    )
}
export default SingleHeader