<template>
  <v-card>
    <div v-if="$store.state.index">
      <div class="d-flex justify-end mt-6">
        <v-btn class="mx-2" fab dark color="indigo" @click="create">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </div>
      <v-card-title>
        <v-text-field
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
      ></v-data-table>
    </div>
    <div v-else>
      <Create></Create>
    </div>
  </v-card>
</template>

<script>
import Create from "../components/Create.vue";
export default {
  components: {
    Create,
  },
  data() {
    return {
      headers: [
        {
          text: "Usuários",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Idade", value: "age" },
        { text: "CPF", value: "cpf" },
      ],
      desserts: [],
      index: true,
    };
  },

  methods: {
    create() {
      this.$store.state.index = false;
    },
  },
  watch:{
    form(newValue){
     this.desserts.push(newValue)
    }
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
  },
};
</script>