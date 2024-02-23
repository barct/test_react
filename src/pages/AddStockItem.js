/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import StandardTextInput from '../components/textinput';
import StandardButton from '../components/button';
import Realm from 'realm';
let realm;

export default class RegisterProduct extends React.Component {
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

  register_item_stock = () => {
    var that = this;
    const { item_name } = this.state;
    const { item_quantity } = this.state;
    const { item_max } = this.state;
    const { item_min } = this.state;

    if (item_name) {
        if (item_quantity) {
          realm.write(() => {
            var ID =
              realm.objects('stock_item').sorted('item_id', true).length > 0
                ? realm.objects('stock_item').sorted('item_id', true)[0]
                    .item_id + 1
                : 1;
            ///Create a stock_item prevent int values
            realm.create('stock_item', {
              item_id: ID,
              item_name: item_name,
              item_quantity: parseInt(item_quantity),
              item_min: parseInt(item_min),
              item_max: parseInt(item_max),
            });
            
            Alert.alert(
              'Success',
              'Producto Creado Exitosamente',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          });
        } else {
          alert('Cantidad de Producto es requerida');
        }
      } else {
        alert('Nombre de Producto es requerido');
      }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <StandardTextInput
              placeholder="Nombre de Producto"
              onChangeText={ item_name => this.setState({ item_name })}
            />
            <StandardTextInput
              placeholder="Cantidad de Producto"
              onChangeText={ item_quantity => this.setState({ item_quantity })}
              maxLength={10}
              keyboardType="numeric"
            />
            <StandardTextInput
              placeholder="Cantidad Minima"
              onChangeText={ item_min => this.setState({ item_min })}
              maxLength={10}
              keyboardType="numeric" />
            <StandardTextInput
              placeholder="Cantidad Maxima"
              onChangeText={ item_max => this.setState({ item_max })}
              maxLength={10}
              keyboardType="numeric" />
            <StandardButton
              title="Agregar Producto"
              customClick={this.register_item_stock.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}