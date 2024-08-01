import type { GlobalConfig } from 'payload/types'
import link from '../fields/link'

export const Menu: GlobalConfig = {
  slug: 'menu',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nav_menu',
      label: 'Navigation Menu',
      type: 'group',
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Header Menu',
              description: 'Add header menu items',
              fields: [
                {
                  name: 'headerMenu',
                //   label: 'Header Menu',
                  type: 'group',
                  fields: [
                    {
                      name: 'navItems',
                      type: 'array',
                      maxRows: 6,
                      fields: [
                        link({
                          appearances: false,
                          disableLabel: false,
                        }),
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'Footer Menu',
              description: 'Add footer menu items',
              fields: [
                {
                  name: 'footer_menu',
                  label: 'Footer Menu',
                  type: 'group',
                  fields: [
                    {
                      name: 'navItems',
                      type: 'array',
                      maxRows: 6,
                      fields: [
                        link({
                          appearances: false,
                          disableLabel: true,
                        }),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
