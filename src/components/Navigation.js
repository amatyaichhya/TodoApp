import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome";
import Todo from "../screens/Todo";
import DoneTodo from "../screens/DoneTodo";
import DrawerContent from "./DrawerContent";
import { Text, Dimensions, TouchableNativeFeedback, Switch, paperTheme, View } from "react-native";
import { color } from "react-native-reanimated";

const ScreenWidth = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

const TodoStack = createStackNavigator();
const DoneStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TodoStackScreen({ navigation }) {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen name="Todo" component={Todo} options= {{
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: 'slateblue'},
        headerTintColor: 'white',
        headerLeft: () => (
            <Icon name="navicon" size={25} 
            style={{marginStart:10}} color='white' backgroundColor="#000000" onPress={() => navigation.openDrawer()} ></Icon>
          ),
    }} />
    </TodoStack.Navigator>
  );
}

function DoneStackScreen({ navigation }) {
    return (
      <DoneStack.Navigator>
        <DoneStack.Screen name="DoneTodo" component={DoneTodo} options= {{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: 'slateblue'},
            headerTintColor: 'white',
            headerLeft: () => (
                <Icon name="navicon" size={25} 
                style={{marginStart:10}} color='white' backgroundColor="#000000" onPress={() => navigation.openDrawer()} ></Icon>
              ),
        }} />
      </DoneStack.Navigator>
    );
  }

function TabNavigation() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarBadgeStyle: {backgroundColor: color},
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Todo') {
                iconName = focused
                  ? 'list-ul'
                  : 'list-ul';
              } else if (route.name === 'DoneTodo') {
                iconName = focused ? 'check' : 'check';
              }
  
              return <Icon name={iconName} size={size} color={color}  />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'slateblue',
            inactiveTintColor: 'grey',
            labelStyle: {fontSize: 14},
            style: {width: ScreenWidth}
          }}
        >
          <Tab.Screen name="Todo" component={TodoStackScreen} options={{ tabBarBadge: 1}}/>
          <Tab.Screen name="DoneTodo" component={DoneStackScreen} options={{ tabBarBadge: 3 }} />
        </Tab.Navigator>
    )
}

function Theme({ navigation }) {
    return (
            <View style = {{flex:1}}>
                <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
                    <View style={{
                    paddingVertical: 12,
                    paddingHorizontal: 16,}}>
                        <Text>Home</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={{flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 12,
                    paddingHorizontal: 16,}}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={paperTheme}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
    
    )
}

export default function Navigation() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
        drawerContent= {Theme}
        drawerStyle={{
            backgroundColor: '#EBE9F7',
            width: 240,
            color: '#333'
          }}
          >
            <Drawer.Screen name="Home" component={TabNavigation} />
            <Drawer.Screen name="DarkTheme" component={Theme} />
        </Drawer.Navigator>
        
      </NavigationContainer>
    );
  }