import { useCallback, useEffect, useState } from 'react'
import useCode from './useCode'

export default () => {
  const { data, searchTerm } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * 处理键盘按键事件的回调函数
   * @param e - 键盘事件对象
   */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // 如果数据为空，直接返回
      if (data.length === 0) return
      // 处理向下箭头按键
      if (e.key === 'ArrowDown') {
        // 如果当前索引加 1 超过数据长度减 1，则将当前索引设置为 0，否则加 1
        setCurrentIndex(currentIndex + 1 > data.length - 1 ? 0 : currentIndex + 1)
      }
      // 处理向上箭头按键
      else if (e.key === 'ArrowUp') {
        // 如果当前索引减 1 小于 0，则将当前索引设置为数据长度减 1，否则减 1
        setCurrentIndex(currentIndex - 1 < 0 ? data.length - 1 : currentIndex - 1)
      }
      // 处理回车键
      else if (e.key === 'Enter') {
        // 复制当前索引对应的数据内容到剪贴板
        navigator.clipboard.writeText(data[currentIndex].content)
      }
    },
    // 依赖项数组，当 data 或 currentIndex 变化时，重新创建回调函数
    [data, currentIndex]
  )

  // 鼠标点击复制到剪贴板
  const handleClick = (index: number) => {
    setCurrentIndex(index)
    navigator.clipboard.writeText(data[index].content)
  }

  /**
   * 副作用钩子，用于添加和移除键盘事件监听器
   * 当组件挂载时，添加键盘事件监听器
   * 当组件卸载时，移除键盘事件监听器
   * 当 handleKeyDown 函数发生变化时，重新添加监听器
   */
  useEffect(() => {
    // 为 document 添加 keydown 事件监听器，当按下键盘按键时调用 handleKeyDown 函数
    document.addEventListener('keydown', handleKeyDown)
    // 组件卸载时的清理函数，移除 keydown 事件监听器
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
    // 依赖项数组，当 handleKeyDown 函数变化时，重新执行副作用
  }, [handleKeyDown])

  return { data, searchTerm, currentIndex, handleClick }
}
