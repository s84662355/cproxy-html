<!--
 * @Description: PasswordInput 密码输入框
 * @Author: Lin Jiexin
 * @Date: 2020-09-11 09:46:02
 * @LastEditTime: 2022-09-01 09:48:32
 * @LastEditors: Zheng Canbin
 * @Document: @/docs/component/PasswordInput.md
-->

<template>
  <el-input
    ref="password"
    v-model.trim="password"
    :type="inputType"
    :placeholder="placeholder"
    :prefix-icon="prefixIcon"
    :disabled="disabled"
    :maxlength="maxlength"
    @change="handlePasswordChange"
    @keyup.enter.native="handleEnter"
  >
    <svg-icon
      slot="suffix"
      :icon-class="inputType === 'password' ? 'eye' : 'eye-open'"
      class="mr-2 cursor-pointer"
      @click="toggleInputType"
    />
  </el-input>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    // 绑定值，支持 .sync 修饰符
    value: {
      type: String,
      default: ''
    },
    // 类型
    type: {
      type: String,
      default: 'password'
    },
    // 占位文本
    placeholder: {
      type: String,
      default: '请输入密码'
    },
    // 头部图标
    prefixIcon: {
      type: String,
      default: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      password: this.value,
      inputType: this.type
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.password = newVal
    }
  },
  methods: {
    handlePasswordChange(val) {
      this.$emit('update:value', val)
    },
    toggleInputType() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password'
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleEnter() {
      this.$emit('enter', this.password)
    }
  }
}
</script>
