import React,{ useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native'

export default function App() {

  const animation = useRef(null)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    if(status){
      animation.current.play(0, 150)
    }
    else{
      animation.current.play(150, 0)
    }
  }, [status])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setStatus(!status)}>
        <LottieView 
          source={require('./src/Componentes/button-delete.json')}
          autoPlay={false}
          loop={false}
          style={{width: 100, height: 300}}
          resizeMode='cover'
          ref={animation}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
