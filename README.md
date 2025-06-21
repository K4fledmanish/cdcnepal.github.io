# CDC Nepal - Community Development Center Website

This is a one-page responsive website for the non-profit organization, CDC Nepal. It is designed to be modern, professional, and functional, providing information about the organization's mission, programs, and ways to get involved.

## Features

-   **Responsive Design**: The website is fully responsive and works on all devices, from mobile phones to desktops.
-   **One-Page Layout**: All essential information is available on a single, easy-to-navigate page.
-   **Dynamic Hero Slider**: A full-screen banner with a slider to showcase key messages and images.
-   **Dedicated Sections**: Clear sections for 'About Us', 'Our Programs', and 'Get Involved'.
-   **Interactive Elements**: Smooth scrolling for navigation links.
-   **Professional Footer**: A multi-column footer with contact information, quick links, and embedded feeds.
-   **Embedded Content**: Includes an Instagram feed and a section for reports via iframes.

## Folder Structure

The project is organized into a clean folder structure for production:

```
/
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- script.js
|   `-- images/
|       `-- (Your images go here)
|-- index.html
`-- README.md
```

## How to Use

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/cdc-nepal-website.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd cdc-nepal-website
    ```
3.  **Open `index.html` in your browser**:
    You can simply open the `index.html` file in your favorite web browser to view the website.

## Customization

-   **Logo and Text**: Open `index.html` to change the logo, navigation links, and all website text content.
-   **Images**:
    -   Replace the placeholder slider image URLs in `index.html` with your own.
    -   Place your other images in the `assets/images/` directory and reference them as needed.
-   **Styles**: Modify `assets/css/style.css` to change the color scheme, fonts, and other visual elements.
-   **Functionality**: Edit `assets/js/script.js` to adjust slider settings or add new interactive features.
-   **Feeds**: Update the `src` attributes of the iframes in the footer section of `index.html` to point to your own Instagram feed embed and reports.

## Production & Deployment

This website is optimized for production. Here is a checklist to follow before deploying the site:

1.  **Update Domain Name**:
    -   The placeholder domain `https://www.cdcnepal.org/` is used in several files. You must replace it with your actual domain.
    -   Check and update the domain in:
        -   `index.html` (for `canonical` and social media meta tags)
        -   `sitemap.xml`
        -   `robots.txt`

2.  **Optimize Images**:
    -   Before uploading your final images to the `assets/images/` folder, make sure they are compressed for the web. This is critical for fast loading times.
    -   Use services like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to reduce image file sizes without losing quality.
    -   Ensure you have created and placed `og-image.jpg` (1200x630px) and `CDCNepal_Logo.png` in the `assets/images` directory.

3.  **Check All Links**:
    -   Verify that all external links are correct (GlobalGiving, social media, etc.).
    -   Update the placeholder social media links in the `JSON-LD` script in `index.html`.
    -   Ensure your Google Form is correctly embedded and working.

4.  **Minified Assets**:
    -   The project is set up to use minified CSS and JavaScript files (`style.min.css` and `script.min.js`) for better performance.
    -   The original, unminified files (`style.css` and `script.js`) are available for future development. If you make changes to them, you will need to re-minify them for production.

5.  **Accessibility**:
    -   The site includes features like ARIA labels and semantic HTML for better accessibility. Continue to follow best practices if you add new content.

By following these steps, you will ensure your website is fast, SEO-friendly, and ready to make a global impact. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 