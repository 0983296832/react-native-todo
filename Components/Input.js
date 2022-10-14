import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        addTodo(text);
        setText("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="What needs to be done?"
                placeholderTextColor="#908c8c"
                outlineColor="#ffffff"
            />
            <TouchableOpacity style={styles.btn} onPress={handleAddTodo}> <Ionicons
                name="add-outline"
                size="large"
                color="black"
            /></TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    input: {
        height: 40,
        margin: 12,
        width: 348,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        border: "none",
        outLine: "none",
        padding: 10,
        backgroundColor: "white",
        marginRight: 0
    },
    btn: {
        height: 40,
        width: 40,
        padding: 10,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",

    }
});

export default Input