<template>
  <div id="app" class="m-0 p-0 bg-gradient-to-b from-gray-700 to-gray-900 h-screen text-gray-100">
<!--    <NavBar :routes="routes"/>-->
    <Hero class="text-gray-100 sticky top-0"/>
  </div>
</template>

<script>
import Hero from "./components/Hero";

export default {
  name: 'App',
  components: {
    Hero,

  },
  data: () => {
    return {
      routes: [
        {
          path: "/",
          title: "Home"
        },
        {
          path: "/about",
          title: "About"
        },
        {
          path: "/resume",
          title: "Resume"
        },
        {
          path: "/contact",
          title: "Contact"
        }
      ]
    }
  }
}
</script>
