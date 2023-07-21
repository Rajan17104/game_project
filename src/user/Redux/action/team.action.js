import * as ActionType from '../ActionType'


export const getTeamData = () => (dispatch) => {


    try {
        dispatch(loadingData(true));
        setTimeout(function () {
            fetch("  http://localhost:3003/Game")
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Something went wrong')
                }
                )
                .then((data) => dispatch({type: ActionType.GET_TEAM , payload: data}))

                .catch((error) => console.log(error))
        }, 3000)

    } catch (error) {
        dispatch(errorData(error.message))
    }
}

export const addTeam = (data) => (dispatch) => {
    fetch("  http://localhost:3003/Game", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => dispatch({type: ActionType.ADD_TEAM , payload: data}))
    .catch((error) => console.log(error))
}

export const deleteTeam = (id) => (dispatch) =>{
    fetch("  http://localhost:3003/Game/" + id, {
        method: "DELETE",

    })
        .then(dispatch({ type: ActionType.DELETE_TEAM, payload: id }))
        .catch((error) => console.log(error))
}

export const updateTeam = (data) => (dispatch) => {
    fetch("http://localhost:3003/Game/" + data.id, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => dispatch({type: ActionType.UPDATE_TEAM , payload: data}))
    .catch((error) => console.log(error))
}

export const loadingData = (status) => (dispatch) => {
    console.log("Loading");
    dispatch({ type: ActionType.LOADING_TEAM, payload: status })
}

export const errorData = (errorMsg) => (dispatch) => {
    console.log(errorMsg);
    dispatch({ type: ActionType.ERROR_TEAM, payload: errorMsg })
}