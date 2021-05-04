<template>
  <div class="header">
    <div class="navigate">
      <div class="logo-and-title" @click="backHome">
        <img class="logo" src="/logo.png" alt="logo" />
        <div class="header-title">
          <span style="color: #bea34d">广东德寰</span>
          <span>律师事务所</span>
        </div>
      </div>
      <div class="nav-list">
        <div v-if="listShow" class="menu-list">
          <div
            v-for="item in navData"
            :key="item.id"
            :class="
              $store.state.activeName === item.name
                ? 'item-active'
                : 'item-default'
            "
            @click="toActiveMenuItem(item)"
          >
            <div v-if="item.name !== '联系我们'">
              {{ item.name }}
            </div>
            <div v-else>
              <div class="item-special">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <Slide v-if="isClient" right no-overlay width="160">
            <div
              v-for="item in navData"
              :key="item.id"
              class="mobile-item-default"
              :class="
                $store.state.activeName === item.name
                  ? 'item-active'
                  : 'item-default'
              "
              @click="toActiveMenuItem(item)"
            >
              {{ item.name }}
            </div>
          </Slide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navData: [
        {
          id: 1,
          name: '关于我们',
          link: 'about',
        },
        {
          id: 2,
          name: '热点新闻',
          link: 'news',
        },
        {
          id: 3,
          name: '律所动态',
          link: 'message',
        },
        {
          id: 4,
          name: '团队律师',
          link: 'member',
        },
        {
          id: 5,
          name: '专业领域',
          link: 'domains',
        },
        {
          id: 6,
          name: '法律文库',
          link: 'library',
        },
        {
          id: 7,
          name: '成功案例',
          link: 'case',
        },
        {
          id: 8,
          name: '联系我们',
          link: 'contact',
        },
      ],
      activeName: '',
      listShow: true, // pc菜单
      sideList: false,
      sideButton: false,
      isClient: false,
    }
  },
  mounted() {
    // 加载插件
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const { Slide } = require('vue-burger-menu')
      this.$options.components = { Slide }
      this.isClient = true
    }

    const w = document.documentElement.clientWidth || document.body.clientWidth
    this.listShow = w >= 1000 // pc菜单
    window.addEventListener('resize', this.Switching)
  },
  methods: {
    backHome() {
      // 返回首页
      this.activeName = ''
      this.$store.commit('M_UPDATE_ACTIVENAME', '')
      this.$router.push('/')
    },
    toActiveMenuItem(item) {
      // 激活导航菜单
      this.activeName = item.name
      this.$store.commit('M_UPDATE_ACTIVENAME', item.name)
      this.$router.push('/' + item.link)
    },
    Switching() {
      const that = this
      const w =
        document.documentElement.clientWidth || document.body.clientWidth
      that.listShow = w >= 1000 // pc菜单
      that.sideList = w < 1000 && that.sideButton // 侧边栏
    },
    changeSideList() {
      this.sideButton = !this.sideButton
      this.sideList = !this.sideList
    },
  },
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.navigate {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.logo-and-title {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
.logo {
  height: 60px;
  margin-left: 20px;
}
.header-title {
  display: inline-flex;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  width: 250px;
}
.nav-list {
  width: 800px;
  margin-right: 30px;
}
.menu-list {
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
.item-default {
  cursor: pointer;
}
.item-active {
  color: #bea34d;
  cursor: pointer;
}
.item-special {
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #bea34d;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.item-special:hover {
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #bea34d;
  border-radius: 50px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.12), 0 5px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.5s;
}
.icon-wrap {
  float: right;
  margin-right: 10px;
}
.side-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mobile-item-default {
  padding: 10px;
  cursor: pointer;
}
@media (max-width: 769px) {
  .logo {
    margin-left: 0;
  }
  .nav-list {
    width: 800px;
    margin-right: 0;
  }
}
/deep/ .bm-menu {
  background-color: #fff; /* Black*/
}
/deep/ .bm-item-list {
  color: #415f92;
}
/deep/ .line-style {
  border-radius: 4px;
}
/deep/ .bm-burger-button {
  right: 20px !important;
}
/deep/ .mobile-item-default {
  width: 100px;
}
/deep/ .bm-cross {
  background-color: black !important;
}
/deep/ .bm-cross-button {
  right: 110px !important;
}
</style>
