import React, { useEffect } from 'react'
import LeftDash from '../components/common/LeftDash'
import MainContent from '../components/post/MainContent'

const Post = (ev) => {
  const id = parseInt(ev.match.params.id)
  console.log(id)
  useEffect(() => {
    const func = () => {
      // TODO: set post title as document title
      document.title = 'Post | ISM Connect'
    }
    func()
  }, [])
  return (
    <div className='App d-flex flex-row'>
      <LeftDash />
      <MainContent id={id} />
    </div>
  )
}

export default Post
