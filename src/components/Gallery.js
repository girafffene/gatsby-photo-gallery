import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

const PhotoGallery = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightBox = useCallback((e, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightBox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }

  return (
    <section>
      <Gallery photos={photos} onClick={openLightBox} />
      <ModalGateway>
        { viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel currentIndex={currentImage} views={photos.map(pic => ({
                ...pic,
                srcset: pic.srcSet,
                src: pic.src,
                alt: pic.title,
                caption: pic.title,
                width: pic.width,
                height: pic.height,
              }))}
            />
          </Modal>
        ): null}
      </ModalGateway>
    </section>
  )
}

//photo data structure transformer
export function photoMapper(edges) {
  return edges.map(document => ({
    src: document.node.url.childImageSharp.fixed.src,
    srcSet: document.node.url.childImageSharp.fixed.srcSet,
    title: document.node.title,
    width: document.node.url.childImageSharp.fixed.width,
    height: document.node.url.childImageSharp.fixed.height,
  }))
}

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoGallery