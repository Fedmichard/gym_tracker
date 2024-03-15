import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Page = () => {
    return(
        <View>
            <Link href="/pages/login"> Login </Link>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Page;