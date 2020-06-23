import React from 'react';
import './searchbox.styles.modules.css';
export const SearchBox = ({placeholder, handleChange})=>(
    <input className='search' type = 'search' placeholder = {placeholder} onChange = {handleChange}/>
)