import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { CollectionConfig } from "payload/types";

const Movies: CollectionConfig = {
    slug: 'movies',
    admin: {
        useAsTitle: 'title'
    },
    access: {
      read: adminsOrPublished,
      create: admins,
      update: admins,
      delete: admins
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Movie Title',
            required: true
        },
        {
            name: 'release_date',
            type: 'date',
            label: 'Release Date'
        },
        {
            name: 'actors',
            type: 'relationship',
            relationTo: 'actors',
            hasMany: true,
            admin: {
                allowCreate: true
            }
        },
        {
            name: 'poster',
            type: 'upload',
            relationTo: 'media',

        }
    ]
}

export default Movies;