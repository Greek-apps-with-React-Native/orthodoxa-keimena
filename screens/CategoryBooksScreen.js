import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/categories';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoryBooksScreen = (props) => {
	const renderTextItem = (itemData) => {
		return (
			<CategoryGridTile
				color={itemData.item.color}
				title={itemData.item.title}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryModules',
						params: {
							bookId: itemData.item.id,
							bookTitle: itemData.item.title
						}
					});
				}}
			/>
		);
	};
	// Here you get the books according to their id's
	// i.e. if they belong to Biblical etc.
	const catId = props.navigation.getParam('categoryId');

	// Get the books from redux store. The 2d `books` is from App.js
	const availableBooks = useSelector((state) => state.books.filteredBooks);
	const displayedTexts = availableBooks.filter((text) => text.categoryIds.indexOf(catId) >= 0);

	if (displayedTexts.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Δεν υπάρχουν κείμενα</Text>
				<Text style={styles.text}>λόγω διηθήσεως.</Text>
			</View>
		);
	} else {
		return (
			<FlatList
				numColumns={2}
				data={displayedTexts}
				keyExtractor={(item, index) => item.id}
				renderItem={renderTextItem}
			/>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}, 
	text: {
		fontFamily: 'GFSNeohellenic-Bold',
		fontSize: 30
	}
})

CategoryBooksScreen.navigationOptions = (navData) => {
	const catId = navData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title
	};
};

export default CategoryBooksScreen;
