import useCode from '@renderer/hooks/useCode'
import { codes } from '@renderer/data'

export default function Search() {
  const { setData, setSearchTerm } = useCode()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    const filteredData = value
      ? codes.filter((item) => item.content.toLowerCase().includes(value.toLowerCase()))
      : []
    setData(filteredData)
  }

  return (
    <div className="bg-gray-100 p-1 rounded-xl drag">
      <section className="bg-gray-100 p-2 rounded-xl">
        <input
          type="text"
          className="w-full bg-gray-100 p-1 text-2xl text-slate-600 outline-none"
          placeholder="Search for Snippets..."
          onChange={handleChange}
        />
      </section>
    </div>
  )
}
