import React from 'react';
import { View, Alert } from 'react-native';
import Realm from 'realm';
import StandardTextInput from '../components/textinput';
import StandardButton from '../components/button';
let realm;

export default class DeleteStockItem extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'StockDatabase.realm' });
  }

  deleteItem = () => {
    // Add your logic to delete the stock item here
    // For example:
    realm.write(() => {
        const { input_item_id } = this.state;
        const itemToDelete = realm.objects('stock_item').filtered('item_id = $0', input_item_id);
        realm.delete(itemToDelete);
    });

    Alert.alert(
      'Success',
      'Producto Eliminado Exitosamente',
      [
        {
          text: 'Ok',
          onPress: () => this.props.navigation.navigate('HomeScreen'),
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
        <StandardTextInput
          placeholder="Enter User Id"
          onChangeText={ input_item_id => this.setState({ input_item_id })}
        />
        <StandardButton
          title="Delete User"
          customClick={this.deleteItem.bind(this)}
        />
      </View>
    );
  }
}
