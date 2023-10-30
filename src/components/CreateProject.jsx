const CreateProject = () => {
    return (
        <div className="w-full bg-neutral-100 px-10 pt-32">
            <form className="w-5/6">
                <div className="flex justify-end">
                    <button type="button" className="px-5 py-3">
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
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
