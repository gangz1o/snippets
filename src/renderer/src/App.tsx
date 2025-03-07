import Search from './components/Search'
import Result from './components/Result'
import { CodeContext } from './context/CodeContext'
import { useState } from 'react'
import { codes } from './data'

function App(): JSX.Element {
  const [data, setData] = useState<typeof codes>([])
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="h-screen flex flex-col">
      <CodeContext.Provider value={{ data, setData, searchTerm, setSearchTerm }}>
        <div className="flex-none">
          <Search />
        </div>
        {data.length > 0 && (
          <div className="overflow-y-auto -mt-[10px] bg-gray-200 rounded-b-xl">
            <Result />
          </div>
        )}
      </CodeContext.Provider>
    </div>
  )
}

export default App
