import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Priority } from "../../Priority/Priority";
import { ITask } from "../../../reducers/tasks";
import {
  StyledItem,
  StyledTrashAndDescriptionWrapper,
  StyledIconWrapper,
  StyledDateWrapper,
  StyledTaskWrapper,
  StyledDescription,
  StyledPriorityWrapper
} from "./taskListStyle";

interface ITaskList {
  tasks: ITask[];
  renderAction?: (task: ITask) => JSX.Element;
  renderEdit?: (task: ITask) => JSX.Element;
  renderComplete?: (task: ITask) => JSX.Element;
  renderDelete?: (task: ITask) => JSX.Element;
}

const TaskList: React.FC<ITaskList> = (props): JSX.Element => {
  const { tasks, renderDelete, renderEdit, renderComplete } = props;

  const tasksJSX = tasks.map(task => {
    return (
      <CSSTransition
        timeout={{ exit: 300, enter: 1000 }}
        key={task.id}
        classNames="task-item"
      >
        <StyledItem key={task.id}>
          <StyledDateWrapper>
            {task.date.toLocaleDateString()}
            <StyledPriorityWrapper>
              <Priority priority={task.priority} />
            </StyledPriorityWrapper>
          </StyledDateWrapper>
          <StyledTaskWrapper>
            <StyledTrashAndDescriptionWrapper>
              {renderDelete && renderDelete(task)}
              <StyledDescription>{task.description}</StyledDescription>
            </StyledTrashAndDescriptionWrapper>
            <StyledIconWrapper>
              {renderEdit && renderEdit(task)}
              {renderComplete && renderComplete(task)}
            </StyledIconWrapper>
          </StyledTaskWrapper>
        </StyledItem>
      </CSSTransition>
    );
  });

  return (
    <ul>
      <TransitionGroup>{tasksJSX}</TransitionGroup>
    </ul>
  );
};

export default TaskList;
