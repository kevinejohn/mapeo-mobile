// @flow

import update from 'immutability-helper';
import { keyBy } from 'lodash';
import { create } from '../lib/redux';

export const {
  type: DEVICE_LIST,
  action: deviceList,
  reducer: deviceListReducer
} = create('DEVICE_LIST', {
  success: (state, action) => {
    const newState = update(state, {
      devices: { $set: keyBy(action.payload, 'id') }
    });

    return newState;
  }
});

export const {
  type: DEVICE_TOGGLE_SELECT,
  action: deviceToggleSelect,
  reducer: deviceToggleSelectReducer
} = create('DEVICE_TOGGLE_SELECT', {
  start: (state, action) => {
    const newState = update(state, {
      devices: {
        [action.meta.id]: {
          $toggle: ['selected']
        }
      }
    });

    return newState;
  }
});

export const {
  type: DEVICE_SELECT,
  action: deviceSelect,
  reducer: deviceSelectReducer
} = create('DEVICE_SELECT', {
  start: (state, action) => {
    const newState = update(state, {
      selectedDevice: {
        $set: action.meta
      }
    });

    return newState;
  }
});

export const {
  type: DEVICE_SYNC_UPDATE,
  action: deviceSyncUpdate,
  reducer: deviceSyncUpdateReducer
} = create('DEVICE_SYNC_UPDATE', {
  start: (state, action) => {
    const newState = update(state, {
      devices: {
        [action.meta.id]: {
          $set: action.meta
        }
      }
    });

    return newState;
  }
});

export default [
  deviceListReducer,
  deviceToggleSelectReducer,
  deviceSelectReducer,
  deviceSyncUpdateReducer
];
