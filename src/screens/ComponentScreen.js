import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentScreen = () => {
    const myName = 'Raul'
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subTextStyle}>My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    }, 
    subTextStyle :{
        fontSize: 20
    }
})

export default ComponentScreen