<template>
  <div>
    <div class="library_title">法律文库</div>
    <el-form :inline="true">
      <el-select v-model="type" placeholder="文库类别">
        <el-option
          v-for="(item, index) in libraryType"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
      <el-form-item style="margin-left: 10px">
        <el-button type="primary" @click="FindContentByType">查找</el-button>
      </el-form-item>
    </el-form>

    <div v-if="library">
      <client-only>
        <div v-for="item in library.rows" :key="item.id">
          <el-card shadow="hover" class="library_card">
            <nuxt-link
              :to="{
                name: 'library-id',
                params: { id: item.id },
              }"
            >
              <div class="item_title">{{ item.content_title }}</div>
            </nuxt-link>
            <div
              class="item-content"
              v-html="$options.filters.limitContent(item.content)"
            ></div>
            <div class="item_bottom">
              <div class="item_type">文库类型：{{ item.content_type }}</div>
              <div class="item_time">
                添加时间：{{ item.add_time | formatDate }}
              </div>
            </div>
          </el-card>
        </div>
      </client-only>
    </div>
    <div v-else>没有法律文库</div>

    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="library.total"
        :current-page="1"
        :page-size="4"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Library',
  filters: {
    limitContent(data) {
      return data.substring(0, 500) + '......'
    },
  },
  async asyncData({ app }) {
    try {
      const [library, libraryType] = await Promise.all([
        app.$api.reqGetLibrary(),
        app.$api.reqGetLibraryType(),
      ])
      return {
        library: library.data.data,
        libraryType: libraryType.data.data.rows,
      }
    } catch (e) {
      return {
        library: [],
        libraryType: [],
      }
    }
  },
  data() {
    return {
      type: '',
    }
  },
  methods: {
    async handleCurrentChange(val) {
      try {
        const res = await this.$api.reqGetLibrary(val)
        this.library = res.data.data
      } catch (e) {
        this.$message({
          message: '数据加载失败',
          type: 'warning',
        })
      }
    },
    async FindContentByType() {
      try {
        if (this.type) {
          const res = await this.$api.reqFindContentByType(this.type)
          this.library = res.data.data
        } else {
          this.$message({
            message: '请选择文库类型',
            type: 'warning',
          })
        }
      } catch (e) {
        this.$message({
          message: '数据加载失败',
          type: 'warning',
        })
      }
    },
  },
}
</script>

<style scoped>
.el-form {
  margin-top: 50px;
  margin-left: 200px;
}
.library_title {
  margin: 60px 0 40px 0;
  color: #bea34d;
  font-size: 30px;
  text-align: center;
}
.item_title {
  font-size: 20px;
  color: #bea34d;
  float: left;
  margin-bottom: 20px;
}
.item-content {
  clear: both;
  text-indent: 2rem;
  line-height: 22px;
}
.item_bottom {
  display: inline-flex;
  margin: 40px 0 10px 0;
  float: left;
  font-size: 14px;
  color: #9e9e9e;
}
.item_type {
  margin-right: 20px;
}
.pagination {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
}
.library_card {
  min-height: 50px;
  margin: 20px 200px;
  padding: 20px;
}
@media (max-width: 1000px) {
  .library_card {
    margin: 20px 100px;
  }
}
@media (max-width: 800px) {
  .library_card {
    margin: 20px 60px;
  }
  .el-form {
    margin-left: 100px;
  }
}
@media (max-width: 480px) {
  .library_card {
    margin: 20px;
  }
  .item_bottom {
    display: block !important;
  }
  .item_time {
    margin-top: 5px;
  }
  .el-form {
    margin-top: 50px;
    margin-left: 0;
    display: flex;
    justify-content: center;
  }
}
</style>
