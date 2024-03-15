import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Page = () => {
    return(
        <View>
            <Link href="/workouts/0001"> Upper 1 </Link>
            <Link href="/workouts/0002"> Upper 2 </Link>
            <Link href="/workouts/0003"> Lower 1 </Link>
            <Link href="/workouts/0004"> Lower 2 </Link>
        </View>
    );
}

export default Page;