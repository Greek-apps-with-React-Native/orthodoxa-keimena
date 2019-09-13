import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import CategoryModulesScreen from '../screens/CategoryModulesScreen';
import TextDetailScreen from '../screens/TextDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

const BooksNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen
		},
		CategoryBooks: {
			screen: CategoryBooksScreen
		},
		CategoryModules: CategoryModulesScreen,
		TextDetail: TextDetailScreen
	},
	{
		defaultNavigationOptions: {
			initialRouteName: 'CategoriesScreen',
			headerBackTitle: 'Πίσω',
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.lightskyblue : Colors.lightcyan
			},
			headerTintColor: Colors.dimgray
		}
	}
);

const tabScreenConfig = {
	Books: {
		screen: BooksNavigator,
		navigationOptions: {
			tabBarLabel: 'Βιβλία',
			tabBarColor: Colors.lightskyblue,
		},
		// navigationOptions: {
		// 	tabBarIcon: (tabInfo) => <FontAwesome name='book' size={25} color={tabInfo.tintColor} />
		// }
	},
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			tabBarLabel: 'Αγαπημένα',
			tabBarColor: Colors.deepskyblue,
		},
		// navigationOptions: {
		// 	tabBarIcon: tabInfo => <MaterialCommunityIcons name='bolnisi-cross' size={25} color={tabInfo.tintColor} />
		// }
	}
};

const defaultNavigationOptions = ({ navigation }) => ({
	// Ionicons = ios-book
	// MaterialCommunityIcons = book
	// FontAwesome = cross
	// FontAwesome5 = bolnisi-cross
	tabBarIcon: ({ focused, tintColor }) => {
		const { routeName } = navigation.state;
		let iconName = '';
		if (routeName === 'Books') {
			iconName = focused ? 'ios-book' : 'book';
		} else if (routeName === 'Favorites') {
			iconName = focused ? 'bolnisi-cross' : 'cross';
		}
		// For Books
		if (routeName === 'Books' && focused) {
			return <Ionicons name={iconName} size={25} color={tintColor} />;
			// For Favorites
		} else if (routeName === 'Favorites' && focused) {
			return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
		}
		// For Books
		if (routeName === 'Books' && !focused) {
			return <FontAwesome name={iconName} size={25} color={tintColor} />;
			// For Favorites
		} else if (routeName === 'Favorites' && !focused) {
			return <FontAwesome5 name={iconName} size={25} color={tintColor} />;
		}
	}
});

const FavBottomTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				shifting: true,
				// activeTintColor: Colors.moccasin,
				defaultNavigationOptions,
			})
		: createBottomTabNavigator(tabScreenConfig, {
				defaultNavigationOptions,
				tabBarOptions: {
					activeTintColor: Colors.accentColor
				}
			});

export default createAppContainer(FavBottomTabNavigator);
