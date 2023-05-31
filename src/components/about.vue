<template>
  <div class="bg-white py-8">
    <div class="container mx-auto px-4 lg:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="col-span-1 lg:col-span-2">
          <div class="widget widget_text">
            <div class="textwidget">
              <h2 class="text-2xl font-bold mb-4">Location</h2>
              <iframe class="w-full"
                      height="450"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.542155705573!2d100.50485007366437!3d5.634383332859305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b29e01d1af10f%3A0xa3ce47c0b486c008!2sSekolah%20Menengah%20Kebangsaan%20Dato%20Bijaya%20Setia!5e0!3m2!1sen!2smy!4v1685513801201!5m2!1sen!2smy"
                      style="border: 1px;">
              </iframe>
            </div>
          </div>
        </div>

        <div class="col-span-1 lg:col-span-1" id="vision">
          <h2 class="text-2xl font-bold mb-4">Vision</h2>
          <p>Pendidikan Berkualiti, Insan Terdidik, Negara Sejahtera.</p>
        </div>

        <div class="col-span-1 lg:col-span-1" id="mission">
          <h2 class="text-2xl font-bold mb-4 lg:mb-0">Mission</h2>
          <p>Melestarikan Sistem Pendidikan yang Berkualiti untuk Membangunkan Potensi Individu bagi Memenuhi Aspirasi Negara.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "about"
}
</script>