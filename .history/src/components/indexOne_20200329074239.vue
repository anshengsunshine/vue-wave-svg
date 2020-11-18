<template>
  <div>
    <button @click="clickBtn">
      点击事件
    </button>
    <wave />
  </div>
</template>

<script>
import wave from "@/components/wave"
export default {
  name:"index",
  components:{
    wave
  },
  methods:{
    clickBtn(){
      console.log("click点击了按钮事件")
    }
  }
};
</script>
