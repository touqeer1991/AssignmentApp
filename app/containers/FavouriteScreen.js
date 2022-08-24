import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_FAVOURITE } from '../redux/Favourite'

const FavouriteScreen = props => {
  const dispatch = useDispatch()
  const removeItemToFavourite = item => dispatch({ type: REMOVE_FROM_FAVOURITE, payload: item })
  const favouriteItems = useSelector(state => state)

  return (
    <View style={Styles.container}>
      <Header title="Favourites"
        navigation={props.navigation}
      />
      <FlatList
        data={favouriteItems}
        ListEmptyComponent={() => {
          return <View style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center"
          }}>
            <Text style={Styles.noItem}>No Favourites</Text>
          </View>
        }}
        renderItem={({ item }) => {
          return <ListItem {...item} addedInFav={true}
            onHeartPress={() => {
              removeItemToFavourite(item)
            }}
          />
        }}
        keyExtractor={item => item.id}
        contentContainerStyle={Styles.list}
        numColumns={2}
        columnWrapperStyle={Styles.column}
      />

    </View>
  );
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 10
  },
  noItem: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default FavouriteScreen
