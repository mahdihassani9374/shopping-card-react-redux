import * as types from '../Constanc/ActionTypes';
const products = (state = {}, actions) => {    
    switch (actions.type) {
        case types.Recive_Product:
            let products = actions.products.reduce((obj,item)=>
              {
                obj[item.id] = item;
                return obj
              },{}
            )
            return {
                ...state,
                ...products
            }            
        default:
            return state;
    }
}

export default products;