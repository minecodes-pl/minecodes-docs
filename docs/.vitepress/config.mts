import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "mineCodes Docs",
  description: "mineCodes plugins documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Plugins',
        items: [
          {
            text: 'mineLogin',
            link: '/plugins/minelogin/introduction',
            collapsed: true,
            items: [
              {
                text: 'Installation',
                link: '/plugins/minelogin/installation'
              },
              {
                text: 'Configuration',
                collapsed: true,
                items: [
                    {
                      text: 'Database',
                      link: '/plugins/minelogin/configuration/database'
                    },
                    {
                      text: 'Proxy settings',
                      link: '/plugins/minelogin/configuration/proxy'
                    },
                    {
                      text: 'Communication',
                      link: '/plugins/minelogin/configuration/communication'
                    },
                    {
                      text: 'Message of the day',
                      link: '/plugins/minelogin/configuration/message-of-the-day'
                    },
                    {
                      text: 'Welcome message',
                      link: '/plugins/minelogin/configuration/welcome-message'
                    },
                    {
                      text: 'Sounds',
                      link: '/plugins/minelogin/configuration/sounds'
                    },
                    {
                      text: 'Servers',
                      link: '/plugins/minelogin/configuration/servers'
                    },
                    {
                      text: 'Mailing',
                      link: '/plugins/minelogin/configuration/mailing'
                    },
                    {
                      text: 'Other settings',
                      link: '/plugins/minelogin/configuration/other-settings'
                    },
                    {
                      text: 'Skins',
                      link: '/plugins/minelogin/configuration/skins'
                    },
                    {
                      text: 'Limits',
                      link: '/plugins/minelogin/configuration/limits'
                    },
                    {
                      text: 'Notifications',
                      link: '/plugins/minelogin/configuration/notifications'
                    },
                    {
                      text: 'Passwords security',
                      link: '/plugins/minelogin/configuration/passwords-security'
                    },
                    {
                      text: 'BossBars',
                      link: '/plugins/minelogin/configuration/bossbars'
                    },
                    {
                      text: 'Geo localization',
                      link: '/plugins/minelogin/configuration/geo-localization'
                    },
                    {
                      text: 'Geyser',
                      link: '/plugins/minelogin/configuration/geyser'
                    },
                    {
                      text: 'Verification 2FA',
                      link: '/plugins/minelogin/configuration/verification-2fa'
                    },
                    {
                      text: 'Failed logins security',
                      link: '/plugins/minelogin/configuration/failed-logins-security'
                    },
                ]
              },
              {
                text: 'Commands',
                link: '/plugins/minelogin/commands'
              },
              {
                text: 'Pterodactyl MySQL',
                link: '/plugins/minelogin/pterodactyl-mysql'
              },
              {
                text: 'Redis setup',
                link: '/plugins/minelogin/redis-setup'
              },
              {
                text: 'Chat signatures',
                link: '/plugins/minelogin/chat-signatures'
              },
              {
                text: 'SendGrid setup',
                link: '/plugins/minelogin/sendgrid-setup'
              },
              {
                text: 'mineLogin bridge',
                link: '/plugins/minelogin/minelogin-bridge'
              },
              {
                text: 'Internal migration',
                link: '/plugins/minelogin/internal-migration'
              }
            ]
          },
          {
            text: 'minePlots',
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
