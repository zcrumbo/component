# {{ name }}
{{ description }}

## To Get Started
* Run `npm run dev` to run the component locally. (See local development below)
* Rename the SampleComponent.vue file to your preferred component name.
  * Update the name property in the `SampleComponent.vue` to reflect your new component name.
  * update the import name in `main.js`
  * update the html tag on `index.html` and `local-development.js` to reflect your component and props for locally testing and developing.

## Local Development
``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## About the Example Files in this project
* the `local-development.js` and `index.html` are used for local development only.
  * Commits are fine for these files as they are not built into the distribution
* use the `index.html` for passing example data into your component.
  * Should be used for testing or demonstrating how the component works with prop data
* use `local-development.js` for bringing in dependent styles from other packages for local development
  * styles for external modules should be brought into the `local-development.js` so you can locally develop and see the styles. The project that consumes the component will bring those styles in separately so that they can manage the resource bundling that makes sense for their project.
  * styles for the component should use the style tag in Vue files rather than a separate style sheet. This plays nicer for projects that use different style loaders or configurations and the bundle becomes more portable.
  * for now we are recommending building a distributed CSS file for this components styles as it is easier to import the component with other projects.
* `SampleComponent.vue` is the main Vue application.
  * Sub components should be used to help organize rather than creating multiple components brought in through a single npm bundle.
  * A new repository would be suggested for each component so that they can be individually versioned, bundled and distributed.
  * exclusions to this idea would be more complex examples like the `cdr-accordion` in this example or `cdr-grid`, `cdr-row` and `cdr-col` where the component may be structured in complex ways that are not easily done through props.

# install any cedar components you plan to use either one by one or bulk
`npm i -S @rei/cdr-link`
- or bulk like so
`npm i -S @rei/cdr-{assets,button,col,grid,row,tokens,text,img,link}`

## Local Development
``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
