<template>
  <div class="mt-7 mb-5">
    <div class="ml-5 mr-5">
      <div class="grid gap-1 mt-1 ml-2">
        <div class="font-bold text-xl sm:text-2xl leading-5 sm:leading-6 text-gray-800">
          SMK DATO' BIJAYA SETIA
        </div>
        <div class="text-sm text-gray-800">
          The official SMKDBS website for relishing the latest news and events.
        </div>
        <div class="grid grid-flow-col justify-start gap-1.5 text-sm text-gray-700 mt-2 tracking-tight">
          <div>
            Last updated: {{ lastUpdated }}
          </div>
          <button aria-label="Refresh" @click="refresh" title="Refresh" class="bg-gray-50 hover:bg-white border border-gray-300 p-px rounded">
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000" opacity="0.7" class="">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col lg:flex-row">
    <div id="content1" class="lg:w-1/2 lg:mr-0 bg-white lg:ml-0">
      <Event/>
    </div>
    <div class="mt-2 lg:hidden"></div> <!-- Hide the divider on large screens -->
    <div id="content2" class="lg:w-1/2 lg:mt-0 lg:ml-0 bg-white">
      <Announcements/>
    </div>
  </div>
  <div class="mt-4">
    <About/>
  </div>
  <div class="mt-4">
    <Footer/>
  </div>
</template>
<script>
import Announcements from "@/components/annoucements";
import Event from "@/components/event";
import Footer from "@/components/footer";
import About from "@/components/about";
export default {
  components: {Announcements, Footer, Event, About},
  data() {
    return {
      lastUpdated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
  },
  methods: {
    refresh() {
      window.location.reload();
    }
  },
}
</script>
