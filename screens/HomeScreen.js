import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';

import { data } from '../config/data';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f0f' }}>
      <StatusBar hidden/>
      <View style={{ marginTop: 10, marginBottom: 10, paddingHorizontal: 10 }}>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>
          Products
        </Text>
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
      <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ width: "49%", marginHorizontal: "1%" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ marginBottom: 14 }}
                onPress={() => navigation.navigate("DetailScreen", { item })}
              >
                <SharedElement id={`item.${item.id}.image_url`}>
                  <Image
                    style={{
                      borderRadius: 14,
                      width: ITEM_WIDTH / 2,
                      height: ITEM_HEIGHT /2 ,
                    }}
                    source={item.image_url}
                    resizeMode="cover"
                  />
                </SharedElement>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 28,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 28,
                  }}
                >
                   ${item.price}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
