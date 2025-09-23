export default function Header({ title }: { title: string }) {
  return (
    <div className=' flex justify-center py-2 font-serif'>
      <h1 className='text-5xl font-medium'>{title}</h1>
    </div>
  )
}
