webpackJsonp([0xd25c0637119d],{386:function(e,t){e.exports={data:{remark:{html:'<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p class=\'lead\'>\nPostGraphile (formerly PostGraphQL) builds a powerful, extensible and\nperformant GraphQL API from a PostgreSQL schema in seconds; saving you\nweeks if not months of development time.\n</p>\n<p>If you already use PostgreSQL then you understand the value that a strongly\ntyped and well defined schema can bring to application development, and GraphQL\nis the perfect match for this technology when it comes to making your data\nlayer accessible to your frontend application developers (or even API\nclients!). Why duplicate your authorization and business logic in a custom API\nwhen you can leverage the tried and tested capabilities built into <a href="https://www.postgresql.org/">the worlds\nmost advanced open source database</a>?</p>\n<p>By combining powerful features such as PostgreSQL\'s <a href="https://www.postgresql.org/docs/9.6/static/user-manag.html">role-based grant\nsystem</a> and\n<a href="https://www.postgresql.org/docs/9.6/static/ddl-rowsecurity.html">row-level security\npolicies</a> with\nGraphile-Build\'s advanced <a href="/graphile-build/look-ahead/">GraphQL look-ahead</a> and\n<a href="/graphile-build/plugins/">plugin expansion</a> technologies, PostGraphile ensures\nyour generated schema is secure, performant and extensible.</p>\n<p>Some of the features we offer:</p>\n<ul>\n<li><a href="/postgraphile/performance/">Great performance</a> - no N+1 query issues</li>\n<li><a href="/postgraphile/connections/">Connections</a> for easy pagination and Relay support</li>\n<li><a href="/postgraphile/relations/">Auto-discovered relations</a> e.g. <code>userByAuthorId</code></li>\n<li><a href="/postgraphile/crud-mutations/">Automatic CRUD mutations</a> e.g. <code>updatePost</code></li>\n<li><a href="/postgraphile/computed-columns/">Computed columns</a> allowing easy expansion of your API</li>\n<li><a href="/postgraphile/custom-queries/">Custom query procedures</a> enabling arbitrary SQL queries</li>\n<li><a href="/postgraphile/custom-mutations/">Custom mutation procedures</a> enabling complex changes to be exposed simply</li>\n</ul>\n<p>The easiest way to get started is with the <a href="/postgraphile/usage-cli/">CLI\ninterface</a>; if you have <code>npx</code> installed you can try\nit out with:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npx postgraphile -c postgres://user:pass@localhost/mydb -a -j</code></pre>\n      </div>\n<p>(replacing user, pass and mydb with your PostgreSQL username, password and the name of your database)</p>',frontmatter:{path:"/postgraphile/introduction/",title:"PostGraphile Introduction"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-introduction-7d479bb8949b602518a1.js.map