import React, { Fragment, PropsWithoutRef } from 'react';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from 'frame/store/reducer';
import clone from 'frame/store/util/deep-clone';

import SplashScreen from 'frame/app/splash-screen';

const defaultProps: {
    showSplashScreen?: boolean,
} = {
    showSplashScreen: false,
};

export type MainProps = typeof defaultProps;

const mapStateToProps = (state: RootState, props: MainProps) => clone(props, {
    showSplashScreen: !state.splashScreen.hasBeenShown
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, props: MainProps) => clone(props);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    // SplashScreen component
    (props: PropsWithoutRef<MainProps>) => (
        <div>
            {
                props.showSplashScreen && <SplashScreen.App />
            }
            {
                !props.showSplashScreen && <div>The main application</div>
            }
        </div>
    )
);