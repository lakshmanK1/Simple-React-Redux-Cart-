import {configureStore} from '@reduxjs/toolkit'

import UiReducer from './Ui-Slice'
import CartReducer from './Cart-Slice' 

const Store = configureStore({
    reducer:{Ui:UiReducer, Cart:CartReducer}
})

export default Store;