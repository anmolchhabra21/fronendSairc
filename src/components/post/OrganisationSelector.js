import { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'

import '../../styles/autosuggest.css'

const people = [
  {
    first: 'Charlie',
    last: 'Brown',
    twitter: 'dancounsell'
  },
  {
    first: 'Charlotte',
    last: 'White',
    twitter: 'mtnmissy'
  },
  {
    first: 'Chloe',
    last: 'Jones',
    twitter: 'ladylexy'
  },
  {
    first: 'Cooper',
    last: 'King',
    twitter: 'steveodom'
  }
]

function escapeRegexCharacters (str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
function getSuggestionValue (suggestion) {
  return `${suggestion.suggestion}`||`${suggestion.first} ${suggestion.last}`
}

// Use your imagination to render suggestions.
function renderSuggestion (suggestion, { query }) {
  const suggestionText = `${suggestion.suggestion}`||`${suggestion.first} ${suggestion.last}`
  const matches = AutosuggestHighlightMatch(suggestionText, query)
  const parts = AutosuggestHighlightParse(suggestionText, matches)

  return (
    <span className={'suggestion-content ' + suggestion.twitter}>
      <span className='name'>
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null

            return (
              <span className={className} key={index}>{part.text}</span>
            )
          })
        }
      </span>
    </span>
  )
}

const OrganisationSelector = props => {
  // console.log(props.possibleSuggestions);
  const [suggestions, setSuggestions] = useState([])

  const possibleSuggestions = props.possibleSuggestions || people

  const getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim())
    if (escapedValue === '') {
      return []
    }
    const regex = new RegExp(escapedValue, 'i')
    return possibleSuggestions.filter(person => regex.test(getSuggestionValue(person)))
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const handleSuggestionsFetchRequested = ({ value }) => setSuggestions(getSuggestions(value))

  // Autosuggest will call this function every time you need to clear suggestions.
  const handleSuggestionsClearRequested = () => setSuggestions([])

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: props.placeholder || '',
    value: props.value,
    onChange: props.handleValueChange,
    type: props.type || 'input'
  }

  // Finally, render it!
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      focusInputOnSuggestionClick
    />
  )
}

export default OrganisationSelector
