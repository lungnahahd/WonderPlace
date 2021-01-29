import React from 'react'
import styled from 'styled-components'
import SingleHeader from './SingleHeader'
import SingleHeaderFlexible from './SingleHeaderFlexible'
import {Grid, GridColumn} from 'semantic-ui-react'
import Catalog from './Catalog'
import 'semantic-ui-css/semantic.min.css'
function Header() {
    const HeaderB= styled.div`
        float:left;
        margin-top:.5rem;
        background:#fff;
        width:50rem;
        
        box-shadow:0 2px 4px 0 rgba(0,0,0,.12);
        border-radius:4px;
        white-space:nowrap;
        @media(max-width:600px) {
            display:none;
        }
        
    `
  
    const HeaderminSix = styled.div`
        display:none;
        @media(max-width:600px){
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
        }
    `
    return (
        <>
            <HeaderB >
                <SingleHeader />
                <Catalog/>
            </HeaderB>
            <HeaderminSix>
                <SingleHeaderFlexible/>
            </HeaderminSix>
        </>
    )
}
export default Header