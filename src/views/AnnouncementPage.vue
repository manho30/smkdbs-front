<template>
  <div id="content" class="ml-5 mr-5 bg-white">
    <div v-if="overview">
      <a-overview/>
    </div>
    <div v-else-if="id !== null && APosts[id - 1]">
      <a-post :post="APosts[id - 1]"/>
    </div>
    <div v-else>
      <p>Announcement not found</p>
    </div>
  </div>
</template>

<script>
import AOverview from "@/components/__annoucements__/a-overview";
import APost from "@/components/__annoucements__/a-post";
export default {
  components: {AOverview, APost},
  data() {
    return {
      id: null,
      overview: null,
      APosts: [
        {
          id: 1,
          title: '[Test] How to cook',
          image: 'https://source.unsplash.com/random/800x600',
          date: 'March 1, 2023',
          content: `# How to cook`,
          link: '/announcement?id=1',
          author: 'manho 牛逼'
        },
        {
          id: 2,
          title: 'Petukaran Kelas 2024/2025',
          image: 'https://source.unsplash.com/random/800x600',
          date: 'March 15, 2023',
          content: '# Petukaran Kelas 2024/2025 ' +
              '\n```js' +
              'Kelas 2024/2025 akan diadakan petukaran kelas pada 15 Mac 2023. ' +
              '```',
          link: '/announcement?id=2',
          author: 'Admin'
        },
        {
          id: 3,
          title: 'Pendaftaran Ko-kurikulum',
          image: 'https://source.unsplash.com/random/800x600',
          date: 'March 23, 2023',
          content: '# Pendaftaran Ko-kurikulum',
          link: '/announcement?id=3',
          author: 'Admin'
        }
      ]
    }
  },
  mounted() {
    this.id = this.getAnnoucementsIDByQueryString();
    this.isOverview();
  },
  methods: {
    /**
     * Get the ID of the announcement from the query string
     * @return {null|number}
     */
    getAnnoucementsIDByQueryString() {
      const urlParams = new URLSearchParams(window.location.search);
      return isNaN(parseInt(urlParams.get('id'))) ? 0 : parseInt(urlParams.get('id'));
    },
    /**
     * Check if the user is on the overview page
     */
    isOverview() {
      this.id === 0 ? this.overview = true : this.overview = false
    }
  }
}
</script>
