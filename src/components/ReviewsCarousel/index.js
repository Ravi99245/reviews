import {Component} from 'react'
import './index.css'

let list = ''
let currentIndex = 0

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    const {reviewsList} = this.props
    list = reviewsList
  }

  state = {currentReview: list[currentIndex]}

  decrementIndex = () => {
    if (currentIndex > 0) {
      currentIndex -= 1
      this.setState({currentReview: list[currentIndex]})
    }
  }

  incrementIndex = () => {
    const l = list.length
    if (currentIndex < l - 1) {
      currentIndex += 1
      this.setState({currentReview: list[currentIndex]})
    }
  }

  render() {
    const {currentReview} = this.state
    const {imgUrl, username, companyName, description} = currentReview
    console.log(currentReview)
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.decrementIndex}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="profile-container">
            <img src={imgUrl} className="profile" alt={username} />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.incrementIndex}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
