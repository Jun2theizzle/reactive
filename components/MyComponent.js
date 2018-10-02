import React, { Component } from 'react';
import { Text, Alert, Button, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listUsers, addUser } from '../redux/reducers'

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.listUsers();
    }

    addUser = () => {
        this.props.addUser({
            id: 2, name: 'asaf'
        });

    }
    render() {
        const { users } = this.props;

        return (
            <View styles={styles.view}>
            <Button
                onPress={this.addUser}
                title="Add User"
            />
            <Button
                onPress={this.props.onClickHandler}
                title="Press me"
            />
            <Text> { users.length} </Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = state => {
    let storedUsers = state.users.map(user => ({ key: user.id, ...user }));
    return {
        users: storedUsers
    }
}

const mapDispatchToProps = {
    listUsers, addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
