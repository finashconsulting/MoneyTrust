import Calculator from "@/components/Calculator";
import FlagSlider from "@/components/FlagSlider";
import Hero from "@/components/Hero";
// import HeroCard from "@/components/Hero/HeroCard";
import { Images } from "@/utils/Images";
import { BiPlusMedical } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { PiStarThin } from "react-icons/pi";

export default function Home() {

  const workArray = [
    { img: Images.progress.src, heading: "Get The Exchange Rate", desc: "Call our office or simply walk-in to know the latest exchange rate." },
    { img: Images.chart.src, heading: "Confirm The Transfer", desc: "Confirm the exchange rate and the service fee and pay the equivalent money to our office cashier. Also provide the destinaion account/contact information." },
    { img: Images.success.src, heading: "Track your transfer", desc: "We process your money transfer as soon as possible and will update you when the money is delivered or transferred to the destination account/person." }
  ];

  const chooseArray = [
    { icon: "", title: "Secure and Reliable", desc: "We are regulated by FINTRAC and have a segregated account at major Canadian financial institution. With our state-of-the-art currency order management system, you are at a relief by using an extremely secure service." },
    { icon: "", title: "Responsive Staff", desc: "Our Staff is well trained to handle multiple queries at a time, you will be pleased with our customer management experience, your satisfaction is our top priority." },
    { icon: "", title: "Fast Service", desc: "We offer same day delivery of funds to your desired destination if booked before bank cut-off.Our instant money transfer service takes less time than you would usually imagine." },
    { icon: "", title: "Best Rate", desc: "We guarantee to beat your bank’s exchange rate. You can save hundreds to thousands of dollars." },
  ];

  const servicesArray = [
    { title: "Western Union Transfers", desc: "A desirable choice for individuals who want to get the most for their money because of its dedication to offering reasonably priced services." },
    { title: "Foreign Currency Banknotes", desc: "Guarantees a smooth and effective procedure for obtaining the banknotes you require, regardless of whether you are a traveller or business." },
    { title: "Money Gram Transfers", desc: "One of the best options for individuals who value efficiency in their international financial transactions because of its speedy money transfer service" },
    { title: "Ria Money Transfer", desc: "Our Ria Money Transfer service offers people wishing to transfer and receive money worldwide a dependable and easy-to-use option." },
  ];

  const planArray = [
    { img: Images.currency.src, title: "Easy Currency Conversion", desc: "Our foreign student currency exchange service guarantees that students have the financial freedom needed for both daily expenses and academic endeavours by enabling them to convert their native currency to Canadian dollars or any other essential currency with ease." },
    { img: Images.assis.src, title: "Banking Assistance", desc: "To help students seamlessly integrate into the local banking system, we offer Banking Assistance, which helps students open bank accounts in Canada. With the help of this service, students may easily access vital financial services and manage their finances more effectively by streamlining the frequently complicated account opening process." },
    { img: Images.money.src, title: "Money Transfer", desc: "Finally, students may send and receive money worldwide or from their home country safely and effectively using our Student Money Transfer service. Our dependable transfer service makes sure that money reaches students quickly and safely, whether it's for living expenses, tuition, or other financial needs. This helps students have a stress-free financial experience while they study in Canada." },
  ];

  const TestimonialArray = [
    { user: { img: Images.user.src, name: "Jonny Smith", job: "Banker" }, desc: "“The bank that has secured quality and dictated taste in the banking sector, I wan to thanks to a brilliant rebranding and unique working methods. From the very first minute Ceve bank made us take a fresh and modern look." },
    { user: { img: Images.user.src, name: "Victor James", job: "CEO of Solit" }, desc: "“The best innovative and digital bank ,with the best service and staff." },
    { user: { img: Images.user.src, name: "Jonathon Ronan", job: "Businessman" }, desc: "“Excellent service, perfect and friendly staff in branch. I am very thankful to the Credit Services Depart ment, my loan was granted without any hassle - easy, fast and with quality." },
    { user: { img: Images.user.src, name: "Johny Lorence", job: "Enterpreuner" }, desc: "“We can confidently state that Ceve bank is one of our most innovative and brave partners." },
  ];

  return (
    <main className="pb-10">
      <Hero />
      <section className="md:hidden px-5 md:px-0 pb-5 -mt-8 z-10 block relative">
        {/* <HeroCard /> */}
        <Calculator />
      </section>
      <section className="flex pt-10 px-5 md:px-20 lg:flex-row flex-col gap-y-3 mt-5 container mx-auto justify-between">
        <div className="flex-1 lg:w-1/2">
          <h1 className="text-xl font-bold  md:text-4xl">
            Popular Countries Our Customers Send Money
          </h1>
          <p className="md:text-xl opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel cursus eros, a finibus nibh. Donec porttitor ligula nec </p>
        </div>
        <div className="flex-1 lg:w-1/2">
          <FlagSlider />
        </div>
      </section>
      <section className="px-5 md:px-20 container flex flex-col items-center mx-auto gap-y-3 mt-24">
        <h1 className="text-xl text-center font-bold md:text-4xl">
          How Does Money Transfer Work?
        </h1>
        <div className="flex justify-center">
          <p className="md:text-lg mt-2 text-center max-w-[600px]">Mobile banking differs from mobile payments, which involves the use of a mobile device.</p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 flex-col items-center md:mt-10 justify-between max-w-[1225px] w-full relative">
          {workArray?.map((item, i) => (
            <div key={i} className="z-10 flex items-center w-full justify-start p-4">
                <img src={item.img} className={`h-64 flex justify-start items-start w-full rounded-lg ${i===2 ? "pb-8" : ""}`} alt="" />
            </div>
          ))}
          <img className="absolute lg:rotate-0 rotate-90 h-full w-full " src={Images.waveLine.src} alt="" />
        </div>
        <div className="flex lg:flex-row  flex-col items-center md:mt-10 justify-between max-w-[1225px] w-full relative">
          {workArray?.map((item, i) => (
            <div key={i} className="z-10 flex flex-col items-center justify-start  p-4">
              <div className="flex flex-col w-full">
              <img src={item.img} className={`h-64 flex lg:hidden justify-start items-start w-full rounded-lg ${i===2 ? "lg:pb-8" : ""}`} alt="" />
                <h1 className="md:text-2xl text-xl font-bold ml-4 mt-5 flex items-center">{item?.heading}</h1>
              </div>
              <p className="max-w-xs text-center mt-4">
                {item?.desc}
              </p>
            </div>
          ))}
          <img className="absolute lg:hidden rotate-90 h-full w-full " src={Images.waveLine.src} alt="" />

        </div>
      </section>
      <section className="px-5 md:px-20 container mx-auto flex pb-3 lg:flex-row flex-col md:gap-5 md:mt-24">
        <img src={Images.chose.src} className=" rounded-lg lg:w-1/2"  alt="" />
        <div className="lg:pl-28">
          <h1 className="md:text-4xl text-2xl font-bold flex items-center">Why Why Choose?</h1>
          <p className="text-lg pt-4">
            {"When it comes to your currency exchange needs in North York, Toronto, look no further than us. We understand the value of accurate and speedy transactions at our exchange office, and our committed team is always available to help you with a degree of responsiveness that guarantees your peace of mind. Select us for your currency exchange needs, and discover why we're the go-to option in North York—our combination of security, dependability, and quickness."}
          </p>
          <section className="md:mt-8 grid grid-cols-1 mt-2 md:grid-cols-2 gap-3">
            {chooseArray.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <img src={Images.checkGreen.src} className="mt-1" alt="" />
                <div>
                  <h1 className="font-bold text-[#091133] text-[16px]">{item.title}</h1>
                  <p className=" text-[15px] text-[#464646]">{item.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
      <section className="bg-gray3 p-10 py-28 md:mt-10">
        <div className="container mx-auto md:px-20">
          <div className="flex justify-between md:flex-row flex-col">
            <h1 className="text-4xl font-bold max-w-[320px] flex sm:flex-row flex-col gap-3 leading-10">
              <img src={Images.CoreServices.src} className="sm:block hidden" alt="" />
              <p className="text-[#94C99D] sm:hidden text-lg">Core Services</p>
              Our Services At A Glance</h1>
            <div className="flex justify-end flex-col items-end gap-2">
              <p className="sm:text-end text-start max-w-[500px]">Quickly and easily send, receive and request money online with Money Trust.</p>
              <button className="bg-[#94C99D] text-white hidden md:flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full">View More
                <img src={Images.plus.src} className="h-5" alt="ico" />
              </button>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {servicesArray.map((item, i) => (
              <div key={i} className="bg-white flex flex-col p-6">
                <BiPlusMedical className={`${i === 0 ? "text-[#7CBF88]" : ""} text-[#7203E3]`} />
                <h1 className="font-bold max-w-40 text-lg py-5">{item.title}</h1>
                <p className="text-end self-end text-[16px] max-w-[90%] text-[#707070]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-5 md:hidden">
            <button className="bg-[#94C99D] text-white flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full">View More
              <img src={Images.plus.src} className="h-5" alt="ico" />
            </button>
          </div>
        </div>

      </section>
      <section className="px-5 md:px-20 container mx-auto hidden md:flex lg:flex-row flex-col gap-5 md:mt-24">
        <div className="flex-1">
          <strong className="font-bold text-lg pb-2">Best plan</strong>
          <h1 className="text-xl md:text-4xl font-bold max-w-[400px]">International Students Are Welcome</h1>
          <div className="flex flex-col gap-4 pt-8">
            {planArray.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <img src={item.img} alt="ico" />
                <div>
                  <h1 className="font-bold text-[#0D0E10] text-xl pb-2">{item.title}</h1>
                  <p className="text-[#676879] text-[15px]">{item.desc}</p>
                </div>
              </div>
            ))}
            <button className="bg-blue1 text-white w-fit flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full">View More
              <GoArrowRight />
            </button>
          </div>
        </div>
        <img src={Images.plan.src} className="flex-1 lg:w-1/5" alt="" />
      </section>
      <section className="bg-blue1 py-5 md:p-10 md:py-28 md:mt-10">
        <div className="container mx-auto md:px-20 text-white gap-4 flex lg:flex-row flex-col">
          <img src={Images.highlights.src} alt="" className="md:block hidden max-h-[800px] h-full" />
          <div className="flex flex-col justify-between">
            <h1 className="px-5 md:px-0 md:text-4xl text-xl font-bold pb-5">Highlights Of Our Services</h1>
            <p className="px-5 md:px-0 text-lg">This summer camp is designed for international students aged 10-18 with an
              interest in AI and entrepreneurship. Participants should be eager to engage in
              hands-on activities in Singapore and explore how AI applies to business
              innovation.</p>
            <div className="pt-8 ">
              <div className="flex px-5 md:px-0">
                <strong className="border border-b-0 border-[#B8B8B8] md:text-2xl text-sm md:h-[80px] h-[50px] flex justify-center items-center flex-1 px-1 whitespace-nowrap">Security</strong>
                <strong className="md:text-2xl text-sm md:h-[80px] h-[50px] flex justify-center items-center flex-1 px-1 whitespace-nowrap">No Hidden Fees</strong>
                <strong className="md:text-2xl text-sm md:h-[80px] h-[50px] flex justify-center items-center flex-1 px-1 whitespace-nowrap">Speed</strong>
              </div>
              <img src={Images.highlights.src} alt="" className="md:hidden block max-h-[200px] w-full object-cover object-center h-full" />
              <div className="p-6 md:border border-[#B8B8B8]">
                <p className="leading-9">{"To protect our clients' financial transactions, we use strong and advanced security measures at every stage of the currency conversion procedure. Our cutting-edge solutions shield critical data using cutting-edge encryption technology, guaranteeing that it stays private and unreadable by other parties. Furthermore, our qualified staff is educated to follow stringent security guidelines, ensuring the integrity of every transaction. Our steadfast focus to upholding the highest security standards highlights our commitment to providing a safe and secure environment for all currency exchange transactions at our Toronto and North Vancouver branches. We place a high priority on the trust and confidence of our clients."}
                </p>
                <div className="flex flex-col gap-4 pb-10 pt-4 items-start">
                  <div className="flex items-center gap-2">
                    <img src={Images.checkGreen.src} className="h-5" alt="" />
                    <span>Great Exchange rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Images.checkGreen.src} className="h-5" alt="" />
                    <span>24/7 Transfer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Images.checkGreen.src} className="h-5" alt="" />
                    <span>No Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA] p-5 md:p-10 md:mt-10">
        <div className="container md:px-20 mx-auto ">
          <div className="flex justify-between md:flex-row flex-col">
            <h1 className="text-4xl font-bold max-w-[420px] flex sm:flex-row flex-col gap-3 leading-10">
              <img src={Images.Testimonial.src} className="sm:block hidden" alt="" />
              <p className="text-blue1 sm:hidden text-lg">Testimonial</p>
              {"Our client's feedback is our strength"}</h1>
            <div className="flex items-center text-gray-400">
              <div className="inline-block h-3 w-3 bg-blue1 rounded-[50%]"></div>
              ---------
              <div className="inline-block h-3 w-3 bg-gray-400 rounded-[50%]"></div>
            </div>
          </div>
          <div className="mt-8 flex scrollbar-hide overflow-x-auto">
            {TestimonialArray.map((item, i) => (
              <div key={i} className="bg-white min-w-[310px] md:min-w-[390px] h-full flex flex-col p-6">
                <div className="flex items-center gap-2">
                  {Array(i + 2).fill(i + 2).map((_, i) => (
                    <div key={i} className="bg-[#94C99D] flex justify-center items-center w-5 h-5 ">
                      <PiStarThin className="text-white" />
                    </div>
                  ))}
                </div>
                <p className="pt-4 text-[#070F38] text-lg">{item.desc}</p>
                <div className="pt-5 flex gap-3">
                  <img className="w-[50px] h-[50px]" src={item.user.img} alt="" />
                  <div>
                    <h1 className="font-bold text-[#015180]">{item.user.name}</h1>
                    <h1 className="font-[500] text-[15px] text-[#707070]">{item.user.job}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      <section className="bg-[#F4F4F4] p-5 md:p-10 ">
        <div className="container md:px-20 mx-auto ">
          <h1 className="text-center font-bold text-xl md:text-4xl pt-5">We Are Trusted By</h1>
          <div className="flex  mt-3 justify-center">
            <div className="w-56 h-[2px] bg-[#94C99D]"></div>
          </div>
            <div className="flex justify-center flex-wrap lg:flex-nowrap gap-5 pt-10">
              <img src={Images.trust1.src} alt="" className="w-[130px] sm:w-auto"/>
              <img src={Images.trust2.src} alt="" className="w-[130px] sm:w-auto"/>
            </div>
        </div>
      </section>
    </main>
  );
}
