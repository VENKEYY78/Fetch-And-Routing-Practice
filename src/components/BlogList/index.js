import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

/*
const blogsData = [
  {
    id: 1,
    title: 'React v16.9.0 and the Roadmap Update',
    imageUrl: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
    avatarUrl: 'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
    author: 'Dan Abramov,',
    topic: 'React.js',
  },
]    
 
   */

class BlogList extends Component {
  state = {
    BlogsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data[7])

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({BlogsData: updatedData, isLoading: false})
  }

  render() {
    const {BlogsData, isLoading} = this.state

    return (
      <ul className="bolgs-data-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            {BlogsData.map(eachBlog => (
              <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
            ))}
          </div>
        )}
      </ul>
    )
  }
}

export default BlogList
