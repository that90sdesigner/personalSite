// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['@astrojs/rss', 'markdown-it', 'sanitize-html']
    }
  }
};

//OLD CODE
// export default {
//     build: {
//       rollupOptions: {
//         external: ['@astrojs/rss']
//         build.rollupOptions.external: ['markdown-it', 'sanitize-html']
//       }
//     }
//   }