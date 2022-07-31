
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getFood from "../../redux/actions";
import { recipesOrder, healthOrder, filterTypeDiets, getTypes,filterCreated,SpooOrder } from "../../redux/actions";
import LoaderHome from "../LoaderHome";
import NavBar from '../NavBar/NavBar'
import Card from "../Card";
import Paginado from "../Paginado";
import { GrCaretNext, GrCaretPrevious, GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import './index.css'

export default function Home(created) {

  const allFoods = useSelector(state => state.foods)
  const allTypes = useSelector(state => state.typed)//mapStateToProps conecta la acciones/extrae datos del store /funciones puras


  const dispatch = useDispatch(); //retorna la función dispatch del almacén de Redux con la cual se pueden emitir acciones.
 //const id=useParams()

  const [order, setOrder] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  //eslint-disable-next-line
  const [foodPerPage, setFoodPerPage] = useState(9)


  const indexOfLastFood = currentPage * foodPerPage//recetas por pagina
  const indexOfFirstFood = indexOfLastFood - foodPerPage;//0

  const currentFoods = allFoods.slice(indexOfFirstFood, indexOfLastFood)


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getFood())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getFood(e))
    setCurrentPage(1)
  }

  function handleRecipesOrder(e) {
    e.preventDefault();
    dispatch(recipesOrder(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }

  function handleHealtOrder(e) {
    e.preventDefault();
    dispatch(healthOrder(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }


  function handleSpooOrder(e) {
    e.preventDefault();
    dispatch(SpooOrder(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }


  function handleDietsFilter(e) {
    e.preventDefault();
    console.log('yo soy target.valeu', e.target.value)
    dispatch(filterTypeDiets(e.target.value))
    setCurrentPage(1)
    setFilter(`Filtrado ${e.target.value}`)
  };

  function handleFilterCreated(e) {
    e.preventDefault()
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  };





  if (!allFoods.length) {
    return <LoaderHome className='loader-home' />;
  }

  return (
    <div>
      <NavBar />
     
      <br /><br /><br />
      <> <button className="butt" onClick={e => { handleClick(e) }}>Reload all Food Recipes</button></>
      <br />
      <select className='titulos3' value={order} onChange={e => { handleRecipesOrder(e) }}>
        <option value="" > Sort by Recipe Name</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select className='titulos3' value={order} onChange={e => { handleHealtOrder(e) }} >
        <option value="x" >Sort ..By Recipes-healthScore</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      
      <select className='titulos3' value={order} onChange={e => { handleSpooOrder(e) }} >
        <option value="x" >Sort ..By Recipes-SpoonacularScore</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>

      <select className='titulos3' value={order} onChange={e => handleFilterCreated(e)}>
        <option >Filter By Origin</option>
        <option value='All'>All Recipes</option>
        <option value='created'>My Recipes</option>
        <option value='Api'>Api Recipes</option>
      </select>



      <select className="titulos3" onChange={e => { handleDietsFilter(e) }} value={filter}>
        {/*  <option value="foods" key="foods">Foods</option> */}
        <option value='All' key="all">Filter By TypeDiets</option>
        {allTypes.map((g) => <option key={g.name} value={g.name}>{g.name}</option>)}


      </select>


      <Paginado
        foodPerPage={foodPerPage}
        allFoods={allFoods.length}
        paginado={paginado} />

 /<button type="button" onClick={() => setCurrentPage(1)}><GrChapterPrevious /></button>
 <button type="button" onClick={() => currentPage === 1 ? setCurrentPage(currentPage) : setCurrentPage(parseInt(currentPage) - 1)}><GrCaretPrevious /></button>
 <button type="button" onClick={() => currentPage === foodPerPage ? setCurrentPage(currentPage) : setCurrentPage(parseInt(currentPage) + 1)}><GrCaretNext /></button>
 <button type="button" onClick={() => setCurrentPage(foodPerPage)}><GrChapterNext /></button>
     {/*  < button className="butt3" onClick={nextPage}>Next</button>
      < button className="butt3" onClick={prevPage}>Prev</button> */}<br/>

      <div className='card-container12s'>

        {currentFoods?.map((el) => {
          return (
            <div className='starp' key={el.id} >
              <Link to={'/home' + el.id} key={el.id}>
                <Card
                  key={el.id}
                  name={el.name}
                  image={el.image ? el.image : <img src='https://i0.wp.com/revistadiners.com.co/wp-content/uploads/2020/07/portada_rutaazteca_1200x800.jpg?fit=1024%2C683&ssl=1' alt=" " />}
                  healthScore={el.healthScore}
                  spoonacularScore={el.spoonacularScore}
                  typeDiets={el.typeDiets.map(e => e.name).join(' , ')}
                  created={el.created} />
              </Link><br/>
           {/*    < button className="butt3">Delete</button> 
              
              < button className="butt3">Update</button>  */}
            </div>
          )

        })
        
        }

      </div>
     
    </div>
  )
}

/*  {currentFoods[0].diets ? currentFoods[0].typeDiets.map(d => d.name) :'dish type not found'  } */

/* image={c.img? c.img:c.image} typeDiets */
/**img cosas de la api...back image diets */
