import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons"

export default function App() {
   const [task, setTask] = useState([]);
   const [newTask, setNewTask] = useState('');


  return (
    <>
    <View style={styles.container}>
      <View style={styles.Body}>
        <FlatList style={styles.FlatList}
        data={task}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <text>{item}</text>}
        />
      <Text>Hello World!!</Text>
      </View>
      <View style={styles.Form}>
    <TextInput 
    style={styles.Input}
     placeholderTextColor="#999"
    autoCorrect={true}
    placeholder="Adicione uma tarefa"
    maxLenght={25}
    />
    <TouchableOpacity style={styles.Button}>
      <Ionicons name="ios-add" size={25} color='#000' />
    
    </TouchableOpacity>
    </View>
    </View>
  
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    //position: 'absolute',
    //bottom: 150,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop:20
  },
  Body: {
    flex : 1,
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee",
    
    
  },
  Input: {
    flex: 1,
    height : 40,
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "#eee"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10,
  },
  FlatList: {
    flex: 1,
    marginTop
  }
});
