import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import ModulesList from '../components/ModulesList';

const FavoritesScreen = (props) => {
	const favoriteModules = useSelector((state) => state.books.favoriteModules);
	if (favoriteModules.length === 0) {
		return (
			<View style={styles.container} >
				<Text style={styles.text} >Ακόμη δεν έχετε επιλέξει</Text>
				<Text style={styles.text} >αγαπημένα κείμενα.</Text>
			</View>
		);
	} else {
		return <ModulesList navigation={props.navigation} listData={favoriteModules} />;
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

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Αγαπημένα',
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

export default FavoritesScreen;
