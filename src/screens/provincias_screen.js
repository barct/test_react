import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ProvinciasScreen = () => {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const response = await axios.get('https://lb-servicios.apross.gov.ar/api/v1/geo/provincias');
        setProvincias(response.data.list);
      } catch (error) {
        console.error("Error fetching provincias: ", error);
      }
    };

    fetchProvincias();
  }, []);

  return (
    <View>
      <FlatList
        data={provincias}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.nombre}</Text>
        )}
      />
    </View>
  );
};

export default ProvinciasScreen;