<template>
  <i-row class="ivu-row-main">
    <!--{{$store.state.count}}-->
    <ul>
      <li>
        <dl class="clearfix">
          <dd class="fl">
            <mt-switch v-model="value"></mt-switch>
          </dd>
          <dt class="fr" style="width: 80%;">
            <div class="clearfix">
               <span class="fl">
                  <img src="../img/nav-tz.png" alt="">
              </span>
              <div class="fr">
                <p>阿里斯顿来访记录是多少了解对方</p>
                <p class="t-c h-30">¥4799</p>
                <p class="t-c h-30">
                  <inptnumber v-model="value" :max="10" :min="0" v-focus></inptnumber>
                </p>
                <p class="t-c h-30">删除</p>
              </div>
            </div>
          </dt>
        </dl>
      </li>
    </ul>
  </i-row>
</template>

<script>
  import Inptnumber from "../../../components/inptnumber";
  import MtSwitch from "mint-ui/packages/switch/src/switch";

  export default {
    components: {
      MtSwitch,
      Inptnumber
    },
    name: "goodscar",
    data() {
      return {}
    },
    computed: {
      count1() {
        return this.$store.state.count
      }
    }
  }
</script>

<style scoped>
  .ivu-row-main {
    top: 50px;
    margin-bottom: 80px;
  }

  .p-rel {
    position: relative;
  }

  .p-abs {
    position: absolute;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }
  .h-30{
    height: 30px;
  }
  .t-c{
    text-align: center;
  }
</style>
