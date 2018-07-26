import { sample } from 'lodash/fp';

import bullet1 from '../assets/ink_blot_1.svg';
import bullet2 from '../assets/ink_blot_2.svg';
import bullet3 from '../assets/ink_blot_3.svg';
import bullet4 from '../assets/ink_blot_4.svg';
import bullet5 from '../assets/ink_blot_5.svg';
import bullet6 from '../assets/ink_blot_6.svg';


const allBullets = [ bullet1, bullet2, bullet3, bullet4, bullet5, bullet6];

const randomBullet = () => (sample(allBullets));

export default randomBullet;
