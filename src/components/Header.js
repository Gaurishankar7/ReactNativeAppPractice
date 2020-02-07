import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import Color from '../constant/Color'

const Header = props => {
    return (
        <View style= {styles.header}>
            <Text style={styles.headerTitle}> {props.title} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 30,
    }
});

export default Header;