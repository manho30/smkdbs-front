<template>
  <div class="bg-white py-4 pb-8">
    <div class="container mx-auto px-4 lg:px-6">
      <div class="flex items-center pr-6">
        <h2 class="text-2xl font-bold mb-4">Latest Announcements</h2>
        <div class="hidden sm:block flex-grow h-0.5 bg-gray-300 mb-4 ml-4"></div>
      </div>
        <template v-if="sortedAnnouncements.length">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="announcement in sortedAnnouncements" :key="announcement.title" class="bg-white border border-gray-200 p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">{{ announcement.title }}</h3>
              <p class="text-gray-600 mb-2">{{ formatDate(announcement.date) }}</p>
              <a :href="announcement.detailsUrl" class="text-blue-500 hover:underline">Read More</a><tick/>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
            <span class="font-medium">Info alert!</span> There are no announcements at the moment.
          </div>
        </template>
    </div>
  </div>
</template>
<script>
import tick from "@/components/__icon__/tick";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'announcements',
  components: { tick },
  data() {
    return {
      announcements: [
        // { title: 'Waktu Balik Sepanjang Bulan Ramadan', date: '2023-02-20', detailsUrl: '/announcement?id=1' },
        // { title: 'Petukaran Kelas 2024/2025', date: '2023-02-18', detailsUrl: '/announcement?id=2' },
        // { title: 'Pendaftaran Ko-kurikulum', date: '2023-02-16', detailsUrl: '/announcement?id=3' }
      ]
    }
  },
  computed: {
    sortedAnnouncements() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.announcements.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    goToAnnouncement(announcement) {
      this.$router.push(announcement.detailsUrl)
    }
  }
}
</script>