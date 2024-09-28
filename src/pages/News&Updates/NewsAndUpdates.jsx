import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsAndUpdates = () => {
  const navigate = useNavigate();
  const newsData = [
    {
      id: 1,
      title: "AI Breakthrough Accelerates Drug Discovery",
      description:
        "A recent AI model has revolutionized the process of drug discovery, reducing the time needed for pharmaceutical research.",
      content:
        "The new AI model, developed by a team of researchers at XYZ University, utilizes advanced machine learning algorithms to analyze vast amounts of data. This breakthrough has the potential to significantly speed up the process of drug discovery, making it more efficient and cost-effective. The model has already shown promising results in early trials, and researchers are optimistic about its future applications in the pharmaceutical industry.",
      category: "Healthcare & AI",
      image: "https://via.placeholder.com/500x300", // Replace with actual image link
      author: "John Doe",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "ML Model Predicts Climate Change Impact",
      description:
        "A new machine learning algorithm is predicting long-term impacts of climate change, aiding researchers worldwide.",
      content:
        "The machine learning model, developed by a team of climate scientists and data analysts, is capable of predicting the long-term impacts of climate change with high accuracy. By analyzing historical climate data and current trends, the model provides valuable insights that can help researchers and policymakers make informed decisions. The team hopes that this tool will contribute to global efforts to mitigate the effects of climate change.",
      category: "Climate & Data Science",
      image: "https://via.placeholder.com/300x200",
      author: "Jane Smith",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      title: "Big Data Fuels Financial Market Predictions",
      description:
        "Financial institutions are leveraging big data and AI to predict market trends with increased accuracy.",
      content:
        "In the world of finance, big data and AI are becoming increasingly important tools for predicting market trends. Financial institutions are now able to analyze vast amounts of data in real-time, allowing them to make more accurate predictions about market movements. This technology is helping traders and investors make better-informed decisions, ultimately leading to more stable and profitable financial markets.",
      category: "Finance & AI",
      image: "https://via.placeholder.com/300x200",
      author: "Alice Williams",
      timestamp: "3 days ago",
    },
    {
      id: 4,
      title: "Researchers Develop AI-Powered Code Generator",
      description:
        "A team has developed an AI-powered tool that generates code from natural language, aiming to assist developers globally.",
      content:
        "The AI-powered code generator, developed by a team of software engineers and AI specialists, is designed to assist developers by generating code from natural language descriptions. This tool has the potential to significantly speed up the coding process, making it easier for developers to create complex applications. The team is currently working on refining the tool and expanding its capabilities to support a wider range of programming languages.",
      category: "Tech & Development",
      image: "https://via.placeholder.com/300x200",
      author: "Mark Johnson",
      timestamp: "5 days ago",
    },
  ];

  const handleNewsClick = (news) => {
    navigate(`/app/news-updates/detailed-news`, { state: { news } });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-customBlue text-white py-4 rounded-2xl">
        <div className="container mx-auto flex justify-between items-center px-3">
          <h1 className="text-xl font-bold ml-2">News & Updates</h1>
          <nav>
            <a href="/" className="px-3 hover:underline">
              Home
            </a>
            <a href="/news" className="px-3 hover:underline">
              News
            </a>
            <a href="/community" className="px-3 hover:underline">
              Community
            </a>
            <a href="/jobs" className="px-3 hover:underline">
              Jobs
            </a>
            <a href="/projects" className="px-3 hover:underline">
              Projects
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10">
        {/* Featured News Section */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured News */}
            <div onClick={() => handleNewsClick(newsData[0])} className="relative cursor-pointer">
              <img
                src={newsData[0].image}
                alt="Featured News"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-xl font-bold">{newsData[0].title}</h2>
                <p>{newsData[0].description}</p>
                <p className="text-sm mt-2">{newsData[0].category}</p>
              </div>
            </div>

            {/* Additional Top News */}
            <div className="grid grid-cols-1 gap-4">
              {newsData.slice(1).map((item, index) => (
                <div key={index} onClick={() => handleNewsClick(item)} className="relative cursor-pointer">
                  <img
                    src={item.image}
                    alt="News"
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-customBlue mb-6">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.map((item, index) => (
              <div key={index} onClick={() => handleNewsClick(item)} className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt="Article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-customBlue mt-2">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-customBlue text-white p-6 rounded-md">
          <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
          <ul>
            <li className="mb-2">
              <strong>Hackathon 2024:</strong> Join the latest hackathon event. Date: 10th October 2024.
            </li>
            <li className="mb-2">
              <strong>AI Conference:</strong> Explore the latest advancements in AI. Date: 15th November 2024.
            </li>
            <li className="mb-2">
              <strong>Data Science Workshop:</strong> An in-depth workshop on data science practices. Date: 5th December 2024.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-customDarkBlue text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 DataVerse. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewsAndUpdates;
