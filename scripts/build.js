const ejs = require('ejs');
const marked = require('marked');
const { writeFileSync, readFileSync } = require('fs');
const { join } = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

// get data from markdown
const markdown = readFileSync(join(__dirname, '../README.md'), 'utf-8');
const content = marked(markdown);
const css = readFileSync(require.resolve('github-markdown-css/github-markdown.css'), 'utf-8');
const data = {
  content,
  css,
};

// render template
const template = readFileSync(join(__dirname, '../templates/document.ejs'), 'utf-8');
const output = ejs.compile(template, {})(data);

// output
const dist = join(__dirname, '../dist');
rimraf.sync(dist);
mkdirp.sync(dist);
writeFileSync(join(dist, 'index.html'), output)
