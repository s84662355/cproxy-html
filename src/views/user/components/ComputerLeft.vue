<template>
  <div class="computer_left">
    <img src="@/assets/logo/007.png" alt="" class="left_big_image" />
    <img src="@/assets/logo/hiseven.png" alt="" class="left_small_image" />
    <p class="left_text_common account_remark">
      {{ $t('loginModifyRegister.leftAccountTip') }}
    </p>
    <div v-if="pageName == 'register' || pageName == 'forget'" class="left_text_common has_account">
      {{ $t('loginModifyRegister.alreadyHaveAnAccount') }}
      <router-link :to="{ name: 'Login' }" class="text-primary">{{ $t('loginModifyRegister.login') }}</router-link>
    </div>
    <div v-if="pageName == 'login'" class="left_text_common has_account">
      {{ $t('loginModifyRegister.noAccount') }},
      <router-link :to="{ name: 'Register' }" class="text-primary">{{ $t('loginModifyRegister.toRegister') }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComputerLeft',
  props: {
    pageName: {
      type: String,
      default: ''
    },

  },
  data() {
    return {
      password: this.value,
      inputType: this.type
    }
  },
  watch: {

  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>
.computer_left{
    display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 124px;
        padding-top: 20px;

        .left_big_image {
          width: 180px;
          height: 180px;
        }
        .left_small_image {
          margin-top: 32px;
          margin-bottom: 50px;
          height: 43px;
          width: 220px
        }

        .account_remark {
          font-weight: bold;
          line-height: 30px;
          vertical-align: top;
          margin-bottom: 50px;
        }

        .has_account {
          font-weight: bolder;
          line-height: 23.17px;

          .to_login {
            cursor: pointer;
            color: rgba(32, 156, 223, 1);
          }
        }
        .left_text_common {
          width: 240px;
          text-align: center;
          font-size: 14px;
          color: $blackColor;
          .text-primary{
            color: $baseColor;
          }
        }
}
</style>
