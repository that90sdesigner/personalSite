
// 1. Import utilities from `astro:content`
import { defineCollection} from 'astro:content';
import { rssSchema } from '@astrojs/rss';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const writing = defineCollection({  
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/writing" }),
    schema: rssSchema
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { writing };