import { lazy, Suspense } from 'react';

const LazyLoader = (importFunc, displayName) => {
  const Component = lazy(importFunc);
  
  // Set the displayName for the lazy-loaded component
  Component.displayName = displayName;

  const LazyComponent = (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

  LazyComponent.displayName = displayName;

  return LazyComponent;
};

export default LazyLoader;
