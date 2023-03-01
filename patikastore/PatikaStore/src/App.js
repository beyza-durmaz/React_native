import React from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, FlatList } from "react-native";
import data from './patikastore_data.json';
import StoreCard from './components/StoreCard';

function App() {

  const renderCards = ({ item }) => <StoreCard cards={item} />;

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.top_title}>PATIKASTORE</Text>
            <TextInput
              style={styles.input}
              value={Text}
              placeholder='Ara...' />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        data={data}
        numColumns={2}
        renderItem={renderCards} />
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top_title: {
    fontSize: 30,
    color: '#800080',
    fontWeight: 'bold',
    padding: 8
  },
  input: {
    backgroundColor: '#eceff1',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 15
  },
})

export default App;