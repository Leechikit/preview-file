<template>
  <div class="main">
    <div class="btn-list">
      <div class="btn-item" @click="previewEvent('office')">Preview Office</div>
      <div class="btn-item" @click="previewEvent('pdf')">Preview Pdf</div>
      <div class="btn-item" @click="previewEvent('txt')">Preview Txt</div>
    </div>
    <preview :url="previewUrl"></preview>
  </div>
</template>

<script>
import preview from "@/components/preview";
export default {
  name: "home",
  components: { preview },
  data() {
    return {
      previewUrl:''
    }
  },
  methods: {
    previewEvent(type) {
      switch(type) {
        case 'office':
          this.previewUrl = "https://leechikit.github.io/resources/ctg/测试.xlsx"
          break
        case 'pdf':
          this.previewUrl = "https://leechikit.github.io/resources/ctg/测试.pdf"
          break
        case 'txt':
          this.previewUrl = "https://leechikit.github.io/resources/ctg/测试.txt"
          break
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 50px;
  margin: auto;
  .btn-list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .btn-item{
    width: 200px;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    color: #fff;
    background-color: #2d8cf0;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
