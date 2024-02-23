/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Realm from 'realm';
let realm;

export default class ListStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    realm = new Realm({ path: 'StockDatabase.realm' });
    var stock_items = realm.objects('stock_item');
    this.state = {
      FlatListItems: stock_items,
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.item_id}</Text>
              <Text>Producto: {item.item_name}</Text>
              <Text>Stock Actual: {item.item_quantity}</Text>
              <Text>Stock Mínimo: {item.item_min}</Text>
              <Text>Stock Máximo: {item.item_max}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}