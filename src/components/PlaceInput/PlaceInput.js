import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: '',
    }

    placeNameChangeHandler = (val) => {
        this.setState({
            placeName: val
        })
    }
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName)

        // this.setState(prevstate => {
        //     return {
        //         places: prevstate.places.concat(prevstate.placeName)
        //     };
        };
        render() {
            return (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.placeInput}
                        placeholder='place Your Name'
                        placeholderTextColor='grey'
                        value={this.state.placeName}
                        onChangeText={this.placeNameChangeHandler}
                    />
                    <Button
                        style={styles.placeButton}
                        title="Add"
                        onPress={this.placeSubmitHandler}
                    />
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        inputContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        placeInput: {
            width: '70%',
            borderBottomColor: 'black',
            borderWidth: 1
        },
        placeButton: {
            width: '30%',
        },
    })

    export default PlaceInput;