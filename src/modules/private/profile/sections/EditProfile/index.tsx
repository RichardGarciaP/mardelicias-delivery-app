import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import Icon from '@/shared/components/icon';
import {edit, mail, phone, user} from '@/shared/assets/icons';
import Input from '@/shared/components/input';
import {Button} from '@/shared/components/buttons';
import {_styles} from './styles';

const EditProfile = () => {
  return (
    <Wrapper>
      <View style={_styles.container}>
        <HeaderWithIcon title="Edit Profile" />
        <View style={_styles.imageContainer}>
          <Image
            style={_styles.image}
            source={{uri: 'https://i.ibb.co/hZqwx78/049-girl-25.png'}}
          />
          <TouchableOpacity style={_styles.editImage}>
            <Icon icon={edit} />
          </TouchableOpacity>
        </View>
        <View style={_styles.formContainer}>
          <Input label="Full Name" leftIcon={<Icon icon={user} />} />
          <Input label="Email" leftIcon={<Icon icon={mail} />} />
          <Input label="Phone" leftIcon={<Icon icon={phone} />} />
          <Input label="Gender" leftIcon={<Icon icon={user} />} />
        </View>
        <Button title="Submit" />
      </View>
    </Wrapper>
  );
};

export default EditProfile;
