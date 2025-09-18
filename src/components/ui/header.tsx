export default function Header({ title }: { title: string }) {
  return (
    <div className=' flex justify-center py-2'>
      <h1 className='text-4xl font-mono'>{title}</h1>
    </div>
  )
}
