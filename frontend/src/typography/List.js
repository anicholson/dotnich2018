import { h } from 'preact';
import { createComponent, createComponentWithProxy } from 'preact-fela';

import colors from '../colors';
import randomBullet from './Bullet';


const commonListRules = {
  paddingLeft: '1em',
  listStyle: 'none'
}

const ulRules = () => ({
  '> li': {
    '&:before': {
      content: "' '",
      display: "inline-block",
      height: '0.75em',
      width: '0.75em',
      backgroundImage: `url(${randomBullet()})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      marginRight: '0.5em'
    },
  }
})

const olRules = {
  '> li': {
    counterIncrement: 'li',
    fontFamily: 'Born',
    '&:before': {
      content: 'counter(li)',
      fontFamily: 'Cooper Hewitt',
      color: colors.cinnamon,
      display: 'inline-block',
      width: '1em',
      marginLeft: '-1.5em',
      marginRight: '0.5em',
      textAlign: 'right',
      direction: 'rtl',

    }
  },
  counterReset: 'li',
}

export const ListItem = (props) => {
  return h('li', props)
}


const UnorderedList = createComponentWithProxy((rules) => ({
  ...commonListRules,
  ...ulRules(),
}), 'ul')

const OrderedList = createComponentWithProxy((rules) => ({
  ...commonListRules,
  ...olRules
}), 'ol')

export const List = (props) => {
  let el = props.ordered ? OrderedList : UnorderedList
  return h(el, props)
}
