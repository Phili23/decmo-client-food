import React from "react";
//import { useDispatch } from "react-redux";
//import {deleteDbFood} from '../../redux/actions'

import './index.css'


export default function Card({ id, name, summary, spoonacularScore, healthScore, image, typeDiets, steps, created }) {

 //const dispatch=useDispatch()
    
 /*  function handleDeleteRecipe(e) {
    e.preventDefault()
    
    dispatch(deleteDbFood(id))
    /* dispatch(getFood()) */
      /*  .then(() => {
            alert("Executed")
        })
} */

    return (
        <div className="card-containers">


            <div key={id} className="">
          <span className="">{image ? <img className="imga1" src={image} alt="not found" /> : <img className="imga1"  src='https://i0.wp.com/revistadiners.com.co/wp-content/uploads/2020/07/portada_rutaazteca_1200x800.jpg?fit=1024%2C683&ssl=1'  alt="img not found" width='200px' height='125px'   />}<br/></span> 
                
           <div className=''>
              <span className="nameFood"> <h5>  <br />{name}</h5></span><br/>
         
           
            
             <span> <h5 className="recipeType"> Type of Diet:<br/>  {typeDiets} </h5></span>
             
            
             <span> <h6  className="recipeHealth">HealthScore:  {healthScore}</h6></span>
            {/*  {
                    created === true ? (
                        <button className="butt" onClick={e =>handleDeleteRecipe(e)}>Delete</button>
                    )
                        : null
                } */}
         
        </div>
        </div>
        </div>

    )
}