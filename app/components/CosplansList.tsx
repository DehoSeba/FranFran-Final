import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CosplansData } from './cosplansData';
import CosplansItems from "./CosplansItems"; // Import CosplansData

interface CosplansListProps {
    cosplans: CosplansData[]; // Define props type
}

const CosplansList = ({ cosplans }: CosplansListProps) => {
    return (
        <View style={styles.container}>
            {cosplans.map((cosplan, index) => (
                <CosplansItems key={index} cosplan={cosplan} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
});

export default CosplansList;
