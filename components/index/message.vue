<template>
  <div class="message">
    <div class="message-title">律所动态</div>
    <div v-if="message">
      <div v-for="item in message" :key="item.id">
        <listCard
          :id="item.id"
          link="message-id"
          :title="item.message_title"
          :time="item.add_time"
          :content="item.message_content"
        ></listCard>
      </div>
    </div>
    <div v-else>没有动态</div>
  </div>
</template>

<script>
import listCard from '~/components/card/listCard'
export default {
  name: 'Message',
  components: {
    listCard,
  },
  props: {
    message: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.message-title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
</style>
