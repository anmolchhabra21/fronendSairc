import { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import axios from 'axios'

export default class ImageUploader extends Component {
  state = {
    selectedFile: null,
    isSelected: false,
    isUploading:false,
    imageURLs: []
  }


  onImageChange = event => {
    this.setState({ selectedFile: event.target.files[0], isSelected: true })
  }

  uploadImage = async () => {
    this.setState({isUploading:true})
    const formData = new FormData()
    formData.append(
      'image',
      this.state.selectedFile,
      this.state.selectedFile.name,
    )
    console.log(formData);

    try {
    	const { data } = 
    		await axios.post(process.env.REACT_APP_API_URL + '/api/v1/upload', formData)
    		// this.props.addImage({ id: data.imageId, name: this.state.selectedFile.name })
        // console.log(this.props.images);
    	// const { data } = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/upload', formData)
      this.props.addImage({ 
        // id: Math.floor(Math.random()) /*data.imageId*/,
        id:data.imageId, 
        name: this.state.selectedFile.name, file: 
        this.state.selectedFile 
      })
    } catch (err) {
    	console.error(err)
    }
    this.setState({isUploading:false})
  }

  render() {
    const imageURLs = this.props.images.map(i => URL.createObjectURL(i.file))
    return (
      <div>
        <div className="d-flex flex-row justify-content-around pb-4 pt-4">
        	<div>
        		<input type='file' className="form-control" onChange={this.onImageChange} />
        	</div>
          <div>
          	<Button onClick={this.uploadImage} disabled={(!this.state.isSelected)||(this.state.isUploading)}>
	          	Add image
	          </Button>
          </div>
        </div>
        {this.props.images.length > 0 && <div>
          	<hr />
          </div>}
        <div className="d-flex flex-column pt-4" style={{ maxHeight: '100px', overflowY: 'auto' }}>
        	{this.props.images && this.props.images.map((img, idx) => (
		      	<div key={idx} className="d-flex flex-row justify-content-around align-items-center pb-3">
              <div>
                <Image height="80px" width="80px" src={imageURLs[idx]} style={{ objectFit: 'cover', margin: '0 auto', border: '1px solid blue' }} />
              </div>
		          <div>
		          	<Button variant="warning" onClick={() => this.props.deleteImage(img.id)}>Delete</Button>
		          </div>
		        </div>
		        )
	        )}
        </div>
      </div>
    )
  }
}
