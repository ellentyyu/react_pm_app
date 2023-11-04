const MainWrapper = ({children}) => {
    return (
        <div className="w-2/3 md:w-[calc(100%-theme(spacing.80))] px-4 md:px-10 bg-stone-50">
            {children}
        </div>
    );
};

export default MainWrapper;
