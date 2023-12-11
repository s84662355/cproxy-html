<!--
 * @Description: CodeInput 验证码输入框
 * @Author: Lin Jiexin
 * @Date: 2020-09-11 19:41:21
 * @LastEditTime: 2023-10-12 12:28:05
 * @LastEditors: Zheng Canbin
 * @Document: @/docs/component/CodeInput.md       @keyup.enter.native="handleEnter"
-->

<template>
  <div class="code-input">
    <el-input
      ref="codeInput"
      v-model.trim="codeValue"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      clearable
      @change="handleValueChange"

    />
    <el-button
      v-if="!link"
      class="btn-verification-code"
      type="primary"
      :disabled="codeDisabled || !!code.countdown"
      :loading="codeLoading"
      :style="{ width: codeWdith }"
      @click="handleClickCodeBtn"
    >
      {{ codeText }}
      <span v-if="code.countdown" v-cloak class="timer">({{ code.countdown }}s)</span>
    </el-button>
    <el-button
      v-else
      type="primary"
      link
      :disabled="disabled"
      :loading="codeLoading"
      :style="{ width: codeWdith }"
      class="link-verification-code"
      @click="handleClickCodeBtn"
    > {{ codeText }}
      <span v-if="code.countdown" v-cloak class="timer">({{ code.countdown }}s)</span>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'CodeInput',
  props: {
    // 绑定值
    value: {
      type: String,
      default: ''
    },
    // 类型
    type: {
      type: String,
      default: 'text'
    },
    // 输入框占位文本
    placeholder: {
      type: String,
      default: '请输入密码'
    },
    // 输入框头部图标
    prefixIcon: {
      type: String,
      default: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 验证码按钮文案
    codeText: {
      type: String,
      default: '获取验证码'
    },
    // 验证码按钮loading
    codeLoading: {
      type: Boolean,
      default: false
    },
    // 禁用验证码按钮
    codeDisabled: {
      type: Boolean,
      default: false
    },
    // 验证码按钮宽度
    codeWdith: {
      type: String,
      default: '120px'
    }
  },
  data() {
    return {
      codeValue: this.value,
      inputType: this.type,
      code: {
        countdown: parseInt(sessionStorage.getItem('countdown')) || 0,
        timer: null
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      // 支持外部重置表单时清空值
      if (!newVal) {
        this.codeValue = ''
      }
    }
  },
  created() {
    this.initCodeTimer()
  },
  methods: {
    /**
     * 初始化倒计时
     */
    initCodeTimer() {
      if (this.code.countdown) {
        this.code.timer = setInterval(() => {
          if (this.code.countdown <= 0) {
            this.$emit('end-countdown')
            clearInterval(this.code.timer)
            return
          }
          this.code.countdown--
          sessionStorage.setItem('countdown', this.code.countdown)
        }, 1000)
      }
    },
    handleClickCodeBtn() {
      if (this.codeLoading) {
        return
      }
      this.$emit('click-code')
    },
    handleValueChange(val) {
      this.$emit('update:value', val)
    },
    handleEnter() {
      this.$emit('enter', this.codeValue)
    },
    getCountdown() {
      return this.code.countdown
    },
    start() {
      this.code.countdown = 300
      this.initCodeTimer()
    },
    reset() {
      clearInterval(this.code.timer)
      this.code.countdown = 0
    }
  }
}
</script>
  <style lang="scss" scoped>
  
  .code-input{
    position: relative;
    display: flex;
    width: 100%;
  }
  .btn-verification-code {
    margin-left: 20px;
    width: 140px;
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .link-verification-code{
    position: absolute;
    right: 0;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    // color: $baseColor !important;
    background: transparent !important;
    border: none !important;
  }
  .el-input--suffix  :deep(.el-input__inner) {
      padding-right: calc(5px + 14px + 100px);
  }

  :deep(.el-button).is-disabled {
    background:  #7ABBFF !important;
    // color: $whiteColor;
  }
  :deep(.el-button).is-disabled:hover {
      // color: $whiteColor;
  }
   :deep(.el-input-group__append) .el-button {
  background:  $baseColor ;
   // color: $whiteColor;
  }
   :deep(.el-input-group__append) .el-button:hover {
    background:  $baseColor ;
   // color: $whiteColor;
  }
  // .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {}
  </style>
