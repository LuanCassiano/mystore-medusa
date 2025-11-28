import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { FontAssets } from '../global/fontAssets';

export default function useCachedResources() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        await Font.loadAsync(FontAssets);
      } catch (error) {
        console.error('Error loading fonts:', error);
      } finally {
        setIsLoaded(true);
      }
    }

    loadResources();
  }, []);

  return isLoaded;
}