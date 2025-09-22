
export default async function CatchAllRoute({ params }: {
  params: Promise<{
    slug: string[]
  }>
}) {
  const { slug } = await params;

  return (
    <div>

      <h1 className='text-4xl'>CatchAllRoute</h1>


      <div>

        {slug.map((s) => (
          <p>{s}</p>
        ))}
      </div>
    </div>
  )
}
