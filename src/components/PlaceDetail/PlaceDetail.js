import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {
    let modelContent = null;
    if (props.selectedPlace) {
        modelContent = (
            <View>
                <Image source={props.selectedPlace ? props.selectedPlace.image : null} style={styles.placeImage} />
                <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal onRequestClose={props.onModelClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modelContent}
                <View>
                    {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
                    <TouchableOpacity onPress={props.onItemDeleted}>
                        <View style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color='red'/>
                        </View>
                    </TouchableOpacity>
                    <Button title="Close" onPress={props.onModelClosed} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    deleteButton:{
        alignItems:'center'
    }
})


export default placeDetail;