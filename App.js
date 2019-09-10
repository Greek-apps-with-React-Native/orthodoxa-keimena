import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';

import BooksNavigator from './navigation/BooksNavigator';

useScreens();
 
const fetchFonts = () => {
	return Fonts.loadAsync({
		'GFSNeohellenic-Bold': require('./assets/Fonts/GFSNeohellenic-Bold.ttf'),
		'GFSNeohellenic-BoldItalic': require('./assets/Fonts/GFSNeohellenic-BoldItalic.ttf'),
		'GFSNeohellenic-Regular': require('./assets/Fonts/GFSNeohellenic-Regular.ttf'),
		'GFSNeohellenic-RegularItalic': require('./assets/Fonts/GFSNeohellenic-RegularItalic.ttf')
	});
};

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	if (!fontLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
	}

	return <BooksNavigator />;
}


