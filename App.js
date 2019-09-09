import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
	Font.loadAsync({
		'GFSNeohellenic-Bold': require('./assets/fonts/GFSNeohellenic-Bold.ttf'),
		'GFSNeohellenic-BoldItalic': require('./assets/fonts/GFSNeohellenic-BoldItalic.ttf'),
		'GFSNeohellenic-Regular': require('./assets/fonts/GFSNeohellenic-Regular.ttf'),
		'GFSNeohellenic-RegularItalic': require('./assets/fonts/GFSNeohellenic-RegularItalic.ttf')
	});
};

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	if (!fontLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={setFontLoaded(true)} />;
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
