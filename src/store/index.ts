/**
 * Store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducer';
import loggerMiddleware from './middleware/logger';
import errorReporterMiddleware from './middleware/error-reporter';

/* Common middlewares */
const commonMiddlewares: Array<any> = [
    reduxThunkMiddleware,
    reduxPromiseMiddleware,
    loggerMiddleware,
    errorReporterMiddleware,
];

/* Environment-specific middlewares */
const environmentMiddlewares: { [key: string]: Array<any> } = {
    'development': [],
    'production': [],
    'testing': [],
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createApplicationStore = () => createStore(
    rootReducer,
    undefined,
    composeEnhancers(
        applyMiddleware(
            ...commonMiddlewares,
            ...environmentMiddlewares[process.env.NODE_ENV],
        )
    )
);
