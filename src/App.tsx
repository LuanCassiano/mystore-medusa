import './gesture-handler';

import React from 'react';
import MainNavigation from './routes/MainNavigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './service/NavigationService';
import useCachedResources from './hooks/useCachedResources';

const queryClient = new QueryClient();

const App = () => {
  const isReady = useCachedResources();

  if (!isReady) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
