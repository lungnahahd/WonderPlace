import React from 'react'
import styled from 'styled-components'
function LeftSection() {
    const LeftSectionBlock = styled.div`
        @media(min-width:768px) {
            display:none;
        }
        background:#fff;
        margin-top:8rem;
        width:10rem;
        height:50rem;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.12);
        border-radius:4px;
     
   
        white-space:nowrap;
    `
    return (
        <>
        <LeftSectionBlock>

        </LeftSectionBlock>
        </>
    )
}
export default LeftSection