import React from "react";
import './Search.css'

export const Search = ({ placeholder, onChange }) => {

    return <input className='search' type="search" placeholder={placeholder} onChange={onChange} />
}

