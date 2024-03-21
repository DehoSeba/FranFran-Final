import React from 'react';
import {View } from 'react-native'; // Import ImageBackground from react-native
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {CosCarousel} from "../components/CosCarousel";
export default function Tab() {
    return (
        <SafeAreaProvider>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <CosCarousel/>
        </View>
        </SafeAreaProvider>
    );
}
