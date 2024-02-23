/*Example of RealM Database in React Native*/
import React from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

//Import external files
import HomeScreen from './src/pages/HomeScreen';
import AddStockItem from './src/pages/AddStockItem';
import UpdateStockItem from './src/pages/UpdateStockItem';
import ViewStockItem from './src/pages/ViewStockItem';
import ListStockItem from './src/pages/ListStockItem';
import DeleteStockItem from './src/pages/DeleteStockItem';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Add: {
    screen: AddStockItem,
    navigationOptions: {
      title: 'Agregar Producto',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewStockItem,
    navigationOptions: {
      title: 'Ver Stock',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateStockItem,
    navigationOptions: {
      title: 'Actualizar Stock',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  List: {
    screen: ListStockItem,
    navigationOptions: {
      title: 'Listar Stock',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteStockItem,
    navigationOptions: {
      title: 'Borrar',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);