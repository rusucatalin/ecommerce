import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react';
import { Layout, Space } from 'antd';
import { OnButton } from './components/Buttons/Button';
import { Home } from './pages/Home';



const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'red',
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Home/>
    <OnButton width={'150px'} background={"red"}>Click</OnButton>
    </div>
  )
}

export default App
