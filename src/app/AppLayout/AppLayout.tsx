import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Masthead,
  MastheadMain,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
} from '@patternfly/react-core';
import { IAppRoute, IAppRouteGroup, routes } from '@app/routes';
 

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const masthead = (
    <Masthead>
      <MastheadMain>
      </MastheadMain>
    </Masthead>
  );

  const location = useLocation();

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem key={`${route.label}-${index}`} id={`${route.label}-${index}`} isActive={route.path === location.pathname}>
      <NavLink
        to={route.path}
      >
        {route.label}
      </NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map((route, idx) => route.label && renderNavItem(route, idx))}
    </NavExpandable>
  );

  const Navigation = (
    <Nav id="nav-primary-simple">
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) => route.label && (!route.routes ? renderNavItem(route, idx) : renderNavGroup(route, idx)),
        )}
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{Navigation}</PageSidebarBody>
    </PageSidebar>
  );

  const hasNavItems = React.useMemo(
    () =>
      routes.some((route) => {
        // Guard against optional routes
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const anyRoute: any = route as any;
        return 'routes' in anyRoute && Array.isArray(anyRoute.routes)
          ? anyRoute.routes.some((r: IAppRoute) => !!r.label)
          : !!route.label;
      }),
    [],
  );

  const pageId = 'primary-app-container';

  const PageSkipToContent = (
    <SkipToContent
      onClick={(event) => {
        event.preventDefault();
        const primaryContentContainer = document.getElementById(pageId);
        primaryContentContainer?.focus();
      }}
      href={`#${pageId}`}
    >
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId={pageId}
      masthead={masthead}
      sidebar={hasNavItems ? Sidebar : undefined}
      skipToContent={PageSkipToContent}
    >
      {children}
    </Page>
  );
};

export { AppLayout };
