import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import CategoryModulesScreen from '../screens/CategoryModulesScreen';
import TextDetailScreen from '../screens/TextDetailScreen';

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

export default createAppContainer(BooksNavigator);
