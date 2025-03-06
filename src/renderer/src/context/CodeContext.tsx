import { DataType } from '@renderer/data'
import { createContext, Dispatch, SetStateAction } from 'react'

export interface ContextProps {
  data: DataType[]
  setData: Dispatch<SetStateAction<DataType[]>>
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)
