// Books of saints, scholars, etc

import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';

const FiltersScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>Οθόνη διηθημένων κειμένων</Text>
		</View>
	);
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Διηθημένα κείμενα',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					onPress={() => navData.navigation.toggleDrawer()}
					title="Menu"
					iconName={Platform.OS === 'android' ? 'dots-vertical' : 'menu'}
					size={23}
				/>
			</HeaderButtons>
		)
	};
};



const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default FiltersScreen;