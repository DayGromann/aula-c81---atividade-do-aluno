import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/feed";
import CreateStory from "../screens/createStory";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({focused,color,size})=>{
                        let icon;

                        if(route.name === "feed"){
                            icon = focused ? 'book' : 'book-outline';
                        }else if(route.name === "criar história"){
                            icon = focused ? 'create' : 'create-outline';
                        }

                        return <Ionicons name= {icon} size = {size} color = {color}/>

                    },
                    tabBarActiveTintColor: 'cyan',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name='feed' component = {Feed}/>
                <Tab.Screen name='criar história' component = {CreateStory}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigator;

