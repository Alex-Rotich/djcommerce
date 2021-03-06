import { tokenConfig } from './auth'
import { CART_START,CART_SUCCESS,CART_FAIL,CART_UPDATE,CART_NO} from './types'
import axios from 'axios'
export const cartStart = () => (dispatch,getState) => {
    axios.get('/api/add_to_cart/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:CART_START
             })
         })
         .catch(err => console.log(err))
}
export const cartSuccess = data => (dispatch,getState) => {
    console.log(data)
    axios.get('/api/get_cart_items/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:CART_SUCCESS,
                 payload:res.data
             })
         })
         .catch(err => console.log(err))
}
export const cartUpdate = id => (dispatch,getState) => {
    // console.log(data)
    axios.delete(`/api/get_cart/${id}`,tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:CART_UPDATE,
                 payload:res.data
             })
         })
         .catch(err => console.log(err))
}
export const cartUpdateNo = (quantity,id) => (dispatch,getState) => {
    axios.put(`/api/get_cart_q/${id}/`,tokenConfig)
         .then(res => {
             dispatch({
                 type:CART_NO,
                 payload:res.data
             })
         })
}
export const cartFail = () => (dispatch,getState) => {
    axios.get('/api/add_to_cart/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:CART_FAIL
             })
         })
         .catch(err => console.log(err))
}
