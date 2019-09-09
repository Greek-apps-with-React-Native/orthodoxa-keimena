import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TextItem = (props) => {
	return (
        <TouchableOpacity onPress={props.onSelectText} >
        <View>
            <View>
        <Text>{itemData.item.title}</Text>
            </View>
            <View></View>
    </View>
    </TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default TextItem;