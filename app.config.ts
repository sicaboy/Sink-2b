export default defineAppConfig({
  title: '2B.au',
  description: 'Shortlinks To Be',
  image: '',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
