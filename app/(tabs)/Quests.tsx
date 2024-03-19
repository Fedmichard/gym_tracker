import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../components/ExerciseListItem';

const Page = () => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={exercises}
                contentContainerStyle={{gap: 5}}
                renderItem={({item}) => <ExerciseListItem item={item}/>}
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