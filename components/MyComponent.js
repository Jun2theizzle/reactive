import React, { Component } from 'react'
import { Alert, Button } from 'react-native'

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button 
                onPress={this.props.onClickHandler}
                title="Press me"
            />
        )
    }
}