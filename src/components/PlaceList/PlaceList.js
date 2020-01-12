import React from 'react';
import { Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from '../ListItem/ListenItem';


const placeList = (props) => {
    // const placeOutput = props.places.map((place, index) => (
    // <Text key={index}>{place}</Text>
    // <ListItem key={index} 
    // placeName={place} 
    // onItemPressed={()=> props.onItemDeleted(index)} />
    //   ))
    return <FlatList
        style={styles.listContainer}
        data={props.places}
        renderItem={(info) => (
            <ListItem
                placeName={info.item.name}
                placeImage = {info.item.image}
                onItemPressed={() => props.onItemSelected(info.item.key)}
            />
        )}
    />
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
    }
})

export default placeList;