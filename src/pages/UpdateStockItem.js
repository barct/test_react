/*Screen to update stock items*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import StandardTextInput from '../components/textinput';
import StandardButton from '../components/button';
import Realm from 'realm';
let realm;

export default class UpdateStockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: '',
      item_quantity: '',
      item_max: '',
      item_min: '',
    };
    realm = new Realm({ path: 'StockDatabase.realm' });
  }

  updateItemStock = () => {
    const { item_name, item_quantity, item_max, item_min } = this.state;

    if (item_name && item_quantity) {
      realm.write(() => {
        realm.create('stock_item', {
          item_id: ID,
          item_name: item_name,
          item_quantity: item_quantity,
          item_max: item_max,
          item_min: item_min,
        }, true);
        Alert.alert(
          'Success',
          'Producto Actualizado Exitosamente',
          [
            {
              text: 'Ok',
              onPress: () => this.props.navigation.navigate('HomeScreen'),
            },
          ],
          { cancelable: false }
        );
      });
    } else {
      Alert.alert('Error', 'Nombre y Cantidad de Producto son requeridos');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}
          >
            <StandardTextInput
              placeholder="Nombre de Producto"
              onChangeText={(item_name) => this.setState({ item_name })}
            />
            <StandardTextInput
              placeholder="Cantidad de Producto"
              onChangeText={(item_quantity) => this.setState({ item_quantity })}
              maxLength={10}
              keyboardType="numeric"
            />
            <StandardTextInput
              placeholder="Cantidad Minima"
              onChangeText={(item_min) => this.setState({ item_min })}
              maxLength={10}
              keyboardType="numeric"
            />
            <StandardTextInput
              placeholder="Cantidad Maxima"
              onChangeText={(item_max) => this.setState({ item_max })}
              maxLength={10}
              keyboardType="numeric"
            />
            <StandardButton
              title="Actualizar Producto"
              customClick={this.updateItemStock}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
