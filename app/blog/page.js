export const metadata = {
  title: "Blog – psmspices.com",
};

// Add posts here; the grid lays them out 3 / 2 / 1 per row like the original theme.
const posts = [
  {
    title: "Welcome to the PSM Spices blog",
    excerpt: "Recipes, spice tips and news from Pole Star Masala will appear here soon.",
    category: "Uncategorized",
    date: "October 8, 2024",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#FAFBFC]">
      <section className="bg-[#f2f5f7] py-[50px] text-center">
        <h1 className="text-[30px] font-bold text-heading">Blog</h1>
      </section>

      <section className="mx-auto max-w-[1290px] px-[20px] py-[60px]">
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col bg-white p-[30px] shadow-[0px_12px_18px_-6px_rgba(34,56,101,0.04)]"
            >
              <span className="mb-3 text-[12px] font-semibold text-[#2872fa] uppercase">
                {post.category}
              </span>
              <h2 className="mb-4 text-[20px] leading-[1.3] font-bold text-heading">{post.title}</h2>
              <p className="mb-6 flex-1">{post.excerpt}</p>
              <div className="border-t border-[#e1e8ed] pt-4 text-[12px] font-semibold text-heading uppercase">
                {post.date}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
