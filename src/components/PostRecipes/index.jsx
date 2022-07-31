//https://github.com/santicardona04/PI-Food/blob/master/client/src/reducer/index.js

import React, { useEffect, useState } from "react";
import { getTypes, postFood } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import './index.css'



/*  function Validate(input) {
    let errors = {};
    if (input.name !== "" || !input.name.trim() === '' || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)) {
        errors.name = 'ingresa la primera letra en Mayuscula, unicamente letras y Numeros';
    } else if (input.summary.trim() === '' || input.summary !== '') {
        errors.summary = 'el campo no puede estar vacio';
    } else if (input.spoonacularScore.trim() === '' || !/^[1-9]\d*(\.\d+)?$/.test(input.spoonacularScore)) {
        errors.spoonacularScore = 'Valor Max tiene que ser numerico no se permite coma';
    } else
    if (input.spoonacularScore <= 100) {
        errors.spoonacularScore= 'Valor menor que 100';
    }
    else if (input.healthScore.trim() === '' || !/^[1-9]\d*(\.\d+)?$/.test(input.healthScore)) {
        errors.healthScore = 'Valor  tiene que ser numerico no se permite coma';
    }
    else if (input.steps.trim() === '' || input.steps === '') {
        errors.steps = 'el campo no puede estar vacio';
    }

    else if (input.typeDiets.length < 0) {
        errors.typeDiets = 'seleccione un Tipo de Dieta';
    }
    return errors

} */



