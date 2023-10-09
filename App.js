import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Modal</Text>
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View
            style={styles.container}
          >
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[ styles.button, styles.buttonClose ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>We've sent you a code</Text>
              <Text style={{ fontWeight: '200', fontSize: 14, }}>We're just making sure it's you</Text>
              <TextInput
                style={{ borderRadius: 8, padding: 8, width: 240, shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4, 
                  backgroundColor: '#dedede',
                  marginTop: 10,
                  marginBottom: 10
                }}
                secureTextEntry={true}
                placeholder='Password'
              />
              <TouchableOpacity
                style={[ styles.buttonVerify ]}
              >
                <Text style={styles.textStyle}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={[ styles.button, styles.buttonOpen ]}
          onPress={() => setModalVisible(true)}
        >
            <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    flex: 1,
    width: 300,
    height: 400,
    marginTop: 60,
    marginBottom: 400,
    backgroundColor: '#ababab',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 16,
    padding: 12,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#007bff',
  },
  buttonClose: {
    backgroundColor: '#ff1a00',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonVerify: {
    backgroundColor: '#007bff',
    width: 240,
    borderRadius: 8,
    padding: 12,
  }
});
