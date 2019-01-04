<template>
    <div class="article">
        <div v-if="!show" ref="error" class="author ac"></div>
        <div v-if="show" class="main">
            <h6 class="ac">{{data.title?data.title:''}}</h6>

            <van-row v-if="showLoading">
                <van-col span="24" class="author">{{data.author?data.author:''}}</van-col>
            </van-row>

            <div class="content" v-html="data.content">
            </div>
            <p v-if="showLoading" class="border"></p>


            <p v-if="showLoading" class="reviewTitle">最新评论</p>

            <p v-if="review.length==0" class="ac notreview">暂无评论</p>
            <ul v-else>
                <li v-for="(key,idx) in review" :key="idx" class="review">
                    <van-row>
                        <van-col span="4">
                            <img :src="key.logoUrl" alt="" class="img"/>
                        </van-col>
                        <van-col span="16">
                            <p class="usermsg">{{key.phoneNo}}</p>
                            <p class="usermsg">{{key.createTime}}</p>
                        </van-col>
                    </van-row>
                    <div class="reviewContent">
                        {{key.content}}
                    </div>
                </li>
            </ul>

        </div>

        <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            >
        </van-list>

    </div>
</template>

<style lang="scss" src="./article.scss">
</style>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import { Waterfall } from 'vant';
Vue.use(Waterfall);
import http from './../../utils/HttpClient'
export default { 
   
    data() {
        return {
            // show 
            show:false,
            // loading
            showLoading:false,
            // 文章
            data:{},
            // 文章评论
            review:[],
            // 文章id
            id:'',

            // 页数
            pageNum:1,

            list: [],
            loading: false,
            finished: false
        };
    },
    methods: {
        onLoad() {
        // 异步更新数据
            setTimeout(() => {
                this.articlereview(this.pageNum)
            }, 500);
        },
        
        getArticle(id){
            Toast.loading({
                mask: true,
                message: '加载中...'
            });

            http.get('/api/v1/article/detail',{id:this.id}).then(res=>{
                console.log(res);
                if(res.status.code == '0'){
                    if(res.data == null || res.data == '' || res.data == undefined){
                        Toast.clear();
                        Toast('没有找到对应的文章');
                    }else{
                        this.showLoading = true;
                        // this.show = true;
                        this.data = res.data;
                        Toast.clear();
                    }
                }else{
                    this.$refs.error.innerHTML = res.status.msg;
                    Toast.clear();
                    Toast(res.status.msg);
                }
            }).catch(error=>{
                Toast('获取文章失败');
            })
        },

        articlereview(pageNum){
            http.get('/api/v1/article/comment',{"articleId":this.id,"pageSize":10,"pageNum":pageNum}).then(res=>{
                console.log('articlereview',res);

                if(res.status.code == '0'){
                    if(res.data == null || res.data == '' || res.data == undefined){
                        Toast.clear();
                    }else{
                        this.pageNum++;
                        this.show = true;
                        this.list = res.data.list;
                        for(let key of this.list){
                            this.review.push(key);
                        }
                        this.loading = false;
                        if(this.list.length<10){
                            this.finished = true
                        }
                        Toast.clear();
                    }
                }else{
                    Toast(res.status.msg);
                }
            }).catch(error=>{
                Toast('获取评论失败');
            })
        }
    },
    mounted(){
        let href = location.href;
        this.id = href.slice(href.indexOf('id')+3);
        this.getArticle();
        this.articlereview(this.pageNum);
    }
};
</script>