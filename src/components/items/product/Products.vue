<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th width="50"></th>
          <th width="150">Barcode</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-show="data.collection && data.collection.length"
          v-for="(item, index) in data.collection"
        >
          <tr :key="index">
            <td class="table-actions">
              <div class="action-list"></div>
            </td>
            <td>{{ item.barcode }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </template>
        <tr v-show="!data.collection || !data.collection.length">
          <td>
            <router-link class="button" to="/item/product">New</router-link>
          </td>
          <td class="text-center" colspan="2">No data found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { $product } from "@/services/Resources";

export default {
  name: "Products",
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function(evt) {
      $product.pagination({ page: 1, size: 10 }).then(res => {
        this.data = res;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* table{
  overflow: hidden;
}
td.table-actions .action-list {
    background: red;
    width: 100%;
    height: 100%;
    min-height: 5px;
}
td.table-actions {
    padding: 0 !important;
    margin: 0 !important;
}

td.table-actions:hover .action-list  {
  width: 100vw;
} */
</style>
