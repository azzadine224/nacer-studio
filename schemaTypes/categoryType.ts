import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Category Slug',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Category Description',
    }),
  ],
})
