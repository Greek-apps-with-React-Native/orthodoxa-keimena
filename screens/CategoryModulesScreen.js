import React from 'react';

import { BOOKS } from '../data/books';
import { MODULES } from '../data/modules';
import ModulesList from '../components/ModulesList';

const CategoryModulesScreen = (props) => {	
	const bookId = props.navigation.getParam('bookId');
	const displayedModules = MODULES.filter((module) => module.moduleCategory.indexOf(bookId) >= 0);
		return (
			<ModulesList
				navigation={props.navigation}
				listData={displayedModules}
			/>
		);

		}
	CategoryModulesScreen.navigationOptions = (navData) => {
		const bookId = navData.navigation.getParam('bookId');
		const selectedBook = BOOKS.find((book) => book.id === bookId);

		return {
			headerTitle: selectedBook.title
		};
	
};

export default CategoryModulesScreen;
