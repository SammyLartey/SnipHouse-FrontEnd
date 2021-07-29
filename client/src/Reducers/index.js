import { combineReducers } from 'redux';

import product from './product-reducer';
import cart from './cart-reducer';
import blog from './blog-reducer';

const rootReducer = combineReducers({
    product,
    cart,
    blog
});

export default rootReducer;
