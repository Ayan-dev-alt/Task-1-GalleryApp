import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryMenu from "./components/CategoryMenu";
import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";
import Loading from "./components/Loading";
import ErrorBox from "./components/ErrorBox";
import Lightbox from "./components/Lightbox";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

const App = () => {
  const [data, setData] = useState([]);

  const [ind, setInd] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const [category, setCategory] = useState("");

  const [search, setSearch] = useState("");

  const [submittedSearch, setSubmittedSearch] = useState("");

  const [showCategories, setShowCategories] = useState(false);

  // API se images lana
  const getData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: API_KEY,
          q: submittedSearch,
          image_type: "photo",
          safesearch: true,
          page: ind,
          per_page: 30,

          ...(category && {
            category: category,
          }),
        },
      });

      setData(response.data.hits || []);
    } catch (err) {
      console.log(err);

      setError("Images load nahi ho sakin. Please try again.");

      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Page ya category ya search change hone par API call
  useEffect(() => {
    getData();
  }, [ind, category, submittedSearch]);

  // Next
  const add = () => {
    setInd((prev) => prev + 1);
    setSelectedImage(null);
  };

  // Previous
  const minus = () => {
    setInd((prev) => Math.max(prev - 1, 1));
    setSelectedImage(null);
  };

  // Category select
  const handleCategory = (value) => {
    setCategory(value);
    setInd(1);
    setSelectedImage(null);
    setShowCategories(false);
  };

  // Search
  const handleSearch = (e) => {
    e.preventDefault();

    setInd(1);
    setSelectedImage(null);

    setSubmittedSearch(search.trim());
  };

  // Clear
  const handleClear = () => {
    setSearch("");
    setSubmittedSearch("");

    setCategory("");

    setInd(1);

    setSelectedImage(null);

    setShowCategories(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}

      <Header ind={ind} />

      {/* Search */}

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />

      {/* Categories */}

      <div
        className="
                mx-auto
                flex
                max-w-7xl
                justify-end
                px-5
                pt-4
                md:px-10
            "
      >
        <CategoryMenu
          category={category}
          handleCategory={handleCategory}
          showCategories={showCategories}
          setShowCategories={setShowCategories}
        />
      </div>

      {/* Error */}

      {error ? (
        <ErrorBox error={error} getData={getData} />
      ) : loading ? (
        <Loading />
      ) : (
        <main className="mx-auto max-w-7xl px-5 py-8 md:px-10">
          {/* Gallery */}

          <Gallery data={data} setSelectedImage={setSelectedImage} />

          {/* No images */}

          {data.length === 0 && (
            <div
              className="
                            flex
                            min-h-[40vh]
                            flex-col
                            items-center
                            justify-center
                            text-center
                        "
            >
              <p className="text-xl text-slate-400">No images found.</p>

              <p className="mt-2 text-sm text-slate-600">
                Try another search or category.
              </p>
            </div>
          )}

          {/* Pagination */}

          <Pagination ind={ind} add={add} minus={minus} />

          {/* Pixabay text */}

          <p
            className="
                        pb-4
                        text-center
                        text-sm
                        text-slate-500
                    "
          >
            Images provided by Pixabay
          </p>
        </main>
      )}

      {/* Lightbox */}

      <Lightbox
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        category={category}
      />
    </div>
  );
};

export default App;
