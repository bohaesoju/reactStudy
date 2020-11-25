import * as React from 'react';
import StringUtil from '../../utils/StringUtil';

const getFormattedValue = (type, value) => {
  switch (type) {
    case 'PHONE':
      return StringUtil.convertPhoneNumberWithDash(StringUtil.convertNumber(value.trim()));
    case 'NUMBER':
      return StringUtil.convertNumber(value.trim());
    case 'KR_WON':
      return StringUtil.convertKoreanWonFormat(StringUtil.convertNumber(value.trim()));
    case 'TEXT':
      return value.trim();
    case 'TEXTAREA':
      return value;
  }
};

export const useInputChange = (type, initialValue = '')  => {
  const [value, setValue] = React.useState(getFormattedValue(type, initialValue));
  const handleChange = (event, resetValue) => {
    if (event) {
      setValue(getFormattedValue(type, event.target.value));
      return;
    }
    setValue(getFormattedValue(type, resetValue ? resetValue : ''));
  };

  return [value, handleChange];
};
