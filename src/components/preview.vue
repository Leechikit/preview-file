<template>
  <div class="preview" v-if="type">
    <div class="preview-con">
      <iframe 
        v-if="type === 'office'"
        :src="`https://view.officeapps.live.com/op/view.aspx?src=${url}`"
        width='100%'
        height='100%'
      ></iframe>
      <pdf
        v-if="type === 'pdf'"
        v-for="i in numPages"
        :key="i"
        :src="url"
        :page="i"
      ></pdf>
      <pre class="txt" v-text="content"></pre>
    </div>
    <div class="preview-delbtn" @click="closePreview">×</div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
import { file } from '@/api/file'
export default {
  name: 'preview',
  components: {
    pdf
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      type: null,
      numPages: 0,
      loadingTask: null,
      content: ''
    }
  },
  watch: {
    url(newVal, oldVal) {
      this.type = this.getType(newVal)
      this.url = newVal
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
    }
  },
  methods: {
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
      file(this.url).then(data => {
        this.content = data;
      });
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
    border: 2px solid #cccccc;
    border-radius: 5px;
    background-color: #fff;
    iframe{
      border: none;
    }
  }
}
</style>
