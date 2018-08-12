<template>
  <div class=page>
    <!-- <Topbar/>
    

    <!-- <p>{{text}}</p> -->
    <header>
        <Topbar/>
    </header>
    <main>
        <ResumeEditor/>
        <ResumePreview/>  
    </main>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'
import store from './store/index'
export default {
  name: 'app',
  store,
  components:{Topbar,ResumeEditor,ResumePreview},
  created(){
    document.body.insertAdjacentHTML('afterbegin',icons)
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)

    }
    this.$store.commit('initState',state)
  }
}
</script>
 
<style lang="scss"> 
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }
  .page>main{
    /* 分享剩余空间的权重 */
    flex-grow:1;
  }
  .page>main{
    min-width: 1024px;
    max-width:1440px;
    margin:0;
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    /* 设置弹性盒子元素在主轴上面的排列方式 */
    /* justify-content: space-around; */
    /* 弹性盒子的元素会均匀的分布，并且两端保留子元素之间距离的一半 */
    justify-content: space-between;
    /* 平均分布 */
    padding: 0 16px;
    width:100%;
    align-self:center;
  }
  #resumeEditor{
    width:35%;
    background: #444;
  }
  #resumePreview{
    width:61.66667%;
    background: #777;
    flex-grow: 1;
    /* 索取剩余空间 */
    margin-left: 16px;
  }
  svg.icon{
    height:1em;
    width:1em;
    fill:currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }

</style>
