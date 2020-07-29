import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';
import {fonts} from '../../../constants';

export default EStyleSheet.create({
  tagItemContainer: {
    marginRight: scaledSize(10),
    height: scaledSize(66),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaledSize(45),
    backgroundColor: '$tagsColor',
    marginVertical: scaledSize(8),
    paddingHorizontal: scaledSize(25),
  },

  tagsContainer: {
    marginVertical: scaledSize(10),
  },
  titleStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(30),
    color: '$headerText',
  },
  contentContainerStyle: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
