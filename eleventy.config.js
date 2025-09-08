
export default function (eleventyConfig) {
	// Output directory: _site
    eleventyConfig.setOutputDirectory("docs");

	// Copy `media/` to `_site/media/`
	eleventyConfig.addPassthroughCopy("media");

	// Copy `style.css` to `_site/style.css`
	eleventyConfig.addPassthroughCopy("style.css");
};
