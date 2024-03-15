import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Page = () => {
    return(
        <View>
            <Link href="/(modals)/signup"> Signup </Link>
        </View>
    )
}

export default Page;