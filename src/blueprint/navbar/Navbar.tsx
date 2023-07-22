import React from 'react';

import {
  Navbar as BpNavbar,
  NavbarGroup,
  NavbarHeading,
  Alignment,
} from '@blueprintjs/core';

import { websiteSlice } from '@amnis/state/web';
import { useStateSelector } from '../../hooks/index.js';
import { placehold } from '../../utility/index.js';
import { skeleton } from '../utility.js';

export interface NavbarProps {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  title: propsTitle,
}) => {
  const website = useStateSelector(websiteSlice.select.active);

  /**
   * Use prop values if they are provided.
   */
  const title = React.useMemo(() => propsTitle || website?.title, [propsTitle, website]);

  return (
    <BpNavbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading className={skeleton(title)}>{placehold(title, 12)}</NavbarHeading>
      </NavbarGroup>
    </BpNavbar>
  );
};
