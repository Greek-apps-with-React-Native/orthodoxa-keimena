import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryBookScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Category Book Screen</Text>{' '}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryBookScreen;