<template>
  <!--  简介和联系方式  -->
  <div class="index-introduction">
    <div class="introduction-card">
      <div class="card-1">
        <div class="card-text">
          <div class="card-title-left">需要法律援助？</div>
          <div class="card-body">
            <p>
              我们秉持“服务创造价值”的理念，通过专业服务在为客户创造价值的同时实现自身价值与社会价值。
            </p>
            <p>
              我们致力为客户提供高效、专业和全面的法律顾问服务，协助他们应付各种复杂的商业和法律难题。
            </p>
          </div>
        </div>
      </div>
      <div class="card-2">
        <div class="card-text">
          <div class="card-title-right">
            联系我们：<br />{{ setMessage[0] }}<br />邮件地址：<br />{{
              setMessage[1]
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    contact: {
      type: Array,
      default: () => {},
    },
  },
  computed: {
    setMessage() {
      let mail = '暂无邮箱'
      let phone = '暂无电话'
      for (const item of this.contact) {
        if (item.contact_type === '电话') {
          phone = item.contact_content
        }
        if (item.contact_type === '邮箱') {
          mail = item.contact_content
        }
      }
      return [phone, mail]
    },
  },
}
</script>

<style scoped>
.index-introduction {
  height: 300px;
  background-color: #ffffff;
}
.introduction-card {
  height: 300px;
  width: 1100px;
  background-color: #fff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  z-index: 99;
}
.card-1 {
  display: flex;
  float: left;
  width: 50%;
  height: 300px;
  background-color: #415f92;
}
.card-2 {
  display: flex;
  float: right;
  width: 50%;
  height: 300px;
  background-color: #31486f;
}
.card-text {
  color: white;
}
.card-title-right {
  font-size: 30px;
  padding: 20px 30px;
  line-height: 60px;
}
.card-title-left {
  font-size: 30px;
  padding: 30px 20px 0 20px;
}
.card-body {
  padding: 20px;
  letter-spacing: 2px;
}
@media (max-width: 1100px) {
  .introduction-card {
    width: 700px;
  }
}
@media (max-width: 767px) {
  .introduction-card {
    width: 80%;
  }
  .card-1 {
    width: 100%;
  }
  .card-2 {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
  .card-title-right {
    text-align: center;
    padding: 20px 10px;
  }
  .card-title-left {
    text-align: center;
    padding: 20px 10px;
  }
}
</style>
