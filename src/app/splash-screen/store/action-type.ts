/**
 * App / Splash Screen / Store / Action Type
 */

import { Action } from 'redux';

export const TIMED_OUT = 'APP/SPLASH_SCREEN/TIMED_OUT';
export const RESET = 'APP/SPLASH_SCREEN/RESET';

type TimedOutAction = Action<typeof TIMED_OUT>;
type ResetAction = Action<typeof RESET>;

export type SplashScreenActionType = TimedOutAction | ResetAction;
