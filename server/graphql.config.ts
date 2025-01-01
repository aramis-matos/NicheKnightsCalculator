
module.exports = {
projects: {
    app: {
      schema: ["http://localhost:3000/api/graphql"],
      documents: [
        "./pages/**/*.vue",
        "./components/**/*.vue",
        "./composables/**/*.ts",
        "./app.vue",
      ],
    },
  },
}