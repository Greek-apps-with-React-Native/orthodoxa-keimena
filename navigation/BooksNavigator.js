import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import TextDetailScreen from '../screens/TextDetailScreen';
import ChaptersScreen from '../screens/ChaptersScreen';
import Colors from '../constants/Colors';

const BooksNavigator = createStackNavigator({
	Categories: {
        screen: CategoriesScreen,
	},
	CategoryBooks: {
		screen: CategoryBooksScreen,
	},
	Chapters: ChaptersScreen,
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
