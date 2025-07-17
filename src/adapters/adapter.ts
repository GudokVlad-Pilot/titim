// src/adapters/index.ts
import { sanityClient } from "./clients/sanity"
import { pagesQuery } from "./queries"
import { Page } from "./types"

export const adapters = {
  cms: () => {
    return {
      getPages: async (): Promise<Page[]> => {
        try {
          const result = await sanityClient.fetch(pagesQuery) as Page[]
          console.log(result)
          return result
        } catch (error) {
          console.error("Failed to fetch pages:", error)
          return []
        }
      }
    }
  }
}
