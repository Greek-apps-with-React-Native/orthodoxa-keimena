// Here you can select the thema/category of the books,
// e.g. Biblical, Dogmatic, History etc

import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const CategoriesScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Categories Screen</Text>
            <Button title="Go to Texts" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryTexts'})
            }} />

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

export default CategoriesScreen;
