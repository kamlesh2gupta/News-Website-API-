// import React,{Component} from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Navbar from './Navbar';
// import Home from './Home';
// import Footer from './Footer';
// // language ko change karne ke liye**********
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       language:"hi",
//       search :""  
//     }
//   }
//   changeLanguage=(data)=>{
//     this.setState({language:data})
//   }
//   //  function ko banakar navbar me call kar do**********
//   render() {
//     return (
//       <BrowserRouter>
//         <Navbar changeLanguage={this.changeLanguage} changeSearch = {this.changeSearch}/>

//         <Routes>
      
//           <Route path="/politics" element={<Home search = {this.state.search} language={this.state.language} q="Politics"/>} />
//           <Route path="/crime" element={<Home search = {this.state.search} language={this.state.language} q="Crime"/>} />
//           <Route path="/education" element={<Home search = {this.state.search} language={this.state.language} q="Education"/>} />
//           <Route path="/entertainment" element={<Home search = {this.state.search} language={this.state.language} q="Entertainment"/>}/>
//           <Route path="/science" element={<Home search = {this.state.search} language={this.state.language} q="Science"/>}/>
//           <Route path="/technology" element={<Home search = {this.state.search} language={this.state.language} q="Technology"/>} />
//           <Route path="/sports" element={<Home search = {this.state.search} language={this.state.language} q="Sports"/>} />
//           <Route path="/cricket" element={<Home search = {this.state.search} language={this.state.language} q="Cricket"/>} />
//           <Route path="/covid-19" element={<Home search = {this.state.search} language={this.state.language} q="Covid-19"/>} />
//           <Route path="/jokes" element={<Home search = {this.state.search} language={this.state.language} q="Jokes"/>} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>

//     )
//   }
// }
/************************************************ Second Project */
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export default function App() {
  let [language, setLanguage] = useState("hi")
  let [search, setSearch] = useState("")
  let changeLanguage = (data) => {
    setLanguage(data)
  }
  let changeSearch = (data) => {
    setSearch(data)
  }
  return (
    <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} language={language} q="All" />} />
        <Route path="/politics" element={<Home search={search} language={language} q="Politics" />} />
        <Route path="/crime" element={<Home search={search} language={language} q="Crime" />} />
        <Route path="/education" element={<Home search={search} language={language} q="Education" />} />
        <Route path="/entertainment" element={<Home search={search} language={language} q="Entertainment" />} />
        <Route path="/science" element={<Home search={search} language={language} q="Science" />} />
        <Route path="/technology" element={<Home search={search} language={language} q="Technology" />} />
        <Route path="/sports" element={<Home search={search} language={language} q="Sports" />} />
        <Route path="/cricket" element={<Home search={search} language={language} q="Cricket" />} />
        <Route path="/covid-19" element={<Home search={search} language={language} q="Covid-19" />} />
        <Route path="/jokes" element={<Home search={search} language={language} q="Jokes" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}





