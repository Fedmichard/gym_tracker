import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../components/ExerciseListItem';

const ArmQuests = () => {
    // arms array
    let arms: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = []

    for (let i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];

        switch(exercise.primaryMuscles[0]) {
            // adds all the workouts that primarily targets arms to the array
            case "biceps":
            case "forearms":
            case "triceps":
                arms.push(exercise);
                break;
        }
    }

    return (
        <FlatList
        data={arms}
        renderItem={({item}) => <ExerciseListItem item={item}/>}
        />
    );
}

const styles = StyleSheet.create({

});

export default ArmQuests;