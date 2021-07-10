import React from 'react';
import { StatusBar, View } from 'react-native'
import LoadScreen from './screens/LoadScreen/LoadScreen';
import { styles } from './screens/LoadScreen/styles';
import Home from './screens/Home/Home';
import AuthRoutes from './routes/auth.routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1, paddingBottom: 105}} >
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <AuthRoutes />
    </SafeAreaProvider>
  );
};
export default App;
