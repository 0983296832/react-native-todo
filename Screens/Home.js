import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import { v4 as uuidv4 } from 'uuid';
import Input from '../Components/Input';
import SingleTodo from '../Components/SingleTodo';
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from '../store/action';

const Home = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const onAddTodo = (todo) => {
        if (todo === "") return
        dispatch(addTodo({
            id: uuidv4(),
            title: todo,
            completed: false
        }))
    }

    return (
        <SafeAreaView >
            <View style={styles.bg}>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'start' }}>
                <Input addTodo={onAddTodo} />
                <View >
                    <FlatList
                        data={todos}
                        renderItem={(item) => <SingleTodo todo={item.item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}


export default Home


const styles = StyleSheet.create({
    bg: {
        flex: 1,
        height: "500px",
        width: 300,
        backgroundColor: '#6d63ff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
