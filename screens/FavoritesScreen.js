import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import ModulesList from '../components/ModulesList';

const FavoritesScreen = (props) => {
	
	// Dummy data for getting some favorite modules.
	// const displayedModules = modules.filter((module) => module.id === 'module_1' || module.id === 'module_4');
	
	const favoriteModules = useSelector(state => state.books.favoriteModules);
	return <ModulesList navigation={props.navigation} listData={favoriteModules} />;
};

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Αγαπημένα',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					onPress={() => navData.navigation.toggleDrawer()}
					title="Menu"
					iconName={Platform.OS === 'android' ? 'dots-vertical' : 'menu'}
					size={23}
				/>
			</HeaderButtons>
		)
	};
};

export default FavoritesScreen;
