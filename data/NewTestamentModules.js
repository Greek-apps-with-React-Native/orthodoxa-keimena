import NewTestamentModule from '../models/NewTestamentModule';
import Colors from '../constants/Colors';

export const MODULES = [
	new NewTestamentModule({
        id: 'module_1',
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΜΑΤΘΑΙΟΝ',
    }),
    new NewTestamentModule({
        id: 'module_2',
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΜΑΡΚΟΝ',
    }),
    new NewTestamentModule({
        id: 'module_3',
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΛΟΥΚΑΝ',
    }),
    new NewTestamentModule({
        id: 'module_4',
        color: Colors.lightyellow,
        heading: 'ΚΑΤΑ ΙΩΑΝΝΗΝ',
	})
];