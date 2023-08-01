import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Animated} from 'react-native';
import {_styles} from './styles';
import {normalize} from '../../helpers';
import useDarkMode from "@/shared/hooks/useDarkMode";

const AnimatedView = Animated.createAnimatedComponent(View);

interface ToggleProps {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle({isEnabled, setIsEnabled}: ToggleProps) {
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const {isDarkMode} = useDarkMode()

  const toggleWidth = normalize(26);
  const [translateX] = useState<Animated.Value>(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isEnabled ? toggleWidth : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isEnabled, toggleWidth, translateX]);

  const styles = _styles(toggleWidth, isEnabled, translateX, isDarkMode);
  return (
    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
      <View style={styles.container}>
        <AnimatedView style={styles.innerContainer} />
      </View>
    </TouchableOpacity>
  );
}
