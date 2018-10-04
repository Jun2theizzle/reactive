import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import uuidv4 from 'uuid/v4';
import { addUser } from '../app-redux/reducers';

class MyFormComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput

                value='afsafd'
            />
        )
    }
}

export default MyFormComponent;