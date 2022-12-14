import { SitemapStream, streamToPromise } from 'sitemap'
import { useAppConfig } from '#app'
import { serverQueryContent } from '#content/server'
const config = useAppConfig()
export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: config.hostname
  })
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
