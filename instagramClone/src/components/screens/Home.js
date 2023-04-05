import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Image, StatusBar, ScrollView } from 'react-native';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <View style={styles.header}>
        <FontAwesome name='plus-square-o' size={25} color={"black"} />
        <Image
          source={require("../../storage/img/instagramLogo.png")}
          style={{ width: 140, height: 40, resizeMode: "contain" }}
        />
        <Feather name='navigation' size={25} color={"black"} />
      </View>
      <ScrollView>
        <Stories />
        <Post />
        <View style={styles.loading}>
          <Ionic name='ios-reload-circle-sharp' size={60} style={{opacity: 0.2}} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%"
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center"
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})

export default Home;