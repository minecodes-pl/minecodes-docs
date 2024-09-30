import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "mineCodes Docs",
  description: "mineCodes plugins documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'mineLogin', link: '/plugins/minelogin/introduction' },
      { text: 'minePlots', link: '/plugins/mineplots/introduction' }
    ],

    sidebar: [
      {
        text: 'Plugins',
        items: [
          {
            text: 'mineLogin 🔑',
            link: '/plugins/minelogin/introduction',
            collapsed: true,
            items: [
              { text: 'Configuration', link: '/plugins/minelogin#configuration' },
              { text: 'Commands', link: '/plugins/minelogin#commands' },
              { text: 'Permissions', link: '/plugins/minelogin#permissions' },
              { text: 'Events', link: '/plugins/minelogin#events' },
              { text: 'Listeners', link: '/plugins/minelogin#listeners' },
              { text: 'Metrics', link: '/plugins/minelogin#metrics' }
            ]
          },
          {
            text: 'minePlots 🏠',
            link: '/plugins/mineplots/introduction',
            collapsed: true,
            items: [
              { text: 'Configuration', link: '/plugins/mineplots#configuration' },
              { text: 'Commands', link: '/plugins/mineplots#commands' },
              { text: 'Permissions', link: '/plugins/mineplots#permissions' },
              { text: 'Events', link: '/plugins/mineplots#events' },
              { text: 'Listeners', link: '/plugins/mineplots#listeners' },
              { text: 'Metrics', link: '/plugins/mineplots#metrics' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/minecodes' }
    ]
  }
})
