import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './src/components/Header';
import ListItem from './src/components/ListItem';
import AddItem from './src/components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Egg' },
    { id: uuidv4(), text: 'Coffee' },
  ]);

  const deletItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    })
  }

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' });
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deletItem={deletItem} />} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
})

export default App;
