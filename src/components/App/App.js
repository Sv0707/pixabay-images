import { useState, useEffect } from "react";
import "./App.css";
import fetchImages from "../../services/api";
import Searchbar from "../Searchbar/Searchbar";
import Modal from "../Modal/Modal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const errorTextStyle = {
  textAlign: "center",
};

const App = () => {

  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    // const fetchGallery = async () => {

      setLoading(true);
  console.log(page);
      fetchImages(search, page)
        .then(({ hits, total }) => {
          if (hits.length === 0) {
            setShowLoadMore (false);
            setGallery([]);
            return Promise.reject(
              new Error(
                `There is no pictures by ${search} name, please try another request`
              )
            );
            
          } else {
              setError(false);
              setGallery(prevGallery => [...prevGallery, ...hits]);
              setTotal(total);
              }
        }
        )
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
  }, [search, page]);

  useEffect(() => {
    if (Math.ceil(total / 12) > page) {
      setShowLoadMore(true);
    } 
    else {setShowLoadMore (false)}
    
  }, [total, page])

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
  };

const handleSubmit = (searchItem) => {
    setSearch(searchItem);
    setGallery([]);
    setPage(1);
  };

const handleOpenPicture = (largeIMG) => {
  console.log(largeIMG);
  setLargeImage(largeIMG);
    toggleModal();
  };

    return (
      <div>
        <Searchbar onSubmit={handleSubmit} />
        {error && <h2 style={errorTextStyle}>{error.message}</h2>}
        {loading && <Loader />}
        {gallery.length > 0 && (
          <ImageGallery gallery={gallery} openImg={handleOpenPicture} />
        )}
        {showLoadMore && !loading && (<Button onClick={() => setPage(page + 1)} />
        )}
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <img src={largeImage} alt={largeImage} />
          </Modal>
        )}
      </div>
    );
}

export default App;
