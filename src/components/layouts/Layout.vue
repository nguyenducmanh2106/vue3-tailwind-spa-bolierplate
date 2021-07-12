<template>
  <div id="layout">
    <Header />
          <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  name: "Layout",
  props: {
    msg: String,
  },
  components: {
    Header,
    Footer
  }
};
</script>
