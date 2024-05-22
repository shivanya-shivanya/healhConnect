import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Signup = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();

    React.useEffect(() => {
        GoogleSignin.configure({
            webClientId: '485687510133-s6jr53p8ic5sslk5v39jmdibds8b7a8q.apps.googleusercontent.com',
        });
    }, [])

    async function onGoogleButtonPress() {
        try {
               // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
       
        // Get the users ID token
        const { idToken,user } = await GoogleSignin.signIn();
        console.log("in google signin 22",user)
        Alert.alert(`Welcome ${user?.givenName}`);
        navigation.navigate('TabRoutes')
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      
        } catch (error) {
            console.log("in google signin error",error)
        }
     
    }
    return (
        <SafeAreaView style={{ flex: 1,justifyContent: 'center'}}>
        
            <TouchableOpacity style={styles.btn} onPress={onGoogleButtonPress}>
                <Text style={styles.txt}>Login With Google</Text>
            </TouchableOpacity>
          
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    btn: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        padding: 15,
        width: '90%',
        borderRadius: 10
    },
    txt: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500'
    }
})