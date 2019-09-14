import React, { useState, useEffect } from 'react';
import { StyleSheet, WebView, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { MODULES } from '../data/modules';

const TextDetailScreen = (props) => {
	const [ smallScreen, setSmallScreen ] = useState(Dimensions.get('window').height < 800);

	useEffect(
		() => {
			console.log(smallScreen);	
			Dimensions.addEventListener('change', setSmallScreen(Dimensions.get('window').height < 800));
			return Dimensions.removeEventListener('change', setSmallScreen(Dimensions.get('window').height < 800));
		},
		[ smallScreen ]
	);

	const moduleId = props.navigation.getParam('moduleId');
	const displayedModule = MODULES.find((module) => module.id === moduleId);

	if (!smallScreen) {
		return <WebView style={styles.webview} source={{ html: displayedModule.moduleText }} />;
	} else if (smallScreen) {
		return <WebView style={styles.webview} source={{ html: displayedModule.moduleTextSmall }} />;
	}
};

TextDetailScreen.navigationOptions = (navData) => {
	const moduleId = navData.navigation.getParam('moduleId');
	const displayedModule = MODULES.find((module) => module.id === moduleId);

	return {
		headerTitle: displayedModule.heading,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title="Favorite" iconName="bolnisi-cross" onPress={() => console.log('Marked as favorite!')} />
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
