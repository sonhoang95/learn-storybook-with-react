import { Body } from 'components/typography'
import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${borderRadius.s};
    display: inline-block;
    span {
      color: ${color.badgeText};
    }
    span:first-letter {
      text-transform: capitalize;
    }
  `
)

type BadgeProps = {
  /** This is the name of the bade we want to use */
  text: string
  /** We use classname to make the component extensible by styled-components */
  className?: string
}

export const Badge = ({ text, className }: BadgeProps) => (
  <Container className={className}>
    <Body type="span" size="S">
      {text}
    </Body>
  </Container>
)
