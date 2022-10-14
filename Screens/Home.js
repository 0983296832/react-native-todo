import { SafeAreaView, View, FlatList } from 'react-native'
import { v4 as uuidv4 } from 'uuid';
import Input from '../Components/Input';
import SingleTodo from '../Components/SingleTodo';
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from '../store/action';
import AppBar from '../Components/AppBar';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from 'react';

const Home = () => {
    const todos = useSelector((state) => state.todos)
    const [showAlert, setShowAlert] = useState(false)
    const dispatch = useDispatch()

    const onAddTodo = (todo) => {
        if (todo === "") {
            // handleShowAlert()
            return
        }
        dispatch(addTodo({
            id: uuidv4(),
            title: todo,
            completed: false
        }))
    }


    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleHideAlert = () => {
        setShowAlert(false);
    };




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
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="AwesomeAlert"
                message="Todo can not be empty!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onCancelPressed={handleHideAlert}
                onConfirmPressed={handleHideAlert}
            />
        </SafeAreaView>
    )
}


export default Home


