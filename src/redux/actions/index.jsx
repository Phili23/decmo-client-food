import axios from 'axios'
const baseUrl="https://demo-deploy-food.herokuapp.com"

// trae todas las recetas
export default function getFood() {
    return async function (dispatch) {
        return axios.get(`${baseUrl}/Recipes`)
            .then((res) => {
                dispatch({
                    type: 'GET_FOOD',
                    payload: res.data
                })
            })
            .catch((err) => {
                return err
            })
    }
}

/* export  function get(){
    return async function(dispatch){
        try{
        var json=await axios.get('http://localhost:3001/Recipes')
    
    return dispatch({
        type:'GET_FOOD',
        payload:json.data
    })
}catch(error){
    console.log(error)
}
}
} */

//filtro por nombre
export function foodName(name) {
    console.log('yo soy el payload', name)
    return async function (dispatch) {
        return axios.get(`${baseUrl}/Recipes?name=` + name)
            .then((res) => {
                dispatch({
                    type: 'FOOD_NAME',
                    payload: res.data
                })
            })
    }
}
/* export function getDetail(id) {
    return function (dispatch) {
        axios
            .get('http://localhost:3001/Recipes/' + id)
            .then((res) => {
                dispatch({
                    type: 'GET_DETAILS'
                    , payload: res.data
                });
            })
            .catch((err) => {
                return err;
            });
    };
} */

//filtro por id
 export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`${baseUrl}/Recipes/` + id)
            console.log(json.data, 'hola json')
            dispatch({

                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
} 

/* 
export function detalles(id){
    console.log('yo soy el payload', id)
    return async function (dispatch) {
        return axios.get('http://localhost:3001/Recipes/' + id)
            .then((res) => {
                dispatch({
                    type: 'DETALLE',
                    payload: res.data
                })
            })
    }
} */

//agregar una receta
export function postFood(payload) {
    return async function (dispatch) {
        const response = await axios.post(`${baseUrl}/Recipes`, payload);

        return response;
    }
}

/*
    export function postFood(payload){
        console.log('yo soy id',payload)
        return async function(dispatch){
            console.log('yo soy id',payload)
            return axios
            .post('http://localhost:3001/Recipes/'+payload)
            .then((res)=>{
                dispatch({
                    type:'GET_DETAILS',
                    payload:res.data
                })
        })
        }
        } */


export function getTypes() {
    return async function (dispatch) {
        try {
            return axios
                .get(`${baseUrl}/TypeDiets/`)
                .then((res) => {
                    dispatch({
                        type: 'GET_TYPE_DIETS',
                        payload: res.data
                    })
                })
        } catch (err) {
            console.log(err)
        }
    }
}


export function recipesOrder(payload) {
    return {
        type: 'ORDER_RECIPES',
        payload
    }
}

export function healthOrder(payload) {
    return {
        type: 'ORDER_HEALTHSCORE',
        payload
    }
}

export function SpooOrder(payload) {
    return {
        type: 'ORDER_SPOOSCORE',
        payload
    }
}

export function filterTypeDiets(payload) {
    return {
        type: 'FILTER_DIETS',
        payload
    }
}

export const loading = () => {
    return (dispatch) => {
      dispatch({
        type: "LOADING",
      });
    };
  };

export function nextPage() {
    return {
        type: 'NEXT_PAGE'
    }
}

export function reset() {
    return {
        type: 'RESET'
    }
}


export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function deleteDbFood(payload) {
    return async function (dispatch) {
        try {
            const json = await axios.delete(`${baseUrl}/Recipes/delete/${payload}` )
           /*  console.log(json.data, 'hola json') */
            return dispatch({
                type: "DELETE_DB_FOOD",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}