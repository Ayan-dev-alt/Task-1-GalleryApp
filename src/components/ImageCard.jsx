const ImageCard = ({ image, setSelectedImage }) => {
    return (
        <div
            onClick={() => setSelectedImage(image)}
            className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                shadow-lg
                transition
                duration-300
                hover:-translate-y-2
                hover:border-amber-500/50
            "
        >

            {/* Image */}
            <div className="h-44 overflow-hidden sm:h-52">

                <img
                    src={image.webformatURL}
                    alt={image.tags}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                    "
                />

            </div>


            {/* Photographer */}
            <div className="p-3 sm:p-4">

                <p className="
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-slate-500
                    sm:text-xs
                ">
                    Photographer
                </p>

                <h2 className="
                    mt-1
                    truncate
                    text-sm
                    font-semibold
                    group-hover:text-amber-400
                    sm:text-lg
                ">
                    {image.user}
                </h2>

            </div>

        </div>
    );
};

export default ImageCard;