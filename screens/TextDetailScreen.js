import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, WebView, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { toggleFavorite } from '../store/actions/books';

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

	const toggleFavoriteHandler = useCallback(
		() => {
			dispatch(toggleFavorite(moduleId));
		},
		[ dispatch, moduleId ]
	);

	useEffect(
		() => {
			props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
		},
		[ toggleFavoriteHandler ]
	);

	if (!smallScreen) {
		return <WebView style={styles.webview} source={{ html: displayedModule.moduleText }} />;
	} else if (smallScreen) {
		return <WebView style={styles.webview} source={{ html: displayedModule.moduleTextSmall }} />;
	}
};

TextDetailScreen.navigationOptions = (navData) => {
	const toggleFavorite = navData.navigation.getParam('toggleFav');
	return {
		// Get moduleHeading you set in ModulesList
		headerTitle: navData.navigation.getParam('moduleHeading'),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title="Favorite" iconName="bolnisi-cross" onPress={toggleFavorite} />
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
