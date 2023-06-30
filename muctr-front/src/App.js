import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/header/Header';
import Body from "./components/body/Body";
import Footer from './components/footer/Footer';

import CoursesBlock from './components/body-courses/CoursesBlock';
import NewsBlock from './components/body-news/NewsBlock';
import ArticlesBlock from './components/articles/ArticlesBlock';


function App() {
  const [articles, setArticles] = useState([])
  const [news, setNews] = useState([])
  const [widgets, setWidgets] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch('/api/articles')
      let data = await response.json()
      setArticles(data)
    }

    getArticles()
  }, [])


  useEffect(() => {
    const getNews = async () => {
      const response = await fetch('/api/news')
      let data = await response.json()
      setNews(data)
    }

    getNews()
  }, [])

  useEffect(() => {
    const getWidgets = async () => {
      const response = await fetch('/api/widgets')
      let data = await response.json()
      setWidgets(data)
    }

    getWidgets()
  }, [])


  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch('/api/courses')
      let data = await response.json()
      setCourses(data)
    }

    getCourses()
  }, [])


  function handleData(data) {
    return data;
  }

  return (
    <div className="App">
      <Header articles={articles} />

      <Routes>
        <Route path="/" element={<Body articles={articles} widgets={widgets} news={news} />}/>

        <Route path="/articles" element={<ArticlesBlock articles={articles} />}/>

        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
