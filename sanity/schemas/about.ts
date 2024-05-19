import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'college',
      title: 'College',
      type: 'string',
    }),
    defineField({
      name: 'major',
      title: 'Major',
      type: 'string',
    }),
    defineField({
      name: 'gpa',
      title: 'GPA',
      type: 'number'
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'classes',
      title: 'Classes',
      type: 'array',
      of: [{type: 'string'}]
    }),
  ],
})
