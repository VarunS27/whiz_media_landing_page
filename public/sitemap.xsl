<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Whiz Media</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            margin: 0;
            padding: 2rem;
          }
          .wrapper {
            max-width: 1200px;
            margin: 0 auto;
          }
          h1 {
            color: #1a1a1a;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            background: #fff;
            margin: 1rem 0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          th {
            background: #f4f4f4;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
          }
          td {
            padding: 0.75rem 1rem;
            border-top: 1px solid #eee;
          }
          tr:hover td {
            background: #f9f9f9;
          }
          .url {
            color: #0066cc;
            text-decoration: none;
          }
          .url:hover {
            text-decoration: underline;
          }
          .priority, .changefreq {
            text-align: center;
          }
          .lastmod {
            width: 180px;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <h1>Whiz Media Sitemap</h1>
          <table>
            <tr>
              <th>URL</th>
              <th>Priority</th>
              <th>Change Frequency</th>
              <th>Last Modified</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a class="url" href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td class="priority">
                  <xsl:value-of select="sitemap:priority"/>
                </td>
                <td class="changefreq">
                  <xsl:value-of select="sitemap:changefreq"/>
                </td>
                <td class="lastmod">
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 