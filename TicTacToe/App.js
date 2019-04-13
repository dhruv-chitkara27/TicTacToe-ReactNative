import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'native-base';

var itemArray = new Array(9).fill('empty');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber]}, () => {});
    }
    //TODO: check for win
  };

  chooseItemIcon = itemNumber => {
    if(itemArray[itemNumber] !== "empty" ) {
      return itemArray[itemNumber] ? "cross" : "circle"
    }
    return "pencil";
  };

  chooseItemColor = itemNumber => {
    if(itemArray[itemNumber] !== "empty" ) {
      return itemArray[itemNumber] ? "red" : "green"
    }
    return "black";
  };

  resetGame = () => {
    itemArray.fill("empty");
    this.setState({ winMessage: '' })
    //force update to the component
    this.forceUpdate();
  };

  winGame = () => {
    //TODO: decide/check winner
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Tic Tac Toe</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
