<template>
  <div class='prose' v-html="html"></div>
</template>
<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      md: new MarkdownIt(),
      html: ''
    }
  },
  watch: {
    markdown: {
      immediate: true,
      handler() {
        this.html = this.md.render(this.markdown)
      }
    }
  }
}
</script>
