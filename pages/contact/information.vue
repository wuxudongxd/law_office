<template>
  <div class="contact_info">
    <div class="contact_card">
      <div v-if="contact">
        <div v-for="item in contact" :key="item.id" class="contact_item">
          <span class="item_type">{{ item.contact_type }}：</span>
          <span class="item_contact">
            <span v-if="item.contact_type === '邮箱'">
              <a :href="contactData.mailto">{{ item.contact_content }}</a>
            </span>
            <span v-else-if="item.contact_type === 'QQ'">
              <a :href="contactData.qqUrl">{{ item.contact_content }}</a>
            </span>
            <span v-else>{{ item.contact_content }}</span>
          </span>
        </div>
        <div v-if="contactData.qqQrcode" class="qqQrcode">
          <qrcode-vue
            :value="contactData.qqQrcode"
            size="150"
            level="H"
          ></qrcode-vue>
          <div class="qqQrcode-text">QQ咨询</div>
        </div>
        <div v-if="contactData.wechatQrcode" class="wechatQrcode">
          <qrcode-vue
            :value="contactData.wechatQrcode"
            size="150"
            level="H"
          ></qrcode-vue>
          <div class="wechatQrcode-text">微信咨询</div>
        </div>
      </div>
      <div v-else>没有联系信息</div>
    </div>
    <div class="contact_location">
      <client-only>
        <fast-map
          :mid="12"
          :zoom="15"
          :center="center"
          pitch-enable
          :pitch="30"
          view-mode="3D"
          :double-click-zoom="false"
        >
          <fast-marker
            ref="marker"
            draggable
            clickable
            icon="/poi-marker-lawyer.png"
            :mid="12"
            :offset="[-13, -30]"
            :options="markerOptions"
          ></fast-marker>
        </fast-map>
      </client-only>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'Information',
  components: {
    QrcodeVue,
  },
  props: {
    contact: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      center: [113.267829, 23.174648],
      options: {
        height: 800,
        zooms: [3, 16],
      },
      markerOptions: [
        {
          myData: 1,
          position: [113.267829, 23.174648],
        },
      ],
      contactData: {
        mailto: '',
        qq: '',
        qqUrl: '',
        qqQrcode: '',
        wechatQrcode: '',
      },
    }
  },
  mounted() {
    this.filterContact()
    const flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
    if (flag) {
      this.contactData.qqUrl =
        'mqqwpa://im/chat?chat_type=wpa&uin=' +
        this.contactData.qq +
        '&version=1&src_type=web&web_src=oicqzone.com'
    }
  },
  methods: {
    filterContact() {
      this.contact.forEach((item, index) => {
        if (item.contact_type === '邮箱') {
          this.contactData.mailto = 'mailto:' + item.contact_content
        } else if (item.contact_type === 'QQ') {
          this.contactData.qq = item.contact_content
          this.contactData.qqUrl =
            'tencent://message/?uin=' + item.contact_content + '&Site=&Menu=yes'
          this.contactData.qqQrcode = item.contact_qrurl
        } else if (item.contact_type === '微信') {
          if (item.contact_content) {
            this.contactData.wechatQrcode = item.contact_qrurl
          }
          // this.contact.splice(index, 1)
        }
      })
    },
  },
}
</script>

<style scoped>
a,
a:active,
a:hover {
  text-decoration: underline;
  color: #1f4680;
}
.contact_info {
  display: flex;
  box-sizing: border-box;
  height: 700px;
  background-color: rgb(234, 236, 240);
  padding: 0 20px;
  color: #1f4680;
}
.contact_info > div {
  margin-top: 50px;
  width: 50%;
  height: 600px;
}
.contact_location {
  border-radius: 10px;
  overflow: hidden;
}
@media (max-width: 800px) {
  .contact_info {
    flex-wrap: wrap;
    height: 1200px;
  }
  .contact_info > div {
    width: 100%;
  }
  .contact_location {
    height: 400px !important;
  }
  .qqQrcode {
    margin: 80px 10px 5px 0 !important;
  }
  .wechatQrcode {
    margin: 80px 10px 5px 0 !important;
  }
}
.contact_item {
  margin-top: 30px;
  margin-left: 20px;
  font-size: 20px;
  line-height: 26px;
}
.qqQrcode {
  display: inline-block;
  margin: 80px 20px 0;
}
.qqQrcode-text {
  margin-top: 20px;
  margin-left: 40px;
  font-size: 18px;
  color: #1f4680;
}
.wechatQrcode {
  display: inline-block;
  margin: 80px 20px 0;
}
.wechatQrcode-text {
  margin-top: 20px;
  margin-left: 40px;
  font-size: 18px;
  color: #1f4680;
}
</style>
