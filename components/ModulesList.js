import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ModuleItem from './ModuleItem';

const ModulesList = (props) => {
	
	const renderModule = (itemData) => {
		return (
			<ModuleItem
				heading={itemData.item.heading}
				color={itemData.item.color}
				onSelect={() => {
					//  We have a `navigation` prop because we forwarded it in CategoryMealsScreen.
						props.navigation.navigate({
						routeName: 'TextDetail',
						params: { 
							moduleId: itemData.item.id,
							moduleHeading: itemData.item.heading,
						
						}
					});
				}}
			/>
		);
	};

	return (
			<FlatList
                numColumns={2}
				data={props.listData}
				keyExtractor={(item, index) => item.id} // Modern versions of RN automatically detect the key. Thus, keyExtractor is not needed!
				renderItem={renderModule}
			/>
		
	);
};


export default ModulesList;
