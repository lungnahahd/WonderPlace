import React,{useState} from 'react'
import styled, { keyframes } from 'styled-components'
import {MdLocalHospital} from 'react-icons/md'
import {IoIosCafe} from 'react-icons/io'
import {IoFastFood }from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineArrowsExpand} from 'react-icons/hi'
var data = {search:"none"}
var Input_Toggle = false
function SearchInput() {
    const [searchinput,SetSearchInput] = useState({search:""})
    const {search} = searchinput
    const onChangeSearch = e => {
        e.preventDefault()
        SetSearchInput({
            search:e.target.value

        })
        if(search.length===0) {
            Input_Toggle = false
        }else {
            Input_Toggle = true
            data.search = search
        }
    }  
    console.log(search) 
    return (
        <>
            <SearchInputBlock 
                value={search}
                placeholder="검색" 
                onChange={e=>onChangeSearch(e)} />
        </>
    )
}
const SearchInputBlock = styled.input`
        width:5rem;
        outline:none;
        cursor:pointer;
        border:none;
        font-size:16px;
        color:#63717f;
    `
function LeftSection() {
    
    const [Toggle,SetToggle] = useState(true)
    const onToggle =() => {
        return (
            SetToggle(!Toggle)
        )
    }
    const LeftSectionBlock = styled.div`
    
        background:#FCFCFC;
        z-index:401;
        width:20vh;
        height:100vh;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.12);
        border-radius:4px;
        white-space:nowrap;
        transition:transform 1s;
        transform:${prop=>prop.Toggle ? 'translateX(0%)':'translatex(-100%)'}
       
    `
   

    
    const LeftImageBlock =styled.div`
        @media(min-width:768px){
            display:none;
        }
        display:flex;
        flex-direction:column;
        .wrap {
            display:flex;
            justify-content:space-around;
            align-items:center;
            cursor:pointer;
            border-bottom:1px solid rgba(0,0,0,.15);
            padding:3px 0;
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
    `
    const ToggleButton = styled.div`
        position:absolute;
        top:50%;
        right:-1rem;
        z-index:300;
        width:20px;
        height:40px;
        background:white;
        border-right:1px solid blue;
        border-radius:20px;

    `
    
    
    return (
        <>
        <LeftSectionBlock Toggle={Toggle}>
            <LeftImageBlock>
                 <div className="wrap wrap0">
                    <HiOutlineArrowsExpand size="36"/>
                    <p className="p">전체</p>
                </div>
                <div className="wrap wrap1">
                    <MdLocalHospital size="36"/>
                    <p className="p">진료소</p>
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
            </LeftImageBlock>
            
        </LeftSectionBlock>
        <ToggleButton onClick={onToggle}>
            클릭
        </ToggleButton>
        </>
    )
}
export default LeftSection