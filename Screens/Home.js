import { SafeAreaView, View, FlatList, StyleSheet, ImageBackground } from 'react-native'
import { v4 as uuidv4 } from 'uuid';
import Input from '../Components/Input';
import SingleTodo from '../Components/SingleTodo';
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from '../store/action';
import AppBar from '../Components/AppBar';

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
        <SafeAreaView>
            <AppBar />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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


