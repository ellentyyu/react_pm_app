import { useRef } from "react";
const CreateProject = ({ onSaveProject, onDone }) => {
    const titleInput = useRef();
    const descInput = useRef();
    const dateInput = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const projectData = {
            id: Date.now(),
            title: titleInput.current.value,
            desc: descInput.current.value,
            date: new Date(dateInput.current.value),
            taskList: []
        }
        cancelHandler();
        onSaveProject(projectData);
    }

    const cancelHandler = () => {
        titleInput.current.value = ''
        descInput.current.value = ''
        dateInput.current.value = ''
        onDone();
    }
    return (
        <div className="w-[calc(100%-theme(spacing.96))] bg-neutral-100 px-10 pt-32">
            <form className="w-5/6" onSubmit={submitHandler}>
                <div className="flex justify-end">
                    <button 
                        type="button"
                        className="px-5 py-3"
                        onClick={cancelHandler}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-gray-950 px-5 py-3 text-neutral-100"
                    >
                        Save
                    </button>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="pname"
                        className="mb-2 inline-block font-semibold text-stone-600"
                    >
                        TITLE
                    </label>
                    <input
                        type="text"
                        id="pname"
                        className="block w-full border-0 border-b-2 border-stone-300 bg-stone-200 focus:border-stone-600 focus:ring-0"
                        ref={titleInput}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="desc"
                        className="mb-2 inline-block font-semibold text-stone-600"
                    >
                        DESCRIPTION
                    </label>
                    <input
                        type="text"
                        id="desc"
                        className="block w-full border-0 border-b-2 border-stone-300 bg-stone-200 focus:border-stone-600 focus:ring-0"
                        ref={descInput}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="date"
                        className="mb-2 inline-block font-semibold text-stone-500"
                    >
                        DUE DATE
                    </label>
                    <input
                        onFocus={e => e.target.showPicker()}
                        type="date"
                        id="date"
                        className="block w-full border-0 border-b-2 border-stone-300 bg-stone-200 focus:border-stone-600 focus:ring-0"
                        ref={dateInput}
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
