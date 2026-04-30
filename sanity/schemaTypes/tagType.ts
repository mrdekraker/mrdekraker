import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedCategory',
      title: 'Related Category',
      description: 'The primary category this tag belongs to',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'relatedCategory.title',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `Category: ${subtitle}` : 'No category' }
    },
  },
})
