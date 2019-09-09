import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, TEXTS } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoryTextsScreen = (props) => {
	const renderTextItem = (itemData) => {
		return (
			<CategoryGridTile
			color={itemData.item.color}
			title={itemData.item.title}
			onSelect={() => {
				props.navigation.navigate({
					routeName: 'TextDetail',
					params: {
						categoryId: itemData.item.id
					}
				});
			}}
		/>
		)
	}
	const catId = props.navigation.getParam('categoryId');
	const displayedTexts = TEXTS.filter(text => text.categoryIds.indexOf(catId) >=0)
	return (
			<FlatList numColumns={2} data={displayedTexts} 
			keyExtractor={(item, index) => item.id} 
			renderItem={renderTextItem}
			/>
	);
};

CategoryTextsScreen.navigationOptions = (navData) => {
	const catId = navData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	}
};

// const styles = StyleSheet.create({
// 	screen: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	}
// });

export default CategoryTextsScreen;
