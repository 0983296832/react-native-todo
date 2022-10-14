import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { doneTodo, removeTodo } from '../store/action';
import { useDispatch } from "react-redux"


const SingleTodo = ({ todo }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles().container}>
            <View style={styles().itemLeft} >
                {
                    todo?.completed
                        ? <Ionicons name="checkbox-outline" size="large" style={styles().icon} onPress={() => dispatch(doneTodo(todo.id))} />
                        : <Ionicons name="square-outline" size="large" style={styles().icon} onPress={() => dispatch(doneTodo(todo.id))} />
                }

                <Text style={styles({ completed: todo?.completed }).textDone}>{todo.title}</Text>
            </View>
            <View>
                <Ionicons name="trash-outline" size="large" style={styles().icon} onPress={() => dispatch(removeTodo(todo.id))} />
            </View>
        </View >
    )
}

export default SingleTodo


const styles = (props) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        gap: 5,
        width: "400px",
        padding: "15px",
        backgroundColor: "white",
        borderRadius: 8,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        marginTop: 15,
    },
    itemLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        gap: 30,
    },
    textDone: {
        fontSize: 16,
        fontWeight: 600,
        textDecorationLine: props?.completed ? "line-through" : "none",
    },
    icon: {
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 20,
    }

})
