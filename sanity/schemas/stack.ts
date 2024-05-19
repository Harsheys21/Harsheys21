import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'stack',
    title: 'Tech Stack',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: []
                }
            ]
        }),
    ],
})
