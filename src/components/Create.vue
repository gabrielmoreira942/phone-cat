<template>
  <v-card>
          <v-form @submit.prevent="create">
    <v-card-title>
      <v-row no-gutters>
        <v-col class="mt-4 xs-12">
            <v-text-field
              v-model="name"
              label="Nome"
              single-line
              hide-details
            ></v-text-field>
            <v-text-field
              v-model="age"
              label="Idade"
              single-line
              hide-details
            ></v-text-field>
            <v-text-field
              v-model="cpf"
              label="CPF"
              single-line
              hide-details
            ></v-text-field>
          
        </v-col>
      </v-row>
    </v-card-title>
    <div class="d-flex justify-end mt-6">
      <v-btn class="mx-2" dark color="indigo" @click="back"> Voltar </v-btn>
    </div>

    <div class="d-flex justify-end mt-6">
      <v-btn class="mx-2" type="submit" dark color="success"
        >Criar</v-btn
      >
    </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      cpf: "",
    };
  },

  methods: {
    back() {
      return (this.$store.state.index = true);
    },
    create() {
      this.$store.state.form = {
        name: this.name,
        age: this.age,
        cpf: this.cpf,
      };
      this.$store.state.index = true;
    },
  },
};
</script>
