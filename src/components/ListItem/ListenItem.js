import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image  resizeMode='cover'  source={props.placeImage} style={styles.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>

);

// const listItem1 =() =>{}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection:'row',
        alignItems:'center'
    },
    placeImage:{
        marginRight:8,
        width:40,
        height:40
    }
})

export default listItem;

// export default listItem1