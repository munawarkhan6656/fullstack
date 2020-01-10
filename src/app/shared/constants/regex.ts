export const regex = {
  regexExpression: {
    tareWeight: '^\\d\{1,7}(\\.\\d{1,2})?$',
    positiveNumber: '^\\+?(0|[0-9]\\d*)$',
    positiveFloatNumber: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
    patternNineTwoAll: /^(-)?\d{0,7}(\.\d{0,2})?$/,
    patternNineTwo: /^\d{0,7}(\.\d{0,2})?$/,
    patternNineFour: /^\d{0,5}(\.\d{0,4})?$/,
    patternNineZero: /^\d{0,9}$/,
    noDecimal: /^[0-9]*$/,
    phone: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3}|[A-Z]{3})[-. )]*)?((\d{3}|[A-Z]{3})[-. ]*(\d{2,4}||[A-Z]{2,4})(?:[-.x ]*(\d+))?)\s*$/,
    url: /^^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  }
};

