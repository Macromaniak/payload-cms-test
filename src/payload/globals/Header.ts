import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
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
      name: 'enableColocatedLogo',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'colocatedLogo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data, siblingData, { user }) => {
          if (data.enableColocatedLogo) {
            return true
          } else {
            return false
          }
        },
      },
    },
    {
      name: 'headerCTAs',
      type: 'array',
      maxRows: 3,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
