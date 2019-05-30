const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'AcadeTeX-SNT',
  siteUrl: `https://www.gridsome.org`,
  titleTemplate: '%s - AcadeTeX',
  siteDescription: 'AcadeTeX fournit des ressources pour apprendre le numérique.',
  
  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
        .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/
         ]
      }))
    }
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-127625720-1'
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'DocPage',
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          },
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'examples/*.md',
        typeName: 'Example',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './blog/*.md',
        route: '/:slug',
        refs: {
          author: 'Contributor'
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ],
  // Create routes from GraphQL nodes
  nodeRoutes: {
     WordPressPost: '/:year/:month/:slug',
     WordPressTag: '/tag/:slug',
     CustomType: {
       route: '/other/:custom/:type',
       component: './src/templates/MyTemplate.vue', // default templates/typeName.vue
       nextFieldName: 'nextPost',
       prevFieldName: 'prevPost',
       sortBy: 'date'
     },
     Author: [
       {
         route: '/author/:name',
         component: './src/templates/Author.vue'
       }
     ]
  },
  // Create dynamic routes
  clientRoutes: [
    { 
      path: '/foo/',
      component: './src/templates/MyTemplate.vue',
    },
    { 
      path: '/bar/:id', 
      component: './src/templates/MyTemplate.vue',
    }
  ]
}
