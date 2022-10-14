import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';


// Screens
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Details';
import SettingsScreen from './Screens/Setting';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';

              } else if (rn === detailsName) {
                iconName = focused ? 'list' : 'list-outline';

              } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 0, fontSize: 10 },
            style: { padding: 10, height: 70 }
          }}>

          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={detailsName} component={DetailsScreen} />
          <Tab.Screen name={settingsName} component={SettingsScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;