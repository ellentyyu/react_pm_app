import { useRef } from "react";
const ProjectView = ({ project, onAddTask, onClearTask }) => {
    console.log('here view', project);
    const monthsList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const taskInput = useRef();
    const addHandler = () => {
        if (taskInput.current.value.trim().length === 0) return;
        onAddTask(taskInput.current.value.trim());
        taskInput.current.value = '';
    }

    const clearHandler = (idx) => {
        onClearTask(idx);
    }
    return (
        <div className="w-[calc(100%-theme(spacing.96))] bg-neutral-100 px-10 pt-16">
            <div className="w-5/6">
                <div className="border-b-2 border-solid border-stone-300 py-6">
                    <div className="mb-4 flex justify-between">
                        <h2 className="text-3xl font-bold tracking-wide text-stone-700">
                            {project.title}
                        </h2>
                        <button type="button">Delete</button>
                    </div>
                    <p className="mb-6 text-stone-400">
                        {monthsList[project.date.getMonth()]}{" "}
                        {project.date.getDate()}, {project.date.getFullYear()}
                    </p>
                    <p className="w-3/4">{project.desc}</p>
                </div>
                <div className="py-6">
                    <h3 className="mb-4 text-2xl font-bold text-stone-700">
                        Tasks
                    </h3>
                    <form className="mb-6 flex items-center">
                        <label htmlFor="taskname" className="hidden"></label>
                        <input
                            type="text"
                            id="taskname"
                            className="mr-4 rounded-sm border-0 bg-stone-200 px-2 py-1 focus:ring-stone-500"
                            ref={taskInput}
                        />
                        <button type="button" onClick={addHandler}>Add Task</button>
                    </form>
                    <div>
                        {project.taskList.length === 0 &&
                            "This project does not have any task yet."}
                        {project.taskList.length > 0 && (
                            <ul className="px-4 py-5 bg-stone-100 rounded-md">
                                {project.taskList.map((task, idx) => (
                                    <li key={task+idx} className="flex justify-between py-3">
                                        <p>{task}</p>
                                        <button type="button" onClick={() => {clearHandler(idx)}}>Clear</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectView;
