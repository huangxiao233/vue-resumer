<template>  
   <div id="topbar">
       <div class="wrapper">
           <span class="logo">Resumer</span>
           <div class="actions">
               <button class="primary">保存</button>
               <button>预览</button>
           </div>
       </div>
   </div>
</template>
<script>
    export default{
        name:'Topbar'
    }
</script>
<style scoped lang="scss">
    #topbar{
        background: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    >.wrapper{
        min-width:1024px;
        max-width:1440px;
        margin: 0 auto;
        height:64px;
    }
    >.wrapper{
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 0 16px;
    }
    .logo{
        font-size:20px;
        color:#000000;
        
    }
}
button{
   width:72px;
   height:32px;
   font-size:18px;
   color:#222;
   border:none;
   background: #ddd;
   cursor:pointer;
   &:hover{
       box-shadow: 1px 1px 1px hsla(0,0,0,0.5);
   }
  &.primary{
       background: #02af5f;
       color:white;
    }
  }
</style>