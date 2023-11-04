const ProjectsSidebar = ({ onCreate, onView, projectList, selectedId }) => {
    const selectHandler = (event, id) => {
        event.preventDefault();
        onView(id);
    };

    return (
        <div className="mt-11 w-1/3 md:w-80 rounded-tr-xl bg-stone-900 px-4 md:px-8 pt-16 text-stone-50">
            <h2 className="mb-7 md:text-xl font-bold text-stone-200">
                YOUR PROJECTS
            </h2>
            <button
                type="button"
                className="rounded-md bg-stone-700 px-4 py-2 text-xs md:text-base text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition-all"
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

export default ProjectsSidebar;
