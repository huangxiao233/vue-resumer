<template>
  <div>
    <Topbar/>
    <ResumeEditor/>
    <ResumePreview/>

    <!-- <p>{{text}}</p> -->
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
export default {
  name: 'app',
  data:function(){
    return{
      text:'hello'
    }
  },
  components:{Topbar,ResumeEditor,ResumePreview}
}
</script>

<style>
 p{color:red;}
</style>
