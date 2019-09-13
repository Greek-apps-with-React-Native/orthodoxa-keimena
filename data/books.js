import Book from '../models/book';
import Colors from '../constants/Colors';

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