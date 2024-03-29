import React, { Fragment } from 'react'
import NavigationBar from './NavigationBar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NoMatch from './pages/NoMatch'

export default function Root() {
//      const routes = [
//     { path: '/', name: 'Home', Component: App, exact: true },
//     { path: '/about', name: 'About', Component: About, exact: false },
//     { path: '/contact', name: 'Contact', Component: Contact, exact: false },
//     { path: '/blog', name: 'Blog', Component: Blog, exact: true },
//     { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
//     { path: '*', name: 'No Match', Component: NoMatch, exact: false },
//   ];

  return (

    <Router>
        <Fragment>
            <div className="todo-app-container">
                <NavigationBar/>
                <div className="content">
                    <Routes>

                        {/* {routes.map(({ path, Component, exact }) => (
                        <Route key={path} path={path} exact={exact.toString()} element={<Component/>}>
                        </Route>
                        ))} */}


                        <Route exact path='/' element={<App/>}></Route>
                        <Route exact path='/about' element={<About/>}></Route>
                        <Route exact path='/contact' element={<Contact/>}></Route>
                        <Route exact path='/blog' element={<Blog/>}></Route>
                        <Route path='/blog/:id' element={<BlogPost/>}></Route>
                        <Route path='*' element={<NoMatch/>}></Route>
                    </Routes>
                </div>
            </div>
        </Fragment>
    </Router>
  )
}
