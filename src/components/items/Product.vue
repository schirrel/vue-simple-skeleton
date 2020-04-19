<template>
  <div class="container">
    <form action="" @submit.prevent="registerProduct">
      <article>
        <h4>Product</h4>
        <div class="quarter-width">
          <label for="fieldBarcode">Barcode</label>
          <input
            type="text"
            v-model="product.barcode"
            @change="getProduct"
            required
            placeholder="78954654654"
            id="fieldBarcode"
            :disabled="product.id"
          />
        </div>

        <div class="three-quarter-width ">
          <label for="fieldName">Name</label>
          <input
            type="text"
            v-model="product.name"
            :disabled="product.id"
            placeholder="Sabão Minuano"
            id="fieldName"
            required
          />
        </div>
      </article>

      <div class="form-footer">
        <router-link class="button button-outline" to="/item/products">Cancel</router-link>
        <button class="button">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { $products } from "@/services/Resources";

export default {
  name: "Product",
  data() {
    return {
      product: {}
    };
  },
  methods: {
    getProduct: function(evt) {
      console.log(this.product.barcode);
      $products.search({ barcode: this.product.barcode, size: 1 }).then(res => {
        if (res && res.id) {
          this.product = res;
        }
      });
    },
    registerProduct: function(evt) {
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
