import colors from '../colors';

export default ({size}) => ({
  mainColor: {
    fill: colors.mud
  },
  background: {
    fill: colors.dust,
    stroke: colors.concrete
  },

  border: {
    border: `solid 1px ${colors.concrete}`,
    boxShadow: `1px 2px 4px ${colors.custard}`
  },

  highlight: {
    fill: colors.custard
  }
});
