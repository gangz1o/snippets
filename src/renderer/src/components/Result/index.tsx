import Highlight from '../Highlight'
import useCodeSelect from '@renderer/hooks/useCodeSelect'

export default function Result() {
  const { data, searchTerm, currentIndex, handleClick } = useCodeSelect()

  // 提取计算类名的逻辑到单独的函数
  const getResultItemClassName = (currentIndex: number, index: number) => {
    return `text-slate-700 truncate mb-1 hover:bg-blue-500 hover:text-white p-1 rounded-md hover:cursor-pointer transition-all duration-200 ${
      currentIndex === index ? 'bg-blue-500 text-white' : ''
    }`
  }

  return (
    <main className="p-3">
      <section className="text-slate-500 text-xs font-bold mb-2">Results</section>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={getResultItemClassName(currentIndex, index)}
          onClick={() => handleClick(index)}
        >
          <Highlight text={item.content} highlight={searchTerm} />
        </div>
      ))}
    </main>
  )
}
