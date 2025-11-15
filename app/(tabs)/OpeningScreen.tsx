import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../../assets/images/logo.svg';
import Mascot from '../../assets/images/Mascot.svg';

export default function OpeningScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.centerBlock}>
        <Image source={require('../../assets/images/Applogo.png')} style={styles.logo} />
        <View style={styles.textStack}>
          <Text style={styles.khetText}>KHET</Text>
        </View>
        <View style={styles.textStack}>
          <Text style={styles.hindiText}>सुधार</Text>
        </View>
      </View>
      <View style={styles.mascotBlock}>
        <Mascot width={320} height={260} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#388e3c',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 0,
  },
  centerBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascotBlock: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    height : 250,
    width : 250 ,
    alignItems : "center",
    justifyContent : 'center',
    marginTop: 80,
    marginBottom : -40,
  },
  textStack: {
  alignItems: 'center',      // horizontal centering for flex children
  justifyContent: 'center',  // vertical centering (relevant if fixed height)
  marginTop: 0,
  marginBottom: 0,
},
khetText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 84,
  letterSpacing: 2,
  textAlign: 'center',      // centers text in its Text box
  marginBottom: -35,
  marginTop: 10,
},
hindiText: {
  color: '#fff',
  fontSize: 69,
  textAlign: 'center',     // centers text in its Text box
  fontFamily: 'sans-serif',
  marginTop: 0,
  marginBottom: 0,
},
});
