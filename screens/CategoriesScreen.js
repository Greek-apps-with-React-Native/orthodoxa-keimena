// Here you can select the thema/category of the books,
// e.g. Biblical, Dogmatic, History etc

import React from 'react';
import { FlatList, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/categories';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/CustomHeaderButton';

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				color={itemData.item.color}
				title={itemData.item.title}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryBooks',
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			/>
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

CategoriesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Κατηγορίες κειμένων',
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

export default CategoriesScreen;
