import React, { Component } from "react";
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

class App extends Component {
  state = {
    gallery: [],
    search: "",
    page: 1,
    isModalOpen: false,
    largeImage: "",
    total: 0,
    loading: false,
    error: null,
    showLoadMore: false,
  };

  fetchGallery = () => {
    const { search, page } = this.state;
    // console.log(search);
    this.setState({ loading: true });

    fetchImages(search, page)
      .then(({ hits, total }) => {
        if (hits.length === 0) {
          this.setState({ showLoadMore: false })
          return Promise.reject(
            new Error(
              `There is no pictures by ${search} name, please try another request`
            )
          );
        } else {
          this.showLoadMore(total, page);
          this.setState((prevState) => ({
            gallery: [...prevState.gallery, ...hits],
            page: prevState.page + 1,
            total,
            error: false,
          }));
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchGallery();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearchItem = prevState.search;
    const nextSearchItem = this.state.search;
    if (prevSearchItem !== nextSearchItem) {
      this.fetchGallery();
    }
  }

  handleSubmit = (searchItem) => {
    this.setState({ search: searchItem, gallery: [], page: 1 });
  };

  showLoadMore = (total, page) => {
    if (Math.ceil(total / 12) > page) {
      this.setState({ showLoadMore: true });
    } else {
      this.setState({ showLoadMore: false });
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  handleOpenPicture = (largeIMG) => {
    console.log(largeIMG);
    this.setState({ largeImage: largeIMG });
    this.toggleModal();
  };

  render() {
    const { isModalOpen, gallery, largeImage, loading, error, showLoadMore } =
      this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <h2 style={errorTextStyle}>{error.message}</h2>}
        {loading && <Loader />}
        {gallery.length > 0 && (
          <ImageGallery gallery={gallery} openImg={this.handleOpenPicture} />
        )}
        {showLoadMore && !loading && (<Button onClick={this.fetchGallery} />
        )}
        {isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={largeImage} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
