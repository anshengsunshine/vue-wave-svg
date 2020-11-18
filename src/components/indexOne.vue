<template>
  <div>
    <button @click="clickBtn">
      点击事件
    </button>
    <svg />
    <wave />
  </div>
</template>

<script>
import wave from "@/components/wave"
import svg from "@/components/svg"
export default {
  name:"index",
  components:{
    wave,
    svg
  },
  methods:{
    clickBtn(){
      console.log("click点击了按钮事件")
    }
  }
};
</script>
