import React from 'react';
import { StyleSheet, View } from 'react-native';
import { cosplansData } from '../components/cosplansData';
import CosplansItem from "../components/CosplansItems";

export default function Tab() {
    return (
        <View style={styles.cards}>
            {cosplansData.map((cosplan, index) => (
                <CosplansItem key={index} cosplan={cosplan} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    cards: {
        position: 'absolute',
        top: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
});

