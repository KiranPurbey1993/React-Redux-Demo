import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userActionType'
import axios from 'axios'

// action creater function 
export const fetchUsersRequest = ()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure= (error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers = ()=>{
    // return thunk function
    return (dispatch, getState)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error)=>{
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}