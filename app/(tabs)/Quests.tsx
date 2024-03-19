import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Page = () => {
    return(
        <View style={styles.container}>
            <Link href={"/(modals)/routines"} style={styles.questSelect}> Add Quests </Link>
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
    }
});

export default Page;