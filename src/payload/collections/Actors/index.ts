import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { CollectionConfig } from "payload/types";
import { FieldHook } from "payload/types";

const populateFullName: FieldHook = async ({data}) => {
    return `${data?.first_name} ${data?.last_name}`;
}

const Actors:CollectionConfig = {
    slug: 'actors',
    admin: {
        useAsTitle: 'full_name'
    },
    access: {
        read: adminsOrPublished,
        create: admins,
        update: admins,
        delete: admins
    },
    fields: [
        {
            name: 'first_name',
            type: 'text',
            label: 'First Name',
            required: true
        },
        {
            name: 'last_name',
            type: 'text',
            label: 'Last Name',
            required: false
        },
        {
            name: 'age',
            type: 'number',
            label: 'Age'
        },
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'full_name',
            type: 'text',
            admin: {
                components: {
                    Field: () => null
                }
            },
            hooks: {
                beforeValidate: [
                    populateFullName
                ]
            }
        },
       

    ],
    timestamps: false
}

export default Actors;