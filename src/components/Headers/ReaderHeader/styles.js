import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts} from '../../../constants';
import {scaledSize} from '../../../styles';

export default EStyleSheet.create({
  container: {
    paddingTop: scaledSize(80),
    paddingBottom: scaledSize(48),
    backgroundColor: '$headerBackground',
    borderBottomWidth: scaledSize(4),
    borderBottomColor: '$headerBorder',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaledSize(80),
  },
  title: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(48),
    color: '$headerText',
  },
  rightText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(40),
    color: '$headerText',
  },
  headerIcon: {
    width: scaledSize(64),
    height: scaledSize(64),
    marginHorizontal: scaledSize(25),
  },
  rightBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
