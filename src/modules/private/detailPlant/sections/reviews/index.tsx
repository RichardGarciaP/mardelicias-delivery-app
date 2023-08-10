import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import HeaderWithIcon from "@/shared/components/headerBack";
import FilterStarReview from "@/modules/private/detailPlant/components/filterStarReview";
import { ScrollView, View } from "react-native";
import Review from "@/modules/private/detailPlant/components/review";
import { normalize } from "@/shared/helpers";

export default function Reviews() {

  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: normalize(24)}}>
        <HeaderWithIcon title="4.8 (5342 Review )" />
        <FilterStarReview />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </ScrollView>
    </Wrapper>
  )
}
