import React, {createContext, useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {
  PERMISSIONS,
  PermissionStatus,
  check,
  openSettings,
  request,
} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PremissionsProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(permissionsInitState);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return;

      checkLocationPermission();
    });
  }, []);

  const askLocationPermission = async () => {
    let permissionsStatus: PermissionStatus;

    if (Platform.OS === 'android') {
      permissionsStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      if (permissionsStatus === 'blocked') {
        await openSettings();
      }

      setPermissions({...permissions, locationStatus: permissionsStatus});
    }
  };

  const checkLocationPermission = async () => {
    let permissionsStatus: PermissionStatus;

    if (Platform.OS === 'android') {
      permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      setPermissions({...permissions, locationStatus: permissionsStatus});
    }
  };

  return (
    <PermissionsContext.Provider
      value={{permissions, askLocationPermission, checkLocationPermission}}>
      {children}
    </PermissionsContext.Provider>
  );
};
