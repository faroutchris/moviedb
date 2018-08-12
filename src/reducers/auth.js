export const types = {
    SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
    SIGNUP_FAIL: 'AUTH/SIGNUP_FAIL',
    AUTO_LOGIN_REQUEST: 'AUTH/AUTO_LOGIN_REQUEST',
    LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
    LOGIN_FAIL: 'AUTH/LOGIN_FAIL',
    RESET_PASSWORD_REQUEST: 'AUTH/RESET_PASSWORD_REQUEST',
    RESET_PASSWORD_SUCCESS: 'AUTH/RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_FAIL: 'AUTH/RESET_PASSWORD_FAIL',
    SIGN_OUT: 'AUTH/SIGN_OUT'
};

export const initialState = {
    user: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
    passwordResetSent: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SIGNUP_REQUEST:
        case types.LOGIN_REQUEST:
            return { ...state, isLoading: true, error: null };

        case types.SIGNUP_SUCCESS:
        case types.LOGIN_SUCCESS:
            return { ...state,
                isLoading: false,
                isLoggedIn: true,
                user: action.user
            };

        case types.SIGNUP_FAIL:
        case types.LOGIN_FAIL:
            return { ...state, isLoading: false, error: action.error };

        case types.SIGN_OUT:
            return { ...state, user: null, isLoggedIn: false };

        case types.RESET_PASSWORD_SUCCESS:
            return {...state, passwordResetSent: action.passwordResetSent};
        case types.RESET_PASSWORD_FAIL:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export const actions = {
    signupRequest: (email, password) => ({ type: types.SIGNUP_REQUEST, email, password }),
    signupSuccess: (user) => ({ type: types.SIGNUP_SUCCESS, user }),
    signupFail: (error) => ({ type: types.SIGNUP_FAIL, error }),

    loginRequest: (email, password) => ({ type: types.LOGIN_REQUEST, email, password }),
    loginSuccess: (user) => ({ type: types.LOGIN_SUCCESS, user }),
    loginFail: (error) => ({ type: types.LOGIN_FAIL, error }),

    resetPasswordRequest: (email) => ({ type: types.RESET_PASSWORD_REQUEST, email }),
    resetPasswordSuccess: (passwordResetSent) => ({ type: types.RESET_PASSWORD_SUCCESS, passwordResetSent }),
    resetPasswordFail: (error) => ({ type: types.RESET_PASSWORD_FAIL, error }),

    autoLoginRequest: (isLoggedIn) => ({ type: types.AUTO_LOGIN_REQUEST, isLoggedIn }),
    signout: () => ({ type: types.SIGN_OUT }),
};
