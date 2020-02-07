import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Card from '../components/Card'
import Color from '../constant/Color'
import Input from '../components/Input'
import { set } from 'react-native-reanimated';
import NumberContainer from '../components/NumberContainer'


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        console.log('REACHED');
        setEnteredValue('');
        setConfirmed(false);
        Keyboard.dismiss();
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {

            Alert.alert(
                'Invalid number!',
                'Number to be  a number between 1 and 99',
                [{ text: 'Okay', style: "de structive", onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(chosenNumber));
        setEnteredValue('');
        Keyboard.dismiss();

    };

    let confirmedOutPut;
    if (confirmed) {

        confirmedOutPut = (
            <Card style={styles.summaryContainer}>
                <Text> You selected </Text>
                <NumberContainer> {selectNumber}</NumberContainer>
                <Button title='Start Game' />
            </Card>);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen} >
                <Text style={styles.title}>  The Game screen </Text>
                {/* <View style={styles.inputContainer}> */}
                <Card style={styles.inputContainer}>
                    <Text> Seleact a number</Text>
                    <Input style={styles.input} blurSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset"
                            onPress={resetInputHandler}
                            color={Color.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm"
                                onPress={confirmInputHandler}
                                color={Color.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutPut}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        // justifyContent: ''
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        // shadowColor: 'black',
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // backgroundColor: 'white',
        // elevation: 5,
        // padding: 20,
        // borderRadius: 10,


    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;