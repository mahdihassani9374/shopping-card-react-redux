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
        case  types.Add_To_Cart :       
        let product = state[actions.productId];        
        return {
            ...state,
            [actions.productId] : {
                ...product,
                count:product.count -1,
                
            }
        }        
        default:
            return state;
    }
}

export default products;