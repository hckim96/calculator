import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native'
// import Dropdown from "../components/Dropdown";
import {Picker} from "@react-native-community/picker"
export default class RegistrationScreen extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
    groupType: "agent",
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  register = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your register logic
      console.log('user successfully registered!: ', success)
    } catch (err) {
      console.log('error register: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='이름'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <View style = {styles.input}>
            <Picker
                style = {styles.picker}
                selectedValue={this.state.groupType}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ groupType: itemValue })
                }
                itemStyle = {{backgroundColor: "gray"}}
                >
                <Picker.Item label="사회복무요원" value="agent" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='등록하기'
          onPress={this.register}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#ADB8FF',

    margin: 10,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '700',
    textAlign: "right",
  },
  picker: {
    width: 350,
    height: 55,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#D6DCFF"
  }
})