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
            <Carousel currentIndex={currentImage} views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ): null}
      </ModalGateway>
    </section>
  )
}

//greatest common divisor
function gcd(a, b) {
  let temp, m;
  if ( b > a) {
    temp = a;
    a = b;
    b = temp;
  }
  while( b !== 0) {
    m = a % b;
    a = b;
    b = m;
  }
  return a;
}

//aspect ratio calculator 
function ratio(node, index) {
  const x = node.url.childImageSharp.fixed.width;
  const y = node.url.childImageSharp.fixed.height;
  let c = gcd(x, y);
  const aspect = "" + x / c + ":" + y / c;
  return aspect.split(":")[index];
}

//photo data structure transformer
export function photoMapper(edges) {
  return edges.map(document => ({
    src: document.node.url.childImageSharp.fixed.src,
    srcSet: document.node.url.childImageSharp.fixed.srcSet,
    title: document.node.title,
    width: ratio(document.node, 0),
    height: ratio(document.node, 1)
  }))
}

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoGallery