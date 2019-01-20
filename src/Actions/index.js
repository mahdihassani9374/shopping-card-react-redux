import * as types '../Constanc/ActionTypes';
const recive_Product = products => {
    return {
        type:'Recive_Product',
        products
    }
}

expoert default types.Recive_Product;