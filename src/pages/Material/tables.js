import React from 'react';

import { Wrapper, Example } from '../../components';

const demos = [
  {
    js: require('../../utils/demos/tables/CustomPaginationActionsTable').default,
    title: 'Custom Pagination Actions Table',
    docs: 'https://material-ui.com/api/table/'
  },
]

const Tables = () => (
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

export default Tables;
