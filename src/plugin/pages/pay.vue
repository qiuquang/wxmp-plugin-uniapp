<template>
  <view>
    <button @click="pay">支付0.01元</button>
  </view>
</template>

<script>
export default {
  components: {},

  onLoad (option) {
    this.orderSn = option?.orderSn
  },
  data() {
    return {
      orderSn: '',
      test: false,
    };
  },
  methods: {
    pay() {
      wx.requestPluginPayment({
        version: "develop",
        fee: 1,
        paymentArgs: {orderSn: this.orderSn},
        currencyType: "CNY",
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log(res);
        },
      });
    },
  },
  mounted() {},
};
</script>
