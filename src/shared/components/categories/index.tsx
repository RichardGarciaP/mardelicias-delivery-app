import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import { CategoryDTO } from "@/shared/DTO";

interface CategoriesProps {
  categories: CategoryDTO[]
}
export default function Categories({categories}: CategoriesProps) {
  return (
    <View style={styles.listCategories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            return (
              <TouchableOpacity key={index} style={styles.parentContainer}>
                <View style={[styles.container, category.active && styles.containerActive ]}>
                  <Typography style={[styles.categoryName, category.active && styles.categoryNameActive]}>{category.name}</Typography>
                </View>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  );
}
