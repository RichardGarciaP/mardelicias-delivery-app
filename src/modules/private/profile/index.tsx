import {dots, edit, user} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';
import Typography from '@/shared/components/typography';
import Wrapper from '@/shared/components/wrapper';
import {normalize} from '@/shared/helpers';
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

const Profile = () => {
  return (
    <Wrapper>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon icon={user} />
          <Typography>Profile</Typography>
        </View>
        <TouchableOpacity>
          <Icon icon={dots} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: normalize(40),
              height: normalize(40),
              marginRight: normalize(12),
            }}
            source={{uri: 'https://i.ibb.co/hZqwx78/049-girl-25.png'}}
          />
          <View>
            <Typography>Username</Typography>
            <Typography>phone</Typography>
          </View>
        </View>
        <TouchableOpacity>
          <Icon icon={edit} />
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};

export default Profile;
