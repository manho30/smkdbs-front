<template>
  <div class="bg-white py-5 pb-8">
    <div class="container mx-auto px-4 lg:px-6">
      <div class="flex items-center">
        <h2 class="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div class="hidden sm:block flex-grow h-0.5 bg-gray-300 mb-4 ml-4"></div>
      </div>
      <ol class="ml-1 relative border-l-2 border-gray-300">
        <template v-if="events.length">
          <li v-for="(event, index) in events" :key="index" class="mt-3 mb-10 ml-6 border-solid rounded-md p-4 hover:shadow-lg cursor-pointer">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
              <svg aria-hidden="true" class="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <h3 class="flex-col items-center mb-1 text-lg font-bold text-gray-900">
              {{ event.title }}
              <div class="flex flex-row">
                <span v-if="isEventOccurNow(index)" class="mr-1 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Ongoing</span>
                <span v-if="event.ended" class="mr-1 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">Ended</span>
                <span v-if="coutdownForEvent(index)" class="mr-1 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">Coming after {{ DAY }} Days</span>
              </div>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400">{{ getDateString(index) }}</time>
            <p class="mb-4 text-base font-normal text-gray-500">{{ event.description }}</p>
          </li>
        </template>
        <template v-else>
          <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
            <span class="font-medium">Info alert!</span> There are no announcements at the moment.
          </div>
        </template>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'event',
  data() {
    return {
      events: [
        {
          title: "Pertandingan Marathon 2023",
          date: "March 23, 2023",
          period_days: 1,
          description: "The marathon is a long-distance foot race with a distance of 42.195 km, usually run as a road race, but the distance can be covered on trail routes. The marathon can be completed by running or with a run/walk strategy. There are also wheelchair divisions.",
          ended: null,
          link: "#",
        },
        {
          title: "Pertandingan Bunuh Diri 2023",
          date: "April 1, 2023",
          period_days: 3,
          description: "If you think ur life is not meaningful, join this.",
          ended: null,
          link: "#",
        },
      ],
      DAY: 0,
    };
  },
  mounted() {
    this.determineEventPast();
  },
  methods: {

    /**
     * Gets the date string for the event
     * @param index
     * @return {string}
     */
    getDateString(index) {
      const event = this.events[index];
      const eventDate = new Date(event.date);

      // format = 5 Aug 2022
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      const eventEndDate = new Date(eventDate.getTime() + ((event.period_days - 1) * 24 * 60 * 60 * 1000));
      if (event.ended) {
        return `Ended on ${eventEndDate.toLocaleDateString('en-US', options)}`;
      }

      if (event.period_days > 1 ){
        return `${eventDate.toLocaleDateString('en-US', options)} - ${eventEndDate.toLocaleDateString('en-US', options)} (${event.period_days}d)`;
      }

      return `${eventDate.toLocaleDateString('en-US', options)}`;
    },

    /**
     * Checks if the event has ended
     * @return {void}
     */
    determineEventPast() {
      const today = new Date();
      this.events.forEach((event) => {
        const eventDate = new Date(event.date);
        const eventEndDate = new Date(eventDate.getTime() + ((event.period_days) * 24 * 60 * 60 * 1000));
        if (today > eventEndDate) {
          event.ended = true;
        }
      });
    },

    /**
     * Checks if the event is occurring today
     * @param index
     * @return {boolean}
     */
    isEventOccurNow(index) {
      const event = this.events[index];
      const eventDate = new Date(event.date);
      const eventEndDate = new Date(eventDate.getTime() + ((event.period_days) * 24 * 60 * 60 * 1000));
      const today = new Date();
      return today >= eventDate && today <= eventEndDate;
    },

    /**
     * Checks after how many days the event will occur
     * @param index
     * @return {boolean}
     */
    coutdownForEvent(index) {
      const event = this.events[index];
      const eventDate = new Date(event.date);
      const today = new Date();
      const diffTime = Math.abs(eventDate - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      this.DAY = diffDays;
      if(today < eventDate){
        this.DAY = diffDays;
        return true;
      }
    }
  },
};
</script>
