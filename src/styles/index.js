//width: 1125px;
//height: 2436px;
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 1125;
const baseHeight = 2436;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = (size) => Math.ceil(size * scale);
