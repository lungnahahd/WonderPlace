import React from 'react'
import styled from 'styled-components'
import {MdLocalHospital} from 'react-icons/md'
import {IoIosCafe} from 'react-icons/io'
import {IoFastFood }from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineArrowsExpand} from 'react-icons/hi'
//Grid를 이용해서 붙여주기
function Catalog() {
    const CatalogBlock= styled.div`
        display:flex;
        flex-direction:row;
        alingn-items:center;
        justify-content:space-around;
        .h4 {

        }
    `
    return (
        <>
            <CatalogBlock>
                <MdLocalHospital/>
                <h4 className="h4">
                   선별진료소
                </h4>
            </CatalogBlock>
        </>
    )
}
export default Catalog