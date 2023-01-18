<template>
  <div class="container">
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <div class="col-md-4 d-flex align-items-center">
        <span class="text-secondary"
          >© {{ currentYear }} Nathalie Blanchet, psychologue</span
        >
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-2">
          <a
            class="text-secondary"
            href="mailto:croissens@yahoo.ca"
            target="blank"
            ><b-icon-envelope
          /></a>
        </li>
        <li class="ms-2 ml-5">
          <a
            class="text-secondary"
            href="https://www.facebook.com/nathalie.blanchet.334"
            target="blank"
            ><b-icon-facebook
          /></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import moment from "moment";
import { ref } from "vue";

const currentYear = ref(moment().year());
</script>
