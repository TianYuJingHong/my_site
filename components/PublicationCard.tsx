type Props = {
  title: string
  authors: string
  venue: string
  year: string
  pdf?: string
}

export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  pdf
}: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{title}</h3>
      <p>{authors}</p>
      <p>
        <i>{venue}</i>, {year}
      </p>
      {pdf && <a href={pdf}>[PDF]</a>}
    </div>
  )
}
