const initialState = {
  foods: [],
  allFoods: [],
  details: [],
  typed: [],
  loading: false,
  reset: [],
  detalle: []
}


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_FOOD':
      return {
        ...state,
        foods: action.payload,
        allFoods: action.payload
      }

    case 'FOOD_NAME':
      return {
        ...state,
        foods: action.payload,
      }
    case 'GET_DETAILS':
      console.log('yo soy getDetail', action.payload)
      return {
        ...state,
        details: action.payload
      }
    case 'POST_DOGS':
      return {
        ...state,
      }

    case 'FILTER_DIETS':

      const allRec = state.allFoods
      // const allRec = state.recipes
      console.log(allRec);

      const typeDietFilter = action.payload === 'All' ? allRec : allRec.filter(t => t.typeDiets.find(e => e.name === action.payload))
      console.log(action.payload);

      return {
        ...state,
        foods: typeDietFilter

      }
    // }})
    case 'GET_TYPE_DIETS':
      return {
        ...state,
        typed: action.payload
      }
      case 'FILTER_CREATED':
        const createdFilter = action.payload === 'created' ? state.allFoods.filter(i => i.created) :
          state.allFoods.filter(el => !el.created)
        return {
          ...state,
          foods: action.payload === 'All' ? state.allFoods : createdFilter
        }

    case 'ORDER_RECIPES':
      const orderName = action.payload === 'asc' ?
        state.foods.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
          }
          return 0;
        }) :
        state.foods.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      return {
        ...state,
        foods: orderName
      }

    case 'ORDER_HEALTHSCORE':
      let orderScore =
        action.payload === "desc" ?
          state.foods.sort(function (a, b) {

            return b.healthScore - a.healthScore;
          }) :
          state.foods.sort(function (a, b) {

            return a.healthScore - b.healthScore;
          })
      return {
        ...state,
        foods: orderScore
      }

      
    case 'ORDER_SPOOSCORE':
      let orderSpoo =
        action.payload === "desc" ?
          state.foods.sort(function (a, b) {

            return b.spoonacularScore - a.spoonacularScore;
          }) :
          state.foods.sort(function (a, b) {

            return a.spoonacularScore - b.spoonacularScore;
          })
      return {
        ...state,
        foods: orderSpoo,
      }


    case 'LOADING':
      return {
        ...state,
        loading: true
      }

    case 'NEXT_PAGE':
      return {
        ...state,
        foods: action.payload

      };

    case 'PREV_PAGE':
      return {
        ...state,
        foods: action.payload

      }

    case 'DETALLE':
      return {
        ...state,
        detalle: action.payload

      }


    case 'RESET':
      return {
        ...state,
        params: []

      }

      case "DELETE_DB_FOOD":
        console.log('yo soy delete de recetas')
        return{
            ...state,
        }
    default:
      return state;
  }


}