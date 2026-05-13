import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Alert,
  Pressable,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{width:"100%", height:"100%", backgroundColor:"black"}}>
      <Text style={{color:"white", fontSize:30, fontWeight:500, marginHorizontal:50, marginVertical:20}}>App Development</Text>
      <Image
        style={{ width: 400, height: 400,}}
        source={{
          uri: 'https://images.pexels.com/photos/12915462/pexels-photo-12915462.jpeg',
        }}
      />

      {/* <Button title='Login'></Button>  */}
      {/* <TouchableHighlight style={{padding:10, backgroundColor:"green"}} onPress={() => Alert.alert("Pressed!!")}>
        <Text>Button</Text>
      </TouchableHighlight> */}
      <Pressable style={{padding:20, paddingHorizontal:120, backgroundColor:"yellow", margin:30}}>
        <Text>Button</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
