// In App.js in a new project

import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Root from './containers/RootScreen';
import store from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      }}>
        <Root />
      </SafeAreaView>
    </Provider>

  );
}

export default App;