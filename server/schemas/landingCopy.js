import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'landingCopy',
  title: 'Landing Copy',
  type: 'document',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})