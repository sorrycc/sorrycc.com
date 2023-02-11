import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/styled-components',
    '@umijs/plugins/dist/react-query',
    'umi-plugin-docaid',
  ],
  styledComponents: {},
  reactQuery: {},
  favicons: [
    'https://img.alicdn.com/imgextra/i1/O1CN01FwDVoc1YGhgE28l5B_!!6000000003032-2-tps-200-200.png',
  ],
  mfsu: false,
  hash: true,
  docaid: {
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01FwDVoc1YGhgE28l5B_!!6000000003032-2-tps-200-200.png',
    title: 'ChenCheng\'s Personal Site',
    headTitle: 'ChenCheng\'s Personal Site',
    siteUrl: 'https://sorrycc.com/',
    navs: [
      { title: 'Posts', path: '/posts' },
      { title: 'RSS', href: '/rss.xml' },
    ],
    copyright: 'ChenCheng',
    rss: {
      posts: {
        default: true,
        feedOpts: {
          image:
            'https://img.alicdn.com/imgextra/i1/O1CN01FwDVoc1YGhgE28l5B_!!6000000003032-2-tps-200-200.png',
          copyright: 'ChenCheng',
          author: {
            name: 'ChenCheng',
            email: 'sorrycc@gmail.com',
            link: 'https://sorrycc.com/',
          },
        },
      },
    },
  },
});
