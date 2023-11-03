const SideBar = ({ onCreate, onView, projectList, selectedId }) => {
    const selectHandler = (event, id) => {
        event.preventDefault();
        onView(id);
    };

    return (
        <div className="mt-11 w-96 rounded-tr-xl bg-black px-10 pt-16 text-neutral-100 ">
            <h2 className="mb-7 text-2xl font-semibold text-neutral-100">
                YOUR PROJECTS
            </h2>
            <button
                type="button"
                className="rounded-md bg-stone-700 p-4 text-stone-400"
                onClick={onCreate}
            >
                + Add Project
            </button>
            <ul className="pt-16">
                {projectList.map((project) => (
                    <li key={project.id}>
                        <a
                            href="#"
                            className={`sidebar__item ${
                                selectedId === project.id ? 'active' : ''
                            }`}
                            onClick={(event) =>
                                selectHandler(event, project.id)
                            }
                        >
                            {project.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
