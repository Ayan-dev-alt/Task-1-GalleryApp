const ErrorBox = ({ error, getData }) => {
    return (
        <div className="flex min-h-[60vh] items-center justify-center px-5">

            <div
                className="
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    border-red-500/20
                    bg-slate-900
                    p-8
                    text-center
                    shadow-xl
                "
            >

                <div
                    className="
                        mx-auto
                        mb-5
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500/10
                    "
                >
                    <span className="text-3xl">
                        ⚠️
                    </span>
                </div>


                <h2 className="text-2xl font-bold">
                    Something went wrong
                </h2>


                <p className="mt-3 text-slate-400">
                    {error}
                </p>


                <button
                    onClick={getData}
                    className="
                        mt-6
                        rounded-xl
                        bg-amber-500
                        px-6
                        py-3
                        font-semibold
                        text-slate-950
                        transition
                        hover:bg-amber-400
                        cursor-pointer
                    "
                >
                    Try Again
                </button>

            </div>

        </div>
    );
};

export default ErrorBox;