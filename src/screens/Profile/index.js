import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Switch,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch, useSelector} from 'react-redux';
import {themeActions} from '../../redux/themes';
import {DefaultHeader} from '../../components/Headers';

import {BaseBlock, MainBlock} from '../../components/Blocks';

import styles from './styles';
import {scaledSize} from '../../styles';

import {getUserProfile} from '../../redux/auth/actions';
import {authSelectors} from '../../redux/auth';
import Loader from '../../components/Loader';

const ProfileInput = ({...props}) => (
  <Input
    {...props}
    labelStyle={styles.profileInfoLabel}
    inputStyle={styles.profileInfoValue}
    inputContainerStyle={styles.inpContainerStyle}
    containerStyle={styles.profileInfoBlock}
    renderErrorMessage={false}
  />
);

function Profile({navigation}) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const uName = useSelector((state) => authSelectors.selectUsername(state));
  const uEmail = useSelector((state) => authSelectors.selectEmail(state));
  const userProfile = useSelector((state) =>
    authSelectors.selectUserProfileData(state),
  );

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('123456778900');

  const [isActive, setDarkThemeActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const themeName = theme.$theme;

    setDarkThemeActive(themeName === 'light' ? false : true);

    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    setFullName(uName);
    setEmail(uEmail);
  }, [uName, uEmail]);

  function onChangeTheme() {
    const themeName = theme.$theme;

    setLoading(true);
    dispatch(
      themeActions.changeThemeMode(themeName === 'light' ? 'dark' : 'light'),
    );
    if (themeName === 'dark') {
      Platform.OS === 'android'
        ? StatusBar.setBackgroundColor('#f1f9ff')
        : null;
      StatusBar.setBarStyle('dark-content');
    } else {
      Platform.OS === 'android'
        ? StatusBar.setBackgroundColor('#1d2c3f')
        : null;

      StatusBar.setBarStyle('light-content');
    }

    setDarkThemeActive(!isActive);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return !loading ? (
    <BaseBlock>
      <StatusBar
        barStyle={theme.$theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.$background}
      />
      <DefaultHeader title="Profile" rightTitle="SAVE" />
      <KeyboardAwareScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.profileContainer}>
          <Avatar
            source={
              userProfile.thumbnail
                ? {uri: userProfile.thumbnail}
                : require('../../assets/images/avatar.png')
            }
            rounded
            size={scaledSize(151)}
            containerStyle={{marginRight: scaledSize(71)}}
          />
          <View style={{flex: 1}}>
            <Text style={styles.username}>{uName}</Text>
            <Text style={styles.books}>11 books read</Text>
          </View>
        </View>

        <ProfileInput
          label="Full name"
          editable={false}
          value={fullname}
          onChangeText={(text) => setFullName(text)}
        />

        <ProfileInput
          label="Email"
          editable={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <ProfileInput
          secureTextEntry
          editable={false}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.rowItem}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch value={isActive} onValueChange={() => onChangeTheme()} />
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.label}>Notifications</Text>
          <Switch />
        </View>
        <View style={[styles.rowItem, {marginVertical: scaledSize(88)}]}>
          <Text style={styles.link}>About Popcorn Books</Text>
          <Text style={styles.link}>Privacy policy</Text>
        </View>
      </KeyboardAwareScrollView>
    </BaseBlock>
  ) : (
    <Loader />
  );
}

export default Profile;
