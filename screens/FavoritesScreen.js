import React from 'react';
import { FlatList } from 'react-native';

import { BOOKS } from '../data/books';
import { MODULES } from '../data/modules';
import ModulesList from '../components/ModulesList';

const FavoritesScreen = (props) => {
	const displayedModules = MODULES.filter((module) => module.id === 'module_1' || module.id === 'module_4');
		return (
			<ModulesList
				navigation={props.navigation}
				listData={displayedModules}
			/>
		);

		}

FavoritesScreen.navigationOptions = {
		headerTitle: 'Αγαπημένα'
};

export default FavoritesScreen;
