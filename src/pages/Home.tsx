import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../adapters/types";
import { adapters } from "../adapters/adapter";

const { getPages } = adapters.cms();

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [pages, setPages] = useState<Page[]>([]);
  const [language, setLanguage] = useState<"en" | "ru" | "fi">("en");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPages()
      .then((pages) => {
        setPages(pages);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load pages");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <div style={{ textAlign: "center" }}>Loading...</div>;
  if (error)
    return <div style={{ textAlign: "center", color: "red" }}>{error}</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Главная страница</h1>

      {/* Language Selector */}
      <label htmlFor="language-select">Выберите язык: </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "ru" | "fi")}
        style={{ marginBottom: "20px" }}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="fi">Suomi</option>
      </select>

      {/* Render pages in selected language */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pages.map((page) => (
          <li key={page.slug.current} style={{ margin: "10px 0" }}>
            <button onClick={() => navigate(`/${page.slug.current}`)}>
              {page.title[language]}
            </button>
          </li>
        ))}
      </ul>

      {/* Static navigation buttons */}
      <button onClick={() => navigate("/flights")}>
        Перейти на страницу 1
      </button>
      <br />
      <button onClick={() => navigate("/news")}>Перейти на страницу 2</button>
    </div>
  );
};

export default Home;
