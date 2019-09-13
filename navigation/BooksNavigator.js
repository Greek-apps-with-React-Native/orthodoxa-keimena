import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import CategoryModulesScreen from '../screens/CategoryModulesScreen';
import TextDetailScreen from '../screens/TextDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';


import Colors from '../constants/Colors';

const BooksNavigator = createStackNavigator({
	Categories: {
        screen: CategoriesScreen,
	},
	CategoryBooks: {
		screen: CategoryBooksScreen,
	},
	CategoryModules: CategoryModulesScreen,
	TextDetail: TextDetailScreen,
}, {
	defaultNavigationOptions: {
		initialRouteName: 'CategoriesScreen',
			headerBackTitle: 'Πίσω',
			headerStyle: {
				backgroundColor: Colors.lightcyan
			},
			headerTintColor: Colors.dimgray
        }
});

const FavBottomTabNavigator = createBottomTabNavigator({
	Books: {
		screen:BooksNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => <FontAwesome name='book' size={25} color={tabInfo.tintColor} />
		}
	}, 
	Favorites: {
		screen: FavoritesScreen, 
		navigationOptions: {
			tabBarIcon: tabInfo => <MaterialCommunityIcons name='bolnisi-cross' size={25} color={tabInfo.tintColor} />
		}
	},	
}, {
	activeTintColor: Colors.moccasin
})

export default createAppContainer(FavBottomTabNavigator);
 