import React from 'react';
import { FlatList } from 'react-native';

import { CHAPTERS } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const ChaptersScreen = (props) => {
	const renderChapterItem = (itemData) => {
		return (
			<CategoryGridTile
				color={itemData.item.color}
				heading={itemData.item.heading}
				title={itemData.item.title}
				subTitle={itemData.item.subTitle}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'TextDetail',
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			/>
		);
	};
	// const catId = props.navigation.getParam('categoryId');
	// const displayedTexts = CHAPTERS.filter(text => text.categoryIds.indexOf(catId) >=0)
    return <FlatList 
        data={CHAPTERS} 
        keyExtractor={(item, index) => item.id} 
        renderItem={renderChapterItem} 
        />;
};

export default ChaptersScreen;
