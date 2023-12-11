<template>
  <div class="app-container">
    <div class="register_container">
      <div class="register_context">
        <div style="display: flex;flex-direction: row">
          <ComputerLeft page-name="register" />
          <div class="context_form">
            <div class="register_title">
              {{ $t('loginModifyRegister.titleRegister') }}
            </div>
            <el-form ref="formRef" :model="form" :rules="rules">
              <el-form-item prop="email">
                <el-input
                  v-model.trim="form.email"
                  type="text"
                  clearable
                  :placeholder="$t('placeholder.accountEmail')"
                />
              </el-form-item>
              <el-form-item prop="verificationCode">
                <code-input
                  b-type="primary"
                  code-margin="50px"
                  v-model:value="form.verificationCode"
                  :placeholder="$t('placeholder.verificationCode')"
                  :code-disabled="disabledCodeBtn"
                  :code-loading="verificationCodeLoading"
                  :code-text="$t('loginModifyRegister.verificationCode')"
                  :code-wdith="'160px'"
                  @click-code="handleGetCode"
                  @codeValue="handleCodeValue"
                />
              </el-form-item>
              <el-form-item prop="password">
                <PasswordInput v-model="form.password" :placeholder="$t('placeholder.psw')" />
              </el-form-item>
              <!-- 二次确认密码 -->
              <el-form-item prop="repeatPassword">
                <PasswordInput v-model="form.repeatPassword" autocomplete="new-password" :placeholder="$t('placeholder.confirmPsw')" />
              </el-form-item>

              <div class="register_btn">
                <el-button
                  style="height: 46px"
                  type="primary"
                  class="w-100"
                  :loading="submitLoading"
                  @click="handleSubmit"
                >{{ $t('button.register') }}</el-button>
              </div>
              <div v-if="showSlider" class="d-flex justify-content-center">
                <slider-code ref="sliderRef" :log="true" @getImg="getImg" @validImg="validImg" @close="closeCaptcha" />
              </div>

              <div class="register_hint">
                                <el-checkbox v-model="form.check">
                  {{ $t("loginModifyRegister.read") }}
                  <el-button type="text" @click="handleServiceAgreement(1)">
                    《{{ $t("loginModifyRegister.agreementTitle") }}》
                  </el-button>
                  <el-button type="text" @click="handleServiceAgreement(2)">
                    《{{ $t("loginModifyRegister.privacyTitle") }}》
                  </el-button>
                </el-checkbox>
                <ServiceAgreementDialog
                  ref="service"
                  @close="serviceAgreementVisible = false"
                />
              </div>
            </el-form>
          </div>
        </div>
      </div>
      <!-- <div class="bottom_tip">
        <div>{{ $t('Modify.bottomFirstTip01') }} <span class="bottom_tip_place">（<a
          href="https://hi007.cc/"
          style="color:#4db0e5;"
          target="_blank"
        >HISEVEN PTE. LTD.</a>）</span>{{ $t('Modify.bottomFirstTip03') }}
        </div>
        <div>{{ $t('Modify.bottomSecondTip') }} </div>
        <div>{{ $t('Modify.bottomThirdTip') }} </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import ComputerLeft from "./components/ComputerLeft.vue";
import ServiceAgreementDialog from "@/components/ServiceAgreementDialog/index.vue";
import CodeInput from './components/CodeInput.vue'
import { emailReg } from '@/utils/regexp'
import PasswordInput from "@/components/PasswordInput/index.vue";

