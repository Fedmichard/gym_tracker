import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';
import ArmQuests from '@/app/(modals)/ArmQuests';

const Page = () => {
    return(
        <View style={styles.container}>
            <Link href={"/(modals)/routines"} style={styles.questSelect}> Add Quests </Link>
            <Link href={"/(modals)/ShoulderQuests"} style={styles.questSelect}> Add Shoulders </Link>
            <Link href={"/(modals)/BackQuests"} style={styles.questSelect}> Add Back </Link>
            <Link href={"/(modals)/LegQuests"} style={styles.questSelect}> Add Legs </Link>
            <Link href={"/(modals)/ChestQuests"} style={styles.questSelect}> Add Chest </Link>
            <Link href={"/(modals)/ArmQuests"} style={styles.questSelect}> Add Arms </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro',
        justifyContent: 'center',
        padding: 60,
    },
    questSelect: {
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        padding: 20,
    }
});

export default Page;