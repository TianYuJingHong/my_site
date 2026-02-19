export default function ProjectCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}
