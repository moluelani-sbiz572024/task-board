import { useEffect, useState } from 'react'

const STORAGE_KEY = 'task-board.tasks'

function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTasks([...tasks, { id: crypto.randomUUID(), text: trimmed, completed: false }])
    setText('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container py-5" style={{ maxWidth: '560px' }}>
      <div className="card shadow-lg rounded-4 p-4">
        <h1 className="mb-4 text-center">タスクボード</h1>
        <form className="d-flex gap-2 mb-4" onSubmit={addTask}>
          <input
            type="text"
            className="form-control rounded-3 flex-grow-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="新しいタスクを入力"
          />
          <button type="submit" className="btn btn-primary rounded-3 flex-shrink-0 text-nowrap">
            追加
          </button>
        </form>
        {tasks.length === 0 ? (
          <p className="text-center text-muted">タスクはまだありません</p>
        ) : (
          <ul className="list-group">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`list-group-item d-flex align-items-center justify-content-between rounded-3 mb-2${task.completed ? ' text-muted' : ''}`}
              >
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={task.id}
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <label
                    className={`form-check-label${task.completed ? ' text-decoration-line-through' : ''}`}
                    htmlFor={task.id}
                  >
                    {task.text}
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger flex-shrink-0 text-nowrap"
                  onClick={() => deleteTask(task.id)}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
