// Books of saints, scholars, etc

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { setFilters } from '../store/actions/books';

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
	// const { navigation } = props;

	const [ isHollyText, setIsHollyText ] = useState(false);
	const [ isScholarText, setIsScholarText ] = useState(false);

	const dispatch = useDispatch();

	const saveIsHolly = useCallback(
		(newValue) => {
			setIsHollyText(newValue);
		},
		[ isHollyText, dispatch ]
	);

	const saveIsScholar = useCallback(
		(newValue) => {
			setIsScholarText(newValue);
		},
		[ isScholarText, dispatch ]
	);
	// useCallBack to make sure that `saveFilters` runs only when state changes!
	// Now `saveFilters` only runs if the dependencies of useCallBack change!
	// const saveFilters = useCallback(
	// 	() => {
	// 		const appliedFilters = {
	// 			saintsText: isHollyText,
	// 			scholarsText: isScholarText
	// 		};
	// 		console.log(appliedFilters);
	// 	},
	// 	[ isHollyText, isScholarText ]
	// );

	useEffect(() => {
		const appliedFilters = {
			isHolly: isHollyText,
			isScholarly: isScholarText
		};
		dispatch(setFilters(appliedFilters))
	}, [isHollyText, isScholarText, dispatch])

	// useEffect(
	// 	() => {
	// 		navigation.setParams({ save: saveFilters });
	// 	},
	// 	[ saveFilters ]
	// );

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Διηθημένα Κείμενα</Text>
			<FilterSwitch
				thumbColor={Colors.steelblue}
				trackColor={{ true: Colors.lightblue }}
				value={isHollyText}
				onValueChange={saveIsHolly}
			>
				Κείμενα Αγίων
			</FilterSwitch>
			<FilterSwitch
				thumbColor={Colors.steelblue}
				trackColor={{ true: Colors.lightblue }}
				value={isScholarText}
				onValueChange={saveIsScholar}
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
