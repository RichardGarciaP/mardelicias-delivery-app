import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { arrowBack, truck } from "@/shared/assets/icons";
import Select from "@/modules/private/checkout/components/select";
import { normalize } from "@/shared/helpers";
import Icon from "@/shared/components/icon";
import Typography from "@/shared/components/typography";
import ListOptionCard, { Option, OptionCardOptions } from "@/shared/components/ListOptionCard";
import { Button } from "@/shared/components/buttons";
import ButtonSheet from "@/shared/components/buttonSheet";

export default function ShippingSelect() {
  const [openModal, setOpenModal] = useState(false)
  const [shippingSelected, setShippingSelected] = useState<OptionCardOptions>();

  function onSelectAddress(option: OptionCardOptions) {
    setShippingSelected(option)
  }
  function toggleModal() {
    setOpenModal(!openModal)
  }
  return (
    <View>
      <Select
        value={shippingSelected}
        callback={toggleModal}
        showChange={!!shippingSelected}
        title={"general.chose_shipping"}
        description={"general.shipping_type"}
        icon={truck}
      />

      <ButtonSheet dispatch={openModal}>
        <View style={{padding: normalize(24)}}>
          <TouchableOpacity onPress={toggleModal} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon icon={arrowBack} />
            <Typography style={{fontWeight: '700', fontSize: normalize(24), marginLeft: normalize(10)}}>{"checkout.select_shipping"}</Typography>
          </TouchableOpacity>

          <ListOptionCard
            value={shippingSelected}
            onChange={onSelectAddress}
            options={
              [
                {
                  id: '1',
                  icon: truck,
                  title: 'Economy',
                  description: 'Estimated Arrival, Mei  30-31',
                  active: true,
                  price: '10',
                },
                {
                  id: '2',
                  icon: truck,
                  title: 'Express',
                  description: 'Estimated Arrival, Mei  30-31',
                  active: false,
                  price: '30',
                },
                {
                  id: '3',
                  icon: truck,
                  title: 'Reguler',
                  description: 'Estimated Arrival, Mei  30-31',
                  active: false,
                  price: '15',
                },
                {
                  id: '4',
                  icon: truck,
                  title: 'Cargo',
                  description: 'Estimated Arrival, Mei  30-31',
                  active: false,
                  price: '20',
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
