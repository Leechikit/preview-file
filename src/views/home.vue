<template>
  <div class="main">
    <!-- <iframe src='https://view.officeapps.live.com/op/view.aspx?src=https://leechikit.github.io/resources/ctg/测试.xlsx' width='100%' height='100%' frameborder='1'></iframe> -->
    <div id="pdf"></div>
    <a class="media" href="https://leechikit.github.io/resources/ctg/测试.pdf">PDF File</a>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted () {
    // PDFObject.embed('./测试.pdf','#pdf')
    window.onload = function() {
      $('a.media').media({width:500, height:400});
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  height: 500px;
}
</style>
