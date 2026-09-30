import { useRef } from "react";

const categories = [
    { label: "All", value: "" },
    { label: "Backgrounds", value: "backgrounds" },
    { label: "Fashion", value: "fashion" },
    { label: "Nature", value: "nature" },
    { label: "Science", value: "science" },
    { label: "Education", value: "education" },
    { label: "Feelings", value: "feelings" },
    { label: "Health", value: "health" },
    { label: "People", value: "people" },
    { label: "Religion", value: "religion" },
    { label: "Places", value: "places" },
    { label: "Animals", value: "animals" },
    { label: "Industry", value: "industry" },
    { label: "Computer", value: "computer" },
    { label: "Food", value: "food" },
    { label: "Sports", value: "sports" },
    { label: "Transportation", value: "transportation" },
    { label: "Travel", value: "travel" },
    { label: "Buildings", value: "buildings" },
    { label: "Business", value: "business" },
    { label: "Music", value: "music" },
];

const CategoryMenu = ({
    category,
    handleCategory,
    showCategories,
    setShowCategories,
}) => {

    const categoryRef = useRef(null);

    const openMenu = () => {
        setShowCategories(true);
    };

    return (
        <div
            ref={categoryRef}
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={() => setShowCategories(false)}
        >

            <button
                type="button"
                onClick={() => setShowCategories(!showCategories)}
                className="
                    rounded-xl
                    bg-slate-800
                    px-5
                    py-3
                    font-semibold
                    text-slate-300
                    transition
                    hover:bg-amber-500
                    hover:text-slate-950
                    cursor-pointer
                    whitespace-nowrap
                "
            >
                Categories
            </button>


            {showCategories && (
                <div
                    className="
                        absolute
                        right-0
                        top-full
                        z-50
                        mt-2
                        w-60
                        max-h-[70vh]
                        overflow-y-auto
                        rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900
                        p-2
                        shadow-2xl
                    "
                    onMouseEnter={() => setShowCategories(true)}
                >

                    {categories.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => {
                                handleCategory(item.value);
                                setShowCategories(false);
                            }}
                            className={`
                                block
                                w-full
                                rounded-xl
                                px-4
                                py-2.5
                                text-left
                                text-sm
                                transition
                                cursor-pointer

                                ${
                                    category === item.value
                                        ? "bg-amber-500 text-slate-950"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-amber-400"
                                }
                            `}
                        >
                            {item.label}
                        </button>
                    ))}

                </div>
            )}

        </div>
    );
};

export default CategoryMenu;