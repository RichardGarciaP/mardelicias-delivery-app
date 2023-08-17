import {
  dots,
  edit,
  eyeFilled,
  help,
  location,
  logout,
  notification,
  order,
  security,
  user,
  vocher,
  walletFilled,
} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';
import Typography from '@/shared/components/typography';
import Wrapper from '@/shared/components/wrapper';
import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Section from './components/section';
import Toggle from '@/shared/components/toggle';

import {styles} from './styles';
import {normalize} from '@/shared/helpers';
import {NavigationProps} from '@/shared/routes/stack';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(false);
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.profileText}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon icon={user} />
            <Typography
              style={{
                fontWeight: '700',
                fontSize: 24,
                marginLeft: normalize(10),
              }}>
              Profile
            </Typography>
          </View>
          <TouchableOpacity>
            <Icon icon={dots} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={styles.image}
              source={{uri: 'https://i.ibb.co/hZqwx78/049-girl-25.png'}}
            />
            <View
              style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
              <Typography style={{fontWeight: '700', fontSize: 16}}>
                Username
              </Typography>
              <Typography style={{fontWeight: '500', fontSize: 14}}>
                phone
              </Typography>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigate('editProfile')}>
            <Icon icon={edit} />
          </TouchableOpacity>
        </View>

        <Section
          title="General"
          elements={[
            {name: 'My Order', leftIcon: <Icon icon={order} />},
            {
              name: 'Vocher',
              leftIcon: <Icon icon={vocher} />,
              onPress: () => navigate('vouchers'),
            },
          ]}
        />

        <Section
          title="Account Setting"
          elements={[
            {name: 'Address', leftIcon: <Icon icon={location} />},
            {name: 'Payment methods', leftIcon: <Icon icon={walletFilled} />},
            {
              name: 'Dark Mode',
              leftIcon: <Icon icon={eyeFilled} />,
              rightElement: (
                <Toggle
                  isEnabled={toggleDarkMode}
                  setIsEnabled={setToggleDarkMode}
                />
              ),
            },
            {name: 'Logout', leftIcon: <Icon icon={logout} />},
          ]}
        />

        <Section
          title="App Setting"
          elements={[
            {name: 'Language', leftIcon: <Icon icon={order} />},
            {name: 'Notification', leftIcon: <Icon icon={notification} />},
            {name: 'Security', leftIcon: <Icon icon={security} />},
          ]}
        />

        <Section
          title="Support"
          elements={[{name: 'Help Center', leftIcon: <Icon icon={help} />}]}
        />
      </View>
    </Wrapper>
  );
};

export default Profile;
