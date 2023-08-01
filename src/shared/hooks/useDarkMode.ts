import {useColorScheme} from 'react-native';

export default function useDarkMode() {
  const isDarkMode = useColorScheme() === 'dark';
  return {
    isDarkMode,
  };
}
