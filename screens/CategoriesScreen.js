// Here you can select the thema/category of the books,
// e.g. Biblical, Dogmatic, History etc

import React from 'react';
import { View, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({routeName: 'CategoryTexts', params: {
                    categoryId: itemData.item.id
                }})
            }} >
                <View >
                    <Text>{itemData.item.title} </Text>
                </View>
            </TouchableOpacity>
        );
    };
	return (
		<FlatList
			numColumns={2}
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
		/>
	);
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Κατηγορίες κειμένων',
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 50
	}
});

export default CategoriesScreen;
