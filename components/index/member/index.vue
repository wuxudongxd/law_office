<template>
  <div class="member">
    <div class="member-title">团队律师</div>
    <div style="display: flex; justify-content: center">
      <div class="title-assistant">
        德寰所精英荟萃，拥有一支充满生机的从业队伍，多数律师毕业于著名高等法学院校，既然扎实的法律理论基础及良好的专业素质，又有高度的敬业精神和丰富的办案经验。同时，德寰所拥有丰富的法律界权威学者、资深法官、检察官、公证处公证员、房管局专家等顾问资源。
      </div>
    </div>
    <div class="member-list">
      <el-row :gutter="30">
        <el-col
          v-for="item of member"
          :key="item.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="6"
          ><member-item
            :id="item.id"
            link="member-id"
            :item="item"
          ></member-item>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import memberItem from '~/components/index/member/memberItem'
export default {
  name: 'Member',
  components: {
    memberItem,
  },
  props: {
    member: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.member-title {
  margin: 40px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
.title-assistant {
  width: 60%;
  color: #828282;
  text-align: center;
  margin-bottom: 40px;
}
.member-list {
  width: 90%;
  margin: 0 5%;
}
</style>
