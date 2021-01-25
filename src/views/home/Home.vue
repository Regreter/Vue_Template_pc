<template>
  <el-container class="container">
    <el-header class="header">
      <span class="header-title">网站首页</span>
      <span class="header-info">
        <el-dropdown trigger="click">
          <span style="color:white">头像
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          :default-active="$route.path">
          <template v-for="item in items">
            <template v-if="item.subs">
              <el-submenu :index="item.index" :key="item.index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </template>
                <template v-for="subItem in item.subs">
                  <el-menu-item
                    :index="subItem.index"
                    :key="subItem.index"
                  ><i :class="item.icon"></i>
                  {{ subItem.title }}</el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.index" :key="item.index">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'el-icon-s-home',
          index: '/systemhome',
          title: '系统首页'
        },
        {
          icon: 'el-icon-document',
          index: '/questionnaire',
          title: '问卷管理',
          subs: [
          {
            icon: 'el-icon-chat-dot-square',
            index: '/message',
            title: '消息通知'
          },
          {
            icon: 'el-icon-document',
            index: '/consult',
            title: '咨询管理'
          },
          {
            icon: 'el-icon-document',
            index: '/questionnaire',
            title: '问卷管理'
          }
        ]},
        {
          icon: 'el-icon-office-building',
          index: '/hospital',
          title: '医院管理'
        },
        {
          icon: 'el-icon-s-custom',
          index: '/doctor',
          title: '医生管理'
        },
        {
          icon: 'el-icon-user',
          index: '/user',
          title: '用户管理',
            
        },
        {
          icon: 'el-icon-edit',
          index: '/test',
          title: '题库管理'
        },
        {
          icon: 'el-icon-document',
          index: '/consult',
          title: '咨询管理'
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
.container {
    height: 100%;
  }
  .header {
    width: 100%;
    background-color: #636363; 
    overflow: hidden;
    font-size: 22px;
  }
  .header-title {
    float: left;
    margin-top: 10px;
    color:white;
    margin-left:1%
  }
  .header-info {
    float: right;
    padding-top: 10px;
    margin-right: 1%
  }
  .aside {
    height: 100%;
    background-color:#545c64;
  }
  .main {
    height: 100%;
  }
</style>