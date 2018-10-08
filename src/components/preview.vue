<template>
  <div class="preview" v-if="type">
    <div class="preview-con">
      <iframe v-if="type === 'office'" :src="`https://view.officeapps.live.com/op/view.aspx?src=${url}`" width='100%' height='100%' frameborder='1'></iframe>
      <pdf
            v-if="type === 'pdf'"
            v-for="i in numPages"
            :key="i"
            :src="url"
            :page="i"
        ></pdf>
    </div>
    <div class="preview-delbtn" @click="closePreview">×</div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'preview',
  components: {
    pdf
  },
  data () {
    return {
      url: '',
      type: null,
      numPages: 0,
      loadingTask: null
    }
  },
  methods: {
    // 初始化
    show (url) {
      this.type = this.getType(url)
      this.url = url
      switch (this.type) {
        case 'office':
          this.previewOffice()
          break
        case 'pdf':
          this.previewPdf()
          break
        case 'txt':
          this.previewTxt()
          break
      }
    },
    // 获取url后缀
    getExt (url) {
      const lastIndex = url.lastIndexOf('.')
      return url.substr(lastIndex + 1)
    },
    // 获取类型
    getType (url) {
      let result = null;
      if (this.isOfficeType(url)) {
        result = 'office'
      }else if (this.isPdfType(url)) {
        result = 'pdf'
      }else if (this.isTxtType(url)) {
        result = 'txt'
      }
      return result;
    },
    // 是否 office
    isOfficeType (url) {
      const ext = this.getExt(url)
      return ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].indexOf(ext.toLowerCase()) !== -1;
    },
    // 是否 pdf
    isPdfType (url) {
      const ext = this.getExt(url)
      return ['pdf'].indexOf(ext.toLowerCase()) !== -1;
    },
    // 是否 txt
    isTxtType (url) {
      const ext = this.getExt(url)
      return ['txt'].indexOf(ext.toLowerCase()) !== -1;
    },
    // 预览 doc、xls、ppt
    previewOffice () {
    },
    // 预览 pdf
    previewPdf () {
      const loadingTask = pdf.createLoadingTask(this.url);
      loadingTask.then(pdf => {
        this.numPages = pdf.numPages;
      })
    },
    // 预览 txt
    previewTxt () {

    },
    // 关闭预览
    closePreview () {
      this.type = null;
    }
  }
}
</script>
<style lang="scss" scoped>
.preview {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(#000, 0.8);
  &-delbtn {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 5px;
    top: 5px;
    background-color: #c0c0c0;
    color: #000;
    border-radius: 25px;
    font-size: 25px;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
  }
  &-con {
    position: absolute;
    left: 30px;
    top: 30px;
    right: 30px;
    bottom: 30px;
    margin: auto;
    overflow-y: auto;
  }
}
</style>
