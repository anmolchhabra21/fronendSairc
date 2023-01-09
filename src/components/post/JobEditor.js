import { Component } from 'react'

import SuggestibleInput from '../common/SuggestibleInput'

const jobInputs = [
  {
    key: 'company',
    placeholder: 'Company'
  },
  {
    key: 'category',
    placeholder: 'Category'
  },
  {
    key: 'profile',
    placeholder: 'Job profile'
  }
]

export default class JobEditor extends Component {
  render () {
    const { value, handleValueChange } = this.props

    value.company = value.company || ''
    value.profile = value.profile || ''
    value.category = value.category || ''

    return (
      <div className='post-editor-container'>
        {
          (jobInputs || []).map((j, idx) => {
            return (
              <div className='job-editor-input-container' key={idx}>
                <SuggestibleInput
                  placeholder={j.placeholder}
                  value={value[j.key]}
                  handleValueChange={(ev, { newValue }) => handleValueChange({
                    ...value,
                    [j.key]: newValue
                  })}
                  key={j.key}
                  possibleSuggestions = {this.props.possibleSuggestions ? 
                    this.props.possibleSuggestions[j.key] : null}
                />
              </div>
            )
          })
        }
        <div>
          <input type="url" className='job-editor-input-container' value={value['url']} onChange={ev => {
            handleValueChange({
              ...value,
              url: ev.target.value
            })
          }} />
        </div>
      </div>
    )
  }
}
