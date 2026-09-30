import ImageCard from "./ImageCard";

const Gallery = ({ data, setSelectedImage }) => {
  return (
    <div
      className="
                grid
                grid-cols-1
                gap-5
                min-[480px]:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
            "
    >
      {data.map((elem) => (
        <ImageCard
          key={elem.id}
          image={elem}
          setSelectedImage={setSelectedImage}
        />
      ))}
    </div>
  );
};

export default Gallery;
