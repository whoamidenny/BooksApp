import EStyleSheet from 'react-native-extended-stylesheet';

import {fonts} from '../../constants';
import {scaledSize} from '../../styles';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  containerScroll: {
    flexGrow: 1,
    paddingHorizontal: scaledSize(80),
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaledSize(55),
    paddingVertical: scaledSize(35),
    borderRadius: scaledSize(66),
    backgroundColor: '$profileBlockBackground',
    height: scaledSize(220),
    marginVertical: scaledSize(70),
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(38),
    marginVertical: scaledSize(22),
    color: '$label',
  },
  link: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(38),
    color: '$label',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  username: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(48),
    color: 'white',
  },
  books: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(36),
    color: 'white',
  },
  profileInfoBlock: {
    borderRadius: scaledSize(90),
    borderWidth: 1,
    borderColor: '#dce8ee',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: scaledSize(55),
    justifyContent: 'center',
    paddingVertical: scaledSize(10),
    marginVertical: scaledSize(20),
  },
  profileInfoLabel: {
    color: '#0b1e35',
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(34),
    marginBottom: -scaledSize(30),
  },
  profileInfoValue: {
    color: '#0b1e35',
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(42),
  },
  inpContainerStyle: {
    borderBottomWidth: 0,
  },
});
