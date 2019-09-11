import React from 'react';
import { FlatList } from 'react-native';

import { BOOKS } from '../data/dummy-data';
import { MODULES } from '../data/NewTestamentModules';
import ModuleGridTile from '../components/ModuleGridTile';

const NewTestamentModulesScreen = (props) => {
	const renderModuleItem = (itemData) => {
		return (
			<ModuleGridTile
				color={itemData.item.color}
				heading={itemData.item.heading}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'TextDetail',
						params: {
							textId: itemData.item.id
						}
					});
				}}
			/>
		);
	};

	NewTestamentModulesScreen.navigationOptions = (navData) => {
		const bookId = navData.navigation.getParam('bookId');
		const selectedBook = BOOKS.find((book) => book.id === bookId);
		
		return {
			headerTitle: selectedBook.title
		};
	};

	return <FlatList 
			numColumns={2}
			data={MODULES} 
			keyExtractor={(item, index) => item.id} 
			renderItem={renderModuleItem} 
			/>;
};

export default NewTestamentModulesScreen;
