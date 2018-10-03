import React, { Component } from 'react';
import { Text, Alert, Button, View, FlatList, ListItem, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { listUsers, addUser } from '../redux/reducers'

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listUsers();
    }

    _addUser = () => {
        this.props.addUser({
            id: uuidv4(), name: 'asaf'
        });
    }

    _renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{ item.key }</Text>
        </View>
    );

    render() {
        const { users } = this.props;
        return (
            <View>
                <Button
                    onPress={this._addUser}
                    title="Add User"
                />
                <FlatList
                    styles={styles.container}
                    data={users}
                    renderItem={this._renderItem}
                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
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
