import * as types from '../Constanc/ActionTypes';
let init = {
    addedId: [],
    quantityId: {},
}

const addedItem = (addedId,actions) => {
    if(addedId.indexOf(actions.productId)!==-1) {
        return addedId
    }
    return [...addedId , actions.productId]
}

const quantityId = (quantity,actions) => {
    let {productId} = actions
    return {
        ...quantity , 
        [productId] : (quantity[productId] || 0) +1
    }
}
const cart = (state = init, actions) => {
    switch (actions.type) {
        case types.Add_To_Cart:
            return {
                addedId: addedItem(state.addedId,actions),
                quantityId: quantityId(state.quantityId,actions)
            }
        default:
            return state;
    }
}

export default cart;