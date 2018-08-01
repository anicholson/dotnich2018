import { h } from 'preact';
import Helmet from 'preact-helmet';
import omit from 'lodash/omit';

const titleTemplate = '%s - andrewdotni.ch';
const defaultTitle = 'andrewdotni.ch';

const DefaultMeta = {
  titleTemplate,
  defaultTitle,
  meta:[
    { name: "description", content: "The personal web home of Andy Nicholson, a software developer in Australia"},
    { property: "og:type", content: "website" },
    { property: "og:image", content: 'https://placekitten.com/400/400' },
    { property: "og:title", content: "andrewdotni.ch" },
    { property: "og:url", content: "https://andrewdotni.ch/"},
  ],
};


const MetaWithDefaults = ({children, ...meta}) => {
  let props = {
    ...DefaultMeta,
    ...omit(meta, 'children'),
  };

  return (
    <Helmet {...props} >
      {children}
    </Helmet>
  );
};

export { MetaWithDefaults as default }
