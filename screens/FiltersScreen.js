// Books of saints, scholars, etc

import React, { useState } from 'react';
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
	const [ saintsText, setSaintsText ] = useState(false);
	const [ scholarsText, setScholarsText ] = useState(false);
				
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Διηθημένα Κείμενα</Text>
			<FilterSwitch
				thumbColor={Colors.steelblue}
				trackColor={{ true: Colors.lightblue }}
				value={saintsText}
				onValueChange={(newValue) => setSaintsText(newValue)}
			>Κείμενα Αγίων</FilterSwitch>
			<FilterSwitch
				thumbColor={Colors.steelblue}
				trackColor={{ true: Colors.lightblue }}
				value={scholarsText}
				onValueChange={(newValue) => setScholarsText(newValue)}
			>Κείμενα Ακαδημαϊκών</FilterSwitch>
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
