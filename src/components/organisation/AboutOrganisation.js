import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

import WriterModal from '../post/WriterModal'

import '../../styles/organisation/imageGallery.css'

const AboutOrganisation = props => {

  const [ writerModalContent, setWriterModalContent ] = useState(null)
  const [ editorContent, setEditorContent] = useState(props.value)
  const [ showWriterModal, setShowWriterModal ] = useState(false)
  const [ editorMode, setEditorMode] = useState('organisationAbout')

  const onCancel = () => {
    setShowWriterModal(false)

  }
  const onSubmit = () => {
    props.handleAboutContentChange(props.value)
  }

  return (
    <Card className="d-flex ha-organisation-about-container-outer">
      <div>
        <WriterModal 
          possibleSuggestions = {props.possibleSuggestions}
          onHide={onCancel} 
          onSubmit={onSubmit} 
          body={writerModalContent} 
          show={showWriterModal} 
          editorMode={editorMode} 
          handleEditorContentChange={props.handleChange} 
          editorContent={props.value} 
        />
      </div>
      <div className="ha-organisation-about-container">
        <h3 className="h3">Overview</h3>
        <p className="text-muted">
          At Goldman Sachs, we believe progress is everyone’s business. That’s why we commit our people, capital and ideas to help our clients, shareholders and the communities we serve to grow.
  Founded in 1869, Goldman Sachs is a leading global investment banking, securities and investment management firm. Headquartered in New York, we maintain offices in all major financial centers around the world. 
        </p>
        <p className="text-muted">
          For insights on developments currently shaping markets, industries and the global economy, subscribe to BRIEFINGS, a weekly email from Goldman Sachs. Copy and paste this link into your browser to sign up: http://link.gs.com/Qxf3
        </p>
        <p className="fw-bold">
          Website: <Link to="#" />
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      <Card.Footer className="d-flex justify-content-center" style={{ background: 'transparent' }}>
        <div className="align-self-center">
          <Button variant="outline" onClick={() => {
            setShowWriterModal(true)
            props.handleChange(props.value)
          }}>
            Edit
          </Button>
        </div>
          
      </Card.Footer>    
    </Card>
    
  )
}

export default AboutOrganisation
