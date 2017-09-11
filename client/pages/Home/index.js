
import React from 'react';
import { List, ListItem } from 'framework7-react';

// style
import './index.scss';

export default Home = () => {
  return (
    <div className="page-home">
      <List>
        <ListItem link="/about/" title="About"></ListItem>
        <ListItem link="/form/" title="Form"></ListItem>
      </List>
    </div>
  )
}
