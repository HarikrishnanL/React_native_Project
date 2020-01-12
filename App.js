import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/test.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index'

class App extends Component {
  // state = {
  //   // placeName: '',
  //   places: [],
  //   selectedPlace: null
  // }

  // placeNameChangeHandler = (val) => {
  //   this.setState({
  //     placeName: val
  //   })
  // }

  // placeSubmitHandler = () => {
  //   if (this.state.placeName === "") {
  //     return;
  //   }

  //   this.setState(prevstate => {
  //     return {
  //       places: prevstate.places.concat(prevstate.placeName)
  //     };
  //   });
  // }

  placeAddedHandler = (placeName) => {
    // this.setState(prevstate => {
    //   return {
    //     places: prevstate.places.concat({
    //       key: Math.random(),
    //       name: placeName,
    //       image: placeImage
    //     })
    //   };
    // });
    this.props.onAddPlace(placeName);
  };

  // placeDeleteHandler = key =>{
  //     
  // }

  placeSelectedHandler = key => {
    // this.setState(prevstate => {
    //   return {
    //     selectedPlace: prevstate.places.find(place => {
    //       return place.key === key
    //     })
    //   }
    // }) 
    this.props.onSelectPlace(key);
  }
  placeDeletedHandler = () => {
    // this.setState(prevstate => {
    //   return {
    //     places: prevstate.places.filter(place => {
    //       return place.key !== prevstate.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   }
    // })
    this.props.onDeletePlace();
  }

  modelClosedHandler = () => {
    // this.setState({
    //   selectedPlace: null
    // }) 
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModelClosed={this.modelClosedHandler} />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler} />
      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  // inputContainer: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // },
  // placeInput: {
  //   width: '70%',
  //   borderBottomColor: 'black',
  //   borderWidth: 1
  // },
  // placeButton: {
  //   width: '30%',
  // },
  // listContainer: {
  //   width: '100%',
  // }

});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace : () => dispatch(deletePlace()),
    onSelectPlace : (key) => dispatch(selectPlace(key)),
    onDeselectPlace : () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);