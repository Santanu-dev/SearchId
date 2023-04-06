import React, { useState } from 'react'
import emp from '../Data.json'
import './Search.css'

const Search = () => {
    const [eId, setEid] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [err, setErr] = useState("")
    const [ini, setIni] = useState("initial state")

    const handleSearch = () => {
        setSearchResult([])
        setErr("")
        setIni("")
        if(eId !== ""){
            let list = [];
            emp.employees.map((emp) => {
                if(eId === emp.id){ 
                   list = [...list, emp]
                   setSearchResult(list);
                   return;
                }
            })

        }else{
            setErr("Please Enter EMP ID")
        }
    }

    const handleChange = (e) =>{
        setErr("")
        setEid(e.target.value)
    }

    return (
        <div className='searchArea'>
            <label className='label'>Search Employees With IDs...</label><br/>
            <input className='input' name={eId} type="number" onChange={handleChange}></input>
            <button className='sBtn' onClick={handleSearch} >Search</button><br/>
            <span>{err}</span>
            {searchResult.length === 0 && ini !== "initial state" ? "No Results Found!" : ""}
            {searchResult.length !== 0 ? 
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th>EMP_ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'> 
                    {searchResult.map((res, index) => {
                        return(
                        <tr key={index}>
                            <th>{res.id}</th>
                            <th>{res.name}</th>
                            <th>{res.desig}</th>
                        </tr>
                        )
                    })}
                    </tbody>
                </table> : ""}
        </div>
    );
}

export default Search