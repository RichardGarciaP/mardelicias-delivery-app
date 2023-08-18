import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ListOptionCard, { Option } from "@/shared/components/ListOptionCard";
import TitleSection from "@/modules/private/checkout/components/titleSection";
import { arrowBack, location } from "@/shared/assets/icons";
import ButtonSheet from "@/shared/components/buttonSheet";
import Typography from "@/shared/components/typography";
import { Button } from "@/shared/components/buttons";
import { normalize } from "@/shared/helpers";
import Icon from "@/shared/components/icon";

export default function AddressSelect() {
  const [openModal, setOpenModal] = useState(false)

  function toggleModal() {
    setOpenModal(!openModal)
  }
  return (
    <View>
      <TitleSection callback={toggleModal} title={"general.address"} />
      <Option option={{
        id: '1',
        icon: location,
        title: 'Home',
        description: 'Snow Street, San Francisco, California 42343',
        active: true
      }} />

      <ButtonSheet dispatch={openModal}>
        <View style={{padding: normalize(24)}}>
          <TouchableOpacity onPress={toggleModal} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon icon={arrowBack} />
            <Typography style={{fontWeight: '700', fontSize: normalize(24), marginLeft: normalize(10)}}>{"general.address"}</Typography>
          </TouchableOpacity>

          <ListOptionCard options={
            [
              {
                id: '1',
                icon: location,
                title: 'Home',
                description: 'Snow Street, San Francisco, California 42343',
                active: true
              },
              {
                id: '2',
                icon: location,
                title: 'Parent House',
                description: 'Snow Street, San Francisco, California 423433123',
                active: false
              },
            ]
          } />

          <Button title="general.continue" />
        </View>
      </ButtonSheet>
    </View>
  )
}
