import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        }),
        defineField({
            name: 'github',
            title: 'Github Link',
            type: 'url',
        }),
        defineField({
            name: 'deployment',
            title: 'Deployment Link',
            type: 'url',
        }),
        defineField({
            name: 'start_date',
            title: 'Start Date',
            type: 'date',
        }),
        defineField({
            name: 'end_date',
            title: 'End Date',
            type: 'date',
        }),
        defineField({
            name: 'detailImage',
            title: 'Detailed Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'previewImage',
            title: 'Preview Image',
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
        defineField({
            name: "category",
            title: "Category",
            description: "Choose a category",
            type: "string",
            options: {
                layout: "radio",
                list: [
                    { title: "Artificial Intelligence", value: "Artificial Intelligence" },
                    { title: "Machine Learning", value: "Machine Learning" },
                    { title: "Web Development", value: "Web Developement" },
                    { title: "Data Science and Analysis", value: "Data Science and Analysis" },
                    { title: "Systems Programming", value: "System Programming" },
                ],
            },
        }),
        defineField({
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'stack' } }]
        })
    ],
})
