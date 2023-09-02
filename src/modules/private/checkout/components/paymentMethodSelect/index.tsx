import React, { useState } from "react";
import Select from "@/modules/private/checkout/components/select";
import { arrowBack, creditCardPlus, truck } from "@/shared/assets/icons";
import ButtonSheet from "@/shared/components/buttonSheet";
import { TouchableOpacity, View } from "react-native";
import { normalize } from "@/shared/helpers";
import Icon from "@/shared/components/icon";
import Typography from "@/shared/components/typography";
import ListOptionCard, { OptionCardOptions } from "@/shared/components/ListOptionCard";
import { Button } from "@/shared/components/buttons";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { semantic } from "@/shared/constants/colors";

export default function PaymentMethodSelect() {
  const {isDarkMode} = useDarkMode()
  const [openModal, setOpenModal] = useState(false)
  const [paymentSelected, setPaymentSelected] = useState<OptionCardOptions>();

  function onSelectPayment(option: OptionCardOptions) {
    setPaymentSelected(option)
  }
  function toggleModal() {
    setOpenModal(!openModal)
  }
  return (
    <View>
      <Select
        value={paymentSelected}
        callback={toggleModal}
        showChange={false}
        title={"general.chose_payment_method"}
        description={"general.method_type"}
        icon={creditCardPlus}
      />

      <ButtonSheet dispatch={openModal}>
        <View style={{padding: normalize(24)}}>
          <TouchableOpacity onPress={toggleModal} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon customStyles={{tintColor: isDarkMode ? semantic.fill.f04 : semantic.background.dark.d500}} icon={arrowBack} />
            <Typography style={{fontWeight: '700', fontSize: normalize(24), marginLeft: normalize(10)}}>{"checkout.select_shipping"}</Typography>
          </TouchableOpacity>

          <ListOptionCard
            value={paymentSelected}
            onChange={onSelectPayment}
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
