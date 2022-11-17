<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24"> </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>AgileBoot后台管理框架</h2>
        <p>
          Ruoyi是一个不错的前后端学习项目，很感谢作者整理了Ruoyi项目供参考。但是仔细琢磨Ruoyi里面的代码，感觉后端代码不像是一个专门的后端人员
          开发的项目。于是就萌生了基于Ruoyi项目，改造重构一个项目结构良好，可读性高，可维护性高，面向对象，使用模型进行开发（DDD战术设计）
          于是利用业余时间对Ruoyi前后端项目进行了重构改造。
          如此有了AgileBoot管理系统，AgileBoot提供最基础的开发框架，如小型网站管理后台，或供公司内部的小项目使用，提供管理后台模块以及API模块。
          AgileBoot项目，会致力于高安全，低错误，高项目规范，高性能。 其他花里胡哨的功能会尽量少加进来。像Ruoyi-Pro
          芋道源码新起的项目加了一大堆功能。太重了。 项目本身稳定性，缺陷可能更得不到保证。
          所有前端后台代码都经过重构。本来3.5w行的后端代码，精简到1.6w行左右。
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <p>
          <el-tag type="danger">&yen;免费开源</el-tag>
        </p>
        <p>
          <el-button
            type="primary"
            icon="Cloudy"
            plain
            @click="goTarget('https://github.com/valarchie/AgileBoot-Back-End')"
            >后端 Github 地址</el-button
          >
          <el-button
            type="primary"
            icon="Cloudy"
            plain
            @click="goTarget('https://github.com/valarchie/AgileBoot-Front-End')"
            >前端 Github 地址</el-button
          >
          <el-button icon="HomeFilled" plain @click="goTarget('https://www.cnblogs.com/valarchie/')"
            >访问博客</el-button
          >
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <h4>后端技术</h4>
            <ul>
              <li>SpringBoot</li>
              <li>Spring Security</li>
              <li>JWT</li>
              <li>MyBatis Plus 无xml文件 JPA实现</li>

              <li>Druid</li>
              <li>jackson</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="10">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>联系信息</span>
            </div>
          </template>
          <div class="body">
            <p>
              <i class="el-icon-s-promotion"></i> 博客：<el-link
                href="https://www.cnblogs.com/valarchie/"
                target="_blank"
                >https://www.cnblogs.com/valarchie/</el-link
              >
            </p>
            <p>
              <i class="el-icon-user-solid"></i> QQ群：
              <a
                href="https://qm.qq.com/cgi-bin/qm/qr?k=TR5guoXS0HssErVWefmdFRirJvfpEvp1&jump_from=webapi&authKey=VkWMmVhp/pNdWuRD8sqgM+Sv2+Vy2qCJQSeLmeXlLtfER2RJBi6zL56PdcRlCmTs"
                target="_blank"
              >
                1398880[点击加群]</a
              >
            </p>
            <p>
              <i class="el-icon-chat-dot-round"></i>
              微信：<a href="javascript:;"> * valarchie</a>
            </p>
            <p>
              <i class="el-icon-money"></i>
              QQ：<a href="javascript:;"> * 343928303</a>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>更新日志</span>
            </div>
          </template>
          <el-collapse accordion>
            <el-collapse-item title="v1.0.1 - 2022-10-xx">
              <ol>
                <li>TODO LIST</li>
              </ol>
            </el-collapse-item>
            <el-collapse-item title="v1.0.0 - 2022-10-08">
              <ol>
                <li>AgileBoot前后端分离系统正式发布</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>捐赠支持</span>
            </div>
          </template>
          <div class="body">
            <img
              src="https://oscimg.oschina.net/oscnet/up-261828407c9089ad1cc0ce3f41a0ef3fbc0.png"
              alt="donate"
              style="width: 100%"
            />
            <span style="display: inline-block; height: 30px; line-height: 30px">你可以请作者喝杯咖啡表示鼓励</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
const version = ref('1.5.0');

function goTarget(url) {
  window.open(url, '__blank');
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>
