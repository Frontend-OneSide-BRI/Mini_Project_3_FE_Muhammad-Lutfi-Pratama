import { useState } from "react";

export default function MovieShowTabs({ activeTabListener }) {
  let [activeTab, setActiveTab] = useState("trailer");

  const handleActiveTab = tab => {
    setActiveTab(tab);
    activeTabListener(tab);
  };

  const toggleActiveTabStyle = tab => {
    if (tab === activeTab) {
      return "text-lg font-semibold";
    } else {
      return "opacity-50 hover:opacity-100 hover:scale-110";
    }
  };
  return (
    <div className="flex items-center justify-center gap-8 mt-8 text-white md:mt-2 ">
      <p
        onClick={() => handleActiveTab("trailer")}
        className={`${toggleActiveTabStyle(
          "trailer"
        )} cursor-pointer transition-all`}
      >
        Trailer
      </p>
      <p
        onClick={() => handleActiveTab("detail")}
        className={`${toggleActiveTabStyle(
          "detail"
        )} cursor-pointer transition-all`}
      >
        detail
      </p>
    </div>
  );
}
