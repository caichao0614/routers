<template>
  <div>
    <div>route学习{{$route.params.id}}</div>
    <router-link to="/">导航</router-link>
  </div>
</template>
<script>
export default {
  created() {
    console.log('组件初始化');
  },
  beforeRouteEnter(to, from, next) {
    console.log('组件内的beforeRouteEnter');
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('组件路由变化');
    next();
  }
}
/*
  触发导航
  失活的组件beforeRouteLeave
  全局的beforeEach
  复用的组件调用beforeRouteUpdate
  路由配置里的beforeEnter
  解析异步路由组件
  激活组件内的beforeRouteEnter
  调用全局的beforeResolve
  导航被确认
  调用全局的后置钩子函数 afterEach
  触发dom更新
  调用beforeRouteEnter 中的回调函数 并将组件实例作为参数传递给改函数
*/ 

</script>