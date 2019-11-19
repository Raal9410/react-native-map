import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Gus', age: 26},
        {name: 'Beto', age: 25},
        {name: 'Allec', age: 26},
        {name: 'Luis', age: 26}
    ]
    return(
        <FlatList 
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name} data={friends} 
        renderItem={({item}) =>
        <Text style={styles.text}>
            {item.name} - Age: {item.age}
        </Text>
        }/>
    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 50,
        marginHorizontal: 50
    }
})

export default ListScreen