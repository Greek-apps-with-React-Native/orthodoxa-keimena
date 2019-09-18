import React from 'react';
import { useSelector } from 'react-redux';

import ModulesList from '../components/ModulesList';

const CategoryModulesScreen = (props) => {
	// Get modules from Redux store.
	const modules = useSelector((state) => state.books.modules);

	// Get bookId you set in CategoryBooksScreen.
	const bookId = props.navigation.getParam('bookId');

	// Get the modules of each book.
	const displayedModules = modules.filter((module) => module.moduleCategory.indexOf(bookId) >= 0);
	return <ModulesList navigation={props.navigation} listData={displayedModules} />;
};
CategoryModulesScreen.navigationOptions = (navData) => {
	return {
		// Get bookTitle you set in CategoryBooksScreen.
		headerTitle: navData.navigation.getParam('bookTitle')
	};
};

export default CategoryModulesScreen;
