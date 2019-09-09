import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryTextsScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<View style={styles.screen}>
			<Text>The Category Texts Screen</Text>
			<Text>{selectedCategory.title} </Text>
			<Button
				title="Go to Text Detail"
				onPress={() => {
					props.navigation.navigate({ routeName: 'TextDetail' });
				}}
			/>
			<Button
				title="Go back"
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</View>
	);
};

CategoryTextsScreen.navigationOptions = (navData) => {
	const catId = navData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	}
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryTextsScreen;
