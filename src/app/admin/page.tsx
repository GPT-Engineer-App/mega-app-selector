"use client";

import { useState } from "react";

const categories = [
  { name: "Công việc", apps: ["App A", "App B", "App C"] },
  { name: "Giải trí", apps: ["App D", "App E", "App F"] },
  { name: "Học tập", apps: ["App G", "App H", "App I"] },
  { name: "Sáng tạo", apps: ["App J", "App K", "App L"] },
  { name: "Kinh Doanh", apps: ["App M", "App N", "App O"] },
];

const news = [
  { title: "Tin tức 1", content: "Nội dung tin tức 1" },
  { title: "Tin tức 2", content: "Nội dung tin tức 2" },
  { title: "Tin tức 3", content: "Nội dung tin tức 3" },
];

export default function Admin() {
  const [newCategory, setNewCategory] = useState("");
  const [newApp, setNewApp] = useState("");
  const [newNewsTitle, setNewNewsTitle] = useState("");
  const [newNewsContent, setNewNewsContent] = useState("");

  const addCategory = () => {
    if (newCategory) {
      categories.push({ name: newCategory, apps: [] });
      setNewCategory("");
    }
  };

  const addApp = (categoryName: string) => {
    if (newApp) {
      const category = categories.find((cat) => cat.name === categoryName);
      category?.apps.push(newApp);
      setNewApp("");
    }
  };

  const addNews = () => {
    if (newNewsTitle && newNewsContent) {
      news.push({ title: newNewsTitle, content: newNewsContent });
      setNewNewsTitle("");
      setNewNewsContent("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quản lý Lĩnh vực</h2>
        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Tên lĩnh vực mới" className="p-2 border rounded mb-4" />
        <button className="p-2 bg-blue-500 text-white rounded" onClick={addCategory}>
          Thêm Lĩnh vực
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {categories.map((category) => (
            <div key={category.name} className="p-4 border rounded">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <input type="text" value={newApp} onChange={(e) => setNewApp(e.target.value)} placeholder={`Thêm ứng dụng vào ${category.name}`} className="p-2 border rounded mb-4" />
              <button className="p-2 bg-blue-500 text-white rounded" onClick={() => addApp(category.name)}>
                Thêm Ứng dụng
              </button>
              <div className="mt-4">
                {category.apps.map((app) => (
                  <p key={app}>{app}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Quản lý Tin tức</h2>
        <input type="text" value={newNewsTitle} onChange={(e) => setNewNewsTitle(e.target.value)} placeholder="Tiêu đề tin tức mới" className="p-2 border rounded mb-4" />
        <textarea value={newNewsContent} onChange={(e) => setNewNewsContent(e.target.value)} placeholder="Nội dung tin tức mới" className="p-2 border rounded mb-4 w-full" />
        <button className="p-2 bg-blue-500 text-white rounded" onClick={addNews}>
          Thêm Tin tức
        </button>
        <div className="mt-4">
          {news.map((item, index) => (
            <div key={index} className="p-4 border rounded mb-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
