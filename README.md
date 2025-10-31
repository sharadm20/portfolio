# vCard - Personal portfolio

![GitHub repo size](https://img.shields.io/github/repo-size/codewithsadee/vcard-personal-portfolio)
![GitHub stars](https://img.shields.io/github/stars/codewithsadee/vcard-personal-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/codewithsadee/vcard-personal-portfolio?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/codewithsadee_?style=social)](https://twitter.com/intent/follow?screen_name=codewithsadee_)
[![YouTube Video Views](https://img.shields.io/youtube/views/SoxmIlgf2zM?style=social)](https://youtu.be/SoxmIlgf2zM)

vCard is a fully responsive personal portfolio website, responsive for all devices, built using HTML, CSS, and JavaScript.

## Demo

![vCard Desktop Demo](./website-demo-image/desktop.png "Desktop Demo")
![vCard Mobile Demo](./website-demo-image/mobile.png "Mobile Demo")

## Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.

## Installing vCard

To install **vCard**, follow these steps:

Linux and macOS:

```bash
sudo git clone https://github.com/codewithsadee/vcard-personal-portfolio.git
```

Windows:

```bash
git clone https://github.com/codewithsadee/vcard-personal-portfolio.git
```

## Contact

If you want to contact me you can reach me at [Twitter](https://www.x.com/codewithsadee_).

## Portfolio Versions

This portfolio project includes two implementations:

1. **React Version (Primary)** - Located in the `src` and configured via `public/index.html`. This is the main and recommended version to use.
2. **Traditional HTML/CSS/JS Version** - Located in the root directory (`index.html`, `assets/css/style.css`, `assets/js/script.js`). This is provided as an alternative static version.

The React version is more maintainable and follows modern web development practices.

To use the contact form on either version, you'll need to set up a form submission service. The current implementation uses Formspree. To configure it for your own use, follow these steps:

1. Go to [Formspree](https://formspree.io) and create an account or log in
2. Create a new form and get your unique form endpoint URL
3. In `index.html` (for the traditional version) or `src/App.js` (for the React version), replace `YOUR_FORM_ID_HERE` with your Formspree form ID

## Running the React Version

To run the React version locally:

1. Make sure you have Node.js installed
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## License

MIT
