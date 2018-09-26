import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './components/MyComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'Default Text'
    };

    this._onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler(e) {
    e.preventDefault()

    this.setState({
      myText: 'Text has changed'
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>
        {this.state.myText}
      </Text>
        < MyComponent onClickHandler = {this._onClickHandler} />
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
  },
});
