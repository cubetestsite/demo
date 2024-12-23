import React from "react";
import DOETool from "../assets/images/DOEtool.png"
import LabellingTool from "../assets/images/Labellingtool.png"
// Define the structure of the tool data
interface Tool {
  title: string;
  image?: string; // Optional: Some items may not have an image
  link: string;
  comingSoon?: boolean; // Optional: Indicates if the tool is "Coming Soon"
}

const ToolItem: React.FC = () => {
  // List of tools
  const tools: Tool[] = [
    {
      title: "DOE Tool",
      image: DOETool,
      link: "#",
    },
    {
      title: "Labelling Tool",
      image: LabellingTool,
      link: "#",
    },
    {
      title: "Coming Soon...",
      link: "#",
      comingSoon: true,
    },
    {
      title: "Coming Soon...",
      link: "#",
      comingSoon: true,
    },
    {
      title: "Coming Soon...",
      link: "#",
      comingSoon: true,
    },
    {
      title: "Coming Soon...",
      link: "#",
      comingSoon: true,
    },
  ];

  return (
    <div className="col-md-12 my-5 py-3">
      <div className="row">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
          >
            <a
              href={tool.link}
              className="product-card d-flex flex-column align-items-center justify-content-center text-decoration-none"
              title={tool.title}
            >
              {tool.comingSoon ? (
                <span className="d-block text-white font-regular font-12">
                  {tool.title}
                </span>
              ) : (
                <img src={tool.image} alt={tool.title} />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolItem;
