import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery<{
    site: { siteMetadata: Queries.SiteSiteMetadata };
  }>(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
