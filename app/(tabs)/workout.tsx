import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Page = () => {
    return(
        <View>
            <Link href="/(modals)/routines"> Add Routine </Link>
        </View>
    );
}

export default Page;