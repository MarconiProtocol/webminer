# Notes about website-react

## Project Structure

### CSS

All changes should be made in the `src` folder. Each separate page of the website gets its own file in the `scenes` folder; the js file and css file, when applicable, are placed in the same folder. The `components` folder is organized much the same way, where I tried to choose the components so that they are as reusable and logically independent as possible. In order to achieve the modular structure that is characteristic of React for CSS, I used **css-modules**. For each component that imports its own stylesheet (Ex: `import styles from './MailingModal.css'`), all the classnames (excluding ids) defined in the stylesheet are local to that component only and referenced using `styleName=`. Global classnames applied to all files are defined in the `styles` folder and imported simply as follows: `import '../styles/App.css'`; correspondingly, they are referenced as `className=` in the js file.

### Language Support

The react site uses **i18next** for language detection and dynamically swapping out each language, along with language-specific CSS classnames, without forking a copy of the same page for each language. In each language's folder in `translations`, translations for content are found in the `common.json` file, and translations relating to language-specific css are found in the `style.json` file. Configuration for **i18n** is found in the `i18n.js` file; in the future, if adding support for more languages, remember to update this file.

Guide for how to use the translation tags in translated strings: https://react.i18next.com/latest/trans-component

### Dev and Production

Run `npm run buildDev` to create a dev build

Run `npm run buildProd` to create a prod build

Run `npm run start` to run the web app and go to localhost:8080

Run `npm run dev` to run the web app and go to localhost:3000
