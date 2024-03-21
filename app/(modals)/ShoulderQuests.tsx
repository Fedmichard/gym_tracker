import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../components/ExerciseListItem';

const ShoulderQuests = () => {
    // shoulder array
    let shoulders: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = [];

    for (let i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];

        switch(exercise.primaryMuscles[0]) {
            // adds all the workouts that primarily targets shoulders to the array
            case "shoulders":
                shoulders.push(exercise);
                break;
            default:
                break;
        }
    }

    return (
        <FlatList
        data={shoulders}
        renderItem={({item}) => <ExerciseListItem item={item}/>}
        />
    );
}

const styles = StyleSheet.create({

});

export default ShoulderQuests;