import {View, Text, FlatList, StyleSheet} from 'react-native';

const ExerciseListItem = ({item}:any) => {
    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseSubtitle}>{item.primaryMuscles[0].toUpperCase()} | {item.equipment?.toUpperCase()}</Text>
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

export default ExerciseListItem;