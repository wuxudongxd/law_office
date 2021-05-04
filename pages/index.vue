<template>
  <div>
    <!--  首页走马灯  -->
    <carousel :carousel="carousel"></carousel>

    <!--  简介和联系方式  -->
    <introduction :contact="contact"></introduction>

    <!--  首页律师团队  -->
    <member :member="member"></member>

    <!--  首页业务领域  -->
    <domain :domain="domain"></domain>

    <!--  律所动态展示  -->
    <message :message="message"></message>
  </div>
</template>

<script>
import introduction from '@/components/index/introduction'
import member from '@/components/index/member/index'
import domain from '@/components/index/domain'
import carousel from '~/components/index/carousel/index'
import message from '~/components/index/message'
export default {
  components: {
    carousel,
    introduction,
    member,
    domain,
    message,
  },
  async asyncData({ app }) {
    try {
      const [domain, carousel, member, contact, message] = await Promise.all([
        app.$api.reqGetDomain(),
        app.$api.reqGetCarousel(),
        app.$api.reqGetMember(),
        app.$api.reqGetContact(),
        app.$api.reqGetMessage(1),
      ])
      return {
        domain: domain.data.data.rows,
        carousel: carousel.data.data,
        // 首页显示成员数有限制，这里用三元表达式取数组的前六个值
        member:
          member.data.data.total > 8
            ? member.data.data.rows.slice(0, 8)
            : member.data.data.rows,
        contact: contact.data.data.rows,
        message:
          message.data.data.total > 3
            ? message.data.data.rows.slice(0, 3)
            : message.data.data.rows,
      }
    } catch (e) {
      return {
        domain: [],
        carousel: [],
        member: [],
        contact: [],
        message: [],
      }
    }
  },
}
</script>

<style scoped></style>
