import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome, Entypo, Foundation } from "@expo/vector-icons";
export default function AnimalCard({ animals, isHorizon, margin }) {
  const cardStyle = () => {
    return {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundColor: "#FFF3B5",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      borderRadius: 30,
      overflow: "hidden",
      margin: margin,
      width: 200,
      height: 200,
    };
  };
  const renderItem = ({ item }) => (
    <View style={cardStyle()}>
      <Image
        style={{ height: "50%", width: "100%" }}
        source={{ uri: item.image }}
      />
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.detail}>
        <View style={styles.content}>
          <FontAwesome name="id-card" size={15} color="white" />
          <Text style={styles.text}>{item.type}</Text>
        </View>
        <View style={styles.content}>
          <AntDesign name="tag" size={15} color="white" />
          <Text style={styles.text}>{item.gender}</Text>
        </View>
        <View style={styles.content}>
          <Foundation name="foot" size={15} color="white" />
          <Text style={styles.text}>{item.age + item.shape + item.breed}</Text>
        </View>
        <View style={styles.content}>
          <Entypo name="home" size={15} color="white" />
          <Text style={styles.text}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      {isHorizon ? (
        <FlatList
          horizontal={true}
          data={animals}
          renderItem={renderItem}
          keyExtractor={(item) => item.phone}
        />
      ) : (
        <FlatList
          horizontal={false}
          numColumns={2}
          data={animals}
          renderItem={renderItem}
          keyExtractor={(item) => item.phone}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxText: { fontSize: 20, marginLeft: 30, top: 25 },
  title: {
    fontSize: 20,
    color: "#AEA8A8",
    marginLeft: 20,
  },
  detail: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    minHeight: 13,
    fontSize: 8,
    marginLeft: 10,
    marginBottom: 6,
  },
  text: {
    fontSize: 10,
    marginLeft: 10,
  },
});
