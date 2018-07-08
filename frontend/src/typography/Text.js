import { h } from 'preact'
import { createComponentWithProxy } from 'preact-fela'

const commonRules = {
  fontFamily: 'Born, serif'
}

const P = createComponentWithProxy(() => ({
  ...commonRules,
  marginBottom: '1.3rem'
}), 'p')

const Small = createComponentWithProxy(() => ({
  ...commonRules,
  fontSize: '0.75rem'
}), 'small')

export { P, Small }
