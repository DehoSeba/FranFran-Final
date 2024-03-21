import React from 'react';
import {Text, Image, View, StyleSheet, ImageSourcePropType} from 'react-native';

interface PatronsItemsProps {
    name: string;
    price: string;
    image: ImageSourcePropType;
    description: string;
}
export function PatronsItems({ name, price, image, description }: PatronsItemsProps) {
    return (
        <View style={styles.card}>
            <Image style={styles.thumb} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width : "90%",
        position: "absolute",
        top: 120,
        left: 15,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    thumb: {
        height: 260,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
    },
});