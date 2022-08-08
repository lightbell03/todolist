import React, {useState} from 'react'
import Lists from './Lists';
import Form from './Form';

export default function Todo() {
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            complete: false
        };

        setTodoData((prev) => [...prev, newTodo]);
        setValue("");
    }
    return (
        <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
            <div className='w-full p-6 m-4 bg-white rounded shdow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
                <div className='flex justiby-between mb-3'>
                    <h1>할 일 목록</h1>
                </div>

                <Lists todoData={todoData} setTodoData={setTodoData} />
                <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}
