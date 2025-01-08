<template>
  <div>
    <router-view/>
    <video id="backgroundVid" autoplay muted>
      <source src="./../assets/background-modified.mp4" type="video/mp4"/>
    </video>
    <div style="height: 300px"></div>
    <BRow align-h="around">
      <BCol class="white-col" cols="2">
        <h3>Titre 1</h3>
        <p>
          As an alternative theory, (and because Latin scholars do this sort of
          thing) someone tracked down a 1914 Latin edition of De Finibus which
          challenges McClintock's 15th century claims and suggests that the dawn
          of lorem ipsum was as recent as the 20th century. The 1914 Loeb
          Classical Library Edition ran out of room on page 34 for the Latin
          phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase
          leaves one page dangling with “do-”, while another begins with the now
          ubiquitous “lorem ipsum”. Whether a medieval typesetter chose to
          garble a well-known (but non-Biblical—that would have been
          sacrilegious) text, or whether a quirk in the 1914 Loeb Edition
          inspired a graphic designer, it's admittedly an odd way for Cicero to
          sail into the 21st century.
        </p>
      </BCol>
      <BCol class="white-col" cols="2">
        <h3>Titre 2</h3>
        <p>
          As an alternative theory, (and because Latin scholars do this sort of
          thing) someone tracked down a 1914 Latin edition of De Finibus which
          challenges McClintock's 15th century claims and suggests that the dawn
          of lorem ipsum was as recent as the 20th century. The 1914 Loeb
          Classical Library Edition ran out of room on page 34 for the Latin
          phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase
          leaves one page dangling with “do-”, while another begins with the now
          ubiquitous “lorem ipsum”. Whether a medieval typesetter chose to
          garble a well-known (but non-Biblical—that would have been
          sacrilegious) text, or whether a quirk in the 1914 Loeb Edition
          inspired a graphic designer, it's admittedly an odd way for Cicero to
          sail into the 21st century.
        </p>
      </BCol>
    </BRow>
    <div style="height: 300px"></div>
  </div>
</template>
<script setup>
import {
  BRow,
  BCol
} from "bootstrap-vue-next";
</script>
