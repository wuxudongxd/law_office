<template>
  <div v-if="member" class="member">
    <img
      :src="'https://www.delphes.cn/api' + member.member_picture"
      :alt="member.member_name"
    />
    <div class="info">
      <div>
        <span class="member_name">{{ member.member_name }}</span>
        <span v-if="member.member_positions" class="member_position"
          >({{ member.member_positions }})</span
        >
      </div>
    </div>
    <div class="member_field" v-text="member.member_field"></div>
  </div>
</template>

<script>
export default {
  name: 'Id',
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  async asyncData({ app, params }) {
    try {
      const memberItem = await app.$api.reqGetMemberDetail(params.id)
      return {
        member: memberItem.data.data,
      }
    } catch (err) {
      return {
        member: {},
      }
    }
  },
}
</script>

<style scoped>
.member {
  position: relative;
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  overflow: hidden;
}
img {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
}
.info {
  min-width: 300px;
  width: calc(100% - 300px);
  height: 300px;
  background-color: #777e8e;
}
.info > div {
  text-align: center;
  font-size: 45px;
  color: #e6e6e6;
  padding-top: 105px;
}
.member_position {
  font-size: 25px;
}
.member_field {
  padding: 20px 40px;
  text-indent: 2rem;
  font-size: 20px;
  color: #5a6268;
  line-height: 32px;
  min-height: 240px;
}
@media (max-width: 800px) {
  img {
    width: 100%;
    height: 300px;
  }
  .info {
    padding-top: 300px;
    width: 100%;
    height: 200px;
  }
  .info > div {
    padding-top: 70px;
    font-size: 35px;
  }
  .member_position {
    font-size: 20px;
  }
  .member_field {
    min-height: 160px;
  }
}
@media (max-width: 600px) {
  .member {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
  img {
    width: 100%;
    height: 300px;
  }
  .info {
    padding-top: 300px;
    width: 100%;
    height: 200px;
  }
  .info > div {
    padding-top: 70px;
    font-size: 35px;
  }
  .member_position {
    font-size: 20px;
  }
  .member_field {
    min-height: 0;
  }
}
</style>
