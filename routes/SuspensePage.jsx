import React, { Component, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
const LazyUser = React.lazy(() => import('./components/User'))
class SuspensePage extends Component {
  render() {
    return (
      <>
        <header>header</header>
        <Suspense fallback={<h3>Loading User......</h3>}>
          <ErrorBoundary>
            <LazyUser />
          </ErrorBoundary>
        </Suspense>
        <footer>footer</footer>
      </>
    )
  }
}

export default SuspensePage
