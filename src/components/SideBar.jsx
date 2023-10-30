const SideBar = () => {
    return (
        <div className="mt-10 w-80 rounded-tr-xl bg-black px-6 pt-20 text-neutral-100 ">
            <h2 className="text-2xl font-semibold text-neutral-100">
                YOUR PROJECTS
            </h2>
            <button
                type="button"
                className="rounded-md bg-stone-700 p-4 text-stone-400"
            >
                + Add Project
            </button>
        </div>
    );
};

export default SideBar;
