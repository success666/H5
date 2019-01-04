<template>
    <div class="questionnaire">
        <div v-show="!show" class="ac miniTitle"> 
            {{isShow}}
        </div>

        <div v-show="show" style="white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;">

            <h5 class="title" v-if="loadingShow">一、基本情况<span>(由家长填写)</span></h5>
            <div v-for="(key,index) in basic" :key="key.id">

                <!-- 问题 -->
                <div :id="key.ID">
                    <div class="miniTitle">
                        <div class="noChildren">
                            <p v-html="(index+1) + '.' + key.title"></p>
                            <!-- 问题类型为单选 -->
                            <div v-if="key.questionareItemOptionsBeans && key.questionareItemOptionsBeans.length>0">
                                <div v-if="key.questionType == 0">
                                    <form action="" method="get" class="miniTitle"> 
                                        <ul>
                                            <li v-for="(parentOption_one,idxa) in key.questionareItemOptionsBeans" :key="idxa">
                                                <label><input name="Fruit" type="radio" value="" /><span v-html="parentOption_one.optionContent"></span></label>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <!-- 子问题 -->
                        <div v-if="key.questionareItemResponseBean && key.questionareItemResponseBean.length>0">
                            <div class="child">
                                <div v-for="(childrenOption,ids) in key.questionareItemResponseBean" :key="ids" :class="'children'+(ids+1)">
                                    <p v-html="childrenOption.title" :class="childrenOption.title.indexOf('糖尿病类型为')>=0?'type':''"></p>
                                    <div v-if="childrenOption.questionareItemOptionsBeans && childrenOption.questionareItemOptionsBeans.length>0">
                                        <div v-if="childrenOption.title.indexOf('可多选')<0">
                                            <form action="" method="get" class="miniTitle"> 
                                                <ul>
                                                    <li v-for="(parentOption_two,idxb) in childrenOption.questionareItemOptionsBeans" :key="idxb">
                                                        <label><input name="Fruit" type="radio" value="" :class="key.title.indexOf('是否近视')>=0?'shortsightedness':''"/><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>


                                        <div v-if="childrenOption.title.indexOf('可多选')>=0">
                                            <form action="" method="get" class="miniTitle">
                                                <ul>
                                                    <li v-for="(parentOption_two,idxc) in childrenOption.questionareItemOptionsBeans" :key="idxc">
                                                        <label><input name="Fruit" type="checkbox" value="" /><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h5 class="title" v-if="loadingShow">二、心理行为<span>(由家长填写)</span></h5>
            <div v-for="(key,index) in psychological" :key="key.id">

                <!-- 问题 -->
                <div :id="key.ID">
                    <div class="miniTitle">
                        <div class="noChildren">
                            <p v-html="(index+1) + '.' + key.title"></p>
                            <!-- 问题类型为单选 -->
                            <div v-if="key.questionareItemOptionsBeans && key.questionareItemOptionsBeans.length>0">
                                <div v-if="key.questionType == 0">
                                    <form action="" method="get" class="miniTitle"> 
                                        <ul>
                                            <li v-for="(parentOption_one,idxa) in key.questionareItemOptionsBeans" :key="idxa">
                                                <label><input name="Fruit" type="radio" value="" /><span v-html="parentOption_one.optionContent"></span></label>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <!-- 子问题 -->
                        <div v-if="key.questionareItemResponseBean && key.questionareItemResponseBean.length>0">
                            <div class="child">
                                <div v-for="(childrenOption,ids) in key.questionareItemResponseBean" :key="ids" :class="'children'+(ids+1)">
                                    <p v-html="childrenOption.title"></p>
                                    <div v-if="childrenOption.questionareItemOptionsBeans && childrenOption.questionareItemOptionsBeans.length>0">
                                        <div v-if="childrenOption.title.indexOf('可多选')<0">
                                            <form action="" method="get" class="miniTitle"> 
                                                <ul>
                                                    <li v-for="(parentOption_two,idx) in childrenOption.questionareItemOptionsBeans" :key="idx">
                                                        <label><input name="Fruit" type="radio" value="" /><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>


                                        <div v-if="childrenOption.title.indexOf('可多选')>=0">
                                            <form action="" method="get" class="miniTitle">
                                                <ul>
                                                    <li v-for="(parentOption_two,idx) in childrenOption.questionareItemOptionsBeans" :key="idx">
                                                        <label><input name="Fruit" type="checkbox" value="" /><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h5 class="title" v-if="loadingShow">三、运动与睡眠<span>(由学生填写)</span></h5>
            <div v-for="(key,index) in exercise" :key="key.id">

                <!-- 问题 -->
                <div :id="key.ID">
                    <div class="miniTitle">
                        <div class="noChildren">
                            <p v-html="(index+1) + '.' + key.title"></p>
                            <!-- 问题类型为单选 -->
                            <div v-if="key.questionareItemOptionsBeans && key.questionareItemOptionsBeans.length>0">
                                <div v-if="key.questionType == 0">
                                    <form action="" method="get" class="miniTitle"> 
                                        <ul>
                                            <li v-for="(parentOption_one,idxa) in key.questionareItemOptionsBeans" :key="idxa">
                                                <label><input name="Fruit" type="radio" value="" /><span v-html="parentOption_one.optionContent"></span></label>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <!-- 子问题 -->
                        <div v-if="key.questionareItemResponseBean && key.questionareItemResponseBean.length>0">
                            <div class="child">
                                <div v-for="(childrenOption,ids) in key.questionareItemResponseBean" :key="ids" :class="'children'+(ids+1)">
                                    <p v-html="childrenOption.title"></p>
                                    <div v-if="childrenOption.questionareItemOptionsBeans && childrenOption.questionareItemOptionsBeans.length>0">
                                        <div v-if="childrenOption.title.indexOf('可多选')<0">
                                            <form action="" method="get" class="miniTitle"> 
                                                <ul>
                                                    <li v-for="(parentOption_two,idx) in childrenOption.questionareItemOptionsBeans" :key="idx">
                                                        <label><input name="Fruit" type="radio" value="" /><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>


                                        <div v-if="childrenOption.title.indexOf('可多选')>=0">
                                            <form action="" method="get" class="miniTitle">
                                                <ul>
                                                    <li v-for="(parentOption_two,idx) in childrenOption.questionareItemOptionsBeans" :key="idx">
                                                        <label><input name="Fruit" type="checkbox" value="" /><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h5 class="title" v-if="loadingShow">四、膳食<span>(由学生填写)</span></h5>
            <div v-for="(key,index) in food" :key="key.id">

                <!-- 问题 -->
                <div :id="key.ID">
                    <div class="miniTitle">
                        <div class="noChildren">
                            <p v-html="(index+1) + '.' + key.title"></p>
                            <!-- 问题类型为单选 -->
                            <div v-if="key.questionareItemOptionsBeans && key.questionareItemOptionsBeans.length>0">
                                <div v-if="key.questionType == 0">
                                    <form action="" method="get" class="miniTitle"> 
                                        <ul>
                                            <li v-for="(parentOption_one,idxa) in key.questionareItemOptionsBeans" :key="idxa">
                                                <label><input name="Fruit" type="radio" value=""/><span v-html="parentOption_one.optionContent"></span></label>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <!-- 子问题 -->
                        <div v-if="key.questionareItemResponseBean && key.questionareItemResponseBean.length>0">
                            <div class="child">
                                <div v-for="(childrenOption,ids) in key.questionareItemResponseBean" :key="ids" :class="'children'+(ids+1)">
                                    <p v-html="childrenOption.title"></p>
                                    <div v-if="childrenOption.questionareItemOptionsBeans && childrenOption.questionareItemOptionsBeans.length>0">
                                        <div v-if="childrenOption.title.indexOf('可多选')<0">
                                            <form action="" method="get" class="miniTitle"> 
                                                <ul>
                                                    <li v-for="(parentOption_two,idx) in childrenOption.questionareItemOptionsBeans" :key="idx">
                                                        <label><input name="Fruit" type="radio" value="" /><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>


                                        <div v-if="childrenOption.title.indexOf('可多选')>=0">
                                            <form action="" method="get" class="miniTitle">
                                                <ul>
                                                    <li v-for="(parentOption_two,idx) in childrenOption.questionareItemOptionsBeans" :key="idx">
                                                        <label><input name="Fruit" type="checkbox" value="" /><span v-html="parentOption_two.optionContent"></span></label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <van-button v-if="loadingShow" size="large" type="primary" @click="commit">提交</van-button>
        </div>

        <van-loading v-show="loading" type="spinner" color="#000" class="loading"/>
            
        
    </div>
