import * as types from '../Constanc/ActionTypes';
export const reciveProduct = (products) => {
    return {
        type:types.Recive_Product,
        products
    }
}
