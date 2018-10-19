<template>
  <div class="hello">
    <h1>this is Index</h1>
    <blockquote v-for="(img, index) in imgs" :key="index">
      <img v-lazy="img" alt="">
    </blockquote>
  </div>
</template>

<script>
import {init} from '@/http/interface'
// import {Toast} from 'mint-ui'
// import 'mint-ui/lib/style.css'
import { MessageBox } from 'mint-ui'

export default {
  name: 'Index',
  props: {
    // msg: String
  },
  data: function(){
    return {
      imgs: ['','','','','']
    }
  },
  created(){
    let self = this;
    
    MessageBox({
      title: '提示',
      message: '确定执行此操作?',
      showCancelButton: true,
      closeOnClickModal: false
    }).then((action) => {
      console.log(action);
      if (action == 'confirm') window.location.reload()
      else if (action == 'cancel') window.location.href = 'http://www.m.baidu.com'
    })

    init().then( res => {
      console.log(res)
      self.imgs = [
        'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
        '//img.alicdn.com/imgextra/i2/165/TB2e0x7X138SeJjSZFPXXc_vFXa_!!165-2-luban.png_120x120q90.jpg_.webp',
        '//img.alicdn.com/tps/i4/TB1TiGwKXXXXXXRXFXXqVMCNVXX-400-400.jpg_180x180q90.jpg_.webp',
        'https://gma.alicdn.com/bao/uploaded/i2/13148488/O1CN012CZYGncBXBWJZuh_!!0-saturn_solar.jpg_200x200.jpg_.webp',
        '//img.alicdn.com/bao/uploaded/i3/TB10YeXPpXXXXbGXFXXXXXXXXXX_!!0-item_pic.jpg_180x180q90.jpg_.webp',
      ]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .hello {
    img{
      width: 600/@rem;
      height: 240/@rem;
    }
  }
</style>
