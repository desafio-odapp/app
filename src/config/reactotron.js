import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  Reactotron
    .configure({
      name: 'DesafioOdapp',
      host: '192.168.15.13',
      port: 9090,
    })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .useReactNative()
    .connect()
    .clear();

  console.tron = Reactotron;
}