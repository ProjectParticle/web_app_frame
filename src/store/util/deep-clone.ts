/**
 * Deep clone
 */

import { cloneDeep } from 'lodash';

export default <T>(input: T, updated?: Partial<T>): T => ({
    ...cloneDeep<T>(input),
    ...(updated ? updated : {})
});
