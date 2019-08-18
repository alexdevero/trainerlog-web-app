import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import About from './pages/about'
import Exercise from './pages/exercise'
import Exercises from './pages/exercises'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Measurements from './pages/measurements'
import PageNotFound from './pages/404'
import Reports from './pages/reports'
import Settings from './pages/settings'
import Tools from './pages/tools'
import Wiki from './pages/wiki'
import Wods from './pages/wods'

import Layout from './components/layout'

import Footer from './components/footer'
import Header from './components/header'
import Sidebar from './components/sidebar'

import { getCurrentSessionData, removeCurrentSessionData } from './utils/local-storage'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'reaviz/dist/index.css'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color settings for Reaviz graphs */
    --color-background:#22272b;
    --color-on-background:#fff;
    --color-layer-transparent:rgba(0,5,11,0.9);
    --color-surface:#2c343a;
    --color-primary:#007bff;
    --color-on-primary:#fff;
    --color-on-surface: #fff;
  }

  html,
  body {
    min-height: 100vh;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font: 1rem sans-serif;
  }
`

const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`

const ViewWrapper = styled.div`
  flex: 1;
  padding: 16px;
  background-color: #f0f4fa;
`

function App() {
  const [isAuthenticated, setAuthenticated] = React.useState(false)
  const [isSidebarVisible, setSidebarVisible] = React.useState(false)

  React.useEffect(() => {
    getCurrentSessionData('trainerlog-login').then((data: any) => {
      if (data !== null) {
        setAuthenticated(true)
      }
    })
  }, [])

  const signIn = () => {
    setAuthenticated(true)
  }

  const signOut = () => {
    removeCurrentSessionData('trainerlog-login').then((data: any) => {
      setAuthenticated(false)
    })
  }

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  return (
    <PageWrapper>
      <GlobalStyles />

      <BrowserRouter>
        {isAuthenticated ? (
          <>
            <Layout>
              <Header isSidebarVisible={isSidebarVisible} handleSidebarToggle={handleSidebarToggle} />

              <Sidebar isSidebarVisible={isSidebarVisible} signOut={signOut} />

              <ViewWrapper>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/exercises" component={Exercises} />
                  <Route path="/exercises/:exercise" component={Exercise} />
                  <Route exact path="/wods" component={Wods} />
                  <Route path="/measurements" component={Measurements} />
                  <Route path="/reports" component={Reports} />
                  <Route path="/tools" component={Tools} />
                  <Route path="/wiki" component={Wiki} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/about" component={About} />
                  <Route component={PageNotFound} />
                </Switch>
              </ViewWrapper>
            </Layout>

            <Footer />
          </>
        ) : (
          <Route path="*" component={() => <Login signIn={signIn} />} />
        )}
      </BrowserRouter>

      {/* Main container for all in-app toast notifications */}
      <ToastContainer />
    </PageWrapper>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
