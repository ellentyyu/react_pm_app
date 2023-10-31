const ProjectView = () => {
    return (
        <div className="w-[calc(100%-theme(spacing.96))] bg-neutral-100 px-10 pt-28">
            <div className="w-5/6">
                <div className="pb-10 border-solid border-b-2 border-stone-300">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-3xl font-bold text-stone-700 tracking-wide">Project Title</h2>
                        <button type="button">Delete</button>
                    </div>
                    <p className="mb-6 text-stone-400">Dec 24, 2023</p>
                    <p className="w-3/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati labore ab ea unde consequatur quidem ullam nisi eligendi, natus nobis?</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-stone-700">Tasks</h3>
                    <form>
                        <label
                            htmlFor="taskname"
                            className="hidden"
                        >
                            TITLE
                        </label>
                        <input
                            type="text"
                            id="taskname"
                            className="block w-full border-0 border-b-2 border-stone-300 bg-stone-200 focus:border-stone-600 focus:ring-0"
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
