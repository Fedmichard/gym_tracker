import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';
import exercises from 'C:/Users/franc/OneDrive - Florida Gulf Coast University/Documents/1_Projects/GITHUB REPOS/fitness_app/gym_tracker/assets/data/exercises.json';

const Page = () => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={exercises}
                renderItem={({item}) => (
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>{item.name}</Text>
                        <Text style={styles.exerciseSubtitle}>{item.primaryMuscles[0].toUpperCase()} | {item.equipment?.toUpperCase()}</Text>
                    </View>
                    )
                }
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro',
        justifyContent: 'center',
        padding: 10,
    },
    exerciseContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        gap: 5,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
    }
});

export default Page;