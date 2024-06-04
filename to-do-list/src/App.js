import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [text1, setText] = useState('');
  const [does, setDoes] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function addTodo(e) {
    e.preventDefault(); // form ko refresh honey se prevent krne ke lie
    
    if (!text1.trim()) {
      return toast.error('Please enter a task');
    }
    // setDoes(prevData => {
    //   return [
    //     ...prevData,
    //     text1
    //   ]
    // })
    setText("")
    if (editIndex > -1) {
      const newDoes = [...does];
      newDoes[editIndex] = text1;
      setDoes(newDoes);
      setEditIndex(-1);
    } else {
      setDoes([...does, text1]);
    }
    
  }

  function deleteTodo(index) {
    const newDoes = does.filter((_, i) => i !== index);
    setDoes(newDoes);
    if (editIndex === index) {
      setEditIndex(-1);
    }
  }

  function editTodo(index) {
    setText(does[index]);
    setEditIndex(index);
  }

  function cancelEdit() {
    setText('');
    setEditIndex(-1);
  }

  return (
    <div className='main-div'>
      <div>
        <h1>TO DO LIST</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            name='text1'
            id='text1'
            placeholder='ADD TO DO'
            value={text1}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="submitButton">Add</button>
        </form>
        <table className='todoo-table'>
          <thead>
            <tr>
              <th>TASKS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {does.map((item, index) => (
              <tr key={index}>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={text1}
                      onChange={(e) => setText(e.target.value)}
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <button onClick={cancelEdit} className='edit-btn'>
                      Cancel
                    </button>
                  ) : (
                    <>
                      <button onClick={() => editTodo(index)} className='edit-btn'>
                        Edit
                      </button>
                      <button onClick={() => deleteTodo(index)} className='delete-btn'>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  )
}

export default App;
