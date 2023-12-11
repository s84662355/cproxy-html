<template>
  <div class="app-container">
    <div class="login_container">
      <div class="login_context">
        <div style="display: flex; flex-direction: row">
          <ComputerLeft page-name="login" />
          <div class="context_form">
            <div class="login_title">
              {{ $t("loginModifyRegister.loginTitle") }}
            </div>
            <el-form ref="formRef" :model="form" :rules="rules">
              <el-form-item prop="username">
                <el-input
                  v-model.trim="form.username"
                  autocomplete="username"
                  type="text"
                  clearable
                  :placeholder="$t('placeholder.account')"
                />
              </el-form-item>
              <el-form-item prop="password">
                <PasswordInput
                  v-model="form.password"
                  :placeholder="$t('placeholder.psw')"
                  @handleLogin="handleLogin"
                />
              </el-form-item>
              <div class="login_btn">
                <el-button
                  type="primary"
                  :loading="loading"
                  @click="handleLogin"
                >
                  {{ $t("button.login") }}
                </el-button>
              </div>
              <div class="login_hint">
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
              <div class="login_retrieve">
                <router-link :to="{ path: '/forgot-password' }"
                  ><span
                    >{{ $t("loginModifyRegister.forgotPassword") }}?</span
                  ></router-link
                >
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ComputerLeft from "./components/ComputerLeft.vue";
import ServiceAgreementDialog from "@/components/ServiceAgreementDialog/index.vue";
import PasswordInput from "@/components/PasswordInput/index.vue";
import { GoLogin,GetUserInfo } from '@/utils/api'
export default {
  components: {
    ComputerLeft,
    ServiceAgreementDialog,
    PasswordInput,
  },
  data() {
    return {
      form: {
        username: "1329",
        password: "12345678",
        type: 1,
        check: true,
      },
      lastloginTime:0,
      rules: {
        username: [
          {
            required: true,
            message: this.$t("placeholder.account"),
            trigger: "blur",
          },
        ],
        password: [{ required: true, validator: this.validatePassword }],
        check: [
          {
            required: true,
            message: this.$t("loginModifyRegister.readConfirm"),
            trigger: "blur",
          },
        ],
      },
      serviceAgreementVisible: false,
      loading: false,
    };
  },
  methods: {
    validatePassword(rule, value, callback) {
      if (!value) {
        callback(new Error(this.$t("message.noEmptyPsw")));
      } else if (value.length < 8) {
        callback(new Error(this.$t("message.pswLength")));
      } else {
        callback();
      }
    },
    handleServiceAgreement(val) {
      this.$refs.service.hanleOpen(val);
    },
    handleLogin() {
      
      if(new Date().getTime()-this.lastloginTime<2000){
          return 
      } 
      this.lastloginTime=new Date().getTime()
      this.loginIng=true
      let that = this
 
      this.$refs.formRef.validate((valid) => {
            if (!valid) {
              return false;
            }
            if (!this.form.check) {
              this.$message.error(this.$t("loginModifyRegister.readConfirm"));
              return;
            }
            GoLogin(this.form.username, this.form.password,true, function (message) {
                   that.loginIng=false
                   if (message.error) {
                        that.$message({
                            message: message.data,
                            type: 'warning',
                            duration:1000
                        });
                        return
                   }

                   GetUserInfo(function(message){
                         if (message.error) {
                              that.$message({
                                  message: message.data,
                                  type: 'warning',
                                  duration:1000
                              });
                              return
                         }
                          
                         that.$.appContext.config.globalProperties.$isLogin=true
                         that.$.appContext.config.globalProperties.$UserInfo=message.data
                         that.$router.push("/dynamicIp");
                         console.log(that.$.appContext.config.globalProperties.$UserInfo)   
                   })
            }) 
      });
 
    },
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    .login_context {
      box-sizing: border-box;
      padding: 40px;
      height: 500px;
      border-radius: 10px;
      background: $whiteColor;
      .context_form {
        .login_title {
          margin: 50px 0;
          margin-top: 70px;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 46.34px;
          color: rgba(51, 51, 51, 1);
          text-align: left;
          vertical-align: top;
          font-family: "Microsoft YaHei", system-ui;
        }
      }
      :deep(.el-form-item) {
        margin-bottom: 40px;
        width: 500px;
        height: 46px;
        .el-input {
          .el-input__inner {
            padding-left: 22px;
            padding-right: 30px;
            height: 46px;
            font-size: 16px;
          }
          input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1px
              var(--el-input-border-color, var(--el-border-color)) inset !important;
          }
        }
      }
      .login_btn {
        &::v-deep .el-button {
          width: 100%;
          height: 46px;
          font-size: 24px;
          font-family: "Microsoft YaHei", system-ui;
          font-weight: 400;
        }
      }
      .login_hint {
        margin-top: 10px;
        margin-bottom: 19px;
      }
      .login_retrieve {
        text-align: right;
        font-size: 14px;
        span {
          color: $color999999;
        }
      }
    }
  }
  .login_phone {
    padding: 30px 20px;
    &::v-deep .el-form {
      margin-top: 30px;
      .el-form-item {
        margin-bottom: 0;
      }
      .el-form-item__content {
        line-height: 60px;
        .el-input__inner {
          height: 60px;
          line-height: 60px;
          font-size: 14px;
          font-family: "Microsoft YaHei", system-ui;
          box-shadow: none;
          border-bottom: 1px solid #dde7f0;
        }
        input:-webkit-autofill {
          -webkit-box-shadow: none !important;
        }
      }
      .svg-icon {
        height: 60px;
      }
    }
    .login_operation {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .login_operation_text {
        font-size: 14px;
        font-family: "Microsoft YaHei", system-ui;
        color: #656e75;
        a {
          margin-left: 2px;
          color: #209cdf;
          text-decoration: underline;
        }
      }
      > a {
        font-size: 14px;
        font-family: "Microsoft YaHei", system-ui;
        color: #656e75;
      }
    }
    .login_btn {
      display: flex;
      justify-content: center;
      margin-top: 178px;
      &::v-deep .el-button {
        width: calc(100% - 15px);
        height: 44px;
        font-size: 16px;
        font-family: "Microsoft YaHei", system-ui;
        border-radius: 44px;
      }
    }
    .login_hint {
      margin-top: 20px;
      margin-left: 15px;
    }
  }
  @media screen and (min-width: 500px) {
    .login_container {
      display: flex;
    }
    .login_phone {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .login_container {
      display: none;
    }
    .login_phone {
      display: block;
    }
  }
}
</style>
