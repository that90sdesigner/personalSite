import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export function GET(context) {
  const postImportResult = import.meta.glob('../posts/**/*.md', { eager: true });
  const posts = Object.values(postImportResult);
  return rss({
    title: 'Shankar’s Blog',
    description: 'My corner on the internet',
    site: context.site,
    trailingSlash: false,
    items: posts.map((post) => ({
      link: post.url,
      content: sanitizeHtml(post.compiledContent()),
      ...post.frontmatter,
    })),
  });
}


rss({
    // ex. use your stylesheet from "public/rss/styles.xsl"
    stylesheet: '/rss/styles.xsl',
    // ...
  });