import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../components/ExerciseListItem';

const QuestSearch = () => {
    // chest array
    let chest: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = []

    for (let i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];

        switch(exercise.primaryMuscles[0]) {
            // adds all the workouts that primarily targets chest to the array
            case "chest":
                chest.push(exercise)
                break;
            default:
                break;
        }
    }

    return (
        <FlatList
        data={chest}
        renderItem={({item}) => <ExerciseListItem item={item}/>}
        />
    );
}

const styles = StyleSheet.create({

});

export default QuestSearch;