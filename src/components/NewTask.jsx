import { useState } from "react"

export default function NewTask({onAdd}) {
  const [enteredValue, setEnteredValue] = useState('');

  const handleAddTask = () => {
    onAdd(enteredValue);
    setEnteredValue('');
  };

  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredValue} onChange={(e) => setEnteredValue(e.target.value)}/>
      <button onClick={handleAddTask} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>

  )
    
}