import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ListOptionCard, { Option, OptionCardOptions } from "@/shared/components/ListOptionCard";
import TitleSection from "@/modules/private/checkout/components/titleSection";
import { arrowBack, location } from "@/shared/assets/icons";
import ButtonSheet from "@/shared/components/buttonSheet";
import Typography from "@/shared/components/typography";
import { Button } from "@/shared/components/buttons";
import { normalize } from "@/shared/helpers";
import Icon from "@/shared/components/icon";

export default function AddressSelect() {
  const [openModal, setOpenModal] = useState(false)
  const [addressSelected, setAddressSelected] = useState<OptionCardOptions>();

  function onSelectAddress(option: OptionCardOptions) {
    setAddressSelected(option)
  }
  function toggleModal() {
    setOpenModal(!openModal)
  }

  return (
    <View>
      <TitleSection showChange={!!addressSelected} callback={toggleModal} title={"general.address"} />
      {addressSelected ? (
        <Option option={{
          id: addressSelected.id,
          icon: addressSelected.icon,
          title: addressSelected.title,
          description: addressSelected.description,
          active: true
        }} />
      ) : (
        <TouchableOpacity onPress={toggleModal} style={{width: '100%', height: 100, justifyContent: 'center'}}>
          <Typography style={{textAlign: 'center'}}>Select address</Typography>
        </TouchableOpacity>
      )}

      <ButtonSheet dispatch={openModal}>
        <View style={{padding: normalize(24)}}>
          <TouchableOpacity onPress={toggleModal} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon icon={arrowBack} />
            <Typography style={{fontWeight: '700', fontSize: normalize(24), marginLeft: normalize(10)}}>{"general.address"}</Typography>
          </TouchableOpacity>

          <ListOptionCard
            value={addressSelected}
            onChange={onSelectAddress}
            options={
              [
                {
                  id: '1',
                  icon: location,
                  title: 'Home',
                  description: 'Snow Street, San Francisco, California 42343',
                  active: false
                },
                {
                  id: '2',
                  icon: location,
                  title: 'Parent House',
                  description: 'Snow Street, San Francisco, California 423433123',
                  active: false
                },
              ]
            }
          />

          <Button onPress={toggleModal} title="general.continue" />
        </View>
      </ButtonSheet>
    </View>
  )
}
