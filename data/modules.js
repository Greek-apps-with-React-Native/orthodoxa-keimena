import Module from '../models/module';
import Matthaion from './1_matthaion';
import Colors from '../constants/Colors';

export const MODULES = [
	new Module({
        id: 'module_1',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΜΑΤΘΑΙΟΝ',
        moduleText: Matthaion,
    }),
    new Module({
        id: 'module_2',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΜΑΡΚΟΝ',
        moduleText: '<h1> ΚΕΦΑΛΑΙΟ 1 </h1>',
    }),
    new Module({
        id: 'module_3',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΛΟΥΚΑΝ',
        moduleText: '<h1> ΚΕΦΑΛΑΙΟ 1 </h1>',
    }),
    new Module({
        id: 'module_4',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΙΩΑΝΝΗΝ',
        moduleText: '<h1> ΚΕΦΑΛΑΙΟ 1 </h1>',
	})
];