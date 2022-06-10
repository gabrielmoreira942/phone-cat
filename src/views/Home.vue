<template>
  <v-card>
    <div>
      <div class="d-flex justify-end mt-6"></div>
      <v-card-title>
        <v-text-field
          append-icon="mdi-magnify"
          label="Pesquisar..."
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :items-per-page="5"
        :footer-props="{
          'items-per-page-text': 'Celulares por Página',
        }"
      >
        <template v-slot:item.image="{ item }">
          <img :src="item.image" />
        </template>
      </v-data-table>
    </div>
  </v-card>
</template>

<script>
import Phones from "../apis/phones.js";
export default {
  components: {
    Phones,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Celular",
          align: "start",
          value: "name",
        },
        { text: "Imagem", value: "image" },
        { text: "Descrição", value: "description" },
      ],
      desserts: [],
    };
  },
  created() {
    this.desserts = Phones;
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

img {
  max-width: 40px;
  max-height: 40px;
}
</style>