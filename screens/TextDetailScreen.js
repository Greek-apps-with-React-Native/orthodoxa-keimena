import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextDetailsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The TextDetails Screen</Text>
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

export default TextDetailsScreen;