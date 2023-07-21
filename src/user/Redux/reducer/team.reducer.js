import * as ActionType from '../ActionType'

const initVal = {
    team: [],
    loading: false,
    error: null
}

export const teamReducer = (state = initVal, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.GET_TEAM:
            return {
                ...state,
                team: action.payload,
                loading: false
            }
        case ActionType.ADD_TEAM:
            return {
                ...state,
                team: state.team.concat(action.payload)
            }
        case ActionType.DELETE_TEAM:
            return {
                ...state,
                team: state.team.filter((v) => v.id != action.payload)
            }
        case ActionType.UPDATE_TEAM:
            return {
                ...state,
                team: state.team.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
        case ActionType.LOADING_TEAM:
            return {
                team: [],
                loading: true,
            }
        case ActionType.ERROR_TEAM:
            return {
                team: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}