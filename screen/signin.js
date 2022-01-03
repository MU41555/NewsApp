import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import img from '../image/img1.jpg';
import Dashboard from './dashboard';

export default function SignIn({navigation}) {

  const move = () => {
    navigation.navigate(Dashboard)
  }

  return (
    <>
      <View>
        <ImageBackground style={styles.container} source={img}>
          <View style={styles.contain}>
            <Icon style={styles.icon} name="user" size={100} color="#900" />
            <Text style={styles.text}>Sign in</Text>
            <TextInput style={styles.inp} placeholder="Enter your email"/>
             
            <TextInput style={styles.inp} placeholder="Enter your password" />
            <TouchableOpacity style={styles.btn} onPress={move}>
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  contain: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  inp: {
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 22,
    // color:'white',
    fontSize: 18,
    width: '80%',
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  btn: {
    borderColor: 'white',
    borderWidth: 1,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  icon: {
    color: 'white',
    borderWidth: 4,
    borderRadius: 70,
    borderColor: 'white',
    width: 140,
    height: 140,
    marginBottom: 10,
    textAlign: 'center',
    paddingTop: 10,
  },
});
