const ProjectView = () => {
    return (
        <div className="w-[calc(100%-theme(spacing.96))] bg-neutral-100 px-10 pt-16">
            <div className="w-5/6">
                <div className="py-6 border-solid border-b-2 border-stone-300">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-3xl font-bold text-stone-700 tracking-wide">Project Title</h2>
                        <button type="button">Delete</button>
                    </div>
                    <p className="mb-6 text-stone-400">Dec 24, 2023</p>
                    <p className="w-3/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati labore ab ea unde consequatur quidem ullam nisi eligendi, natus nobis?</p>
                </div>
                <div className="py-6">
                    <h3 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h3>
                    <form className="flex items-center mb-6">
                        <label
                            htmlFor="taskname"
                            className="hidden"
                        >
                        </label>
                        <input
                            type="text"
                            id="taskname"
                            className="mr-4 px-2 py-1 border-0 rounded-sm bg-stone-200 focus:ring-stone-500"
                        />
                        <button type="button">Add Task</button>
                    </form>
                    <div>
                        tasks display area
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectView;
