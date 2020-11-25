export default class StringUtil {
  static convertKoreanWonFormat = (x) => {
    if (!x) return '';
    let parts = parseInt(x, 10).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  static convertPhoneNumberWithDash = (phone) => {
    if (!phone) return '';
    const phoneNumber = phone.replace(/-/g, '');
    const areaCode = phoneNumber.substr(0, 3);
    const length = phoneNumber.length;

    // exception for 2 digit area code
    if (areaCode.indexOf('02') !== -1) {
      if (length >= 3 && length <= 6) {
        return phoneNumber.replace(/(\d{2})(\d)/, '$1-$2');
      }

      if (length > 6 && length < 10) {
        return phoneNumber.replace(/(\d{2})(\d{3})(\d)/, '$1-$2-$3');
      }

      if (length >= 10) {
        return phoneNumber.substr(0, 10).replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      }
    }

    // phone or cell convert dash number
    if (length >= 3 && length <= 6) {
      return phoneNumber.replace(/(\d{3})(\d)/, '$1-$2');
    }

    if (length > 6 && length <= 10) {
      return phoneNumber.replace(/(\d{3})(\d{3})(\d)/, '$1-$2-$3');
    }

    if (length >= 11) {
      return phoneNumber.substr(0, 11).replace(/(\d{3})(\d{4})(\d)/, '$1-$2-$3');
    }

    return phoneNumber;
  }

  static convertNumber = (str) => str.replace(/\D/g, '');

  static convertDiscountAmountToKorean = (amount) => {
    const stringNumbers = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    const unitNumbers = ['', '십', '백', '천', '', '십', '백', '천', '', '십', '백', '천', '', '십', '백', '천'];
    const data = amount.toString().split('');
    let korean = '';

    for (const [index, value] of data.reverse().entries()) {
      const koreanNumber = stringNumbers[Number(value)];
      let concatString = '';

      if (koreanNumber === '일') {
        concatString += unitNumbers[index];
      } else if (koreanNumber !== '') {
        concatString += (value + unitNumbers[index]);
      }
      if (index === 4) {
        concatString += '만';
      }
      if (index === 8) {
        concatString += '억';
      }
      if (index === 12) {
        concatString += '조';
      }
      korean = concatString + korean;
    }

    return korean;
  }
}
