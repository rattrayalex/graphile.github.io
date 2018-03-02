webpackJsonp([0x7c30354499c2],{372:function(n,s){n.exports={data:{remark:{html:'<h1 id="plugins"><a href="#plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plugins</h1>\n<p class="intro">\nAlmost everything in Graphile-Build is accomplished through plugins. You can\nadd plugins, remove plugins, even replace the entire stack if you so desire.\n</p>\n<h2 id="loading-plugins"><a href="#loading-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading Plugins</h2>\n<p>Plugins are loaded when you call <a href="/graphile-build/graphile-build/#buildschemaplugins-options"><code>buildSchema(plugins, options)</code></a> or\n<a href="/graphile-build/graphile-build/#getbuilderplugins-options"><code>getBuilder(plugins, options)</code></a>.  They\nmay be asynchronous thus these functions return a promise; Graphile Build will\nwait for each plugin to finish loading before attempting to load the next\nplugin - so the order in which you specify the plugins may be important.</p>\n<p>Here\'s how you might load the default plugins:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> buildSchema<span class="token punctuation">,</span> defaultPlugins <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphile-build"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> printSchema <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphql/utilities"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token operator">...</span>defaultPlugins<span class="token punctuation">,</span>\n  <span class="token comment">// Add more plugins here!</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">buildSchema</span><span class="token punctuation">(</span>plugins<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>schema <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printSchema</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="writing-plugins"><a href="#writing-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing Plugins</h2>\n<p>Graphile Build plugins are simple functions that interact with <a href="/graphile-build/schema-builder/">the\n<code>SchemaBuilder</code></a>, most commonly by registering\nhooks. When you perform\n<a href="/graphile-build/graphile-build/"><code>buildSchema(plugins)</code></a> we create a new\n<code>SchemaBuilder</code> instance and then load each of the plugins against it.</p>\n<p>If a plugin returns a <code>Promise</code> (e.g. an asynchronous plugin) then we will wait\nfor that promise to resolve before continuing to load the next plugin,\notherwise we will assume the plugin is synchronous. This asynchronous period\nshould be used for performing tasks such as introspecting a data store or\nfetching a file from the internet; the hooks themselves run synchronously and\nthus must not perform any asynchronous work.</p>\n<p>An example of a plugin that does nothing is this no-op plugin:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">NoopPlugin</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I don\'t do anything"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>which you can load into your schema like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> buildSchema<span class="token punctuation">,</span> defaultPlugins <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphile-build"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> printSchema <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphql/utilities"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>defaultPlugins<span class="token punctuation">,</span> NoopPlugin<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>schema <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printSchema</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<details>\n<summary>View output</summary>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>I don\'t do anything\n# An object with a globally unique `ID`.\ninterface Node {\n  # A globally unique identifier. Can be used in various places throughout the system to identify this single value.\n  id: ID!\n}\n\n# The root query type which gives access points into the data universe.\ntype Query implements Node {\n  # Exposes the root query type nested one level down. This is helpful for Relay 1\n  # which can only query top level fields if they are in a particular form.\n  query: Query!\n\n  # The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`.\n  id: ID!\n\n  # Fetches an object given its globally unique `ID`.\n  node(\n    # The globally unique `ID`.\n    id: ID!\n  ): Node\n}</code></pre>\n      </div>\n</details>\n<h3 id="an-example-plugin"><a href="#an-example-plugin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>An example plugin</h3>\n<p>This plugin will add a field <code>random(sides: Int)</code> to every GraphQLObjectType that is generated with hooks:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// No imports required!</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">MyRandomFieldPlugin</span><span class="token punctuation">(</span>\n  builder<span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> myDefaultMin <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> myDefaultMax <span class="token operator">=</span> <span class="token number">100</span> <span class="token punctuation">}</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  builder<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">"GraphQLObjectType:fields"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>\n    fields<span class="token punctuation">,</span> <span class="token comment">// input object</span>\n    <span class="token punctuation">{</span> extend<span class="token punctuation">,</span> graphql<span class="token punctuation">:</span> <span class="token punctuation">{</span> GraphQLInt <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Build</span>\n    context <span class="token comment">// Context</span>\n  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">extend</span><span class="token punctuation">(</span>fields<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      random<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        type<span class="token punctuation">:</span> GraphQLInt<span class="token punctuation">,</span>\n        args<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          sides<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            type<span class="token punctuation">:</span> GraphQLInt<span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> <span class="token punctuation">{</span> sides <span class="token operator">=</span> myDefaultMax <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>sides <span class="token operator">-</span> myDefaultMin <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> myDefaultMin\n          <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>First it registers a hook on <code>GraphQLObjectType:fields</code> which will be called\nfor the <code>fields</code> property of every <code>GraphQLObjectType</code> that is constructed.</p>\n<p>The callback to this <a href="/graphile-build/hooks/">hook</a> is passed the three standard options:</p>\n<ul>\n<li>input object, <code>fields</code>, which is basically a <a href="http://graphql.org/graphql-js/type/#graphqlobjecttype"><code>GraphQLFieldConfigMap</code> from graphql-js</a>.</li>\n<li><a href="/graphile-build/build-object/"><code>Build</code> object</a> (from which we\'re using <code>extend</code> and <code>graphql.GraphQLInt</code></li>\n<li><a href="/graphile-build/context-object/"><code>Context</code> object</a> which it is ignoring; but if we wanted to filter which objects get the <code>random</code> field added this would be what we\'d use</li>\n</ul>\n<p>Finally we\'re returning a derivative of the <code>fields</code> that were input by adding\nan additonal property <code>field</code> which is a standard GraphQL field config\n<code>GraphQLFieldConfig</code> - see the <a href="http://graphql.org/graphql-js/type/#graphqlobjecttype">GraphQL-js\ndocumentation</a>.</p>\n<h3 id="plugin-arguments"><a href="#plugin-arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plugin arguments</h3>\n<p>Plugins are called with just two arguments:</p>\n<ul>\n<li><code>builder</code> - the instance of <a href="/graphile-build/graphile-build/"><code>SchemaBuilder</code></a> the plugin is being loaded against</li>\n<li><code>options</code> - <a href="/graphile-build/plugin-options/">the options</a> that were passed to <code>buildSchema(plugins, options)</code> (or <code>getBuilder(plugins, options)</code>)</li>\n</ul>\n<h3 id="plugin-actions"><a href="#plugin-actions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plugin actions</h3>\n<p>Whilst a plugin is being executed it can perform actions on the <code>builder</code>\nobject (its first argument). For a list of the functions and what they do, see\n<a href="/graphile-build/schema-builder/">SchemaBuilder</a>.</p>\n<p>The most common actions are:</p>\n<ul>\n<li>Register a hook: <code>builder.hook(hookName, hookFunction)</code>; see <a href="/graphile-build/hooks/">Hooks</a></li>\n<li>Add watch-mode event listeners: <code>builder.registerWatcher(watcher, unwatcher)</code>; see <a href="/graphile-build/schema-builder/">SchemaBuilder</a></li>\n</ul>',frontmatter:{path:"/graphile-build/plugins/",title:"Plugins"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---graphile-build-plugins-124eb0b4d056fc2a354f.js.map