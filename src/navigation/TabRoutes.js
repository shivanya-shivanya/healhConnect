import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import navigationStrings from './navigationStrings';
import * as Screens from '../Screens';
import imagePath from '../constants/imagePath';


const bottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <bottomTab.Navigator

            initialRouteName={navigationStrings.HOME}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#5E77B1',
                tabBarInactiveTintColor: '#888888',
                //Tab bar styles can be added here
                tabBarStyle: {

                },
                tabBarLabelStyle: {
                    paddingBottom: 4,
                    fontSize: 13
                },
            })}
        >

            <bottomTab.Screen name={navigationStrings.HOME} component={Screens.Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.firstActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: '#5E77B1' }} /> : <Image source={imagePath.firstInActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: '#888888' }} />
                        );
                    }

                }}
            />

            <bottomTab.Screen name={navigationStrings.POLICY} component={Screens.Policy}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.secondActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} /> :
                                <Image source={imagePath.secondInActiveIcon} style={{ height: 20, width: 20, resizeMode: 'contain', }} />
                        )
                    }

                }}
            />

            <bottomTab.Screen name={navigationStrings.CLAIM} component={Screens.Claim}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.thirdActiveIcon} style={{ height: 35, width: 35, resizeMode: 'contain', tintColor: '#5E77B1' }} /> : <Image source={imagePath.thirdInActiveIcon} style={{ height: 35, width: 35, resizeMode: 'contain', tintColor: '#888888' }} />
                        )
                    }

                }}
            />

            <bottomTab.Screen name={navigationStrings.MORE} component={Screens.More}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ? <Image source={imagePath.fourthActiveIcon} style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: '#5E77B1' }} />
                                :
                                <Image source={imagePath.fourthInActiveIcon} style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: '#888888' }} />
                        )
                    }

                }}
            />

        </bottomTab.Navigator>

    )
}

const styles = StyleSheet.create({
    customBottomTabStyle: {
        backgroundColor: "#fff"
    }
})

export default TabRoutes