export default function PostRecipes(params) {
    const history = useHistory()//para redirigir a alguna ruta */
    const diets = useSelector((state) => state.typed);
    /*   console.log('yo soy typedietes', TYPEDdiets) */

    const dispatch = useDispatch("")
    const [errors, setErrors] = useState({})//estado local para errores


    function Validate(input) {
        const reg = new RegExp('^[0-9]+$');
        let errors = {}
        if ((!input.name) || !input.name.trim() === '' || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)) errors.name = 'Please complete enter the first letter in capital letters, only letters and numbers';
        if ((!input.summary) || input.summary.trim() === '') errors.summary = 'please put the summary of the recipe'
        if ((!input.steps) || input.summary.trim() === '') errors.steps = 'please put the steps of the recipe'
        if (input.spoonacularScore.trim() === '' || !/^[1-9]\d*(\.\d+)?$/.test(input.spoonacularScore) || input.spoonacularScore < 0 || input.spoonacularScore > 100 || !reg.test(input.spoonacularScore)) errors.spoonacularScore = 'put a puntuation between 0-100';
        if (input.healthScore.trim() === '' || input.healthScore < 0 || input.healthScore > 100 || !reg.test(input.healthScore) || !/^[1-9]\d*(\.\d+)?$/.test(input.healthScore)) errors.healthScore = 'put a healthScore between 0-100'
        if (!input.typeDiets.length) errors.typeDiets = 'You must select at least one diet type';
        return errors;
    }


    const [input, setInput] = useState({
        name: "",
        summary: "",
        spoonacularScore: "",
        healthScore: "",
        image: "",
        steps: [],
        typeDiets: [],
    })

    function handleSubmit(e) {
        e.preventDefault();

        if (Object.values(errors).length > 0) {
            alert("Please complete the information required");
        }
        else if (
            input.name === "" &&
            input.summary === '' &&
            input.spoonacularScore === '' &&
            input.healthScore === "" &&
            input.steps === '' &&
            !input.dietTypes.length) {
            alert("Please complete the form");

        }

        else {
            dispatch(postFood(input))
            alert('New recipe added successfully!')
            setInput({
                name: "",
                summary: "",
                spoonacularScore: "",
                healthScore: "",
                image: "",
                steps: [],
                typeDiets: [],

            })
            history.push('./home')//redirije a una direccion 

        }
    }

    useEffect((e) => {
        dispatch(getTypes())
    }, [dispatch])


    function handleChange(e) {
        e.preventDefault();
        setInput((prevInput) => {   //// de esta manera el componente muestra los cambios (componentdidupdate?) para poder ir validando
            const newInput = {
                ...prevInput,
                [e.target.name]: e.target.value
            }
            const validations = Validate(newInput);
            setErrors(validations)
            return newInput
        });

    };



    function handleSelectT(e) {
        e.preventDefault();
        setInput({
            ...input,
            typeDiets: [...input.typeDiets, e.target.value],/// este es el array vacio..le va a concatenar el targe.valu
        })
        setErrors(Validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    function handleDelete(el) {
        setInput({
            ...input,
            typeDiets: input.typeDiets.filter((t) => t !== el)

        });
    }

    //diets de la Api y TypeDiets...los creados por mi
    return (
        <div className="creater">

            <h1 className="title1"> Create Food Recipes</h1>
            <form className='creater-form' onSubmit={handleSubmit} >
                <div className=''>
                    <div className="">
                           <input className='input'
                            type="text"
                            value={input.name}
                            name="name"
                            placeholder='Name...'
                            onChange={(e) => handleChange(e)} required
                        />

                    </div>
                    {
                        errors.name && <p className="error">{errors.name}</p>
                    }

                    <div className="">
                        <div className="">
                           <textarea className='inputText'
                                rows="1"
                                cols="1"
                                value={input.summary}
                                name="summary"
                                placeholder='Summary...'
                                onChange={(e) => handleChange(e)} required
                            />

                        </div>
                    </div>
                    {
                        errors.summary && <p className="error">{errors.summary}</p>
                    }

                    <div className="">
                          <textarea className='inputText'
                            type="text"
                            rows="1"
                            cols="1"
                            value={input.steps}
                            name="steps"
                            placeholder='Steps...'
                            onChange={(e) => handleChange(e)} required
                        />
                    </div>
                    {
                        errors.steps && <p className="error">{errors.steps}</p>
                    }

                    <div className="formulario">
                        <div className="">
                            <label className="label11"> SpoonacularSc:  </label>
                            <input className='inputp'
                                type="number"
                                value={input.spoonacularScore}
                                name="spoonacularScore"
                                /* placeholder=' ...' */
                                onChange={(e) => handleChange(e)} required
                            />
                        </div>
                        {
                            errors.spoonacularScore && <p className="error">{errors.spoonacularScore}</p>
                        }


                        <div className="">
                            <label className="label11">HealthScore:  </label>
                            <input className='inputp'
                                type="number"
                                value={input.healthScore}
                                name="healthScore"
                                /* placeholder='....' */
                                onChange={(e) => handleChange(e)} required
                            />
                        </div>
                        {
                            errors.healthScore && <p className="error">{errors.healthScore}</p>
                        }

                      
                    </div>

                    <br /><br />
                    <div className="">
                        <div className="">
                            {/* ///<label className="">Image:  </label> */}
                            <input className="input"
                                type="text"
                                value={input.image}
                                name='image'
                                placeholder='url...'
                                onChange={(e) => handleChange(e)} required
                            />
                        </div>


                        <div>
                                <select onChange={(e) => handleSelectT(e)} className="input1" required>
                                <option >All Diets</option>
                                {diets.map(temp => (
                                    <option value={temp.name} key={temp.id} >{temp.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {errors.typeDiets && (
                        <span className="error">{errors.typeDiets}</span>
                    )}

                    <span className="">
                        <Link className="" to='/home'><button className='butt'>Back - Home Previus</button></Link>
                        <button type='submit' className="butt1">Created Food Recipe</button>
                        {/*    <p className="msg">Formulario enviado exitosamente!</p> */}
                    </span>
                </div>
                {
                    input.typeDiets.map((el, i) =>
                        <div className="creater1" key={i}>
                            <button className="btn5" onClick={() => handleDelete(el)}>x</button>
                            <p >{el}</p>
                        </div>)
                }

            </form>

        </div>
    )

}

/* image={c.img? c.img:c.image} */
/**img cosas de la api...back image */