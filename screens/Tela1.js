import React, {useState, useEffect} from 'react';
import { View, Text, Image, SectionList, StyleSheet} from 'react-native';
import { db } from '../FirebaseConfig'

const pets = [
  { categoria: "Cães", data: ["Vira-Lata", "Golden", "Labrador", "Poodle", "Bulldog"] },
  { categoria: "Gatos", data: ["Vira-Lata", "Persa", "Siamês", "Sphynx"] }
];

export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/zoe.jpg')} style={styles.image} resizeMode='contain' />

      <SectionList
        sections={pets}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { categoria } }) => (
          <Text style={styles.header}>{categoria}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 300, marginBottom: 10 },
  header: { fontWeight: 'bold', fontSize: 18, marginTop: 10 },
  item: { fontSize: 16, paddingLeft: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    borderRadius: 5
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalClose: {
    marginTop: 10,
    textAlign: 'center',
    color: 'red'
  }
});
