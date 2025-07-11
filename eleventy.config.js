
export default function (eleventyConfig) {
	// Output directory: _site

	// Copy `media/` to `_site/media/`
	eleventyConfig.addPassthroughCopy("media");

	// Copy `style.css` to `_site/style.css`
	eleventyConfig.addPassthroughCopy("style.css");
};
