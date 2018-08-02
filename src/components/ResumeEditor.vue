<template>
    <div id="resumeEditor">
       <nav>
           <ol>
               <!-- <li class="active">x</li>
               <li>x</li>
               <li>x</li>
               <li>x</li>
               <li>x</li>
               <li>x</li>
               <li>x</li> -->
               <li v-for="(item,index) in resume.visibleItems"
                   :class="{active:item === selected}"
                   @click="selected = item"
                   >
                     {{index}}
               </li>
           </ol>
           <ol class="panels">
                <!-- <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li> -->
                <li v-for="item in resume.visibleItems" v-show="item===selected">
                    {{resume[item]}}
                </li>
           </ol>
       </nav>
    </div>
</template>
<script>
    export default{
        name:'ResumeEditor',
        data(){
            return{
               selected:'bio',
               resume:{
                   visibleItems:['bio','work history','education','projects','awards','contacts','others'],
                   bio:{
                       name:'',
                       city:'',
                       title:''
                   },
                   'work history':[],
                    education:[],
                    projects:[],
                    awards:[],
                    contacts:[],
                    others:[]
               }
            }
        }
    }
   
</script>
<style lang="scss">
    #resumeEditor{
       background: white;
       box-shadow: 0 2px 3px rgba(0,0,0,0.6);
       display: flex;
       flex-direction: row;
       overflow: auto;
    >nav{
        width:80px;
        background:black;
        color:white;
        >ol{
            >li{
                height:48px;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-top: 16px;
                margin-bottom: 16px;
                &.active{
                    background: white;
                    color:black;
                }
            }
        }
    }
    
}
ol{
        list-style: none;
    }
</style>