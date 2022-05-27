import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import "bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./NewTask.js";

function TaskList() {
  let dueDate = new Date();
  let priority = [0, 0, 0];
  let newTaskName = "";
  let taskTable = [];
  function getTaskName(e) {
    newTaskName = e.target.value;
    console.log(newTaskName);
  }
  function getPriorityColor(newPriority) {
    if (newPriority[0] === 1) {
      return { backgroundColor: "green" };
    } else if (newPriority[1] === 1) {
      return { backgroundColor: "yellow" };
    } else if (newPriority[2] === 1) {
      return { backgroundColor: "red" };
    } else return { backgroundColor: "green" };
  }
  function addTask() {
    let priorityColor = getPriorityColor(priority);
    console.log(`${priorityColor}`);
    taskTable.push(
      <div className="task" id={newTaskName} key={newTaskName}>
        <p>{`Task name: ${newTaskName}`}</p>
        <p>{`Due date: ${dueDate.getDate()}-${dueDate.getMonth()}-${dueDate.getFullYear()}--At: ${dueDate.getHours()}h${dueDate.getMinutes()}`}</p>
        <button
          onClick={(e) => {
            let deleteTarget = document.getElementById(
              `${e.target.parentNode.id}`
            );
            deleteTarget.parentNode.removeChild(deleteTarget);
          }}
        >
          Delete
        </button>
        <div className="priority" style={priorityColor}></div>
        <hr />
      </div>
    );

    console.log(newTaskName, dueDate);
    ReactDOM.render(
      <NewTask task={taskTable} />,
      document.getElementById("container-right")
    );
  }
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: "2rem" }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="lg">
          New task
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          className="outer-layer"
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <div style={c1Style} className="inner-layer">
            <h2>Add a new task</h2>
            <div>
              <label for="newtask-name">Name :</label>
              <input
                className="input-group"
                id="newtask-name"
                type="text"
                onChange={getTaskName}
              />
            </div>
            <div>
              <label for="newtask-due">Due date :</label>
              <Flatpickr
                className="input-group"
                data-enable-time
                value={dueDate}
                onChange={([date]) => {
                  dueDate = date;
                }}
              />
            </div>
            <div id="task-button-container">
              <Button
                variant="success"
                onClick={() => {
                  priority = [1, 0, 0];
                  console.log(priority);
                }}
              >
                Low priority
              </Button>
              <Button
                variant="warning"
                onClick={() => {
                  priority = [0, 1, 0];
                  console.log(priority);
                }}
              >
                Medium priority
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  priority = [0, 0, 1];
                  console.log(priority);
                }}
              >
                High priority
              </Button>
            </div>
          </div>
          <div id="close-add-btn-container">
            <Button onClick={() => setShowMessage(false)}>Close</Button>
            <Button onClick={() => addTask()}>Add task</Button>
          </div>
        </Alert>
      </CSSTransition>
    </Container>
  );
}
const c1Style = {
  background: "steelblue",
  color: "black",
  padding: "20px",
  height: "92%",
};

export default TaskList;
