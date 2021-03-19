const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
};
