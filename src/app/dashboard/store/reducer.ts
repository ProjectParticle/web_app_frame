/**
 * App / Dashboard / type / reducer
 */

const initialState = {

    currentApplication: '',
};

export type DashboardState = Readonly<typeof initialState>;

export default (state: DashboardState = initialState, action): DashboardState => {

    return state;
};
