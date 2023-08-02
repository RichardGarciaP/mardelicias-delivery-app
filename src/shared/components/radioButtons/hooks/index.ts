import {useState} from 'react';
import {RadioButtonOption} from '@/shared/components/radioButton';

export interface RadioButtonResponse {
  id: string;
  label: string;
}
interface RadioButtonOptionsHook {
  options: RadioButtonOption[];
  onChange?: (optionSelected: RadioButtonResponse) => void;
}
export default function useRadioButtons({
  options,
  onChange,
}: RadioButtonOptionsHook) {
  const [myOptions, setMyOptions] = useState(options);
  function onHandleSelect(optionSelected: RadioButtonOption) {
    setMyOptions(
      options.map(option => {
        if (option.id === optionSelected.id) {
          return {...option, active: true};
        }
        return {...option, active: false};
      }),
    );
    if (onChange) {
      onChange({
        ...optionSelected,
        id: optionSelected.id,
        label: optionSelected?.label || '',
      });
    }
  }
  return {
    myOptions,
    onHandleSelect,
  };
}
