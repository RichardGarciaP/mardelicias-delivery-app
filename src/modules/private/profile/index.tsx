import {
  arrowBack,
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
import ButtonSheet from '@/shared/components/buttonSheet';
import ListOptionCard, {
  OptionCardOptions,
} from '@/shared/components/ListOptionCard';
import {Button} from '@/shared/components/buttons';

const Profile = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(false);
  const {navigate} = useNavigation<NavigationProps>();

  const [openModal, setOpenModal] = useState(false);
  const [addressSelected, setAddressSelected] = useState<OptionCardOptions>();

  function onSelectAddress(option: OptionCardOptions) {
    setAddressSelected(option);
  }
  function toggleModal() {
    setOpenModal(!openModal);
  }

  function navigateToNewAddress() {
    toggleModal();
    navigate('addNewAddress');
  }

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
            {
              name: 'Address',
              leftIcon: <Icon icon={location} />,
              onPress: () => toggleModal(),
            },
            {
              name: 'Payment methods',
              leftIcon: <Icon icon={walletFilled} />,
              onPress: () => navigate('payments'),
            },
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

        <ButtonSheet dispatch={openModal}>
          <View style={{padding: normalize(24)}}>
            <TouchableOpacity
              onPress={toggleModal}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon icon={arrowBack} />
              <Typography
                style={{
                  fontWeight: '700',
                  fontSize: normalize(24),
                  marginLeft: normalize(10),
                }}>
                {'general.address'}
              </Typography>
            </TouchableOpacity>

            <ListOptionCard
              value={addressSelected}
              onChange={onSelectAddress}
              options={[
                {
                  id: '1',
                  icon: location,
                  title: 'Home',
                  description: 'Snow Street, San Francisco, California 42343',
                  active: false,
                },
                {
                  id: '2',
                  icon: location,
                  title: 'Parent House',
                  description:
                    'Snow Street, San Francisco, California 423433123',
                  active: false,
                },
              ]}
            />

            <Button onPress={navigateToNewAddress} title="Add New Address" />
          </View>
        </ButtonSheet>
      </View>
    </Wrapper>
  );
};

export default Profile;
