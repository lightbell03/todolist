import React, { useState } from 'react'

const List = React.memo(({
    id, title, complete, provided, snapshot, todoData, setTodoData
}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id)
                data.complete = !data.complete;

            return data;
        });

        setTodoData(newTodoData);
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    }

    const handleChange = (e) => {
        setEditTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodoData = todoData.map((data) => {
            if (data.id === id)
                data.title = editTitle;
            
            return data;
        });

        setTodoData(newTodoData);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div key={id} className="bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-60 border rounded">
                <div className='items-center'>
                    <form type="submit" onSubmit={handleSubmit}>
                        <input type="text" value={editTitle} onChange={handleChange} />
                    </form>
                </div>
                <div className='items center'>
                    <button className='px-4 py-2 float-right' onClick={() => setIsEditing(false)}>x</button>
                    <button type='submit' className='px-4 py-2 float-right' onClick={handleSubmit}>save</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-60 border rounded`}>
                <div className='items-center'>
                    <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(id)} />
                    {" "}
                    <span className={complete && "line-through"}>
                        {title}
                    </span>
                </div>
                <div className='items center'>
                    <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>x</button>
                    <button className='px-4 py-2 float-right' onClick={() => setIsEditing(true)}>edit</button>
                </div>
            </div>
        )
    }

});

export default List;
