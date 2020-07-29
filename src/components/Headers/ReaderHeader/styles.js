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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '$modalBackground',
    height: scaledSize(650),
    justifyContent: 'space-around',
    paddingHorizontal: scaledSize(80),
  },
  label: {
    fontFamily: 'Circe',
    fontSize: scaledSize(42),
    color: '$regularText',
  },
  picker: {
    backgroundColor: '#1f2228',
    borderWidth: scaledSize(3),
    borderColor: '#e2eff9',
    width: scaledSize(150),
    height: scaledSize(84),
    borderRadius: scaledSize(20),
  },
  pickerLeft: {
    backgroundColor: 'white',
    marginHorizontal: scaledSize(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'space-around',
  },
  centerBlock: {
    flex: 1,
    marginHorizontal: scaledSize(20),
  },
  thumbStyle: {
    width: scaledSize(50),
    height: scaledSize(50),
  },
  fontBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaledSize(40),
  },
  fontSliderBlock: {
    flex: 1,
    marginHorizontal: scaledSize(40),
    zIndex: 10,
  },
  smallRound: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#df9964',
  },
  labelBlock: {
    paddingHorizontal: scaledSize(40),
    width: '100%',
    position: 'absolute',
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lBlock: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(30),
    color: '$regularText',
  },
  fontPicker: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(38),
    color: '$regularText',
  },
});
