/**
 * App / Auth / store / reducer
 */

const initialState = {

    currentApplication: '',
};

export type AuthState = Readonly<typeof initialState>;

export default (state: AuthState = initialState, action: any): AuthState => {

    return state;
};
