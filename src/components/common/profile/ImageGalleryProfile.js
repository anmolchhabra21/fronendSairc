import demoImg from '../../../assets/images/logos/logo.png'
import '../../../styles/profile/imageGallery.css'

const ImageGalleryProfile = () => {
  return (
    <div className="ha-posts-gallery-container">
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
      <div className='ha-single-img-container'><img className='ha-single-img' src={demoImg} alt='galleryImg'/></div>
    </div>
  )
}

export default ImageGalleryProfile
