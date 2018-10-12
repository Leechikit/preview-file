<template>
  <div class="main">
    <div class="btn-list">
      <div class="btn-item" @click="previewEvent('office')">Preview Office</div>
      <div class="btn-item" @click="previewEvent('pdf')">Preview Pdf</div>
      <div class="btn-item" @click="previewEvent('txt')">Preview Txt</div>
      <div class="btn-item" @click="previewEvent('image')">Preview Image</div>
    </div>
    <preview ref="preview" :url="previewUrl"></preview>
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
      let url = "";
      switch(type) {
        case 'office':
          url = "https://leechikit.github.io/resources/ctg/测试.xlsx"
          break
        case 'pdf':
          url = "https://leechikit.github.io/resources/ctg/测试.pdf"
          break
        case 'txt':
          url = "https://leechikit.github.io/resources/ctg/测试.txt"
          break
        case 'image':
          url = "https://leechikit.github.io/resources/ctg/测试.jpg"
          break
      }
      this.$refs.preview.show({
        url,
        ext: this.getExt(url)
      })
    },
    // 获取url后缀
    getExt(url) {
      const lastIndex = url.lastIndexOf(".");
      return url.substr(lastIndex + 1);
    },
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
