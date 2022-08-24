
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const width = Dimensions.get("window").width

const ListItem = ({ title, subtitle, imgUrl,addedInFav , onHeartPress}) => (
    <View style={Styles.container}>
        <Image
            style={Styles.profileImg}
            source={{
                uri:imgUrl // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            }}
        />

        <View style={{ flex: 1,flexDirection: "row", marginTop:5,  alignItems:"center",}}>
            <View style={{flex:1}}>
                <Text style={Styles.title}>{title}</Text>
                <Text style={Styles.suntitle}>{subtitle}</Text>
            </View>

            <TouchableOpacity style={{
                marginStart: 10,
                width:35
            }}
                onPress={() => { onHeartPress(!addedInFav) }}>
               {addedInFav ? <Image resizeMode='contain'
                    style={Styles.heart}
                    source={require('../images/like.png')} />
                    : 
                <Image resizeMode='contain'
                    style={Styles.unlike}
                    
                    source={require('../images/unlike.png')} />
}
            </TouchableOpacity>

        </View>
    </View>
);


const Styles = StyleSheet.create({
    container: {
        width: width / 2 - 10,
        padding: 10,
        flexDirection: 'column',
        borderRadius: 10
    },
    profileImg: {
        flex: 1,
        height: 190
    },
    title: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    suntitle: {
        color: "#fff",
        fontSize: 12,
    },
    list: {
        justifyContent: 'space-around',
    },
    column: {
        flexShrink: 1,
    },
    heart: {
        width: 30,
        height: 40,
    },
    unlike: {
        width: 28,
        height: 36,
    }

});


export default ListItem