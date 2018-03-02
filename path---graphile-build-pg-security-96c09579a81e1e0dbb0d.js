webpackJsonp([0xaf01fbbd3fb5],{370:function(n,s){n.exports={data:{remark:{html:'<h2 id="security"><a href="#security" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Security</h2>\n<p>Traditionally in web application architectures the security is implemented in\nthe server layer and the database is treated as a simple store of data - people\ntend to figure that this reduces the workload on the database and thus\nincreases scalability. As their application grows, they start needing other\nservices to interact with the database too - which can mean that they need to\nduplicate the authentication/authorization logic in multiple places which can\nlead to discrepancies and increases the surface area for potential issues.</p>\n<p>Instead, we advise that you protect your lowest level - the data itself. By\ndoing so you can be sure that no matter how many services interact with your\ndatabase they will all be protected by the same underlying permissions logic\nwhich you only need to maintain in one place.</p>\n<p>PostgreSQL already had a powerful permissions system built in with it\'s roles\nand grants; but in PostgreSQL 9.5 Row Level Security policies were introduced.\nThese allow your application to be considerably more specific about permissions,\nmoving from table- and column-based permissions to row-level permissions.</p>\n<p>When enabled, all rows are by default not visible to any roles (except database\nadministration roles and the role who created the database/table); and\npermission is selectively granted with the use of policies.</p>\n<p>If you already have a secure database schema that implements these technologies\nto protect your data at the lowest levels then you can leverage\n<code>postgraphile</code> to generate a powerful, secure and fast API in minimal\ntime. All you need to do is pass a pre-authenticated pgClient to the <code>graphql</code>\nresolve function.</p>\n<h3 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createPostGraphileSchema <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postgraphile\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> pg <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'pg\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> pgPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">pg<span class="token punctuation">.</span>Pool</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>DATABASE_URL<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">runQuery</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> variables<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPostGraphileSchema</span><span class="token punctuation">(</span>\n    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>DATABASE_URL<span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">\'users_schema\'</span><span class="token punctuation">,</span> <span class="token string">\'posts_schema\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      dynamicJson<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      pgJwtSecret<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>JWT_SECRET<span class="token punctuation">,</span>\n      pgJwtTypeIdentifier<span class="token punctuation">:</span> <span class="token string">\'users_schema.jwt_type\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Fetch a postgres client from the pool</span>\n  <span class="token keyword">const</span> pgClient <span class="token operator">=</span> <span class="token keyword">await</span> pgPool<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Start a transaction so we can apply settings local to the transaction</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">await</span> pgClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"begin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token comment">// The following statement is equivalent to (but faster than):</span>\n    <span class="token comment">//    await pgClient.query("set local role to \'postgraphile_user\'");</span>\n    <span class="token comment">//    await pgClient.query("set local jwt.claims.user_id to \'27\'");</span>\n    <span class="token keyword">await</span> pgClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`select\n<span class="gatsby-highlight-code-line">      set_config(\'role\', \'postgraphile_user\', true),\n</span><span class="gatsby-highlight-code-line">      set_config(\'jwt.claims.user_id\', \'27\', true)\n</span>    `</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">graphql</span><span class="token punctuation">(</span>\n      schema<span class="token punctuation">,</span>\n      query<span class="token punctuation">,</span>\n      <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">      <span class="token comment">/* CONTEXT > */</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">        pgClient<span class="token punctuation">:</span> pgClient<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">/* &lt; CONTEXT */</span>\n</span>      variables\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    <span class="token comment">// commit the transaction (or rollback if there was an error) to clear the local settings</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">await</span> pgClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"commit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n    <span class="token comment">// Release the pgClient back to the pool.</span>\n    <span class="token keyword">await</span> pgClient<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">runQuery</span><span class="token punctuation">(</span>\n  <span class="token string">"query MyQuery { allPosts { nodes { id, title, author: userByAuthorId { username } } } }"</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  pgPool<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>TODO: ensure this example works.</p>\n<p>To see how this works in a real application, check out\n<a href="https://github.com/graphile/postgraphile/blob/master/src/postgraphile/withPostGraphileContext.ts"><code>withPostGraphileContext</code> in\nPostGraphile</a></p>',frontmatter:{path:"/graphile-build-pg/security/",title:"Security"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---graphile-build-pg-security-96c09579a81e1e0dbb0d.js.map