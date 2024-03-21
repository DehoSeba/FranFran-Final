import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {patronsItems} from "../components/patronsList";
import {PatronsItems} from "../components/PatronsItems";

export default function Tab() {

    return (
        <View>
            {patronsItems.map((patron, index) => ( // Add index to the key attribute
                <PatronsItems
                    key={index} // Use index as key
                    name={patron.name}
                    price={patron.price}
                    image={patron.image}
                    description={patron.description}
                />
            ))}
        </View>
    );
}
