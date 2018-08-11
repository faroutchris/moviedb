export const types = {
    SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
    SIGNUP_FAIL: 'AUTH/SIGNUP_FAIL',
    LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
    LOGIN_FAIL: 'AUTH/LOGIN_FAIL',
    SIGN_OUT: 'AUTH/SIGN_OUT'
};

export const initialState = {
    user: null,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SIGNUP_REQUEST:
        case types.LOGIN_REQUEST:
            return { ...state, isLoading: true, error: null };

        case types.SIGNUP_SUCCESS:
        case types.LOGIN_SUCCESS:
            return { ...state, isLoading: false, user: action.user };

        case types.SIGNUP_FAIL:
        case types.LOGIN_FAIL:
            return { ...state, isLoading: false, error: action.error };

        case types.SIGN_OUT:
            return { ...state, user: null };

        default:
            return state;
    }
};

export const actions = {
    signup: (email, password) => ({ type: types.SIGNUP_REQUEST, email, password }),
    login: (email, password) => ({ type: types.LOGIN_REQUEST, email, password }),
    logout: () => ({ type: actionTypes.LOGOUT })
};
