// Books of saints, scholars, etc

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, Switch } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.children}</Text>
			<Switch
				thumbColor={props.thumpColor}
				trackColor={props.trackColor}
				value={props.value}
				onValueChange={props.onValueChange}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	const { navigation } = props;

	const [ isSaintsText, setIsSaintsText ] = useState(false);
	const [ isScholarsText, setIsScholarsText ] = useState(false);

	// useCallBack to make sure that `saveFilters` runs only when state changes!
	// Now `saveFilters` only runs if the dependencies of useCallBack change!
	const saveFilters = useCallback(() => {
		const appliedFilters = {
			saintsText: isSaintsText,  
			scholarsText: isScholarsText
		};
		console.log(appliedFilters);
	}, [isSaintsText, isScholarsText]);

	useEffect(
		() => {
			navigation.setParams({ save: saveFilters });
		},
		[ saveFilters ]
	);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Διηθημένα Κείμενα</Text>
			<FilterSwitch
				thumbColor={Colors.steelblue}
				trackColor={{ true: Colors.lightblue }}
				value={isSaintsText}
				onValueChange={(newValue) => setIsSaintsText(newValue)}
			>
				Κείμενα Αγίων
			</FilterSwitch>
			<FilterSwitch
				thumbColor={Colors.steelblue}
				trackColor={{ true: Colors.lightblue }}
				value={isScholarsText}
				onValueChange={(newValue) => setIsScholarsText(newValue)}
			>
				Κείμενα Ακαδημαϊκών
			</FilterSwitch>
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
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					// Get the params from above (see saveFilters)
					onPress={navData.navigation.getParam('save')}
					title="Menu"
					iconName='content-save'
					size={23}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%'
	},
	title: {
		fontFamily: 'GFSNeohellenic-Bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	}
});

export default FiltersScreen;
