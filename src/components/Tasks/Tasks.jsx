import React from "react";
import styles from "./tasks.module.css";
import {Counter} from "../Counter"
const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
       
        {/* Show when No Tasks are present */}
        <Counter/>

      </div>
    </>
  );
};

export default Tasks;
