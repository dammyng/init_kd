import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux'
import { add_todos } from '../../redux/actions/todos';


let current_time = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time
}

// state management test
const SM_test = () => {
    const dispatch = useDispatch()

    return (
        <>
            <Button onPress={() => dispatch(add_todos(current_time()))} title="ADD NEW" ></Button>
        </>
    );
};


export default SM_test;
