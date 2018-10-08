<template>
  <div class="main">
    <div @click="previewEvent()">Preview Button</div>
    <preview ref="preview"></preview>
    <!-- <iframe src='https://view.officeapps.live.com/op/view.aspx?src=https://leechikit.github.io/resources/ctg/测试.xlsx' width='100%' height='100%' frameborder='1'></iframe> -->
    <!-- <div id="pdf"></div> -->
    <!-- <a class="media" href="https://leechikit.github.io/resources/ctg/测试.pdf">PDF File</a> -->
    <!-- <iframe src="https://leechikit.github.io/resources/ctg/测试.txt" frameborder="0"></iframe> -->
  </div>
</template>

<script>
// import { file } from '@/api/file'
import preview from "@/components/preview";
export default {
  name: "home",
  components: { preview },
  mounted() {
    // PDFObject.embed('./测试.pdf','#pdf')
    // window.onload = function() {
    //   $("a.media").media({ width: 500, height: 400 });
    // };
    // file("https://leechikit.github.io/resources/ctg/测试.txt").then(data => {
    //   console.log(data);
    // });
  },
  methods: {
    previewEvent() {
      // this.$refs.preview.show("https://leechikit.github.io/resources/ctg/测试.xlsx");
      this.$refs.preview.show("https://leechikit.github.io/resources/ctg/测试.pdf")
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  height: 500px;
}
</style>
