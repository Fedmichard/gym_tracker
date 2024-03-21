import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../components/ExerciseListItem';

const BackQuests = () => {
    // back array
    let back: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = []

    for (let i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];

        switch(exercise.primaryMuscles[0]) {
            // adds all the workouts that primarily targets back to the array
            case "lats": 
            case "lower back":
            case "middle back":
            case "upper back":
            case "traps":
                back.push(exercise);
                break;
            default:
                break;
        }
    }

    return (
        <FlatList
        data={back}
        renderItem={({item}) => <ExerciseListItem item={item}/>}
        />
    );
}

const styles = StyleSheet.create({

});

export default BackQuests;