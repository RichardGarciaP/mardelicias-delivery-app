import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {_styles} from './styles';
import Typography from '@/shared/components/typography';
import {
  ORDER_STATUS_DEFINITIONS,
  activeOpacity,
} from '@/shared/constants/global';
import useDarkMode from '@/shared/hooks/useDarkMode';

export interface TopNavigationProps {
  id: string;
  name: string;
  active: boolean;
}

interface Props {
  setCurrentTab: (currentTab: TopNavigationProps) => void;
}

const TopNavigation: React.FC<Props> = ({setCurrentTab}) => {
  const [tabs, setTabs] = useState<TopNavigationProps[]>([
    {
      id: ORDER_STATUS_DEFINITIONS.PREPARING,
      name: 'orders.news',
      active: true,
    },
    {
      id: ORDER_STATUS_DEFINITIONS.DISPATCH,
      name: 'orders.progress',
      active: false,
    },
    {
      id: ORDER_STATUS_DEFINITIONS.DELIVERED,
      name: 'orders.success',
      active: false,
    },
  ]);

  const {isDarkMode} = useDarkMode();

  useEffect(() => {
    setCurrentTab(tabs.find(tab => tab.active) ?? tabs[0]);
  }, []);

  const handleChange = (tabSelected: TopNavigationProps) => {
    setTabs(
      tabs.map(option => ({
        ...option,
        active: option.id === tabSelected.id,
      })),
    );

    setCurrentTab(tabSelected);
  };

  const styles = _styles(isDarkMode);
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        return (
          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={() => handleChange(tab)}
            style={tab.active ? styles.tabActive : styles.tab}
            key={tab.id}>
            <Typography style={tab.active ? styles.textActive : styles.text}>
              {tab.name}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopNavigation;
