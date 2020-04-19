import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const NewStack = createStackNavigator();

function NewStackScreen() {
    return (
        <NewStack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTintColor: '#FFF',
                headerLeftContainerStyle: {
                    marginLeft: 20,
                },
            }}
        >
            <NewStack.Screen
                name="SelectProvider"
                component={SelectProvider}
                options={({ navigation }) => ({
                    title: 'Selecione o prestador',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Dashboard'); }}
                        >
                            <Ionicons name="md-arrow-back" color="#FFF" size={20} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <NewStack.Screen
                name="SelectDateTime"
                component={SelectDateTime}
                options={({ navigation }) => ({
                    title: 'Selecione a data',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => { navigation.goBack(); }}
                        >
                            <Ionicons name="md-arrow-back" color="#FFF" size={20} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <NewStack.Screen
                name="Confirm"
                component={Confirm}
                options={({ navigation }) => ({
                    title: 'Confirmar Agendamento',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => { navigation.goBack(); }}
                        >
                            <Ionicons name="md-arrow-back" color="#FFF" size={20} />
                        </TouchableOpacity>
                    ),
                })}
            />
        </NewStack.Navigator>
    );
}

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
    const { signed } = useSelector(state => state.auth);

    return (
        <NavigationContainer>
            {!signed
            && (
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="SignIn" component={SignIn} />
                    <AppStack.Screen name="SignUp" component={SignUp} />
                </AppStack.Navigator>
            )}
            {!!signed
            && (
                <Tab.Navigator
                    tabBarOptions={{
                        keyboardHidesTabBar: true,
                        activeTintColor: '#FFF',
                        inactiveTintColor: 'rgba(255,255,255,0.6)',
                        style: {
                            backgroundColor: '#8d41a8',
                        },
                    }}
                >
                    <Tab.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{
                            tabBarLabel: 'Agendamentos',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="md-calendar" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="New"
                        component={NewStackScreen}
                        options={{
                            tabBarVisible: false,
                            tabBarLabel: 'Agendar',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="md-add-circle" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Meu perfil',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="md-person" size={size} color={color} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            )}
        </NavigationContainer>
    );
}
