import {AsyncStatus} from './AsyncStatus';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createAsyncType = (type, asyncStatus) => `${type}_${asyncStatus}`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createAsyncTypes = (type) => ({
  pending: createAsyncType(type, AsyncStatus.pending),
  resolved: createAsyncType(type, AsyncStatus.resolved),
  rejected: createAsyncType(type, AsyncStatus.rejected),
});
