webpackJsonp([0xa675bcf03b48],{382:function(e,t){e.exports={data:{remark:{html:'<h1 id="the-default-role"><a href="#the-default-role" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Default Role</h1>\n<p>PostGraphile makes full use of PostgreSQL roles, so in this article we will explain briefly how PostgreSQL roles and users work and how that relates to how we use them in PostGraphile.</p>\n<p>You can make any number of PostgreSQL roles with <a href="https://www.postgresql.org/docs/9.5/static/sql-createrole.html"><code>CREATE ROLE</code></a> command and assign permissions to those roles with the <a href="https://www.postgresql.org/docs/9.5/static/sql-grant.html"><code>GRANT</code></a> command. Permissions like select from the table <code>post</code> or insert rows into the <code>person</code> table.</p>\n<p>PostgreSQL roles are also hierarchical. That is you can “grant” roles to other roles. For example if I had role <code>editor</code> which could change the data in our database and role <code>admin</code>, if I granted the <code>editor</code> role to <code>admin</code> with the command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">grant</span> editor <span class="token keyword">to</span> admin<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Then the <code>admin</code> role would have the same permissions the <code>editor</code> role has. The <code>admin</code> role would also be able to <em>change</em> its role to the <code>editor</code> role. This means for the rest of the session you don’t have any <code>admin</code> permissions, but only permissions given to the <code>editor</code> role.</p>\n<p>In PostgreSQL you also have the idea of a user. A user is just a role that can login. So for example, the following are equivalent as the create an <code>admin</code> role that can log in (or a user):</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">create</span> role admin login<span class="token punctuation">;</span>\n<span class="token keyword">create</span> <span class="token keyword">user</span> admin<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>…and the following are also equivalent as they create a role that <em>can’t</em> log in:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">create</span> role editor<span class="token punctuation">;</span>\n<span class="token keyword">create</span> role editor nologin<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>“Logging in” just means we can use the role when authenticating in the PostgreSQL authentication section of the connection string. So with the above roles you could start a PostgreSQL connection with <code>postgres://admin@localhost:5432/mydb</code>, but not <code>postgres://editor@localhost:5432/mydb</code>.</p>\n<h2 id="roles-in-postgraphile"><a href="#roles-in-postgraphile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Roles in PostGraphile</h2>\n<p>So how does this apply to PostGraphile? PostGraphile requires you to have at least one user (role that can log in) when connecting to the server. That role will be specified in your connection string and will from here on out be referred to as the <code>auth_user</code>. You’d connect with your <code>auth_user</code> as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>postgraphile -c postgres://auth_user@localhost:5432/mydb\n</code></pre>\n      </div>\n<p>The <code>auth_user</code> will have all the priveleges PostGraphile might need.</p>\n<p>You can also specify a <code>default_role</code> with PostGraphile. The <code>default_role</code> will be used by PostGraphile whenever no authorization token is provided or when the role claim in the authorization token is not specified. So all users that don’t explicitly specify a role will automatically use the <code>default_role</code>.</p>\n<p>So the <code>default_role</code> should have restricted privileges to only your data that is publicly accessible.</p>\n<p>After that you could also specify more roles like a <code>user_role</code> which should be included in the payload of your authorization tokens which may have more or less permissions then <code>default_role</code>.</p>\n<p>In order to configure an default role just do the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>postgraphile -c postgres://auth_user@localhost:5432/mydb --default-role default_role\n</code></pre>\n      </div>\n<p><em>This article was originally written by <a href="https://twitter.com/calebmer">Caleb Meredith</a>.</em></p>',frontmatter:{path:"/postgraphile/default-role/",title:"Default Role"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-default-role-c382656c43c24f56d0d5.js.map