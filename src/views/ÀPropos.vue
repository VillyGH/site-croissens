<template>
  <div>
    <router-view/>
    <h1 class="ml-5 mt-5">À propos de Nathalie Blanchet</h1>
    <BRow class="mt-5 justify-content-start">
      <BCol class="col-4 mt-5"><img alt="Portrait de Nathalie Blanchet" class="img-fluid mx-auto d-block"
                                     src="../assets/img/photoNath4.jpg" style="max-height: 450px; max-width: 300px;"/>
      </BCol>
      <BCol class="col-4 mt-5 align-self-center"><p class="text-justify mr-5">Mon parcours comme psychologue avec plus
        d’une vingtaine d’années d’expérience en cabinet privé m’a permis d’offrir des services de psychothérapie dont
        les interventions d’orientation humaniste-existentielle étaient axées sur la transformation des croyances
        limitantes sous-jacentes aux problématiques entre l’esprit conscient et inconscient.
        Étant consciente de mon aptitude à cerner la nature humaine et spirituelle depuis mon enfance, ma passion pour
        la conscience m’a amené à développer le programme Psy-Conscience
        qui aide les individus éveillés à évoluer par la voie de leur conscience vibratoire vers leur Soi, manifestant
        ainsi l’intuition d’un futur synchronistique.</p></BCol>
    </BRow>
  </div>
</template>
<script setup>
import {BRow, BCol} from "bootstrap-vue-next";
</script>
