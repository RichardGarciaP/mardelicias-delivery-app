import {TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {chevronLeft} from '@/shared/assets/icons';
import {normalize} from '@/shared/helpers';
import {styles} from './styles';
import useDarkMode from "@/shared/hooks/useDarkMode";
import { semantic } from "@/shared/constants/colors";

interface Element {
  name: string;
  leftIcon: React.ReactNode;
  rightElement?: React.ReactNode;
  onPress?: () => void;
}

interface SectionProps {
  title: string;
  elements: Element[];
}

const Section: FC<SectionProps> = ({title, elements}) => {
  const {isDarkMode} = useDarkMode()
  const stylesIcon = {
    tintColor: isDarkMode ? semantic.background.white.w500 : semantic.text.grey
  }
  return (
    <View
      style={{
        marginVertical: normalize(10),
      }}>
      <Typography style={styles.title}>{title}</Typography>
      {elements.map((element, index) => (
        <TouchableOpacity
          key={index}
          style={styles.rowContainer}
          onPress={element?.onPress}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {element.leftIcon}
            <Typography style={styles.name}>{element.name}</Typography>
          </View>
          {element.rightElement ? (
            element.rightElement
          ) : (
            <Icon customStyles={stylesIcon} icon={chevronLeft} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Section;
