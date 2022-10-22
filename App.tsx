import { HomeScreen } from './src/screens/HomeScreen';
import { AppRoutes } from './src/routes/routes';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return <HomeScreen />;
// }

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppRoutes></AppRoutes>
      <StatusBar style="auto" />
    </View>
  );
}
