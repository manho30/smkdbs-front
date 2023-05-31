<template>
  <div class="bg-white py-4 pb-8">
    <div class="container px-4 md:grid md:grid-cols-3 md:gap-4">
      <div id="main" class="col-span-2">
        <header>
          <h2 class="text-3xl font-bold mb-4">{{ post.title }}</h2>
          <div class="flex items-center mb-4" id="author">
            <span class="material-symbols-outlined mr-2 select-none">person</span>
            <p class="text-gray-600">{{ post.author }}</p>
            <span class="material-symbols-outlined text-green-600 ml-1 select-none">verified</span>
          </div>
          <div class="flex items-center mb-4" id="date">
            <span class="material-symbols-outlined mr-2 select-none">calendar_today</span>
            <p class="text-gray-600">{{ post.date }}</p>
          </div>
        </header>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400">
        <div id="content">
          <markdown-view :markdown="post.content"/>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import markdownView from "@/components/__markdown__/markdown-view";
export default {
  props: {
    // the post object is passed in from the parent component.
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    markdownView
  },
}
</script>