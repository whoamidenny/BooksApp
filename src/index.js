import 'react-native-gesture-handler';
import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import ErrorBoundary from './components/ErrorBoundary';
import AppNavigation from './navigation';
import {store, persistor} from './redux';
import setI18nConfig from './i18n';

import light from './redux/themes/mode/light';
import {StatusBar, Platform} from 'react-native';
import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    //Connect translate
    setI18nConfig();

    if (Platform.OS === 'android') {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#f1f9ff');
    }
    //Connect theming
    EStyleSheet.build(light);

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  render() {
    const {loading} = this.state;
    return !loading ? (
      <Provider store={store}>
        <ErrorBoundary>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigation />
          </PersistGate>
        </ErrorBoundary>
      </Provider>
    ) : (
      <Loader />
    );
  }
}

export default App;
