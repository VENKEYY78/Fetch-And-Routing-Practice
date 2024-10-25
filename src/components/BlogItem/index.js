// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <li className="blog-item-container">
      <Link to={`/blogs/${id}`} className="Link">
        <div className="image-container">
          <img src={imageUrl} alt={`item${id}`} className="image" />

          <div className="blog-item-info">
            <p className="topic">{topic}</p>

            <h1 className="title">{title}</h1>

            <div className="topic-container">
              <img
                src={avatarUrl}
                alt={`avatar${id}`}
                className="avatar-image"
              />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
