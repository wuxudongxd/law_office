<template>
  <div class="footer">
    <div class="foot-content">
      <div class="introduction">
        广东德寰律师事务所真诚希望我所成为贵司的合作律所。我所保证始终如一做到“高效、服务、诚信”的宗旨，全力配合贵司做好金融借贷领域各类法律事务工作
      </div>
      <el-divider></el-divider>
      <div>&copy;2021 广东德寰律师事务所 版权所有</div>
      <div>
        <a href="https://beian.miit.gov.cn">备案号：粤ICP备2020135407号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.footer {
  box-sizing: border-box;
  min-height: 250px;
  background: #0b162a;
  width: 100%;
  margin-top: 50px;
}
.foot-content {
  width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
}
.foot-content a {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #fff;
}
.introduction {
  padding: 50px 100px 20px;
  line-height: 25px;
  color: #cbcbcb;
}
@media (max-width: 800px) {
  .introduction {
    padding: 20px 0 0;
  }
}
</style>
