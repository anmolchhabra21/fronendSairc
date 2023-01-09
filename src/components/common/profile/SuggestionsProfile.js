import '../../../styles/profile/suggestionsProfile.css'
import UsersList from '../../feed/UsersList'
import { getUserSuggestions } from '../../../data/userSuggestions'

const SuggestionsProfile = () => {
  return (
    <div className="ha-suggestions">
      <h3>Suggestions</h3>
      <div>
      <UsersList users={getUserSuggestions(1)}
        />
      </div>
    </div>
  )
}

export default SuggestionsProfile
