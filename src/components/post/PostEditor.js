import { InputGroup, FormControl } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import ImageUploader from './ImageUploader'
import AboutEditor from '../organisation/AboutEditor'

import '../../styles/post/postEditor.css'

const PostEditor = props => {
  return (
    <div className='post-editor-container'>
      <div
        style={{ width: '100%' }} 
        className='post-editor-title-container d-flex flex-row justify-content-around align-items-center flex-wrap'>
        <div className="p-2">
          <InputGroup size='lg'>
            <InputGroup.Text id='basic-addon1'>Title</InputGroup.Text>
            <FormControl
              aria-label='Title'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
        </div>
        <div className="p-2">
          <Form.Select>
            <option value="Select an organisation (optional)">Select an organisation (optional)</option>
            <option value="CyberLabs">CyberLabs</option>
            <option value="RoboISM">RoboISM</option>
          </Form.Select>
        </div>
      </div>
      <div className='post-editor-content-container'>
        <div className=' post-editor-content-container-text-container'>
          <AboutEditor value={props.value}
            handleValueChange={props.handleValueChange}
          />
        </div>
        <div className='post-editor-content-container-image-container'>
          <ImageUploader
            images={props.images}
            addImage={props.addImage}
            deleteImage={props.deleteImage} />
        </div>
      </div>
    </div>
  )
}

export default PostEditor
