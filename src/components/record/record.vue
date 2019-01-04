<template>
    <div class="record">
        <div v-if="!show" class="error" ref="showData">
        </div>
        <div v-if="show" class="details">
            <div v-if="title" class="title">
                <van-row class="lhTitle">
                    <van-col span="24">{{title.name}} {{title.gender}} {{title.age}}</van-col>
                </van-row>
                <van-row class="lhTitle">
                    <van-col span="24">最后一次体检：<span>{{title.examineTime?title.examineTime.slice(0,10):'---'}}</span></van-col>
                </van-row>
                <van-row class="lhTitle">
                    <van-col span="24">健康体检机构：<span>{{organizateName?organizateName:'---'}}</span></van-col>
                </van-row>
            </div>

            <div class="fianco">
                <p class="ptitle">体测数据</p>
                <p class="ac bg" v-if="fianco.length == 0">暂无数据</p>
                <div  v-else>
                    <van-row v-for="(key,index) in fianco.examineItems" :key="key.id" :class="index%2 == 0?'bgs':'bgss'">
                            <span class="left">
                                {{key.name}}
                            </span>
                        <van-tag>
                            <span>
                                <span>{{key.checkResult}}分</span>
                                <span v-if="key.checkComment">({{key.checkComment}})</span>
                            </span>
                        </van-tag>
                            <span  class="fr">
                                {{key.displayValue}}
                            </span>
                    </van-row>
                    <van-cell-group>
                        <van-cell title="总评分" :value="fianco.resultLevel?fianco.resultLevel:'---'" class="bgs"/>
                    </van-cell-group>
                </div>
            </div>

            <div class="examination">
                <p class="ptitle">健康体检数据</p>
                <p class="ac bg" v-if="examination.length == 0">暂无数据</p>
                <van-collapse v-else v-model="activeNames">
                    <van-collapse-item v-for="(item,idx) in examination" :key="idx" :name="idx" :title="item.description">
                        <van-row v-if="item.examineItems.length>0" style="padding:0px 10px 0px 10px;" v-for="(key,index) in item.examineItems" :key="key.id" v-bind:class="[index%2=='0'?'bg':'bgs']">
                            <span class="fl">{{key.name}}</span>&nbsp;&nbsp;<van-tag v-if="key.checkComment" type="success" style="font-size:18px;">{{key.checkComment}}</van-tag>
                            <span class="fr">{{key.displayValue?key.displayValue:'---'}}</span>
                        </van-row>
                        <van-row v-if="item.examineItems.length==0">
                            <p class="ac bg">没有数据</p>
                        </van-row>
                    </van-collapse-item>
                </van-collapse>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./record.scss">
</style>

<script>
    // import json from './../../../static/body.json'
    import http from './../../utils/HttpClient'
    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast);
    export default {
        data(){
            return {
                data:[],
                activeNames: [],
                //标题 
                organizateName:'',
                title:'',
                // 体测数据
                fianco:'',
                // 体检数据
                examination:'',
                show:false
            }
        },
        methods:{
        },
        mounted(){
            var getRecordData = data=>{
                if(data){
                    if(data.instructionResponseBean == null && data.physicalReportTestResponseBean == null && data.physicalReportExaminationResponseBean == null){
                        this.show = false;
                        this.$refs.showData.innerHTML = '没有数据'
                    }else{

                        this.show = true;
                        if(data.instructionResponseBean != null){
                            this.title = data.instructionResponseBean;
                        }else{
                            this.title = '';
                        }
                        if(data.physicalReportTestResponseBean != null){
                            this.fianco = data.physicalReportTestResponseBean
                        }else{
                            this.fianco = [];
                        }

                        if(data.physicalReportExaminationResponseBean != null){
                            this.organizateName = data.physicalReportExaminationResponseBean.organizateName;
                            this.examination = data.physicalReportExaminationResponseBean.examineitemsTypeResponseBeans
                        }else if(data.physicalReportExaminationResponseBean != null){
                            this.examination = []
                        }
                    }
                }else{
                    this.show = false;
                    this.$refs.showData.innerHTML = '获取数据失败'
                    Toast('获取数据失败');
                }
            }
            if (undefined === window.knowledge) {
                this.show = false;
                this.$refs.showData.innerHTML = '获取数据失败'
            }else{
                let text = window.knowledge.getData();
                // console.log(text);
                let data = '';
                data = JSON.parse(text);
                // let data = json.data;
                // console.log(data);
                getRecordData(data);
            }
        }
    }
</script>