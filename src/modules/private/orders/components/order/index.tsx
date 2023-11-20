import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {calendarDate, trash} from '@/shared/assets/icons';
import {_styles} from './styles';
import {activeOpacity, currencyType} from '@/shared/constants/global';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {ProductDTO} from '@/shared/DTO';
import {Button} from '@/shared/components/buttons';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';

interface OrderProps {
  product: ProductDTO;
  track?: boolean | undefined;
}
export default function Order({product, track = true}: OrderProps) {
  const {navigate} = useNavigation<NavigationProps>();
  const {isDarkMode} = useDarkMode();
  const styles = _styles(isDarkMode);
  return (
    <View>
      {track && (
        <View style={styles.containerDate}>
          <Icon icon={calendarDate} />
          <Typography style={styles.date} translate={false}>
            Mie 26, 2023
          </Typography>
        </View>
      )}

      <TouchableOpacity
        onPress={() => navigate('eReceipt')}
        activeOpacity={activeOpacity}
        style={styles.containerOrder}>
        <View style={styles.containerInfo}>
          <View>
            <Typography style={styles.name} translate={false}>
              {product.name}
            </Typography>
          </View>
          <Typography style={styles.category} translate={false}>
            Size: {product.size} Qty: {product.cant}
          </Typography>
          <View style={styles.containerCant}>
            <Typography style={styles.price} translate={false}>
              {currencyType} {product.price.toFixed(2)}
            </Typography>
            <View style={{width: 20}} />
            {track && (
              <View style={{flex: 1, maxWidth: 180}}>
                <Button
                  onPress={() => navigate('eReceipt')}
                  sm
                  title="orders.track_order"
                />
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
