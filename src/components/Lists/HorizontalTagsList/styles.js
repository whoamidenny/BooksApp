import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';
import {fonts} from '../../../constants';

export default EStyleSheet.create({
  tagItemContainer: {
    marginLeft: scaledSize(50),
    width: scaledSize(225),
    height: scaledSize(90),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaledSize(45),
  },
  firstTagItemContainer: {
    marginRight: scaledSize(50),
    marginLeft: scaledSize(80),
  },

  tagSelected: {
    backgroundColor: '$tagsColor',
  },
  tagsContainer: {
    marginVertical: scaledSize(10),
    paddingRight: scaledSize(40),
  },

  titleStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(48),
    color: '$headerText',
    marginLeft: scaledSize(80),
    marginBottom: scaledSize(10),
  },
  category: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(40),
    color: '$regularText',
  },
  categorySelected: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(40),
    color: '#0b1e35',
  },
});
