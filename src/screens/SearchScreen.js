import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import StartGameScreen from './StartGameScreen'

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Header title="Guess a number" />
            <StartGameScreen />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default SearchScreen;
