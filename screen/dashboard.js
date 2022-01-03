import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import img from '../image/img1.jpg';
import SignIn from './signin';
import SignUp from './signup';

export default function Dashboard({navigation}) {
  const signin = () => {
    navigation.navigate(SignIn);
  };
  const signup = () => {
    navigation.navigate(SignUp);
  };

  const [news, setNews] = useState([]);
  const api = axios.create({
    baseURL: "https://newsapi.org/v2/everything?q=tesla&from=2021-12-03&sortBy=publishedAt&apiKey=API_KEY",
  });
  const getdata = () => {
    api.get().then((e) => {
      setNews(e.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);


  return (
    <>
      <View style={styles.container}>
        <ImageBackground style={styles.img} source={img}>
          <View style={styles.contain}>
            <Text style={[styles.text]}>Dashboard</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn} onPress={signin}>
                <Text style={styles.btnText}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={signup}>
                <Text style={styles.btnText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View>
        {news.map(()=>{<Text></Text>})};
        </View>
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
    flexDirection:'row',
    flexWrap:'wrap',

  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: '25%',
  },
  img: {
    width:'100%',
    height:'50%',
  },
  btnText: {
    color: 'white',
    fontSize: 12,
    marginLeft:10,
  },
  row:{
    flexDirection:'row',
    marginLeft:10
  }
});
