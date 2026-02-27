import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DictionaryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kamus (Skincare Ingredients)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
