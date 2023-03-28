// Note: TodoListApp component...!

import React, { useState } from 'react';
import styles from "../../styles/Todo.module.css";

// Note: Importing required components...!
import List from './list';
import DataNotFound from "./not-found";

const TodoListApp = () => {

    // Note: Handeling states here...!
    const [todoInput, setTodoInput] = useState("");
    const [todoData, setTodoData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editItemIndex, setEditItemIndex] = useState("");

    // Note: Add item handler...!
    const addItem = () => {
        let todoDataClone = [...todoData];
        let formObj = {
            inputData: todoInput,
            time: new Date().getTime()
        };
        todoDataClone.push(formObj);
        setTodoData(todoDataClone);
        setTodoInput("");
    };

    // Note: Delete item handler...!
    const deleteItemHandler = (key) => {
        // console.log(key);

        let todoDataClone = [...todoData];
        todoDataClone.splice(key, 1);
        setTodoData(todoDataClone);
    };

    // Note: Edit item handler...!
    const editItemHandler = (key, data) => {
        // console.log(key, data);

        if (data) {
            setTodoInput(data?.inputData);
            setIsEdit(true);
            setEditItemIndex(key);
        };
    };

    // Note: Update item handler...!
    const updateItemHandler = () => {
        let todoDataClone = [...todoData];
        let formObj = {
            inputData: todoInput,
            time: new Date().getTime()
        };
        todoDataClone.splice(editItemIndex, 1, formObj);
        setTodoData(todoDataClone);
        setTodoInput("");
        setEditItemIndex("");
        setIsEdit(false);
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
                                                    {
                                                        (isEdit)
                                                            ?
                                                            (
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary"
                                                                        id={styles.addBtn}
                                                                        onClick={updateItemHandler}
                                                                        disabled={todoInput.trim().length < 1}
                                                                    >
                                                                        Update
                                                                    </button>

                                                                    {/* <button
                                                                        type="button"
                                                                        className="btn btn-primary"
                                                                        id={styles.addBtn}
                                                                        // onClick={}
                                                                    >
                                                                        Cancel
                                                                    </button> */}
                                                                </div>
                                                            )
                                                            :
                                                            (
                                                                <div style={{ display: "flex", flexDirection: "row" }}>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary"
                                                                        id={styles.addBtn}
                                                                        onClick={addItem}
                                                                        disabled={todoInput.trim().length < 1}
                                                                    >
                                                                        Add
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary"
                                                                        id={styles.addBtn}
                                                                        disabled={todoData.length < 1}
                                                                    >
                                                                        Clear
                                                                    </button>
                                                                </div>
                                                            )
                                                    }
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
                                                        <List
                                                            key={index}
                                                            elementIndex={index}
                                                            data={item}
                                                            deleteHandler={deleteItemHandler}
                                                            editHandler={editItemHandler}
                                                        />
                                                    );
                                                })
                                            )
                                            :
                                            (<DataNotFound />)
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