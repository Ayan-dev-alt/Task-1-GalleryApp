const Lightbox = ({ selectedImage, setSelectedImage, category }) => {
  if (!selectedImage) {
    return null;
  }

  return (
    <div
      className="
                fixed
                inset-0
                z-100
                flex
                items-center
                justify-center
                bg-black/85
                p-3
                sm:p-5
            "
      onClick={() => setSelectedImage(null)}
    >
      <div
        className="
                    relative
                    max-w-[95vw]
                    sm:max-w-[90vw]
                "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Large Image */}
        <img
          src={selectedImage.largeImageURL}
          alt={selectedImage.tags}
          className="
                        max-h-[85vh]
                        max-w-[95vw]
                        rounded-xl
                        object-contain
                        sm:rounded-2xl
                    "
        />

        {/* Close Button */}
        <button
          onClick={() => setSelectedImage(null)}
          className="
                        absolute
                        right-2
                        top-2
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-black/70
                        text-lg
                        text-white
                        hover:bg-black
                        cursor-pointer
                        sm:right-3
                        sm:top-3
                        sm:h-10
                        sm:w-10
                    "
        >
          ✕
        </button>

        {/* Author */}
        <div
          className="
                        absolute
                        left-2
                        top-2
                        max-w-[65%]
                        truncate
                        rounded-lg
                        bg-black/70
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-white

                        sm:left-3
                        sm:top-3
                        sm:max-w-none
                        sm:rounded-xl
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                    "
        >
          {selectedImage.user}
        </div>

        {/* Category */}
        <div
          className="
                        absolute
                        bottom-2
                        left-2
                        rounded-lg
                        bg-black/70
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-amber-300

                        sm:bottom-3
                        sm:left-3
                        sm:rounded-xl
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                    "
        >
          {category || "All"}
        </div>

        {/* Tags - only bigger screens */}
        <div
          className="
                        absolute
                        bottom-3
                        right-3
                        hidden
                        max-w-[50%]
                        rounded-xl
                        bg-black/70
                        px-4
                        py-2
                        text-sm
                        text-slate-200
                        md:block
                    "
        >
          {selectedImage.tags}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
