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

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  if (selectedApp) {
    return (
      <div className="p-4">
        <button className="mb-4 p-2 bg-blue-500 text-white rounded" onClick={() => setSelectedApp(null)}>
          Quay lại
        </button>
        <h1 className="text-2xl font-bold mb-4">{selectedApp}</h1>
        <p>Tác giả: John Doe</p>
        <iframe src="https://example.com" className="w-full h-96 border" title="App iframe"></iframe>
      </div>
    );
  }

  if (selectedCategory) {
    const category = categories.find((cat) => cat.name === selectedCategory);
    return (
      <div className="p-4">
        <button className="mb-4 p-2 bg-blue-500 text-white rounded" onClick={() => setSelectedCategory(null)}>
          Quay lại
        </button>
        <h1 className="text-2xl font-bold mb-4">{selectedCategory}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {category?.apps.map((app) => (
            <div key={app} className="p-4 border rounded cursor-pointer" onClick={() => setSelectedApp(app)}>
              <h2 className="text-xl font-bold">{app}</h2>
              <p>Mô tả ngắn về {app}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Mega App</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lĩnh vực</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="p-4 border rounded cursor-pointer" onClick={() => setSelectedCategory(category.name)}>
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Tin tức</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.map((item, index) => (
            <div key={index} className="p-4 border rounded">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
