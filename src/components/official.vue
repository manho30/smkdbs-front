<template>
  <div class="grid grid-flow-col gap-2">
    <a href="/">
      <picture class="flex">
        <img src="../assets/kpm.png" alt="" width="48" height="48" loading="eager" class="saturate-[90%] w-[48px]">
      </picture>
    </a>
    <div class="flex flex-col justify-center gap-1">
      <div class="grid grid-flow-col items-center justify-start gap-1">
        <a href="/">
          <h1 class="text-lg text-black font-extrabold leading-5">
            SMK DATO BIJAYA SETIA
          </h1>
        </a>
        <tick/>
      </div>
      <a href="/" class="grid grid-flow-col items-center justify-start gap-0.5 font-medium text-gray-600">
        <verified/>
      </a>
    </div>
  </div>
</template>
<script>
import Tick from "@/components/__icon__/tick";
import Verified from "@/components/__icon__/verified";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Official',
  components: {
    Tick,
    Verified
  }
}
</script>