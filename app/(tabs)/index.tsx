import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native'; // Import ImageBackground from react-native
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Logo } from '../components/Logo';
import {Brand} from "../components/Brand";

export default function Tab() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require('../../assets/images/Ahri_1.jpg')}>
                    <Logo />
                    <Brand/>
                </ImageBackground>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});
