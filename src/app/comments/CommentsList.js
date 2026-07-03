"use client"

export default function CommentsList({ comments }) {
  return (
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
  )
}
