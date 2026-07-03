// add some page metadata
export const metadata = {
  title: "Jason API Example",
  description: "List JSON data API Example"
}

// Server component: fetch data directly
async function getComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    next: { revalidate: 60 }
    // ISR - Method 2: (default behavior in Nextjs 16)
    // Regenerates cache every 60 seconds

    // OTHER METHODS
    // cache: "force-cache" //Method 1: => SSG (Static Site Generation)
    // cache: "no-store" //Method 3
    //server-rendered on every PAGE request => SSR not SSG
  })
  if (!res.ok) throw new Error("Failed to fetch courses")
  return res.json()
}

export default async function CommentsPage(params) {
  const comments = await getComments()

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">📚 Available Comments</h1>

      <ul className="space-y-4">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="border rounded-lg p-4 hover:bg-blue-100 transition"
          >
            <h2 className="text-lg font-medium">{comment.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
