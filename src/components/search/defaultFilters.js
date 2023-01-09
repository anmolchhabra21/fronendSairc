const defaultFilters = [
  {
    subFilters: [
      {
        values: [
          { value: '1', label: '1st' },
          { value: '2', label: '2nd' },
          { value: '3', label: '3rd' }
        ],
        placeholder: 'Connection',
        value: 'connection',
        multi: true
      },
      {
        values: [
          { value: '2001', label: '2001' },
          { value: '2002', label: '2002' },
          { value: '2003', label: '2003' },
          { value: '2004', label: '2004' }
        ],
        placeholder: 'Batch',
        value: 'batch',
        multi: true
      },
      {
        values: [
          { value: 'Arista', label: 'Arista' },
          { value: 'Microsoft', label: 'Microsoft' },
          { value: 'Google', label: 'Google' },
          { value: 'Oil and Natural Gas Corporation', label: 'ONGC' }
        ],
        placeholder: 'Company',
        value: 'company',
        multi: true
      }
    ],
    label: 'People',
    value: 'people'
  },
  {
    subFilters: [
      {
        values: [
          { value: '1', label: '1st Connections' },
          { value: 'me', label: 'Me' }
        ],
        placeholder: 'Posted by',
        value: 'postedBy'
      },
      {
        values: [
          { value: 'from:' + Date.now() + ';to:' + Date.now(), label: 'Past day' },
          { value: 'from:' + Date.now() + ';to:' + Date.now(), label: 'Past week' },
          { value: 'from:' + Date.now() + ';to:' + Date.now(), label: 'Past month' }
        ],
        placeholder: 'Date posted',
        value: 'datePosted'
      }
    ],
    label: 'Posts',
    value: 'posts'
  },
  {
    subFilters: [],
    label: 'Companies',
    value: 'companies'
  },
  {
    subFilters: [],
    label: 'Schools',
    value: 'schools'
  },
  {
    subFilters: [],
    label: 'Events',
    value: 'events'
  }
]

export default defaultFilters
