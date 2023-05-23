
import { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputhandler = (enteredText) => {
        //console.log(enteredText);
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goals!'
                    onChangeText={goalInputhandler}
                    value={enteredGoalText}
                />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
        </>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
});