export const addData = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'categoryData',
            payload: data
        })
    }
}

// export const withdraw = (amount) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'withdraw',
//             payload: amount
//         })
//     }
// }