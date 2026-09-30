const Pagination = ({ ind, add, minus }) => {
    return (
        <div
            className="
                flex
                items-center
                justify-center
                gap-4
                pb-5
                pt-10
            "
        >

            {/* Previous */}
            <button
                onClick={minus}
                disabled={ind === 1}
                className="
                    rounded-xl
                    bg-slate-800
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-slate-700
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    cursor-pointer
                "
            >
                ← Prev
            </button>


            {/* Current Page */}
            <span
                className="
                    rounded-xl
                    bg-amber-500
                    px-5
                    py-3
                    font-bold
                    text-slate-950
                "
            >
                {ind}
            </span>


            {/* Next */}
            <button
                onClick={add}
                className="
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
                Next →
            </button>

        </div>
    );
};

export default Pagination;