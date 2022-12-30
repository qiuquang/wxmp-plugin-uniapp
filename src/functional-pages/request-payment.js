exports.beforeRequestPayment = function (paymentArgs, callback) {
  // 注意：
  // 功能页函数（这个函数）不应 require 其他非 functional-pages 目录中的文件，
  // 其他非 functional-pages 目录中的文件也不应 require 这个目录中的文件，
  // 这样的 require 调用在未来将不被支持。
  //
  // 同在 functional-pages 中的文件可以 require
  console.log(paymentArgs);

  const payargs = {
    package: 'prepay_id=wx30172620374546dcd292b78d6417360000',
    appid: 'wx1d6feb8b7a528465',
    sign:
      'Y7Lg2C0htIkonWMjgl514TVf7rRG10Olm0Uo6OAdikBHvqJbXNLkzNBOcDeJBb8LkJUrpnDsCgVuCc62KdQbvYGHmx62OtzX3P0nQi7JRE/l5At5zfUpO3LwvAJNkBblYoF1+LphWzM5JtbKHiuHl4c3HKqyv0NNlVBr6g9QaORossrC+0I/fpuXeqj5+GBMhk/h4dWcYDJw0DFNNjhSMGhF12VHeMOz8pEZ15edROh2+NMoXPk2z6e6vuTOfPO2J8yZFm9T7aNJflC4/0gjygsoDG6hstR+Ua6fKa4NrkLhK2hAOIN2ogfPgwDOEhfHL719nDak4a8Q0tUQremMdw==',
    signType: 'RSA',
    noncestr: 'b3adf22ea3af40eba113e682ce00f349',
    timestamp: '1672392380'
  }
  let error = null
  var requestPaymentArgs = {
    timeStamp: payargs.timestamp,
    nonceStr: payargs.noncestr,
    package: payargs.package,
    signType: payargs.signType,
    paySign: payargs.sign,
    extraData: {
      // 用 extraData 传递自定义数据
      timeStamp: payargs.timestamp
    }
  }
  callback(error, requestPaymentArgs)
};
