import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'
import { type } from 'os'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'footerDescription',
      type: 'textarea',
      maxLength: 80,
      admin: {
        description: ({ path, value }) =>
          `${typeof value === 'string' ? 80 - value.length : '80'} characters left`,
      },
    },
    {
      name: 'footerLinks',
      type: 'group',
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Footer links column 1',
              description: 'add the column 1 footer links',
              fields: [
                {
                  name: 'footer_links_column_1',
                  label: 'Footer links column 1',
                  type: 'group',
                  fields: [
                    {
                      name: 'title',
                      label: 'Title',
                      type: 'text',
                    },
                    {
                      name: 'footerLinks',
                      label: 'Links',
                      type: 'array',
                      maxRows: 5,
                      fields: [
                        link({
                          appearances: false,
                        }),
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'Footer links column 2',
              description: 'add the column 2 footer links',
              fields: [
                {
                  name: 'footer_links_column_2',
                  label: 'Footer links column 2',
                  type: 'group',
                  fields: [
                    {
                      name: 'title',
                      label: 'Title',
                      type: 'text',
                    },
                    {
                      name: 'footerLinks',
                      label: 'Links',
                      type: 'array',
                      maxRows: 5,
                      fields: [
                        link({
                          appearances: false,
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
