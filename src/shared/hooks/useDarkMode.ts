import { storage } from "@/shared/helpers";
import useEffectOnce from "@/shared/hooks/useEffectOnce";
import { useState } from "react";
import RNRestart from 'react-native-restart';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false) // dark

  async function getDarkMode() {
    const colorScheme = await storage.get('colorScheme')
    if (colorScheme) {
      setIsDarkMode(colorScheme == 'dark');
      return
    }
  }

  async function changeColorScheme() {
    try {
      setIsDarkMode(!isDarkMode)
      await storage.create('colorScheme', isDarkMode ? 'light' : 'dark' )
      RNRestart.restart();
    } catch (e) {
      console.log('error', e)
    }
  }
  useEffectOnce(() => {
    getDarkMode().catch()
  }, [])
  return {
    isDarkMode,
    changeColorScheme,
  };
}
