import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

import {relayOn as On} from '../api';
import FlashMessage, {showMessage} from "react-native-flash-message";

const RelayOn = ({styles}) => {

    const handleOn= async()=>{
        try {
          await On();
        } catch (error) {
          console.log("error: ", error);
        }
        
    showMessage({
        message:"SMS ON enviados",
        type:"success",
      });
  
    }

  return (
    <TouchableOpacity style={styles.button} onPress={handleOn}>        
        <Text style={styles.buttonText}>Relay on</Text>
    </TouchableOpacity>
  );

};

export default RelayOn;