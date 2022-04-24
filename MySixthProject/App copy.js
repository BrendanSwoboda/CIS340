import React from 'react';
import { Stylesheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

const csuLogo = {
uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/rams.png",
};

return(
  <View style={styles.container}>

  <Image
    style={styles.localcsuLogo}
    source={require('./assets/logo.png')}
  />

  <Image
      style={styles.urlcsuLogo}
      source={{
      uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png"
  }}
  />


    <Image
    style={styles.stretchLogo}
    source={csuLogo} />
    </View>
  );
}

const styles = Stylesheet.create({
  container: {
    paddingTop: 50,
  },

  localcsuLogo: {
  width: 55,
  height: 65,
  },


  urlcsuLogo: {
  width: 50,
  height: 50

  },

  stretchLogo: {
  height: 200,
  resizeMode: 'center',
  }
  });
  
