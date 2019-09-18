import Book from '../models/book';
import Colors from '../constants/Colors';

export const BOOKS = [
	new Book({
		id: 'book_1',
		categoryIds: [ 'category_1' ],
		color: Colors.lightyellow,
		title: 'Καινή Διαθήκη',
		isHolly: true,
		isScholarly: false
	}),
	new Book({
		id: 'book_2',
		categoryIds: [ 'category_1' ],
		title: 'Ψαλτήριον',
		color: Colors.moccasin,
		isHolly: true,
		isScholarly: false
	}),
	new Book({
		id: 'book_3',
		categoryIds: [ 'category_2' ],
		title: 'Θεολογία και ζωή',
		color: Colors.moccasin,
		isHolly: false,
		isScholarly: true
	}),
	new Book({
		id: 'book_4',
		categoryIds: [ 'category_5' ],
		title: 'Κλίμαξ',
		color: Colors.moccasin,
		isHolly: true,
		isScholarly: false
	}),
	new Book({
		id: 'book_5',
		categoryIds: [ 'category_9' ],
		title: 'Τα θρησκεύματα της Ανατολής',
		color: Colors.moccasin,
		isHolly: false,
		isScholarly: true
	}),
	
];