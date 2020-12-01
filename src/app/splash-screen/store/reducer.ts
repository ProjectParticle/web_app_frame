/**
 * App / Splash Screen / type / reducer
 */

const initialState = {

    hasBeenShown: '',
};

export type SplashScreenState = Readonly<typeof initialState>;

export default (state: SplashScreenState = initialState, action): SplashScreenState => {

    return state;
};
