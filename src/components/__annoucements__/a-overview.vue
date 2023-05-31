<template>
  <div class="bg-white py-4 pb-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4">Latest Announcements</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="(post, index) in APosts" :key="post.id">
          <div class="bg-white overflow-hidden hover:shadow-lg cursor-pointer" @click="goto(post.link)">
            <div class="relative h-48">
              <img :src="post.image || 'https://via.placeholder.com/800x600'" alt="Blog post image" class="absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
              <p class="text-gray-700">{{ post.excerpt }}</p>
              <div class="flex justify-between items-center mt-4">
                <p class="text-gray-600">{{ post.date }}</p><span v-if="index === 0" class="mr-1 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">Latest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  components: {},

  data() {
    return {
      APosts: [
        {
          id: 1,
          title: 'Waktu Balik Sepanjang Bulan Ramadan',
          image: 'https://source.unsplash.com/random/800x600',
          date: 'March 1, 2023',
          content: '',
          link: '/announcement?id=1',
          author: 'Admin'
        },
        {
          id: 2,
          title: 'Petukaran Kelas 2024/2025',
          image: 'https://source.unsplash.com/random/800x600',
          date: 'March 15, 2023',
          content: '',
          link: '/announcement?id=2',
          author: 'Admin'
        },
        {
          id: 3,
          title: 'Pendaftaran Ko-kurikulum',
          image: 'https://source.unsplash.com/random/800x600',
          date: 'March 23, 2023',
          content: '',
          link: '/announcement?id=3',
          author: 'Admin'
        }
      ]
    }
  },
  methods: {
    goto(link) {
      window.location.href = link;
    }
  }
}
</script>