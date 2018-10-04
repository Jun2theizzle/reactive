import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { MyListComponent, MyFormComponent } from './components';
import reducer from './app-redux/reducers';

const store = createStore(reducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'Default Heading'
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
        < MyListComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
