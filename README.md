## Aurelia UI Framework
#### A bespoke UI Framework for business applications

---

Demo Site: [https://sunshower-aire.herokuapp.com](https://sunshower-aire.herokuapp.com)

---

![Stars](https://img.shields.io/github/stars/adarshpastakia/sunshower-aire.svg?logoColor=blue&style=social&logo=github "GitHub Stars")
![Forks](https://img.shields.io/github/forks/adarshpastakia/sunshower-aire.svg?logoColor=blue&style=social&logo=github "GitHub Forks")
![Issues](https://img.shields.io/github/issues/adarshpastakia/sunshower-aire.svg?logoColor=blue&style=social&logo=github "GitHub Issues")

![Build](https://img.shields.io/travis/adarshpastakia/sunshower-aire/master.svg?style=popout-square&logo=travis&label= "Travis Build")
![Coverage](https://img.shields.io/codecov/c/github/adarshpastakia/sunshower-aire/master.svg?style=popout-square&logo=codecov&label= "Code Coverage")
![NPM Release](https://img.shields.io/npm/v/sunshower-aire/next.svg?style=popout-square&logo=npm&label= "NPM Release")

---

* Running examples

  `npm start`

* Building the plugin

  `npm dist`
  
* Using the plugin

  - NPM
    
    `npm i sunshower-aire`
  
  - Yarn
  
    `yarn add sunshower-aire`

* Using plugin as local link

  `sunshower-aire$> npm link`

  `project$> npm link sunshower-aire`

  > webpack.config 
  > ```
  > resolve.symlinks = false
  > resolve.alias: {
  >        'aurelia-binding': path.resolve(__dirname, 'node_modules/aurelia-binding'),
  >        'aurelia-framework': path.resolve(__dirname, 'node_modules/aurelia-framework'),
  >        'aurelia-templating': path.resolve(__dirname, 'node_modules/aurelia-templating'),
  >        'aurelia-pal': path.resolve(__dirname, 'node_modules/aurelia-pal')
  >      }
  >
  > ```

---

- #### Package Dependencies
  - `date-fns`
  - `numeral`
  - `kramed`
  - `libphonenumber-js`
  - `resize-observer-polyfill`


- #### Optional Dependencies
  - `@mdi/font`
  - `zxcvbn` _Password strength meter_


- #### Dev Dependencies
  - `awesome-typescript-loader`
  - `stylelint`
  - `stylelint-order`
  - `stylelint-webpack-plugin`
  - `tslint`
  - `tslint-eslint-rules`
  - `tslint-config-prettier`
  - `tslint-webpack-plugin `
