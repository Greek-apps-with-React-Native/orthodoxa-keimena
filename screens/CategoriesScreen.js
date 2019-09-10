// Here you can select the thema/category of the books,
// e.g. Biblical, Dogmatic, History etc

import React from 'react';
import { View, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				color={itemData.item.color}
				title={itemData.item.title}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryBooks',
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			/>
		);
	};
	return (
		<FlatList
			numColumns={2}
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
		/>
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Κατηγορίες κειμένων'
};


export default CategoriesScreen;
