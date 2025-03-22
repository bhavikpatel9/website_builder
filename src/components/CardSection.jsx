import forBeginnersImg from "../assets/images/for-beginners.jpg"
import forMarketersImg from "../assets/images/for-marketers.jpg"
import forProImg from "../assets/images/for-pro.jpg"

const CardSection = () => {
    const cards = [
      {
        title: "For Beginners",
        subtitle: "Launch Your First Website",
        bgColor: "bg-[#FFE979]",
        btnBgColor: "bg-yellow-500",
        img: forBeginnersImg,
        buttons: ["Visual Builder", "Documentation", "Support", "Prebuilt Websites"],
      },
      {
        title: "For Marketers",
        subtitle: "Generate Leads And Conversions",
        bgColor: "bg-[#B7F598]",
        btnBgColor: "bg-green-500",
        img: forMarketersImg,
        buttons: ["Design", "SEO", "Shop Builder", "Form Builder"],
      },
      {
        title: "For Professionals",
        subtitle: "Take Your Projects To The Next Level",
        bgColor: "bg-[#7ED5F0]",
        btnBgColor: "bg-blue-500",
        img: forProImg,
        buttons: ["All-In-One", "Patcher", "WCAG", "Dynamic Data"],
      },
    ];
  
    return (
      <div className="flex justify-center items-center gap-8 min-h-[80vh] p-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-96 p-10 rounded-xl ${card.bgColor} shadow-lg transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:cursor-pointer min-h-[550px] flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">{card.title}</h3>
              <h2 className="text-3xl font-bold text-gray-900 text-center">{card.subtitle}</h2>
              <img src={card.img} alt={card.title} className="w-3/5 h-[200px] mx-auto my-8 rounded-md " />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {card.buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 text-base font-medium text-white ${card.btnBgColor} rounded-md`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardSection;
  