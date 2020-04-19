<template>
  <div class="container">
    <form action="" @submit.prevent="registerEmploye">
      <article>
        <h4>Employe</h4>
        <div class="quarter-width">
          <label for="fieldDocument">Document</label>
          <input
            type="text"
            v-model="employe.document"
            @change="getEmploye"
            required
            placeholder="78954654654"
            id="fieldDocument"
            :disabled="employe.id"
          />
        </div>

        <div class="three-quarter-width ">
          <label for="fieldName">Name</label>
          <input
            type="text"
            v-model="employe.name"
            :disabled="employe.id"
            placeholder="Jon"
            id="fieldName"
            required
          />
        </div>
      </article>

      <div class="form-footer">
        <router-link class="button button-outline" to="/item/employes">Cancel</router-link>
        <button class="button">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { $employes } from "@/services/Resources";

export default {
  name: "Employe",
  data() {
    return {
      employe: {}
    };
  },
  methods: {
    getEmploye: function(evt) {
      console.log(this.employe.document);
      $employes.search({ document: this.employe.document, size: 1 }).then(res => {
        if (res && res.id) {
          this.employe = res;
        }
      });
    },
    registerEmploye: function(evt) {
      console.log(evt);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="date"] {
  webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: 0.6rem 1rem;
  width: 100%;
}

.full-width {
  clear: both;
}

.quarter-width,
.three-quarter-width,
.half-width,
.three-quarter-width {
  padding: 0px 5px;
  float: left;
}

.three-quarter-width {
  width: 75%;
}
.quarter-width {
  width: 25%;
}
.half-width {
  width: 50%;
}

.form-footer {
  clear:both;
  display: flex;
    justify-content: space-between;
}
</style>
