import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            checkLogin();
        }, 2000);

    }, [])

    const checkLogin = async () => {
        const id = await AsyncStorage.getItem('@USERID');
        if (id !== null) {
            navigation.navigate('Main')
        }
        else {
            navigation.navigate('Signup')
        }
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.logo}>{'Health Connect'}</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',

    },
    logo: {
        fontSize: 40,
        color: "#fff",
        textAlign: 'center'
    }
})