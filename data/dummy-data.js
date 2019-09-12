import Category from '../models/category';
import Book from '../models/book';

import Colors from '../constants/Colors';

export const CATEGORIES = [
	new Category('category_1', 'Βιβλικά', '#FFFACD'), // lemonchiffon
	new Category('category_2', 'Δογματική', '#40E0D0'), // turquoise
	new Category('category_3', 'Πατερικά', '#00BFFF'), // deepskyblue
	new Category('category_4', 'Αγιολογικά', '#F5DEB3'), // wheat
	new Category('category_5', 'Ασκητικά', '#F4A460'), // sandybrown
	new Category('category_6', 'Εκκλησιαστική Ιστορία', '#FF7F50'), // coral
	new Category('category_7', 'Λειτουργικά', '#808000'), // olive
	new Category('category_8', 'Ιεροί Κανόνες', '#F0E68C'), // khaki
	new Category('category_9', 'Θρησκειολογικά', '#D3D3D3'), // lightgray
	new Category('category_10', 'Ξενόγλωσσα', '#CD5C5C'), // indianred
	new Category('category_11', 'Περιοδικά', '#BDB76B'), // darkkhaki
	new Category('category_12', 'Λεξικά', '#F5F5DC') // beige
];

export const BOOKS = [
	new Book({
		id: 'book_1',
		categoryIds: [ 'category_1' ],
		color: Colors.lightyellow,
		title: 'Καινή Διαθήκη',
		// image: require('../assets/images/matheon.jpg'),
		holly: true,
		scholarly: false
	}),
	new Book({
		id: 'book_2',
		categoryIds: [ 'category_1' ],
		title: 'Ψαλτήριον',
		color: Colors.moccasin,
		// image: require('../assets/images/psaltirion.jpg'),
		holly: true,
		scholarly: false
	})
];







