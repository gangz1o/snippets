import useCode from '@renderer/hooks/useCode'
import Highlight from '../Highlight'

export default function Result() {
  const { data, searchTerm } = useCode()
  return (
    <main className="p-3">
      <section className="text-slate-500 text-xs font-bold mb-2">Results</section>
      {data.map((item) => (
        <div
          key={item.id}
          className="text-slate-700 truncate mb-1 hover:bg-gray-100 p-1 rounded-md hover:cursor-pointer transition-all duration-200"
        >
          <Highlight text={item.content} highlight={searchTerm} />
        </div>
      ))}
    </main>
  )
}
