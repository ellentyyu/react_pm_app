const CreateProject = () => {
    return (
        <div className="w-full px-10 bg-neutral-100 pt-32">
            <form className="w-5/6 bg-slate-500">
                <div className="flex justify-end">
                    <button type="button">Cancel</button>
                    <button type="submit" className="rounded-md px-5 py-3 bg-gray-950 text-neutral-100">Save</button>
                </div>
                <div>
                    <label for="pname" className="inline-block">TITLE</label>
                    <input type="text" id="pname" className="block"/>
                </div>
                <div>
                    <label for="desc" className="inline-block">DESCRIPTION</label>
                    <input type="text" id="desc" className="block"/>
                </div>
                <div>
                    <label for="date" className="inline-block">DUE DATE</label>
                    <input type="date" id="date" className="block"/>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
