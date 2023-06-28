import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export const useFonts = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'mt-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'mt-light': require('../../assets/fonts/Montserrat-Light.ttf')
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const loadApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await loadFonts()

        setFontLoaded(true)

        await SplashScreen.hideAsync()
      } catch (error) {
        console.log(error)
      }
    };

    (async () => {
      await loadApp()
    })()
  }, [])

  return {
    fontLoaded
  }
}
