import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux'
import SM_test from './sm_test';
import Block from '../../component/Block';

const Home = () => {
    let todos = useSelector(state => state.todos)

    return (
        <>
            <Block row space="around">
                <Block>
                    <Icon name="home" size={30} color="#900" />
                    <Text>Box 1</Text>
                </Block>
                <Block>
                    <Icon name="home" size={30} color="#900" />
                    <Text>Box 2</Text>
                </Block>
            </Block>

            {
                todos.map(todo => <Text key={todo}>{todo}</Text>)
            }
            <SM_test></SM_test>
        </>
    );
};

const styles = StyleSheet.create({

});

export default Home;
