
// components/RulesSection.jsx
import Link from 'next/link';
import { 
  FiFileText, 
  FiUserCheck, 
  FiList, 
  FiClock, 
  FiSlash, 
  FiMonitor, 
  FiToggleLeft,
  FiArrowRight 
} from 'react-icons/fi';

export default function RulesSection() {
  const rules = [
    {
      id: 1,
      icon: <FiUserCheck className="text-[#10b981] text-xl" />,
      title: "Who it's for",
      description: "Muslim clients from countries where Islam is the state or main religion.",
    },
    {
      id: 2,
      icon: <FiList className="text-[#10b981] text-xl" />,
      title: "What's covered",
      description: "32 currency pairs plus gold (XAUUSD) and silver (XAGUSD). Other instruments keep standard swaps.",
    },
    {
      id: 3,
      icon: <FiClock className="text-[#10b981] text-xl" />,
      title: "How long you can hold",
      description: "Up to 7 days per position. Holding longer switches the service off.",
    },
    {
      id: 4,
      icon: <FiSlash className="text-[#10b981] text-xl" />,
      title: "What isn't allowed",
      description: "Strategies that aim to make money from interest rate differences, such as carry trades.",
    },
    {
      id: 5,
      icon: <FiMonitor className="text-[#10b981] text-xl" />,
      title: "Where it works",
      description: "MT5 accounts only. Not available on MT4 or on PAMM accounts.",
    },
    {
      id: 6,
      icon: <FiToggleLeft className="text-[#10b981] text-xl" />,
      title: "Switching it off",
      description: "xChief can turn the service off at any time and charge standard swaps, as set out in the terms.",
    },
  ];

  return (
    <section className="bg-[#121614] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر بخش: نشانگر، عنوان و لینک قوانین کامل */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1b221f] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 mb-6">
              <FiFileText className="text-[#10b981]" /> The rules
            </div>

            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
              The rules, <span className="italic font-normal text-[#10b981]">written plainly</span>
            </h2>

            <p className="text-gray-400 text-sm lg:text-base max-w-lg">
              No fine print surprises. This is how the swap free service works.
            </p>
          </div>

          {/* لینک بالای سمت راست */}
          <Link 
            href="#full-terms" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition group shrink-0"
          >
            Read the full swap free terms
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* شبکه‌بندی (Grid) ۶ تایی کارت‌های قوانین */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className="bg-[#181d1a] border border-white/10 rounded-3xl p-7 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* آیکون داخل آیکون‌باکس با پس‌زمینه سبز ملایم */}
                <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-6">
                  {rule.icon}
                </div>

                {/* عنوان کارت */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {rule.title}
                </h3>

                {/* متن توضیحات */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}