import { getImages } from '../../data/organisationImages'

import '../../styles/organisation/imageGallery.css'

const ImageGalleryOrganisation = props => {
  return (
    <div className="ha-posts-gallery-container" style={{ border: '1px solid lightgrey' }}>
      {
        getImages(props.organisationId).map((i, idx) => <div className='ha-single-img-container' key={idx}>
            <img className='ha-single-img' src={i} alt='galleryImg'/>
          </div>)
      }
    </div>
  )
}

export default ImageGalleryOrganisation
