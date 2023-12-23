import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import HeaderWithIcon from '@/shared/components/headerBack';

import useDarkMode from '@/shared/hooks/useDarkMode';
import CustomStatusBar from '@/shared/components/customStatusBar';
import {_styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, RootStackParamList} from '@/shared/routes/stack';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {PermissionsContext} from '@/context/PermissionsContext';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParamList, 'location'> {}

const Location = ({route}: Props) => {
  const {isDarkMode} = useDarkMode();
  const styles = _styles(isDarkMode);
  const {askLocationPermission} = React.useContext(PermissionsContext);
  const {goBack} = useNavigation<NavigationProps>();
  const [region, setRegion] = useState<Region>({
    latitude: -0.949952,
    longitude: -80.720673,
    latitudeDelta: 0.01469,
    longitudeDelta: 0.0087,
  });

  const [marketPosition, setMarketPosition] = useState({
    latitude: route?.params?.latitude,
    longitude: route?.params?.longitude,
  });

  const onRegionChangeComplete = (change: Region) => {
    setRegion(change);
  };

  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    askLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.topSpace} />
      <View style={styles.headerBack}>
        <HeaderWithIcon title="Dirección" enablePressable />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          initialRegion={region}
          onRegionChangeComplete={onRegionChangeComplete}>
          <Marker title="Cliente" coordinate={marketPosition} />
        </MapView>
      </View>
    </View>
  );
};

export default Location;
