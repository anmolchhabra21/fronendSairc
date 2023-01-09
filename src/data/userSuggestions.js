const suggestions = [
  {
    name: 'William Weasley',
    heading: 'billy',
    image: 'https://static.wikia.nocookie.net/harrypotter/images/5/59/Bill_Weasley_DHF1_promo.jpg'
  },
  {
    name: 'General Bipin Rawat',
    heading: 'CDS of India',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bipin_Rawat_Chief_of_Defence_Staff_%28CDS%29.jpg/128px-Bipin_Rawat_Chief_of_Defence_Staff_%28CDS%29.jpg'
  },
  {
    name: 'Fleur Delacour',
    heading: 'Wiffey',
    image: 'https://static.wikia.nocookie.net/harrypotter/images/1/1e/Fleur_Delacour.jpg'
  }
]

const getUserSuggestions = userId => {
	return suggestions
}

export { getUserSuggestions }
