import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import MyComponent from './components/MyComponent';
import reducer from './redux/reducers';

const store = createStore(reducer);

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
      <Provider store={store}>
        <View style={styles.container}>
        <Text>
          {this.state.myText}
        </Text>
          < MyComponent onClickHandler = {this._onClickHandler} />
        </View>
      </Provider>
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
