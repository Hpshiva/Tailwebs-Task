import React, { useState } from "react";
import ArticleCard from "../common/ArticleCard";
import { useEffect } from "react";

function Articles() {
  // const [card, setCard] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users?per_page=4")
  //     .then((res) => res.json())
  //     .then((data) => setCard(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // const [activeTab, setActiveTab] = useState("whatsnew");
  const tabData = {
    whatsnew: [
      {
        id: 1,
        title: "State-led Urban Digital Transformation ",
        author: "Mathews P Joseph +2 More ",
        date: "13 Mar 2026",
        avatar_url: "src/assets/images/tab-1-img-1.jpg",
        state: [
          "Odisha",
          "Kerala",
          "LocalGovernance",
          "Andhra Pradesh",
          "Punjab",
        ],
      },
      {
        id: 2,
        title: "DOT – A DIGIT QUARTERLY NEWSLETTER ",
        author: "eGov Foundation +2 More",
        date: "20 Jan 2026",
        avatar_url: "src/assets/images/tab-1-img-2.jpg",
      },
      {
        id: 3,
        title: "DOT 2025 | TOP STORIES OF PARTNERSHIPS & IMPACT ",
        author: "eGov Foundation +2 More",
        date: "30 Dec 2026",
        avatar_url: "src/assets/images/tab-1-img-3.jpg",
      },
    ],

    articles: [
      {
        id: 1,
        title:
          "From Goa to the Globe: How Pravimal Abhishek led the GIDC to digitally transform industrial ",
        author: "Darshana Ramdev",
        date: "25 Jul 2025",
        avatar_url: "src/assets/images/tab-2-img-1.jpg",
        state: ["Local Governance ", "GOA-IDC", "Pravimal Abhishek "],
      },
      {
        id: 2,
        title:
          "Tech for Billions, Talent for None: Fixing GovTech’s Biggest Gap ",
        author: "Darshana Ramdev",
        date: "10 Mar 2025",
        avatar_url: "src/assets/images/tab-2-img-2.jpg",
        state: [" DIGIT "],
      },
      {
        id: 3,
        title:
          "From Systems to Ecosystems: A Shared Journey to Build Digital Public Goods ",
        author: "Viraj Tyagi",
        date: "10 Jan 2025 ",
        avatar_url: "src/assets/images/tab-2-img-3.jpg",
        state: [
          "Local Governance ",
          "Digital Public Infrastructure",
          "Digital Public Goods",
        ],
      },
    ],

    whitepapers: [
      {
        id: 1,
        title:
          "Not a Zero-Sum Game: How to Simultaneously Maximize Efficiency and Privacy in Data-driven Urban Governance ",
        author: "Finance Ministry",
        date: "05 Mar 2026",
        avatar_url: "src/assets/images/tab-3-img-1.jpg",
        state: ["Privacy ", "Urban Governance "],
      },
      {
        id: 2,
        title: "Catalysing Digital Urban Futures ",
        author: "Finance Ministry",
        date: "05 Mar 2026",
        avatar_url: "src/assets/images/tab-3-img-2.jpg",
        state: [" Urban "],
      },
      {
        id: 3,
        title: "eGovernance in Property tax",
        author: "Finance Ministry",
        date: "05 Mar 2026",
        avatar_url: "src/assets/images/tab-3-img-3.jpg",
        state: ["Urban", " eGovernance ", "Property Tax"],
      },
    ],

    casestudies: [
      {
        id: 1,
        title:
          "Enabling Social Benefit Delivery through Digital Public Infrastructure ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-4-img-1.jpg",
        state: ["Odisha", "Public Finance ", "Social Benefits Delivery "],
      },
      {
        id: 2,
        title:
          "Accelerating Revenue Mobilisation through Digital Public Infrastructure (DPI) ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-4-img-2.jpg",
        state: [
          "Andhra Pradesh ",
          "Revenue Mobilization ",
          "DPI",
          "Local Governance",
        ],
      },
    ],
    strategyPapers: [
      {
        id: 1,
        title: "National Urban Innovation Stack – Strategy & Approach ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-5-img-1.jpg",
      },
      {
        id: 2,
        title:
          "Reimagining Sanitation Services with Digital Public Infrastructure – A Strategy Note ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-5-img-2.jpg",
      },
      {
        id: 3,
        title: "Strategy and Approach to Public Financial management ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-5-img-3.jpg",
      },
    ],
    newandmedia: [
      {
        id: 1,
        title:
          "Karnataka’s Centre for Smart Governance and eGov Foundation Announce Strategic Partnership to Transform Public Service Delivery ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-6-img-1.jpg",
      },
      {
        id: 2,
        title:
          "AI for Sustainable Cities: AIRAWAT and eGov Foundation Launch Strategic Partnership for Urban Governance ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-6-img-2.jpg",
      },
      {
        id: 3,
        title:
          "Government of Punjab and eGov Foundation Sign MoU to Drive Urban Innovation Across Technology, Policy and Revenue Systems ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-6-img-3.jpg",
      },
    ],
    videos: [
      {
        id: 1,
        title:
          "Leadership Talks: Viraj Tyagi on lessons learnt on driving digital innovation across borders ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-7-img-1.jpg",
      },
      {
        id: 2,
        title: "SUJOG in Odisha ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-7-img-2.jpg",
      },
      {
        id: 3,
        title: "mGramSeva Punjab ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-7-img-3.jpg",
      },
    ],
    newsletter: [
      {
        id: 1,
        title: "DOT – A DIGIT QUARTERLY NEWSLETTER ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-1-img-2.jpg",
      },
      {
        id: 2,
        title: "DOT 2025 | TOP STORIES OF PARTNERSHIPS & IMPACT ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-1-img-3.jpg",
      },
      {
        id: 3,
        title: "DOT September 2025 ",
        author: "Urban Dept",
        date: "02 Mar 2026",
        avatar_url: "src/assets/images/tab-1-img-2.jpg",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("whatsnew");

  const tabs = [
    { key: "whatsnew", label: "What's New" },
    { key: "articles", label: "Articles" },
    { key: "whitepapers", label: "Whitepapers" },
    { key: "casestudies", label: "Case Studies" },
    { key: "strategyPapers", label: "Strategy Papers" },
    { key: "newandmedia", label: "News & Media" },
    { key: "videos", label: "Videos" },
    { key: "newsletter", label: "Newsletter" },
  ];

  return (
    <section className="py-4">
      <div className="container py-md-5">
        <div className="row  justify-content-md-center">
          <div className="col d-flex  justify-content-sm-center justify-content-lg-start">
            <p className="fs-36 fs-sm-30 text-center text-lg-start lh-40 fw-300">
              Latest at <span className="fs-46 lh-40 fw-800">eGov</span>
            </p>
          </div>
        </div>

        <div className="mt-md-5 mt-4">
          <ul className="nav nav-pills  justify-content-sm-center justify-content-lg-start tab-bold mb-3">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.key}>
                <button
                  className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content mt-md-5 mt-3">
            <div className="card-grid gap-5">
              {tabData[activeTab]?.map((data) => (
                <ArticleCard key={data.id} data={data} />
              ))}
            </div>

            <div className="mt-4">
              <button className="btn-cyan rounded-pill text-white fs-14">
                See All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
