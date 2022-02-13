import { TouchableOpacity, Text} from 'react-native';
import React from 'react';

import {relayOff as Off} from '../api';
import FlashMessage, { showMessage } from "react-native-flash-message";

const RelayOff = ({styles}) => {

    const handleOff= async()=>{
        try {
          await Off();
        } catch (error) {
          console.log("error: ", error);
        } finally{
            showMessage({
                message:"SMS OFF enviados",
                type:"success",
            });
        }
  
    }

  return (
    <TouchableOpacity style={styles.button} onPress={handleOff}>
        <Text style={styles.buttonText}>Relay off</Text>
    </TouchableOpacity>
  );

};

export default RelayOff;