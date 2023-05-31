<template>
  <metainfo>
    <template v-slot:title>
      <title>SMK DATO' BIJAYA SETIA</title>
    </template>
  </metainfo>
  <div id="app" class="bg-gray-100">
    <header-container></header-container>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderContainer from "@/components/header";
export default {
  components: {
    HeaderContainer,
  },
  name: 'app',
  head() {
    return {
      meta: [
        { name: 'description', content: 'Welcome to SMK Dato\' Bijaya Setia, a leading high school in Sungai Petani, Kedah. Explore our quality education, dedicated faculty, and modern facilities.' },
        { property: 'og:image', content: 'https://lh3.googleusercontent.com/p/AF1QipN7gW-9F-x41zfiyyEzP2TrX8ldGzXNpVtWIJT2=s1360-w1360-h1020' },
      ],
    }
  },
}
</script>