import React from 'react';

import TextDetailScreen from './TextDetailScreen';
import Matthaion from '../data/1_matthaion'

const MatthaionScreen = (props) => {
		 
	return <TextDetailScreen style={props.styles}  source={{html: Matthaion}} />
};

export default MatthaionScreen;
