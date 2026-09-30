const Loading = () => {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center">

            <div
                className="
                    h-12
                    w-12
                    animate-spin
                    rounded-full
                    border-4
                    border-slate-700
                    border-t-amber-500
                "
            ></div>

            <p className="mt-5 text-lg text-slate-400">
                Loading images...
            </p>

        </div>
    );
};

export default Loading;