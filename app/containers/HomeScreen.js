
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { constants } from '../helper/Constants';
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_FAVOURITE,ADD_TO_FAVOURITE } from '../redux/Favourite'

const HomeScreen = props => {
  const dispatch = useDispatch()
  const addItemToFavourite= item => dispatch({ type: ADD_TO_FAVOURITE, payload: item })
  const removeItemToFavourite= item => dispatch({ type: REMOVE_FROM_FAVOURITE, payload: item })
  const favouriteItems = useSelector(state => state)

  return (
      <View style={Styles.container}>
        <Header title="The Breaking Bad" 
          navigation={props.navigation}
          showFavourite={true}
        />
        <FlatList
            data={constants.list}
            renderItem={({item})=>{
              console.log("iii", item);
              let alreadyAdded = favouriteItems.findIndex(data=> data.id == item.id) != -1
              return <ListItem {...item} addedInFav={alreadyAdded}
              onHeartPress={()=>{
                if (alreadyAdded) {
                  removeItemToFavourite(item)
                } else {
                  addItemToFavourite(item)
                }
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
      backgroundColor:"black"
    },
    column: {
      justifyContent:"space-between",
      marginBottom:10
    },
    
  });

  export default HomeScreen