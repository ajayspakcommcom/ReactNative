import { useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputhandler = (enteredText) => { 
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => { 
    //console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goals!' onChangeText={goalInputhandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) =>
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )}
        </ScrollView>
      </View>  
    
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    flex:1,  
    paddingTop: 50,
    paddingHorizontal:16
  },

  inputContainer: {
    flex:1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor:'#cccccc'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding:8
  },

  goalsContainer: {
    flex:5
  },

  goalItem: {
    margin: 8,
    padding:8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },

  goalText: {
    color: '#fff'
  }

});
