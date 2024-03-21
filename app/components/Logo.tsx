import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const Logo = () => {
    const image = require('../../assets/adaptive-icon.png'); // Use require to import image
    return (
        <View>
            <Image
                style={styles.logo}
                source={image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        resizeMode: "contain",
        width: 100,
        height: 200,
        position: 'absolute',
        top: -330,
        left: -15,
    },
});
