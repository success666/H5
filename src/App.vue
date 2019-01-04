<template>
  <div id="app" style="height:100%;">
    <router-view></router-view>
  </div>
</template>

<style>
html,body{
  height:100%;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
ul,li{
  list-style:none;    
}
clearfix:after{
  content:"";
  display:blcok;
  height:0;
  clear:both;
  overflow:hidden;
  visibility:hidden;
  zoom:1;
}
.ac{
  text-align: center;
}

.fl{
  float: left;
}
.fr{
  float: right;
}

/*默认参照iphone6*/

html {
    font-size: 16px;
}
/* 适配iphone5*/
/* @media screen and (max-width: 320px){
    html {
        font-size: 13.65px !important;
    }
}

@media screen and (min-width: 376px) and (max-width: 414px){
    html {
        font-size: 17.66px !important;
    }
}

@media screen and (min-width: 415px) and (max-width: 768px){
    html {
        font-size: 32.76px !important;
    }
} */

/* @media only  screen and (min-width: 1025px) {
    body{
        width: 600px;
        margin:0 auto;
        
    }
    .record{
        height: 100%    ;
        background:#F2F1F6;
        padding-top:0.02rem;
    }
    body .record .title{
            width:97%;
            border-radius: 0.01rem;
            margin:0 auto;
            background:#fff;
            margin-bottom:0.02rem;
            padding-left: 0.012rem;
            padding-top:0.012rem;
            padding-bottom:0.012rem;
            font-size: 0.038rem;
           
        }
         body .record .title .lhTitle{
                line-height:0.066rem;
            }

        ody .record p.ptitle{
                line-height: 0.1rem;
                padding-left: 0.01rem;
            }
        body .fianco{
            width:97%;
            border-radius: 0.01rem;
            margin:0 auto;
            background:#fff;
            padding-bottom: 0.018rem;
            margin-bottom:0.02rem;
            font-size: 0.04rem;
           
           
            
        }
         .fianco .bg{
                font-size:0.035rem;
                line-height: 0.1rem;
                background:#FBFBFB;
               
            }
            .fianco .bg .left{
                    padding-left:0.012rem;
                }
               .fianco .bg .fr{
                    padding-right:0.012rem;
                }
        .bgs{
                line-height: 0.06rem;
                font-size:0.035rem;
                
            }
            .left{
                    padding-left:0.012rem;
                }
                .fr{
                    padding-right:0.012rem;
                }
        .van-cell{
                background:#CCD7EE;
                margin-bottom:0.01rem;
                line-height: 0.05rem;
                font-size:0.036rem;
            }
        .examination{
            background:#fff;
            width:97%;
            border-radius: 0.01rem;
            margin:0 auto;
            padding-bottom:0.012rem;
            
           
        }
         p.ptitle{
                line-height: 0.1rem;
                padding-left: 0.012rem;
                font-size: 0.04rem;
            }
            .bg{
                background:#FBFBFB;
                font-size:0.036rem;
                line-height: 0.08rem;
            }
            .bgs{
                font-size:0.036rem;
                line-height: 0.08rem;
            }
    } */


</style>


<script>
export default {
  data() {
    return {};
  },
  mounted() {
  
  }
};
</script>

