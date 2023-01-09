import NascentUsersList from '../common/NascentUsersList'

import { getUserSuggestions } from '../../data/userSuggestions'

import '../../styles/organisation/suggestionsOrganisation.css'

const SuggestionsOrganisation = () => {
  const users = getUserSuggestions(1)
  return (
    <div className="ha-suggestions">
      <h3>Suggestions</h3>
      <NascentUsersList users={users} />
    </div>
  )
}

export default SuggestionsOrganisation
