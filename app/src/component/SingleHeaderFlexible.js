import React from 'react'
import SearchInput from './SearchInput'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
function SingleHeaderFlexible() {
    const SingleHeaderFlexibleInputBlock = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        width:90%;
        margin:2rem auto;
        box-shadow:rgba(0, 0, 0, 0.28) 0px 4px 16px 2px;
        border-radius:4px;
        background:white;
        height:6rem;
        justify-content:start;
        .image{
            padding-left:1rem;
        }
    `
    return (
        <>
            <SingleHeaderFlexibleInputBlock>
                <div className="image">
                    <AiOutlineMenu size="24" />
                </div>
                
                <SearchInput/>
            </SingleHeaderFlexibleInputBlock>
            
            
        </>
    )
}
export default SingleHeaderFlexible