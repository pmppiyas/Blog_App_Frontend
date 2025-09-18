
const BlogDetailsPage = async ({ params }: {
  params: Promise<{ blogId: string }>
}) => {
  const { blogId } = await params;
  return (
    <div>BlogDetailsPage
      <p>Id no : {blogId}</p>
    </div>
  )
}


export default BlogDetailsPage;