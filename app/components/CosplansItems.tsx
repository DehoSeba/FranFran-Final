import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CosplansData } from './cosplansData';

interface CosplansItemProps {
    cosplan: CosplansData;
}

const CosplansItem = ({ cosplan }: CosplansItemProps) => {
    return (
        <View style={styles.card}>
            <Image source={cosplan.image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{cosplan.name}</Text>
                <Text style={styles.from}>From: {cosplan.from}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    details: {
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    from: {
        fontSize: 14,
        color: '#666',
    },
});

export default CosplansItem;
