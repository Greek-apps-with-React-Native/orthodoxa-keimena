import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';

import { MODULES } from '../data/modules';
import ModulesList from '../components/ModulesList';

const FavoritesScreen = (props) => {
	const displayedModules = MODULES.filter((module) => module.id === 'module_1' || module.id === 'module_4');
	return <ModulesList navigation={props.navigation} listData={displayedModules} />;
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
