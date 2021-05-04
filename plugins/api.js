export default ({ app: { $request } }, inject) => {
  inject('api', {
    // 首页数据
    /**
     * 轮播图数据
     */
    reqGetCarousel() {
      return $request.get('viewImage')
    },
    /**
     * 获取专业领域数据
     */
    reqGetDomain() {
      return $request.post('domains/selectDomains', {
        cp: '1',
        ps: '6',
        order: {
          id: 'desc',
        },
      })
    },

    // 关于我们页面
    /**
     * 获取关于页信息
     */
    reqGetAbout() {
      return $request.get('about/view')
    },

    // 热点新闻页面
    /**
     * 获取热点新闻数据
     */
    reqGetNews(cp) {
      return $request.post('news/findAll', {
        cp,
        ps: '5',
        order: {
          id: 'desc',
        },
      })
    },
    /**
     * 根据id获取新闻数据
     */
    reqGetNewsDetail(id) {
      return $request.get('news/findById/' + id)
    },

    // 律所动态页面
    /**
     * 获取律所动态
     */
    reqGetMessage(cp) {
      return $request.post('message/findAll', {
        cp,
        ps: '5',
        order: {
          id: 'DESC',
        },
      })
    },
    /**
     * 通过id查找动态
     */
    reqGetMessageDetail(id) {
      return $request.get('message/findById/' + id)
    },

    // 团队律师
    /**
     * 获取律师信息
     */
    reqGetMember() {
      return $request.post('member/findAll', {
        cp: '1',
        ps: '8',
        order: {
          id: 'ASC',
        },
      })
    },

    /*
     * 通过id查询律师
     * */
    reqGetMemberDetail(id) {
      return $request.get('member/ById?id=' + id)
    },

    // 获取法律文库
    reqGetLibrary(cp) {
      if (!cp) {
        cp = 1
      }
      return $request.post('library/FindAllContent', {
        cp,
        ps: '4',
        order: {
          id: 'desc',
        },
      })
    },

    // 通过id查找法律文库

    reqGetLibraryPart(id) {
      return $request.get('library/FindContentByID/' + id)
    },

    // 获取法律文档类型
    reqGetLibraryType() {
      return $request.post('library/FindAllType', {
        cp: '1',
        ps: '10',
        order: {
          content_type: 'desc',
        },
      })
    },

    reqFindContentByType(contentType) {
      return $request.post('library/FindContentByType/' + contentType, {
        cp: '1',
        ps: '10',
        order: {
          id: 'desc',
        },
      })
    },

    // 获取成功案例
    reqGetExample(page) {
      if (!page) {
        page = 1
      }
      return $request.post('case/findCase', {
        cp: page,
        ps: '5',
        order: {
          add_time: 'desc',
        },
      })
    },

    // 通过id查找成功案例
    reqGetExamplePart(id) {
      return $request.get('case/findById', {
        id,
      })
    },

    // 获取联系方式
    reqGetContact() {
      return $request.post('contact/FindAllContact', {
        cp: '1',
        ps: '10',
        order: {
          id: 'asc',
        },
      })
    },

    // 添加用户留言
    reqAddAdvisory(data) {
      return $request.post('advisory/addAdvisory', data)
    },
    //  底部
  })
}
