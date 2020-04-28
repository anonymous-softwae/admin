<template>
    <div class="login-container">
        <div class="login-box">
            <h1>用户登录</h1>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input size="large" autofocus autocomplete="on" prefix="ios-contact" v-model="formInline.user" placeholder="请输入用户名..." style="width: 300px" />
            </FormItem>
            <FormItem prop="password">
                <Input size="large" prefix="ios-lock" v-model="formInline.password" type="password" password placeholder="请输入密码..." style="width: 300px" />
            </FormItem>
            <FormItem>
                <Button type="primary" style="width: 300px;height:50px; font-size:16px" @click="handleSubmit('formInline')">提 交</Button>
            </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the username', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
    width: 100%;
    height: 100%;
    position: relative;
    background-image: linear-gradient(45deg,#86bd99,#505572);
    .login-box{
        position: absolute;
        left:50%;
        top: 50%;
        color: cornsilk;
        transform: translate(-50%,-50%);
        text-align: center;
        h1{
            font-weight: 400;
            margin-bottom: 10px;
        }
    }
}
</style>
