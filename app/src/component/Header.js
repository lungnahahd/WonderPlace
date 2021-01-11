import React from 'react'
import styled from 'styled-components'
import SingleHeader from './SingleHeader'
function Header() {
    const HeaderB= styled.div`
        float:left;
        margin-top:.5rem;
        background:#fff;
        width:50rem;
        height:6rem;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.12);
        border-radius:4px;
        white-space:nowrap;
    `
    return (
        <>
            <HeaderB >
                <SingleHeader />
            </HeaderB>
        </>
    )
}
export default Header