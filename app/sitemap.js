// Required for route handlers in a static export.
export const dynamic = "force-static";

const BASE_URL = "https://www.psmspices.com";

const routes = ["/", "/about-us/", "/product/", "/blog/", "/contact-us/"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "/" ? 1 : 0.8,
  }));
}
