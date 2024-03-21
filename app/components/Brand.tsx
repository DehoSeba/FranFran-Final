import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export const Brand = () =>{
        return(
            <View>
                <Text style={styles.brand}>FranFran Cosplays</Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    brand : {
        fontSize: 28,
        position : 'absolute',
        top : -250,
        left : 78,
    }
})