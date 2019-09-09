import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryTextsScreen from '../screens/CategoryTextsScreen';
import TextDetailScreen from '../screens/TextDetailScreen';
import Colors from '../constants/Colors';

const TextsNavigator = createStackNavigator({
	Categories: {
        screen: CategoriesScreen,
	},
	CategoryTexts: {
		screen: CategoryTextsScreen,
	},
	TextDetail: TextDetailScreen
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

export default createAppContainer(TextsNavigator);
