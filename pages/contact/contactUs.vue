<template>
  <div class="contact_us">
    <div class="contact_img">
      <div v-if="carousel.length !== 0">
        <img
          :src="'https://www.delphes.cn/api' + carousel[0].image_address"
          alt=""
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div v-else>暂无图片</div>
    </div>
    <div class="contact_form">
      <div class="form_title">联系我们</div>
      <div class="form_content">
        <el-form
          ref="advisoryForm"
          label-position="right"
          :model="advisoryForm"
          :rules="rules"
        >
          <el-form-item prop="advisory_phone">
            <el-input
              v-model="advisoryForm.advisory_phone"
              placeholder="手机号码"
              auto-complete="off"
            ></el-input>
          </el-form-item>

          <el-form-item prop="advisory_password">
            <el-input
              v-model="advisoryForm.advisory_password"
              placeholder="姓名"
              type="password"
              auto-complete="off"
            ></el-input>
          </el-form-item>

          <el-form-item prop="advisory_content">
            <el-input
              v-model="advisoryForm.advisory_content"
              type="textarea"
              placeholder="咨询留言"
              auto-complete="off"
            ></el-input>
          </el-form-item>

          <el-button
            type="warning"
            round
            style="
              margin: 10px 40px;
              background-color: #bea34d;
              border-color: #bea34d;
            "
            @click="onSubmit('advisoryForm')"
            >提交咨询留言</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {
    carousel: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      advisoryForm: {
        advisory_phone: '',
        advisory_content: '',
        advisory_password: '',
        display: 0,
      },
      rules: {
        advisory_phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          {
            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
            message: '请输入中国大陆手机号码',
          },
        ],
        advisory_password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur',
          },
        ],
        advisory_content: [
          { required: true, message: '请输入咨询留言', trigger: 'blur' },
          { max: 10000, message: '留言限制字数为1000字', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm(
            '咨询留言将发往律师后台，请确认联系方式与留言信息正确',
            {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            }
          )
            .then(() => {
              this.$api
                .reqAddAdvisory(this.advisoryForm)
                .then((res) => {
                  if (res.data.code === 200) {
                    this.$message({
                      message: '消息发送成功',
                      type: 'success',
                    })
                    this.advisoryForm.advisory_phone = ''
                    this.advisoryForm.advisory_content = ''
                    this.advisoryForm.advisory_password = ''
                  } else if (res.data.code === 500) {
                    this.$message({
                      message: res.data.data,
                      type: 'warning',
                    })
                  }
                })
                .catch(() => {
                  this.$message({
                    message: '由于后台服务或网络原因，留言发送失败',
                    type: 'warning',
                  })
                })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消发送',
              })
            })
        } else {
          this.$message({
            type: 'info',
            message: '请填写完整信息',
          })
          return false
        }
      })
    },
  },
}
</script>

<style scoped>
.contact_us {
  width: 100%;
  min-height: 500px;
  display: inline-flex;
  flex-wrap: nowrap;
}
.contact_img {
  width: 50%;
}
.contact_form {
  width: 50%;
  background-color: #415f92;
  /*padding: 20px;*/
}
.form_title {
  font-size: 25px;
  color: #fafafa;
  padding: 20px 0 20px 40px;
}
.el-input,
.el-textarea {
  padding: 10px 5%;
  width: 90%;
}
/deep/ .el-input__inner,
/deep/ .el-textarea__inner {
  background-color: #415f92;
  border: 2px solid #637dad;
  font-size: 20px;
  padding: 25px;
  color: #d0d8e6;
}
/deep/ .el-textarea__inner {
  height: 220px;
  min-height: 150px !important;
  max-height: 250px;
}
/deep/ .el-input__inner:focus,
/deep/ .el-textarea__inner:focus {
  border: 2px solid #bea34d;
}
@media (max-width: 800px) {
}
@media (max-width: 480px) {
  .contact_us {
    display: block;
  }
  .contact_img {
    width: 100%;
  }
  .contact_form {
    width: 100%;
  }
}
/deep/ .el-form-item__error {
  left: 25px;
}
</style>
