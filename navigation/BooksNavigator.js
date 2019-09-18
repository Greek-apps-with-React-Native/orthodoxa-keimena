import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import CategoryModulesScreen from '../screens/CategoryModulesScreen';
import TextDetailScreen from '../screens/TextDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
	defaultNavigationOptions: {
		initialRouteName: 'CategoriesScreen',
		headerBackTitle: 'Πίσω',
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? Colors.lightskyblue : Colors.lightcyan
		},
		headerTitleStyle: {
			fontFamily: 'GFSNeohellenic-Bold',
			fontSize: 25
		},
		headerBackTitleStyle: {
			fontFamily: 'GFSNeohellenic-Bold',
			fontSize: 22
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : Colors.dimgray
	}
};

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
	defaultStackNavOptions
);

const FavoritesNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		TextDetail: TextDetailScreen
	},
	defaultStackNavOptions
);

const FiltersNavigator = createStackNavigator(
	{
		Filters: FiltersScreen
	},
	defaultStackNavOptions
);

// For FavBottomTabNavigator
const tabScreenConfig = {
	Books: {
		screen: BooksNavigator,
		navigationOptions: {
			tabBarLabel: <Text style={{ fontFamily: 'GFSNeohellenic-Bold', fontSize: 15 }}>Βιβλία</Text>,
			tabBarColor: Colors.lightskyblue
		}
		// navigationOptions: {
		// 	tabBarIcon: (tabInfo) => <FontAwesome name='book' size={25} color={tabInfo.tintColor} />
		// }
	},
	Favorites: {
		screen: FavoritesNavigator,
		navigationOptions: {
			tabBarLabel: <Text style={{ fontFamily: 'GFSNeohellenic-Bold', fontSize: 15 }}>Αγαπημένα</Text> ,
			tabBarColor: Colors.deepskyblue
		}
		// navigationOptions: {
		// 	tabBarIcon: tabInfo => <MaterialCommunityIcons name='bolnisi-cross' size={25} color={tabInfo.tintColor} />
		// }
	}
};

// FavBottomTabNavigator
const defaultNavOptions = ({ navigation }) => ({
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
				defaultNavigationOptions: defaultNavOptions
			})
		: createBottomTabNavigator(tabScreenConfig, {
				defaultNavigationOptions: defaultNavOptions,
				tabBarOptions: {
					labelStyle: {
						fontFamily: 'GFSNeohellenic-Bold',
						fontSize: 15,
						// padding: 2,
					},
					style: { paddingTop: 1 },
					activeTintColor: Colors.deepskyblue
				}
			});

const MainNavigator = createDrawerNavigator(
	{
		BooksFavs: {
			screen: FavBottomTabNavigator,
			navigationOptions: {
				drawerLabel: 'Βιβλία',
				drawerIcon: ({ tintColor, focused }) => {
					if (focused) {
						return <Ionicons name="ios-book" size={25} color={tintColor} />;
					}
					return <FontAwesome name="book" size={25} color={tintColor} />;
				}
			}
		},
		Filters: {
			screen: FiltersNavigator,
			navigationOptions: {
				drawerLabel: 'Διηθημένα',
				drawerIcon: ({ tintColor, focused }) => {
					if (focused) {
						return <MaterialIcons name="filter-list" size={25} color={tintColor} />;
					}
						return <MaterialCommunityIcons name="air-filter" size={25} color={tintColor} />;
				}
			}
		}
	},
	{
		hideStatusBar: true,
		drawerWidth: 200,
		contentOptions: {
			labelStyle: {
				fontFamily: 'GFSNeohellenic-Bold',
				fontSize: 18
			},
			activeBackgroundColor: Platform.OS === 'android' ? Colors.lightskyblue : 'white',
			activeTintColor: Platform.OS === 'android' ? 'white' : Colors.deepskyblue,
			inactiveTintColor: Colors.darkgray
		}
	}
);

export default createAppContainer(MainNavigator);
