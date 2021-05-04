<template>
  <div class="contact">
    <div class="contact_title">联系方式</div>
    <information :contact="contact"></information>
    <contact-us :carousel="carousel"></contact-us>
  </div>
</template>

<script>
import information from '~/pages/contact/information'
import contactUs from '~/pages/contact/contactUs'
export default {
  name: 'Contact',
  components: {
    information,
    contactUs,
  },
  async asyncData({ app }) {
    try {
      const [carousel, contact] = await Promise.all([
        app.$api.reqGetCarousel(),
        app.$api.reqGetContact(),
      ])
      return {
        carousel: carousel.data.data,
        contact: contact.data.data.rows,
      }
    } catch (e) {
      return {
        carousel: [],
        contact: [],
      }
    }
    // return app.$api
    //   .reqGetContact()
    //   .then((res) => {
    //     return {
    //       contact: res.data.data.rows,
    //     }
    //   })
    //   .catch(() => {
    //     return {
    //       contact: [],
    //     }
    //   })
  },
}
</script>

<style scoped>
.contact_title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
</style>
