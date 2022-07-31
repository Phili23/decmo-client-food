import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { foodName } from "../../redux/actions";
import { HiOutlineSearch } from 'react-icons/hi'
import './index.css'


export default function SearchBar() {
    const dispatch = useDispatch()
    // se va guardando lo que el usuaario esta ingresando
    const [name, setName] = useState("")

    //
    function handleInputChange(e) { //cdo hay un cambio en el input, lo va renderizando
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {// cdo se presiona Buscar, se despacha la accion p/ buscar en la api x name
        e.preventDefault()
        dispatch(foodName(name))
        setName("");
    }

    return (
        <div >
            <input className="input3"
                type='text'
                placeholder="Search by name Recipe..." required
                value={name}
                onChange={(e) => { handleInputChange(e) }}
            />
            <button type="submit" onClick={(e) => { handleSubmit(e) }}><HiOutlineSearch/></button>
        </div>
    )
}
