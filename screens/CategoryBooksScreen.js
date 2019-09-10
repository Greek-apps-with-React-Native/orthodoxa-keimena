import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES, BOOKS } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoryBooksScreen = (props) => {
	const renderTextItem = (itemData) => {
		return (
			<CategoryGridTile
			color={itemData.item.color}
			title={itemData.item.title}
			onSelect={() => {
				props.navigation.navigate({
					routeName: 'NewTestamentModules',
					params: {
						bookId: itemData.item.id
					}
				});
			}}
		/>
		)
	}
	// Here you get the books according to their id's
	// i.e. if they belong to Biblical etc.
	const catId = props.navigation.getParam('categoryId');
	const displayedTexts = BOOKS.filter(text => text.categoryIds.indexOf(catId) >=0)
	return (
			<FlatList 
				numColumns={2} 
				data={displayedTexts} 
				keyExtractor={(item, index) => item.id} 
				renderItem={renderTextItem}
				/>
	);
};

CategoryBooksScreen.navigationOptions = (navData) => {
	const catId = navData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	}
};

export default CategoryBooksScreen;
