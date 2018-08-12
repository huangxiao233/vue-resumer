import  Vuex from  'vuex'
import Vue from 'vue'
import objectPath from "object-path"
// const store = new Vuex.Store({
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        
        selected:'profile',
        user:{
           id:'',
           username:''
        },
        resume:{
            config: [
                                { field: 'profile', icon: 'add' },
                                { field: 'workHistory', icon: 'work' },
                                { field: 'education', icon: 'book' },
                                { field: 'projects', icon: 'heart' },
                                { field: 'awards', icon: 'cup' },
                                { field: 'contacts', icon: 'phone' },
                            ],
                            profile: {
                                name: '黄笑',
                                city: '北京',
                                title: '前端工程师',
                                birthday:'1997-06-10'
                            },
                            'workHistory': [
                                { company: 'AL', content: '我的第二份工作是' },
                                { company: 'TX', content: '我的第一份工作是' },
                            ],
                            education: [
                                { school: '安徽工业大学', content: '本科' },
                                { school: '北京科技大学', content: '硕士' },
                            ],
                            projects: [
                                { name: 'project A', content: '文字' },
                                { name: 'project B', content: '文字' },
                            ],
                            awards: [
                                { name: 'awards A', content: '文字' },
                                { name: 'awards B', content: '文字' },
                            ],
                            contacts: [
                                { contact: 'phone', content: '13812345678' },
                                { contact: 'qq', content: '12345678' },
                            ],
                        }
                    },

    mutations:{
      
        initState(state,payload){
            Object.assign(state,payload)
        },
        //提交负荷，也就是额外参数
        switchTab(state,payload){
            state.selected = payload
            localStorage.setItem('state',JSON.stringify(state))
        },
        // updateResume(state,{field,subfield,value}){
        //     state.resume[field][subfield] = value
        updateResume(state,{path,value}){
            objectPath.set(state.resume,path,value)
            localStorage.setItem('state',JSON.stringify(state))
        },
        setUser(state,payload){
            Object.assign(state.user,payload)
            
         },
         removeUser(state){
             state.user.id = null
         }
        
        }
    })