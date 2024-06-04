<template>
  <div class="container">
    <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mr-3"
    >
      <div class="col-md-4 d-flex align-items-center">
        <span>© {{ currentYear }} Nathalie Blanchet, psychologue</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-2 mr-4">
          <a
              href="mailto:croissens@yahoo.ca"
              style="color: black"
              target="blank">
            <b-icon-envelope/>
          </a>
        </li>
        <li class="ms-2 ml-2">
          <a
              href="https://www.facebook.com/nathalie.blanchet.334"
              style="color: black"
              target="blank"
          >
            <b-icon-facebook
            />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import moment from "moment";
import {ref} from "vue";

const currentYear = ref(moment().year());
</script>
