// Note: TodoListApp component...!

import React, { useState } from 'react';
import styles from "../../styles/Todo.module.css";

const TodoListApp = () => {

    // Note: Handeling states here...!
    const [todoInput, setTodoInput] = useState("");
    const [todoData, setTodoData] = useState([]);

    // Note: Add item handler...!
    const addItem = () => {
        let todoDataClone = [...todoData];
        todoDataClone.push(todoInput);
        setTodoData(todoDataClone);
        setTodoInput("");
    };

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card" id="list1">
                                <div className="card-body py-4 px-4 px-md-5">

                                    <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                        <u>
                                            Todo List App Next JS
                                        </u>
                                    </p>

                                    <div className="pb-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-row align-items-center">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Add New Item..."
                                                        value={todoInput}
                                                        onChange={(e) => setTodoInput(e.target.value)}
                                                    />
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            id={styles.addBtn}
                                                            onClick={addItem}
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    {
                                        (todoData && todoData.length > 0)
                                            ?
                                            (
                                                todoData.map((item, index) => {
                                                    return (
                                                        <ul
                                                            key={index}
                                                            className="list-group list-group-horizontal rounded-0 bg-transparent"
                                                        >
                                                            <li
                                                                className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                                                <p className="lead fw-normal mb-0">
                                                                    {item}
                                                                </p>
                                                            </li>

                                                            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                                                <div className="d-flex flex-row justify-content-end mb-1">
                                                                    <a href="#" className="text-info" data-mdb-toggle="tooltip" title="Edit todo">
                                                                        <i className="fas fa-pencil-alt me-3"></i>
                                                                    </a>

                                                                    <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                                                                        <i className="fas fa-trash-alt"></i>
                                                                    </a>
                                                                </div>

                                                                <div className="text-end text-muted">
                                                                    <a href="#" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                                                                        <p className="small mb-0">
                                                                            <i className="fas fa-info-circle me-2"></i>
                                                                            {new Date().toLocaleTimeString()}
                                                                        </p>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    );
                                                })
                                            )
                                            :
                                            (null)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TodoListApp;