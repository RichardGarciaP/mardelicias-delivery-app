import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import Icon from '@/shared/components/icon';
import {location, logout} from '@/shared/assets/icons';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {useSession, useUser} from '@supabase/auth-helpers-react';
import {signOut} from '@/shared/services/login/login';
import {storage} from '@/shared/helpers';
import {UserContext} from '@/context/UserContext';

export default function Header() {
  const {isDarkMode} = useDarkMode();
  const {navigate} = useNavigation<NavigationProps>();
  const {user} = React.useContext(UserContext);

  const closeSession = async () => {
    await signOut();
    storage.delete('user');
    storage.delete('session');
    navigate('login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          }}
        />
        <View>
          <Typography style={styles.nameUser} translate={false}>
            {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
          </Typography>
          <View style={styles.row}>
            <Icon customStyles={styles.iconLocation} icon={location} />
            <Typography style={styles.location} translate={false}>
              {user?.user_metadata?.city}
            </Typography>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={closeSession}>
          {isDarkMode ? (
            <Icon customStyles={styles.iconSize} icon={logout} />
          ) : (
            <Icon customStyles={styles.iconSize} icon={logout} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
