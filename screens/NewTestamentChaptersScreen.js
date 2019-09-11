import React from 'react';
import { Text, FlatList } from 'react-native';

import { MODULES } from '../data/NewTestamentModules';
import { CHAPTERS } from '../data/chapters';
import ChapterGridTile from '../components/ChapterGridTile';

const NewTestamentChaptersScreen = (props) => {
	const renderChapterItem = (itemData) => {
		// const subTitles = itemData.item.subTitle
		// .map((sub, index) => <Text key={index}>{sub}</Text> );
		// console.log(subTitles);
		
		return (
			<ChapterGridTile
				color={itemData.item.color}
				title={itemData.item.title}
				// subTitle={subTitles}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'NewTestamentChapters',
						params: {
							chapterId: itemData.item.id
						}
					});
				}}
			/>
		);
	};

	NewTestamentChaptersScreen.navigationOptions = (navData) => {
		const moduleId = navData.navigation.getParam('moduleId');
		const selectedModule = MODULES.find((module) => module.id === moduleId);
		
		return {
			headerTitle: selectedModule.heading
		};
	};

	return <FlatList 
			numColumns={2}
			data={CHAPTERS} 
			keyExtractor={(item, index) => item.id} 
			renderItem={renderChapterItem} 
			/>;
};

export default NewTestamentChaptersScreen;
