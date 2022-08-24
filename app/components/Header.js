import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Header = (props) => {

  return (
    <View style={Styles.container}>
      <View style={[{ flex: 1 }]}>
        <Text
          style={Styles.title}>
          {props.title}
        </Text>
      </View>

      <View style={Styles.menuBtn} >

        {props.showFavourite ? <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Favourite")
          }}
          hitSlop={Styles.btnTouchArea}>
          <Image resizeMode='contain'
            style={Styles.likeImage}
            source={require('../images/like.png')} />

        </TouchableOpacity> :
          <TouchableOpacity
            onPress={() => {  props.navigation.goBack()}}
            hitSlop={Styles.btnTouchArea}>
            <Image resizeMode="center"
              style={Styles.closeImage}
              source={require('../images/close.png')} />

          </TouchableOpacity>

        }

      </View>

    </View>
  );
}


const Styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 20,
    marginStart: 20,
    fontWeight: "bold"
  },
  menuBtn: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTouchArea: {
    bottom: 20,
    top: 20,
    right: 10,
    left: 10
  },
  likeImage: {
    width: 41,
    height: 35,
    right: 15
  },
  closeImage: {
    width: 30,
    height: 30,
    right: 15
  }
})

export default Header