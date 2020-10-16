import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Loading from '../screens/Loading';
import Home from '../screens/Home';
import Pacientes from '../screens/Pacientes';

const App = createStackNavigator({
  Home,
  Pacientes,
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Loading,
    App,
  })
);

export default Routes;