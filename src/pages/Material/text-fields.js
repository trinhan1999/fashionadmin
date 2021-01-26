import React from 'react';

import { Wrapper, Example } from '../../components';

const demos = [
  {
    js: require('../../utils/demos/text-fields/TextFields').default,
    title: 'Text Fields',
    docs: 'https://material-ui.com/api/text-field/'
  },
]

const TextFields = () => (
  <Wrapper>
    {demos.map((demo, index) => (
      <Example
        key={index}
        index={index}
        title={demo.title}
        js={demo.js}
        docs={demo.docs}
      />
    ))}
  </Wrapper>
);

export default TextFields;
