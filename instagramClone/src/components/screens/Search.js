import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  }

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="pluscircleo" style={styles.plusIcon} />
        </TouchableOpacity>
      </ScrollView>
      {
        image ? (
          <View style={styles.inner_container}>
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View style={styles.image} width={windowHeight / 6} height={windowWidth / 18}>
              <View style={styles.imgContainer}>
                <Image source={image} style={{ width: 30, height: 30, borderRadius: 100 }} />
                <View style={{ paddingLeft: 8 }}>
                  <Text style={{ fontSize: 12, fontWeight: 600, color: "black" }}>the_anonymous_guy</Text>
                </View>
              </View>
              <Image source={image} style={{ width: "100%", height: "80%" }} />
              <View style={styles.imgFooter}>
                <Ionic name="ios-heart-outline" size={26} color="black" />
                <Ionic name="ios-person-circle-outline" size={26} color="black" />
                <Feather name="navigation" size={26} color="black" />
              </View>
            </View>
          </View>
        ) : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  },
  iconContainer: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    fontSize: 40,
    opacity: 0.5,
  },
  image: {
    position: "absolute",
    backgroundColor: "white",
    width: 350,
    height: 465,
    borderRadius: 15,
    zIndex: 1,
    elevation: 50
  },
  inner_container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.8)"
  },
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imgFooter: {
    justifyContent: "space-around",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
})

export default Search;