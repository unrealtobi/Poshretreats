export default {
  name: 'deal',
  title: 'Deals',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      description: 'Upload the main image of the deal.',
    },
    {
      name: 'title',
      title: 'Title (H1)',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      placeholder: 'Enter the main title of the deal (e.g., Luxurious Bali Escape)',
    },
    {
      name: 'dealTag',
      title: 'Deal Tag',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'Enter a short, catchy tag (e.g., Best Seller, Limited Offer)',
    },

    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'Enter the location of the deal (e.g., Maldives, Paris, etc.)',
    },
    {
      name: 'included',
      title: 'Included',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
      description: 'List everything that is included in the deal.',
      placeholder: 'Enter inclusions like accommodation, meals, etc.',
    },
    {
      name: 'excluded',
      title: 'Excluded',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
      description: 'List everything that is excluded from the deal.',
      placeholder: 'Enter exclusions like flights, taxes, etc.',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'Enter the price per person (e.g., $1500)',
    },
    {
      name: 'pricePerPerson',
      title: 'Price Per Person?',
      type: 'boolean',
      description: 'Specify if the price is per person.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'validUntil',
      title: 'Trip Starts',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
      placeholder: 'Enter the starting date of the trip (e.g., 2025-12-31)',
    },
    {
      name: 'innerDescription',
      title: 'Inner Description of Deal',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
      description: 'Enter a detailed description of the deal (supports formatting).',
    },
    
    {
      name: 'notableInclusions',
      title: 'Notable Inclusions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List notable inclusions of the deal (e.g., Free breakfast, Airport transfer).',
      validation: (Rule) => Rule.required(),
      placeholder: 'Enter notable inclusions of the deal.',
    },
    // {
    //   name: 'notableExclusions',
    //   title: 'Notable Exclusions',
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   description: 'List notable exclusions of the deal (e.g., Flights, Personal expenses).',
    //   validation: (Rule) => Rule.required(),
    //   placeholder: 'Enter notable exclusions of the deal.',
    // },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(0).max(5).precision(1).error('Rating must be a number between 0 and 5'),
      description: 'Rating out of 5 (e.g., 4.5)',
      placeholder: 'Enter a rating between 0 and 5.',
    },
    {
      name: 'coverImages',
      title: 'Cover Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((images) => {
          if (!images) return 'You must upload either 2 or 4 images.'
          const length = images.length
          if (length === 2 || length === 4) return true
          return 'You must upload either 2 or 4 images (not 1, 3, or more than 4).'
        }),
      description: 'Upload 2 or 4 additional cover images for the deal.',
      placeholder: 'Add 2 or 4 images showcasing the deal.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      placeholder: 'Auto-generated from the title (unique identifier for the deal).',
    },
    {
      name: 'dealLink',
      title: 'Deal Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).error('Please enter a valid URL'),
      description: 'Add a link to the deal (e.g., https://example.com/deal).',
      placeholder: 'Enter the booking link for this deal.',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'string',
      description: 'Optional: Add any additional note or information for the deal.',
      placeholder: 'Enter any additional note or info the user may need to know.',
    },
  ],
}
