import * as types from '../Constanc/ActionTypes';
export const reciveProduct = (products) => {
    return {
        type: types.Recive_Product,
        products
    }
}

export const addToCart = (productId) => {
    return {
        type: types.Add_To_Cart,
        productId
    }
}