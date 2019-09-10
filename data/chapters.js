import Chapter from '../models/chapter';
import Colors from '../constants/Colors';

export const CHAPTERS = [
	new Chapter({
        id: 'chap1',
        color: Colors.lightyellow,
		title: 'Κεφάλαιο α΄',
		subTitle: ['Γενεαλογία τοῦ ᾿Ιησοῦ Χριστοῦ', 'Γέννησις τοῦ ᾿Ιησοῦ Χριστοῦ'],
    }),
    new Chapter({
        id: 'chap2',
        color: Colors.lightyellow,
		title: 'Κεφάλαιο β΄',
		subTitle: 'Γενεαλογία τοῦ ᾿Ιησοῦ Χριστοῦ',
	})
];