import SideBar from "./components/SideBar";

const App = () => {
    return (
        <div className="flex h-screen bg-neutral-100">
            <SideBar />
            <h1 className="my-8 text-center text-5xl font-bold">Hello World
                <span>happy helloween</span>
            </h1>
        </div>
    );
}

export default App;
