import { publications } from "@/data/publications"
import PublicationCard from "@/components/PublicationCard"

export default function PublicationsPage() {
  return (
    <main>
      <h1>Publications</h1>
      {publications.map((p, i) => (
        <PublicationCard key={i} {...p} />
      ))}
    </main>
  )
}
