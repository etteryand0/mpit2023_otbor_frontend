// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, ApolloLink, concat, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { ConfigProvider } from 'antd';
import FinishSignUp from './pages/FinishSignUp';
import Root from './pages/Root';
import Project from './pages/Project';
import CreateProject from './pages/CreateProject';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/create-project",
    element: <CreateProject />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: '/signup/finish',
    element: <FinishSignUp />
  }
]);

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token')
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2F6ED9',
            borderRadius: 8,
            fontFamily: 'Jost',
          }
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
