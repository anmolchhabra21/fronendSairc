import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
  placeholder
}) => {
  const [text, setText] = useState(initialText)
  const isTextareaDisabled = text.length === 0
  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='comment-write-form-container-inner'>
        <div className='comment-write-form-textarea-container'>
          <textarea
            className='comment-form-textarea'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={placeholder || 'Add a comment'}
          />
        </div>
        <div className='comment-write-form-submit-container'>
          <button className='comment-form-button bg-blue' disabled={isTextareaDisabled}>
            <FontAwesomeIcon icon={submitLabel || faPaperPlane} />
          </button>

        </div>
        <div className='comment-write-form-submit-container text-blue'>
          {hasCancelButton && (
            <button
              type='button'
              className='comment-form-button comment-form-cancel-button'
              onClick={handleCancel}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>

      </div>
    </form>
  )
}

export default CommentForm
