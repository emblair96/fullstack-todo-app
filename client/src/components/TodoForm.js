export default function TodoForm({handleInput, handleSubmit, newTodo}) {

  return (
    <div>
      <input 
        type="text"
        onChange={handleInput}
        value={newTodo}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}