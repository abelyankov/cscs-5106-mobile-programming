import React from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import App from './App'
import SectionListContacts from './SectionListContacts'
import contacts from './contacts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  handleNameChange = name => {
    this.setState({name})
  }

  handlePhoneChange = phone => {
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < phone.length; i++) {
        if(numbers.indexOf(phone[i]) > -1 ) {
            newText = newText + phone[i];
        }
        else { 
            alert("please enter numbers only");
        }
    }
    this.setState({ phone: newText, isFormValid: true });
  }

  handleContactAdd = (phone, number) => {
    if (this.state.isFormValid) {
      contacts.push({name: this.state.name, phone: this.state.phone});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleContactAdd} />
      </View>
    )
  }
}
