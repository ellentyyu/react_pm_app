import { useRef } from 'react';
const ProjectView = ({ project, onAddTask, onClearTask, onDeleteProject }) => {
    const monthsList = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const taskInput = useRef();

    const addHandler = () => {
        if (taskInput.current.value.trim().length === 0) return;
        onAddTask(taskInput.current.value.trim());
        taskInput.current.value = '';
    };

    return (
        <div className="w-[calc(100%-theme(spacing.80))] bg-stone-50 px-10 pt-16">
            <div className="w-5/6">
                <div className="border-b-2 border-solid border-stone-300 py-6">
                    <div className="mb-4 flex justify-between">
                        <h2 className="text-3xl font-bold tracking-wide text-stone-700">
                            {project.title}
                        </h2>
                        <button
                            className="transition-all hover:text-red-600"
                            type="button"
                            onClick={() => {
                                onDeleteProject();
                            }}
                        >
                            Delete
                        </button>
                    </div>
                    <p className="mb-6 text-stone-400">
                        {monthsList[project.date.getMonth()]}{' '}
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
                        <button type="button" onClick={addHandler}>
                            Add Task
                        </button>
                    </form>
                    <div>
                        {project.taskList.length === 0 &&
                            'This project does not have any task yet.'}
                        {project.taskList.length > 0 && (
                            <ul className="rounded-md bg-stone-100 px-4 py-5">
                                {project.taskList.map((task, idx) => (
                                    <li
                                        key={task + idx}
                                        className="flex justify-between py-3"
                                    >
                                        <p>{task}</p>
                                        <button
                                            className="transition-all hover:text-red-600"
                                            type="button"
                                            onClick={() => {
                                                onClearTask(idx);
                                            }}
                                        >
                                            Clear
                                        </button>
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
