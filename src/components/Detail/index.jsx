import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail,reset } from '../../redux/actions';
import LoaderHome from '../LoaderHome';

import './index.css'


export default function Detail(props) {
    
    
    const dispatch = useDispatch()
    const { id } = useParams()   //la obtengo con este hook, porquue en el routa de mi App le especifico

    useEffect(() => {
        dispatch(getDetail(id));//traigo el estado detail
            }, [id, dispatch])
 

    useEffect(() => {
        dispatch(reset('reset'))
    }, [dispatch]);
 

 
    const detailsstate = useSelector((state) => state.details)//le traigo desde el reducer

  
  /* if (!detailsstate.length) {
    return <LoaderHome />;
  } */
return (
    <div >
                        

        <div className='createrD'>

            {
               detailsstate.length > 0 ?
                    <div  >
                        <h1 className='title_Deatil' > {detailsstate[0].name} </h1>
                        <> <img className='imga1' src={detailsstate[0].image ? detailsstate[0].image : 'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg' } alt="Img of Foods" /></>
                        <div className=''>
                            <h3 className='detail_TypeRecipe' >Type Diet:<br /> {detailsstate[0].typeDiets.map(t => t.name).join(' , ')}</h3>
                            <h5 className='detail_summary' >summary: <br />  <br />{detailsstate[0].summary}</h5>
                            <h5 className='score_recipe' >healthScore: {detailsstate[0].healthScore}</h5>
                            <h5 className='score_recipe' >spoonacularScore: {detailsstate[0].spoonacularScore}</h5>
                            <h5 className='detail_steps'>steps:<br />{Array.isArray(detailsstate[0].steps) ? detailsstate[0].steps.map(e => e.steps.map(f => f.step)) : detailsstate[0].steps}</h5>
                        </div>
                    </div> :
                   /*  <div> <h2>  loading... </h2> </div>
 */
 // SPINNER WHILE IT'S LOADING //
 <LoaderHome  className='loader' />
            }
            <Link to='/home'><button onClick={'reset'} className='butt'>Back to main Page </button> </Link>
        </div>
        
        
        </div>
        
    )
}