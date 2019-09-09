import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryTextsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Category Texts Screen</Text>
			<Button title="Go to Text Detail" onPress={() => {
                props.navigation.navigate({routeName: 'TextDetail'})
            }} />
			  <Button title="Go back" onPress={() => {
                props.navigation.goBack();
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

export default CategoryTextsScreen;