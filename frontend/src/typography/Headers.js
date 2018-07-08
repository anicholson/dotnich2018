import { h } from 'preact'
import { createComponent } from 'preact-fela'
import colors from '../colors'

const commonRules = {
  margin: '1.414rem 0 0.5rem',
  fontFamily: 'Cooper Hewitt',
  fontWeight: '500',
  lineHeight: '1.2',
  color: colors.cinnamon
}

const H1 = createComponent(() => ({
  ...commonRules,
  marginTop: 0,
  fontSize: '3.157rem'
}), 'h1')

const H2 = createComponent(() => ({
  ...commonRules,
  fontSize: '2.369rem'
}), 'h2')

const H3 = createComponent(() => ({
  ...commonRules,
  fontSize: '1.777rem'
}), 'h3')

const H4 = createComponent(() => ({
  ...commonRules,
  fontSize: '1.333rem'
}), 'h4')

export { H1, H2, H3, H4 }
