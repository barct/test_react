/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View } from 'react-native';
import StandardButton from '../components/button';
import StandardText from '../components/text';
import Realm from 'realm';
let realm;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'StockDatabase.realm',
      schema: [
        {
          name: 'stock_item',
          properties: {
            item_id: { type: 'int', default: 0 },
            item_name: 'string',
            item_quantity: { type: 'int', default: 0 },
            item_min: { type: 'int', default: 0 },
            item_max: { type: 'int', default: 0 },
            asocciate_codes: 'int[]'
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <StandardText text="RealM Example" />
        <StandardButton
          title="Agregar"
          customClick={() => this.props.navigation.navigate('Add')}
        />
        <StandardButton
          title="Editar"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <StandardButton
          title="Ver"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <StandardButton
          title="Listar"
          customClick={() => this.props.navigation.navigate('List')}
        />
        <StandardButton
          title="Borrar"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
      </View>
    );
  }
}