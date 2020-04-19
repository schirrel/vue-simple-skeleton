<template>
  <div class="container">
    <h2>Welcome</h2>

    <div class="row">
      <div class="column">
        <div class="panel panel-default">
          <div class="panel-body">
            <small>Value A</small>
            <h3>3.00</h3>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel panel-default">
          <div class="panel-body">
            <small>Value B</small>
            <h3>2.00</h3>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel panel-default">
          <div class="panel-body">
            <small>Value C</small>
            <h3>5.00</h3>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel panel-outline">
          <div class="panel-body">
            <small>Total</small>
            <h3>10.00</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="panel panel-outline">
          <div class="panel-heading">
            Chart A
          </div>
          <div class="panel-body">
            Draw a chart here, cuz i'm lazy
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel panel-outline">
          <div class="panel-heading">Chart B</div>
          <div class="panel-body">
            Draw a chart here, cuz i'm lazy
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  text-align: left;
}
tfoot td {
  text-align: right;
}

td:first-child,
th:first-child {
  max-width: 50px !important;
}

td button {
  padding: 0px 5px !important;
  margin: 0;
}
.restart-button {
  float: left;
}

.winner {
  display: inline-block;
}
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
</style>
