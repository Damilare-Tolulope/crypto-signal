import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { homeRoutes } from '.'
import Layout from '../layouts'

const RouteComponent = () => {
  return (
    <Routes>
        {homeRoutes.map(({path, component: Component }) => (
            <Route 
                key={path}
                path={path}
                element={
                    <Layout>
                        <Component />
                    </Layout>
                }
                />
        ))}
    </Routes>
  )
}

export default RouteComponent