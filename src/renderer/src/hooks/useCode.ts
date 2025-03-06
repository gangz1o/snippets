import { useContext } from 'react'
import { CodeContext, ContextProps } from '@renderer/context/CodeContext'

const useCode = (): ContextProps => {
  const context = useContext(CodeContext)
  if (!context?.data) {
    throw new Error('useCode must be used within a CodeContext')
  }
  return { ...context }
}

export default useCode
