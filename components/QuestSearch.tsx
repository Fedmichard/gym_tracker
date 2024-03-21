import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import exercises from '../assets/data/exercises.json';
import ExerciseListItem from '../components/ExerciseListItem';

const QuestSearch = () => {
    // shoulder array
    let shoulders: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = [];
    // arms array
    let arms: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = []
    // back array
    let back: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = []
    // chest array
    let chest: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = []
    // legs array
    let legs: {name: any, force: any, level: string, mechanic: any, equipment: any, primaryMuscles: string[],
        secondaryMuscles: string[], instructions: string[], category: string, images: string[], id: string}[] = []

    for (let i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];

        switch(exercise.primaryMuscles[0]) {
            // adds all the workouts that primarily targets shoulders to the array
            case "shoulders":
                shoulders.push(exercise);
                break;
            // adds all the workouts that primarily targets arms to the array
            case "biceps":
            case "forearms":
            case "triceps":
                arms.push(exercise);
                break;
            // adds all the workouts that primarily targets back to the array
            case "lats": 
            case "lower back":
            case "middle back":
            case "upper back":
            case "traps":
                back.push(exercise);
                break;
            // adds all the workouts that primarily targets chest to the array
            case "chest":
                chest.push(exercise)
                break;
            // adds all the workouts that primarily targets legs to the array
            case "calves":
            case "hamstrings":
            case "glutes":
            case "adductors":
            case "quadriceps":
                legs.push(exercise)
                break;
            default:
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

export default QuestSearch;