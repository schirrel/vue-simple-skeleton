<template>
  <nav class="navigation">
    <section class="container">
      <a class="navigation-title">
        <h1 class="title">Company</h1>
      </a>
      <ul class="navigation-list float-right">
        <li class="navigation-item">
          <router-link class="navigation-link" to="/">Home </router-link>
        </li>
        <li class="navigation-item">
          <a class="navigation-link" href="#popover-item" data-popover=""
            >Items</a
          >
          <div class="popover" id="popover-item">
            <ul class="popover-list">
              <li class="popover-item">
                <router-link class="popover-link" to="/item/products"
                  >Products</router-link
                >
              </li>
              <li class="popover-item">
                <router-link class="popover-link" to="/item/employes"
                  >Employes</router-link
                >
              </li>
            </ul>
          </div>
        </li>

           <li class="navigation-item">
          <a class="navigation-link" href="#popover-me" data-popover=""
            >Me</a
          >
          <div class="popover" id="popover-me">
            <ul class="popover-list">
              <li class="popover-item">
                <router-link class="popover-link" to="/profile"
                  >Profile</router-link
                >
              </li>
              <li class="popover-item">
                <router-link class="popover-link" to="/logout"
                  >Logout</router-link
                >
              </li>
            </ul>
          </div>
        </li>

      </ul>
    </section>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  mounted() {
    (function() {
      function e(e) {
        for (var t = 0; t < o.length; t++)
          o[t].classList.remove("popover-open");
      }
      function t(t) {
        t.preventDefault(),
          document
            .querySelector(this.getAttribute("href"))
            .classList.contains("popover-open")
            ? document
                .querySelector(this.getAttribute("href"))
                .classList.remove("popover-open")
            : (e(),
              document
                .querySelector(this.getAttribute("href"))
                .classList.add("popover-open")),
          t.stopImmediatePropagation();
      }
      for (
        var n = document.querySelectorAll("[data-popover]"),
          o = document.querySelectorAll(".popover"),
          r = 0;
        r < n.length;
        r++
      )
        n[r].addEventListener("click", t);
      document.addEventListener("click", e);
    })();
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  background: #f4f5f6;
  border-bottom: 0.1rem solid #d1d1d1;
  display: block;
  height: 5.2rem;
  left: 0;
  max-width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}
.navigation-title {
  float: left;
}
.navigation .container {
  padding-bottom: 0;
  padding-top: 0;
}

.navigation .navigation-list {
  list-style: none;
  margin-bottom: 0;
  margin-right: 0;
}

@media (min-width: 80rem) {
  .navigation .navigation-list {
    margin-right: 0;
  }
}

.navigation .navigation-item {
  float: left;
  margin-bottom: 0;
  padding: 0px 2rem;
  position: relative;
}

.navigation .img {
  fill: #9b4dca;
  height: 2rem;
  position: relative;
  top: 0.3rem;
}

.navigation .navigation-title,
.navigation .title {
  color: #606c76;
  font-family: Gotham Rounded A, Gotham Rounded B, Helvetica Neue, Arial,
    sans-serif;
  position: relative;
}

.navigation .navigation-link,
.navigation .navigation-title,
.navigation .title {
  display: inline;
  font-size: 1.6rem;
  line-height: 5.2rem;
  padding: 0;
  text-decoration: none;
}

/* .navigation .navigation-link.active,
.router-link-active,
.navigation-dropdown > input[type="checkbox"]:checked+label  {
  color: #606c76;
} */

.dropdown-options {
  background: #f4f5f6;
  z-index: 9;
  overflow: hidden;
  height: 0;
  padding-left: 0px;
  list-style: none;
  margin: 0px -2rem;
  border-color: transparent;
}

.dropdown-options li {
  padding: 10px 5px;
}
.navigation-dropdown > input[type="checkbox"] {
  cursor: pointer;
  position: absolute;
  opacity: 0;
}
.navigation-dropdown > input[type="checkbox"] + label {
  cursor: pointer;
  font-weight: normal;
  color: #9b4dca;
}
.navigation-dropdown
  > input[type="checkbox"]:checked
  + label
  + .dropdown-options {
  height: auto;
  margin-top: 0px;
  border: 0.1rem solid #d1d1d1;
  border-top-color: transparent;
}

.navigation-dropdown .dropdown-options .navigation-link {
  font-size: 1.4rem;
  line-height: 2.2rem;
  text-decoration: none;
}

* {
  transition: all 300ms ease;
  box-sizing: border-box;
}
</style>
