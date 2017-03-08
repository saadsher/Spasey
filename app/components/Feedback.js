import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import t from 'tcomb-form-native'
import _ from 'lodash'

const Form = t.form.Form
const styleEmail = _.cloneDeep(t.form.Form.stylesheet)
const styleMessage = _.cloneDeep(t.form.Form.stylesheet)

const Email = t.subtype(t.Str, function (s) {
  return /^foo/.test(s)
});

const Tcomb = t.struct({
  email: Email,
  message: t.String,
})

styleEmail.controlLabel.normal.color = 'darkslategray'
styleMessage.controlLabel.normal.color = 'darkslategray'
styleEmail.textbox.normal.color = '#203737'
styleMessage.textbox.normal.color = '#203737'
styleMessage.textbox.normal.height = 200
styleEmail.textbox.normal.borderWidth = 0
styleMessage.textbox.normal.borderWidth = 0
styleMessage.textbox.normal.borderBottomColor = 'darkslategray'
styleMessage.textbox.normal.borderBottomWidth = 1
styleEmail.textbox.normal.padding = 0
styleMessage.textbox.normal.padding = 0
styleEmail.textbox.normal.marginBottom = 50

const options = {
  fields: {
    email: {
      autoFocus: true,
      label: 'Email',
      keyboardType: 'email-address',
      placeholder: 'your email address',
      error: 'Invalid email',
      stylesheet: styleEmail,
    },
    message: {
      label: 'Message',
      placeholder: 'your message',
      multiline: true,
      stylesheet: styleMessage,
    }
  }
}

class Feedback extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>F E E D B A C K</Text>
        <ScrollView style={styles.body}>
          <Form
            // ref="form"
            type={Tcomb}
            options={options}
          />
        </ScrollView>
      </View>
    )
  }
}

// const Feedback = () => (
//   <View style={styles.container}>
//     <View style={styles.head}>
//       <Text style={styles.title}>F E E D B A C K</Text>
//     </View>
//     <View style={styles.body}>
//       <Form
//         // ref="form"
//         type={Tcomb}
//         options={options}
//       />
//     </View>
//   </View>
// )

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'darkslategray',
    paddingTop: 21,
    paddingBottom: 7
  },
  container: {
    flex: 1,
  },
  body: {
    padding: 15,
  }
})

export default Feedback
