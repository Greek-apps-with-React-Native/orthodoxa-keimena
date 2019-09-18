import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, WebView, Dimensions, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { toggleFavorite } from '../store/actions/books';
import Colors from '../constants/Colors';

const TextDetailScreen = (props) => {
	const [ smallScreen, setSmallScreen ] = useState(Dimensions.get('window').height < 800);

	const dispatch = useDispatch();

	useEffect(
		() => {
			Dimensions.addEventListener('change', setSmallScreen(Dimensions.get('window').height < 800));
			return Dimensions.removeEventListener('change', setSmallScreen(Dimensions.get('window').height < 800));
		},
		[ smallScreen ]
	);

	const modules = useSelector((state) => state.books.modules);
	const moduleId = props.navigation.getParam('moduleId');
	const displayedModule = modules.find((module) => module.id === moduleId);

	// useCallback to avoid infinite loops
	const toggleFavoriteHandler = useCallback(
		() => {
			dispatch(toggleFavorite(moduleId));
		},
		[ dispatch, moduleId ]
	);

	const favoriteExists = useSelector(state => state.books.favoriteExists)
	const currendModuleIsFavorite = useSelector(state => state.books.favoriteModules.some(module => module.id === moduleId))
	useEffect(
		() => {
			// Set params for navigationOptions
			props.navigation.setParams({ 
				toggleFav: toggleFavoriteHandler,
				moduleIsFav: currendModuleIsFavorite 	
			});
		},
		[ toggleFavoriteHandler, currendModuleIsFavorite ]
	);

	if (!smallScreen) {
		return <WebView style={styles.webview} source={{ html: displayedModule.moduleText }} />;
	} else if (smallScreen) {
		return <WebView style={styles.webview} source={{ html: displayedModule.moduleTextSmall }} />;
	}
};

TextDetailScreen.navigationOptions = (navData) => {
	const toggleFavorite = navData.navigation.getParam('toggleFav');
	const moduleIsFav = navData.navigation.getParam('moduleIsFav');
	
	let iconColor = 'white';
	iconColor = Platform.OS === 'android' ? iconColor : Colors.dimgray
	return {
		// Get moduleHeading you set in ModulesList
		headerTitle: navData.navigation.getParam('moduleHeading'),
		// headerTintColor: 
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item buttonStyle={{color: !moduleIsFav ? iconColor : Colors.deepskyblue}} title="Favorite" iconName="bolnisi-cross" onPress={toggleFavorite} />
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	// type: View...
	webview: {
		alignContent: 'flex-start',
		margin: 15
	}
});

export default TextDetailScreen;