export default {
  components: {
    ComputerLeft,
    CodeInput,
    ServiceAgreementDialog,
    PasswordInput,
  },
  data() {
    return {
      form: {
        email: "",
        verificationCode: "",
        password:"",
        repeatPassword: '',
        check: false,
      },
      rules: {
        email: [
           { required: true, message: this.$t('placeholder.accountEmail'), trigger: "blur" },
            { pattern: emailReg, message: this.$t('placeholder.wrongFormat'), trigger: 'blur' }
           ],
        verificationCode: [ { required: true, message: this.$t('placeholder.verificationCode'), trigger: "blur" }, ],
        password: [{ required: true, validator: this.validatePassword }],
         repeatPassword: [{ required: true, validator: this.validateconfirmPsw }],
        check: [
          { required: true, message: this.$t('loginModifyRegister.readConfirm'), trigger: "blur" },
        ],
      },
      serviceAgreementVisible: false,
      submitLoading:false
    };
  },
  methods: {
    validatePassword(rule, value, callback) {
      if (!value) {
        callback(new Error(this.$t('message.noEmptyPsw')));
      } else if (value.length < 8) {
     callback(new Error(this.$t('message.pswLength')));
      } else {
        callback();
      }
    },
        validateconfirmPsw(rule, value, callback) {
      if (!value) {
        callback(new Error(this.$t('message.noEmptyPsw')));
      } else if (value !==  this.form.password) {
     callback(new Error(this.$t('message.secondaryPsw')));
      } else {
        callback();
      }
    },
    handleServiceAgreement(val) {
      this.$refs.service.hanleOpen(val);
    },
    handleSubmit(){
      this.$refs.formRef.validate((valid) => {
        if (!valid) {
          return false;
        }
        if (!this.form.check) {
          this.$message.error(this.$t("loginModifyRegister.readConfirm"));
          return;
        }
 
        this.submitLoading = true;
        setTimeout(() => {
          this.submitLoading = false;
          this.$router.push("/login");
        }, 2000);
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .register_container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
  .register_context {
    box-sizing: border-box;
     padding: 40px;
      height: 500px;
      border-radius: 10px;
      background: $whiteColor;
    .context_form{
      .register_title {
        margin-bottom: 50px;
        font-size: 32px;
        font-weight: 700;
        line-height: 46.34px;
      // // color: $grey3Color;
        font-family: "Microsoft YaHei", system-ui;
      }
      :deep(.el-form-item) {
        position: relative;
        margin-bottom: 50px;
        width: 500px;
        height: 46px;
        .el-input{
            .el-input__inner {
              padding-left: 22px;
              padding-right: 30px;
              height: 46px;
              font-size: 16px;
             // color: $grey6Color;
              // background-color: $f5Color;
          }
          input:-webkit-autofill{
           // -webkit-text-fill-color: $grey6Color !important;
            -webkit-box-shadow: 0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset !important;
          }
        }
      }
      .register_btn{
        &::v-deep .el-button{
            width: 100%;
            height: 46px;
            font-size: 24px;
           // color: $whiteColor;
            font-family: "Microsoft YaHei",system-ui;
            font-weight: 400;
            // background-color: $baseColor;
        }
      }
      .register_hint{
        margin-top: 10px;
      }
    }
  }
  .bottom_tip {
    text-align: center;
    position: absolute;
    bottom: 25px;
    opacity: 1;
    /** 文本1 */
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    font-family: "Microsoft YaHei", system-ui;

    .bottom_tip_place {
      cursor: pointer;
      color: rgba(32, 156, 223, 1);
    }
  }
}
.register_phone{
  padding: 30px 20px;
  &::v-deep .el-form{
    margin-top: 30px;
    .el-form-item{
      margin-bottom: 0;
    }
    .el-form-item__content{
      line-height: 60px;
      .el-input__inner{
        height: 60px;
        line-height: 60px;
        font-size: 14px;
       // color: $grey6Color;
        font-family: "Microsoft YaHei",system-ui;
        box-shadow:none;
        border-bottom: 1px solid #DDE7F0;
      }
      input:-webkit-autofill{
   //     -webkit-text-fill-color: $grey6Color !important;
        -webkit-box-shadow: none !important;
      }
      .el-button{
        background-color: transparent !important;
      }
    }
    .svg-icon{
      height: 60px;
    }
  }
  .register_operation{
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .register_operation_text{
      font-size: 14px;
      font-family: "Microsoft YaHei",system-ui;
      color: #656E75;
      a{
        margin-left: 2px;
        color: #209CDF;
        text-decoration: underline;
      }
    }
    >a{
      font-size: 14px;
      font-family: "Microsoft YaHei",system-ui;
      color: #656E75;
    }
  }
  .register_btn{
    display: flex;
    justify-content: center;
    margin-top: 58px;
    &::v-deep .el-button{
      width: calc(100% - 15px);
      height: 44px;
      font-size: 16px;
     // color: $whiteColor;
      font-family: "Microsoft YaHei",system-ui;
      border-radius: 44px;
      // background-color: $baseColor;
    }
  }
  .d-flex{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: 99;
  }
  .register_hint{
    margin-top: 20px;
    margin-left: 15px;
  }
}
@media screen and (min-width: 500px) {
  .register_container{
    display: flex;
  }
  .register_phone{
    display: none;
  }
}
@media screen and (max-width:500px) {
  .register_container{
    display: none;
  }
  .register_phone{
    display: block;
  }
}
}

</style>
