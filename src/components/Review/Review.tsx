import { Body } from 'components/typography'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

type ReviewProps = {
  rating?: number
}

const getRatings = (rating?: number) => {
  if (!rating) {
    return 'No reviews yet'
  }

  let reviewText = 'Very poor'
  if (rating >= 2 && rating < 4) {
    reviewText = 'Adequate'
  } else if (rating >= 4 && rating < 5) {
    reviewText = 'Very good'
  } else if (rating >= 5) {
    reviewText = 'Excellent'
  }

  return `*${rating.toFixed(1)} ${reviewText}`
}

export const Review = ({ rating }: ReviewProps) => (
  <Wrapper>
    <Body type="span" size="S" className="review-text">
      {getRatings(rating)}
    </Body>
  </Wrapper>
)
