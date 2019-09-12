import React from 'react';
import { StyleSheet, WebView } from 'react-native';
import { MODULES } from '../data/modules';

const TextDetailScreen = (props) => {
	const moduleId = props.navigation.getParam('moduleId');
	const displayedModule = MODULES.find((module) => module.id === moduleId);
		 
	return <WebView style={styles.webview}  source={{html: displayedModule.moduleText}} />
};

const styles = StyleSheet.create({
	webview: {
		alignContent: 'flex-start',
		margin: 15, 
	}
})

export default TextDetailScreen;
