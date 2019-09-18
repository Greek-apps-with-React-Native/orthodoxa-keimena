import React, { useState } from 'react';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import BooksNavigator from './navigation/BooksNavigator';
import booksReducer from './store/reducers/books';

useScreens();

const rootReducer = combineReducers({
	books: booksReducer
});

const store = createStore(rootReducer);

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

	return (
		<Provider store={store}>
			<BooksNavigator />
		</Provider>
	);
}
