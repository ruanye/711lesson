<template>
    <div class="login-container">
      <el-card class="login-card">
        <div class="login-title">用户登录</div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-form">
          <el-form-item label="用户名" prop="username">
            <el-input v-model.trim="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model.trim="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  <script>
   import {mapActions} from 'vuex';
   import * as Types from '../store/mutations-types'
  export default {
    data() {
      return {
        form: {
          username: 'lanqiaomusic',
          password: 'Lanqiaomusic2022*'
        },
        rules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      }
    },
    methods: {
      ...mapActions([Types.LOGIN]),
      login() {
        this.$refs.form.validate(async valid => {
          if (valid) {
              this[Types.LOGIN](
                {
                  account:this.form.username,
                  password:this.form.password
                }
              )
          }
        })
      }
    }
  }
  </script>
  
  <style lang="less" >
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  
    .login-card {
      width: 400px;
  
      .login-title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
  
      .login-form {
        margin-top: 20px;
      }
    }
  }
  </style>