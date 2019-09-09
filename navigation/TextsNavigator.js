import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryTextsScreen from '../screens/CategoryTextsScreen';
import TextDetailScreen from '../screens/TextDetailScreen';

const TextsNavigator = createStackNavigator({
	Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerBackTitle: 'Πίσω'
        }
	},
	CategoryTexts: {
		screen: CategoryTextsScreen
	},
	TextDetail: TextDetailScreen
});

export default createAppContainer(TextsNavigator);