</template>

<style lang="scss" src="./questionnaire.scss">
    
    
</style>


<script>
// import json from './../../../static/data.json'
import http from './../../utils/HttpClient'
import { Loading } from 'vant';
Vue.use(Loading);
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default { 
    data() {
        return {
            isShow:'获取数据失败',
            questionareName:'',
            data:[],

            // 是否糖尿病
            typeNum:'',
            // 是否有数据传过来
            show:true,
            loading:false,
            loadingShow:false,

            //分类
            basic:[],
            psychological:[],
            exercise:[],
            food:[],

            params:{
                studentId:'',
                questionareYear:'',
                questionareItemResquestBeans:[]
            }
        };
    },
    methods: {
        commit(){
            for(let i_one = 0;i_one<this.data.length;i_one++){
                // 问题的参数格式 
                let obj = {
                    cid: '',
                    questionType:'',
                    options: '',
                    questionareItemResquestBeans:[], 
                    questionareAnswerBeans: []
                }

                // console.log($('#'+this.data[i_one].ID));

                // 选择题中的input
                let checkedOptions = $('#'+ this.data[i_one].ID +' div.noChildren label>input')

                // 添加cid 和 questionType
                obj.cid = this.data[i_one].cid;
                obj.questionType = this.data[i_one].questionType;

                // 判断选项中是否有填空
                let optionsGapFilling = $('#'+ this.data[i_one].ID +' div.noChildren label span input');
                // console.log('input',optionsGapFilling);
                if(optionsGapFilling.length>0){
                    
                    for(let valueNum of optionsGapFilling){
                        obj.questionareAnswerBeans.push({value:''})
                    }
                }

                // 判断选中的项
                if(checkedOptions.length>0){
                    // console.log(checkedOptions)
                    
                    // 判断是否有选择 —— 1
                    let arrayChecked = []
                    for(let i_two = 0;i_two<checkedOptions.length;i_two++){
                        // console.log(checkedOptions[i_two]);
                        // console.log('input',checkedOptions[i_two])
                        // 判断是否有选择 —— 2
                        arrayChecked.push(checkedOptions[i_two].checked)

                        if(checkedOptions[i_two].checked == true){

                            // 对应的input
                            // console.log('options',checkedOptions[i_two].nextElementSibling)

                            // 判断选中的选项中是否有填空
                            let optionInput =  checkedOptions[i_two].nextElementSibling.querySelectorAll('input');
                            // 有填空
                            if(optionInput.length>0){
                                // 选中有填空的选项时先重置 obj.questionareAnswerBeans = []
                                obj.questionareAnswerBeans = [];
                                // console.log('optionsGapFilling---------',optionsGapFilling);
                                for(let optionsGapFillingAll of optionsGapFilling){
                                    // console.log('optionsGapFillingAll',optionsGapFillingAll)
                                    let valueGapFilling = {value:''}
                                    for(let optionValue of optionInput){
                                        // console.log('-----------',optionValue)
                                        // console.log('sdfa',optionValue);
                                        if(optionValue.value == '' || optionValue.value == undefined){
                                            this.params.questionareItemResquestBeans = [];
                                            return Toast('请把内容填写完成再提交');
                                        }else{

                                            if(optionsGapFillingAll == optionValue){
                                                valueGapFilling = {value:optionValue.value}
                                            }
                                        }
                                    }
                                    // console.log('valueGapFilling',valueGapFilling)
                                    obj.questionareAnswerBeans.push(valueGapFilling)
                                }
                            }

                            // 选中的项
                            obj.options = i_two+1;

                            // console.log('eleinput',checkedOptions[i_two],(i_two+1))
                        }
                    }

                    // 判断是否有选择 —— 3
                    if(arrayChecked.indexOf(true)<0){
                        // 选择不可以为空
                        this.params.questionareItemResquestBeans = [];
                        return Toast('请把内容填写完成再提交');
                    }
                }
                // 填空题
                // console.log(checkedOptions.length);
                let gapFilling = $('#'+ this.data[i_one].ID +' div.noChildren>P input')
                if(checkedOptions.length == 0 && gapFilling.length>0){
                    // console.log('gapFilling',gapFilling);
                    for(let inputValue of gapFilling){
                        // console.log(inputValue.value);
                        if(inputValue.value == '' || inputValue.value == undefined){
                            // 填空不可以为空
                            this.params.questionareItemResquestBeans = [];
                            return Toast('请把内容填写完成再提交');
                        }
                        obj.questionareAnswerBeans.push({value:inputValue.value})
                    } 
                }

                // 判断是否有子问题
                let childMatter = $('#'+this.data[i_one].ID + ' .child>div')
                

                // 存在子问题
                if(childMatter.length>0){
                    // console.log('obj',obj)
                    // console.log('child',childMatter);

                    for(let i_child_two = 0;i_child_two<childMatter.length;i_child_two++){

                        // console.log(this.data[i_one].questionareItemResponseBean[i_child_two]);
                        // 子问题参数
                        let childObj = {
                            cid: this.data[i_one].questionareItemResponseBean[i_child_two].cid,
                            questionType:this.data[i_one].questionareItemResponseBean[i_child_two].questionType,
                            options: '',
                            questionareItemResquestBeans:[], 
                            questionareAnswerBeans: []
                        }

                        // 判断子问题有没有填空
                        let childOptionsGapFilling_value = childMatter[i_child_two].querySelectorAll('label span input');
                        // console.log('input',childOptionsGapFilling_value);

                        if(childOptionsGapFilling_value.length>0){
                            childObj.questionareAnswerBeans = [{value:''}]
                        }

                        // console.log('child',childMatter[i_child_two])

                        // 判断子问题的类型
                        let isForm = $(childMatter[i_child_two]).find('form label>input');
                        // console.log('input',isForm)
                        // 子问题为选择题类型
                        if(isForm.length>0){

                            // 父母是否近视
                            if(isForm[0].className == 'shortsightedness' && obj.options != 1){
                                // console.log(obj.options)
                                // console.log('checkedOptions[i_two]',isForm)
                                
                            }else{

                                // 判断子问题是否有选择 _ 1
                                let childCheckedArray = [];
                                // 子问题为多选 
                                let checkbox_option = '';
                                for(let i_child = 0;i_child<isForm.length;i_child++){
                                    // 判断子问题是否有选择 _ 2
                                    childCheckedArray.push(isForm[i_child].checked);
    
                                    if(isForm[i_child].checked == true){
    
                                        // 子问题为多选 
                                        if(isForm[i_child].type == 'checkbox'){
    
                                            let option_num = i_child+1;
                                            if(option_num == 10){
                                                option_num = 'a';
                                            }else if(option_num == 11){
                                                option_num = 'b'
                                            }else if(option_num == 12){
                                                option_num = 'c'
                                            }else if(option_num == 13){
                                                option_num = 'd'
                                            }else if(option_num == 14){
                                                option_num = 'e'
                                            }else if(option_num == 15){
                                                option_num = 'f'
                                            }
    
                                            checkbox_option += option_num;
                                            // console.log('type',isForm[i_child].type,checkbox_option);
    
                                            childObj.options = checkbox_option
                                        }else{
    
                                            // 子问题选项
                                            childObj.options = i_child+1;
                                            // console.log('i_child',i_child+1)
                                        }
    
                                        let childOptionInput =  isForm[i_child].nextElementSibling.querySelectorAll('input');
    
                                        // 子问题有填空
                                        if(childOptionInput.length>0){
                                            let childOption_str = '';
                                            for(let childOptionValue of childOptionInput){
                                                // console.log('sdfa',childOptionValue.value);
                                                if(childOptionValue.value == '' || childOptionValue.value == undefined){
                                                    //  console.log('填空不可以为空')
                                                    this.params.questionareItemResquestBeans = [];
                                                    return Toast('请把内容填写完成再提交');
                                                }else{
                                                    childOption_str += childOptionValue.value + ',';
                                                }
                                            }
    
                                            childOption_str = childOption_str.slice(0,-1);
                                            childObj.questionareAnswerBeans = [{value:childOption_str}]
                                        }

                                        if(isForm[0].className == 'shortsightedness' && obj.options == 1){

                                            let text = isForm[i_child].nextElementSibling.innerText
                                            childObj.questionareAnswerBeans = [{value:text}]
                                            // console.log('childObj.options',childObj.options)
                                            // console.log('ele',isForm[i_child].nextElementSibling)
                                        }
                                    }
    
                                    // console.log('childChecked.checked',isForm[i_child].checked)
                                }

                                    // 判断是否有糖尿病————————
                                    let type = $('.type').parent().prev().find('label>input');
                                    let typeEle = childMatter[i_child_two].querySelectorAll('label>input');
                                    if(this.typeNum == 1){
                                        // console.log(isForm,childMatter[i_child_two],typeEle)
                                        // console.log(childCheckedArray)
                                        childCheckedArray.push(true);
                                        // continue; 
                                    }
                                    if(type[1] == typeEle[1] && type[1].checked == true){
                                        // console.log(isForm,childMatter[i_child_two],typeEle)
                                        // console.log(childCheckedArray)
                                        // console.log('type')     
                                        this.typeNum = 1;
                                    }else{
                                        this.typeNum = 0;
                                    }
    
                                // console.log('childCheckedArray',childCheckedArray);
                                // 判断子问题是否有选择 _ 3
                                if(childCheckedArray.indexOf(true)<0){
                                    // 子问题选择不可以为空
                                    // console.log('子问题选择不可以为空');
                                    this.params.questionareItemResquestBeans = [];
                                    return Toast('请把内容填写完成再提交');
                                }
                            }

                            // console.log('isFrom',isForm);

                        // 子问题为填空题类型
                        }else{
                            let gapFillingAllInput = $(childMatter[i_child_two]).find('p input');

                            // console.log(gapFilling);
                            for(let childInputValue of gapFillingAllInput){
                                // console.log(childInputValue.value);
                                if(childInputValue.value == '' || childInputValue.value == undefined){

                                    // 填空不可以为空
                                    // console.log('子问题填空不可以为空');
                                    this.params.questionareItemResquestBeans = [];
                                    return Toast('请把内容填写完成再提交');
                                }

                                childObj.questionareAnswerBeans.push({value:childInputValue.value})
                            } 
                        }

                        obj.questionareItemResquestBeans.push(childObj);

                        // 父母没有近视时
                        if(isForm.length>0){
                            if(isForm[0].className == 'shortsightedness' && obj.options != 1){
                                // console.log(obj.options)
                                // console.log('checkedOptions[i_two]',isForm)
                                obj.questionareItemResquestBeans = [];
                            }
                        }
                    }
                }

                this.params.questionareItemResquestBeans.push(obj);

            }
            // this.params取最后this.data.length
            // console.log('this.params',this.params);
            // 判断是否有糖尿病————————
            this.typeNum = '';
            http.post('/api/auth/v1/questionnaire?studentId='+this.params.studentId+'&questionareYear='+this.params.questionareYear,this.params).then(res=>{
                console.log(res);
                if(res.status.code == 0){
                    Toast('提交成功');
                }else{
                    Toast(res.status.msg);
                }
            })
        },
        getData(data){
            this.show = true;
            var reg = new RegExp( /\{0\}/ , "g" )

            this.questionareName = data.questionareName;
            this.data = data.questionareItemResponseBean;
            // console.log(this.data);


            for(let i=0;i<this.data.length;i++){

                this.data[i].ID = 'target' + (i+1); 
                // title有填空
                if(this.data[i].title.indexOf('{0}')>=0){
                    this.data[i].title = this.data[i].title.replace( reg , '<input type="test" style="border: 0 none;border-bottom: 1px solid;width:80px;"padding-left:14px;/>');
                }

                // 选项有填空 
                if(this.data[i].questionareItemOptionsBeans && this.data[i].questionareItemOptionsBeans.length>0){
                    // console.log(this.data[i].questionareItemOptionsBeans)
                    let options = this.data[i].questionareItemOptionsBeans;
                    for(let option_key of options){
                        // console.log('option_key',option_key);

                        if(option_key.optionContent.indexOf('{0}')>=0){
                            option_key.optionContent = option_key.optionContent.replace( reg , '<input type="test" style="border: 0 none;border-bottom: 1px solid;width:80px;"padding-left:14px;/>');
                        }
                    }
                }

                // 子问题中的填空 
                if(this.data[i].questionareItemResponseBean && this.data[i].questionareItemResponseBean.length>0){
                    let childrenMatter = this.data[i].questionareItemResponseBean;
                    for(let childrenOption of childrenMatter){
                        // console.log('title',childrenOption.title);
                        if(childrenOption.title.indexOf('{0}')>=0){
                            childrenOption.title = childrenOption.title.replace( reg , '<input type="test" style="border: 0 none;border-bottom: 1px solid;width:80px;"padding-left:14px;/>');
                        }

                        // console.log('childrenOption',childrenOption)

                        if(childrenOption.questionareItemOptionsBeans &&　childrenOption.questionareItemOptionsBeans.length>0){
                            let childrenMatterOption = childrenOption.questionareItemOptionsBeans;

                            for(let item of childrenMatterOption){
                                // console.log('optionContent-000--',item.optionContent)
                                if(item.optionContent.indexOf('{0}')>=0){
                                    item.optionContent = item.optionContent.replace( reg , '<input type="test" style="border: 0 none;border-bottom: 1px solid;width:80px;"padding-left:14px;/>');
                                }
                            }
                        }
                    }

                }

                if(this.data[i].subTitle == '基本情况(由家长填写）'){
                    this.basic.push(this.data[i]);
                }else if(this.data[i].subTitle == '心理行为（由家长填写）'){
                    this.psychological.push(this.data[i]);
                }else if(this.data[i].subTitle == '运动与睡眠(由学生填写,下面22-25题只计算那些每次至少10分钟的活动)'){
                    this.exercise.push(this.data[i]);
                }else if(this.data[i].subTitle == '膳食(由学生填写)'){
                    this.food.push(this.data[i]);
                }

                this.loadingShow = true;
            }
            // console.log(this.basic,'basic');
        }
    },
    mounted(){
        // console.log(json);
        // 是否有数据传过来
        if (undefined === window.knowledge) {
            this.show = false;
        }else{

            let text = window.knowledge.getData();
            let json = JSON.parse(text);

            this.params.studentId = json.studentId;
            this.params.questionareYear = json.year;
            localStorage.setItem('access_token',json.token);

            // 本地测试
            // this.params.studentId = 13;
            // this.params.questionareYear = 2018;
            // localStorage.setItem('access_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJtZW51c1wiOltdLFwidXNlckFjY291bnRcIjpcIjE3NjY2MDQ2MDM0XCIsXCJ1c2VySWRcIjoxLFwidXNlcm5hbWVcIjpcIui1teS_iuiBqlwifSIsImlzcyI6InlkbCIsImV4cCI6MTU3MTIwODQ4MCwianRpIjoiMjg2ZDdkYTYtMTM3Ny00ZDdjLTlkMjUtODYzMWRmNzQ4OWJkIn0._Snt7v1JLG35bviJJlw6RPcGdQBY5hiJs5kLTLcG4QU');

            this.loading = true;
            
            http.get('/api/auth/v1/questionnaire/getQuestionareByYear',{studentId:this.params.studentId,year:this.params.questionareYear}).then(res=>{
                // console.log(res);
                if(res.status.code == '0'){
                    this.getData(res.data)
                    this.loading = false;
                }else if(res.status.code == '2306009'){
                    // console.log(res.status.msg);
                    this.isShow = res.status.msg
                    this.show = false;
                    this.loading = false;
                }else if(res.status.code == '2306006'){
                    // console.log(res.status.msg);
                    this.isShow = res.status.msg
                    this.show = false;
                    this.loading = false;
                    Toast(res.status.msg);
                }else{
                    Toast(res.status.msg);
                    this.isShow = res.status.msg
                    this.show = false;
                    this.loading = false;
                }
            })

           
        }


        
    }
};
</script>