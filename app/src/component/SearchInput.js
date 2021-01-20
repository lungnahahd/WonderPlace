import React,{useState} from 'react'
import styled from 'styled-components'
const SearchInputBlock = styled.input`
    width:5rem;
    outline:none;
    cursor:pointer;
    border:none;
    font-size:16px;
    color:#63717f;
    @media(max-width:600px){
        width:80%;
        padding-left:2rem;
        height:5rem;
        border-radius:4px;
        
    }
`
var data = {search:"none"}
var Toggle = false

function SearchInput() {
    const [searchinput,SetSearchInput] = useState({search:""})
    const {search} = searchinput
    const onChangeSearch = e => {
        e.preventDefault()
        SetSearchInput({
            search:e.target.value

        })
        if(search.length===0) {
            Toggle = false
        }else {
            Toggle = true
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
export default SearchInput