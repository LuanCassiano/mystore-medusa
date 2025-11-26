import './gesture-handler';

import React from 'react';
import MainNavigation from './routes/routes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './service/NavigationService';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={navigationRef}>
            <MainNavigation />
        </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
