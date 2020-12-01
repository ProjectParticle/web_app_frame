/**
 * Splash screen component
 */

import React, { PropsWithoutRef, } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from 'frame/store/reducer';
import clone from 'frame/store/util/deep-clone';

import { timedOut } from '../store/action';
import { SplashScreenActionType } from '../store/action-type';

const defaultProps: {
    timeout?: number,
    timedOutDispatcher?: () => SplashScreenActionType,
} = {
    timeout: 5 * 1000,
}

export type SplashScrrenProps = typeof defaultProps;

const mapStateToProps = (state: RootState, props: SplashScrrenProps = defaultProps) => clone(props);

const mapDispatchToProps = (dispatch: Dispatch<SplashScreenActionType>, props: SplashScrrenProps = defaultProps) => clone(
    props,
    {
        timedOutDispatcher: () => dispatch(timedOut()),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    // SplashScreen component
    (props: PropsWithoutRef<SplashScrrenProps> = defaultProps) => {

        setTimeout(
            () => props.timedOutDispatcher!(),
            props.timeout
        );

        return (
            <div>
                Loading...
            </div>
        );
    }
);