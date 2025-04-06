import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const writing = await getCollection('writing');
  return rss({
    title: 'Shankar’s Blog',
    description: 'Words from an amateur front end dev',
    site: context.site,
    items: writing.map((post) => ({
      link: `/writing/${post.id}/`,
      // Note: this will not process components or JSX expressions in MDX files.
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      ...post.data,
    })),
    stylesheet: '/pretty-feed-v3.xsl', // Ensure this is accessible in "public/"
  });
}
