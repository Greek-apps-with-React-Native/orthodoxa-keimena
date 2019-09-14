import Module from '../models/module';
import Matthaion from './1_matthaion';
import MatthaionSmall from './1_matthaionSmall';
import Colors from '../constants/Colors';

export const MODULES = [
	new Module({
        id: 'module_1',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΜΑΤΘΑΙΟΝ',
        moduleText: Matthaion,
        moduleTextSmall: MatthaionSmall,
    }),
    new Module({
        id: 'module_2',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΜΑΡΚΟΝ',
        moduleText: '<h1> ΚΑΤΑ ΜΑΡΚΟΝ </h1>',
        moduleTextSmall: MatthaionSmall,

    }),
    new Module({
        id: 'module_3',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΛΟΥΚΑΝ',
        moduleText: '<h1> ΚΑΤΑ ΛΟΥΚΑΝ </h1>',
        moduleTextSmall: MatthaionSmall,
        
    }),
    new Module({
        id: 'module_4',
        moduleCategory: ['book_1'],
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΙΩΑΝΝΗΝ',
        moduleText: '<h1> ΚΑΤΑ ΙΩΑΝΝΗΝ</h1>',
        moduleTextSmall: MatthaionSmall,

	})
];