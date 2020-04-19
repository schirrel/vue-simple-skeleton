<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th width="50" ></th>
          <th width="150">Document</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="data.collection && data.collection.length">
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr v-show="!data.collection || !data.collection.length">
          <td>
            <router-link class="button" to="/item/employee">New</router-link>
          </td>
          <td  class="text-center" colspan="2">No data found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { $employee } from "@/services/Resources";

export default {
  name: "Employees",
  data() {
    return {
      data: {}
    };
  },
  methods: {
    search: function(evt) {
      console.log(this.employee.document);
      $employees.pagination({ pag1: 1, size: 10 }).then(res => {
        this.data = res;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
