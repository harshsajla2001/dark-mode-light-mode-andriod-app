import React from 'react';

import { Text, StyleSheet, View, useColorScheme } from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    console.log('isDarkMode', isDarkMode);
    return (
        <View style={styles.constainer }>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello AppPro!!
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#FFFFFF',

    },
    darkText: {
        color: 'black',
    },
});

export default AppPro;

