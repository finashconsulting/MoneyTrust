"use client"
import React, { useEffect, useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import CurrencyFlag from 'react-currency-flags';
import Select from 'react-select';

import './exchange.css'
import OrderFormModal from '../OrderFormModal';
import { Images } from '@/utils/Images';
import OrderFormModal2 from '../OrderFormModal2';
const API_KEY = 'cur_live_J7nMmu9sTuSG8QLkh7fY1PEL8UnE8331PtS3qcpx';
const API_BASE_URL = 'https://api.currencyapi.com/v3';
const Calculator = ({ setCartData = () => { } }) => {
  const defaultCurrency2 = {
    value: 'USD',  // The value should match one of the options values
    label: (
      <>
        <CurrencyFlag currency="USD" size="lg" /> USD
      </>
    ),
  };
  const defaultCurrency = {
    value: 'CAD',  // The value should match one of the options values
    label: (
      <>
        <CurrencyFlag currency="CAD" size="lg" /> CAD
      </>
    ),
  };
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [activeTab, setActiveTab] = useState(1);
  const [sendCurrency, setSendCurrency] = useState(defaultCurrency);
  const [receiveCurrency, setReceiveCurrency] = useState(defaultCurrency2);
  const [sendAmount, setSendAmount] = useState("1,000.00");
  const [receiveAmount, setReceiveAmount] = useState("740.00");
  const [exchangeRates, setExchangeRates] = useState({});
  const [isFormActive, setIsFormActive] = useState(false);
  const currentGoldPrice = 2485.75;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [currentOrderDetails, setCurrentOrderDetails] = useState({
    sendAmount: 0,
    sendCurrency: '',
    receiveAmount: 0,
    receiveCurrency: '',
    rate: 0,
    type: 'currency'
  });
  const [currentOrderDetails2, setCurrentOrderDetails2] = useState({
    type: 0,
    items:[],
    totalAmount:''
  });
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen);
  };

  const SUPPORTED_CURRENCIES = {
    'AUD': {
      name: 'Australian Dollar',
      flag: 'au',
      symbol: 'A$'
    },
    'CAD': {
      name: 'Canadian Dollar',
      flag: 'ca',
      symbol: 'C$'
    },
    'CHF': {
      name: 'Swiss Franc',
      flag: 'ch',
      symbol: 'Fr'
    },
    'EUR': {
      name: 'Euro',
      flag: 'eu',
      symbol: '€'
    },
    'GBP': {
      name: 'British Pound',
      flag: 'gb',
      symbol: '£'
    },
    'HKD': {
      name: 'Hong Kong Dollar',
      flag: 'hk',
      symbol: 'HK$'
    },
    'ILS': {
      name: 'Israeli Shekel',
      flag: 'il',
      symbol: '₪'
    },
    'INR': {
      name: 'Indian Rupee',
      flag: 'in',
      symbol: '₹'
    },
    'JPY': {
      name: 'Japanese Yen',
      flag: 'jp',
      symbol: '¥'
    },
    'MXN': {
      name: 'Mexican Peso',
      flag: 'mx',
      symbol: 'Mex$'
    },
    'NZD': {
      name: 'New Zealand Dollar',
      flag: 'nz',
      symbol: 'NZ$'
    },
    'SEK': {
      name: 'Swedish Krona',
      flag: 'se',
      symbol: 'kr'
    },
    'USD': {
      name: 'US Dollar',
      flag: 'us',
      symbol: '$'
    },
    'AED': {
      name: 'UAE Dirham',
      flag: 'ae',
      symbol: 'د.إ'
    },
    'CNY': {
      name: 'Chinese Yuan',
      flag: 'cn',
      symbol: '¥'
    }
  };

  const options = [
    { value: 'AUD', label: 'AUD Australian Dollar', code: 'AUD' },
    { value: 'CAD', label: 'CAD Canadian Dollar', code: 'CAD' },
    { value: 'CHF', label: 'CHF Swiss Franc', code: 'CHF' },
    { value: 'EUR', label: 'EUR Euro', code: 'EUR' },
    { value: 'GBP', label: 'GBP British Pound', code: 'GBP' },
    { value: 'HKD', label: 'HKD Hong Kong Dollar', code: 'HKD' },
    { value: 'ILS', label: 'ILS Israeli Shekel', code: 'ILS' },
    { value: 'INR', label: 'INR Indian Rupee', code: 'INR' },
    { value: 'JPY', label: 'JPY Japanese Yen', code: 'JPY' },
    { value: 'MXN', label: 'MXN Mexican Peso', code: 'MXN' },
    { value: 'NZD', label: 'NZD New Zealand Dollar', code: 'NZD' },
    { value: 'SEK', label: 'SEK Swedish Krona', code: 'SEK' },
    { value: 'USD', label: 'USD US Dollar', code: 'USD' },
    { value: 'AED', label: 'AED UAE Dirham', code: 'AED' },
    { value: 'CNY', label: 'CNY Chinese Yuan', code: 'CNY' }
  ];

  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '10px', // Space between flag and text
      padding: '10px', // Padding for dropdown items
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }),
    control: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
  };

  const products = [
    {
      id: 1,
      name: "1 oz Gold Maple Leaf",
      weight: 1,
      image: Images.goldBars.src,
      price: currentGoldPrice
    },
    {
      id: 2,
      name: "1/2 oz Gold Maple Leaf",
      weight: 0.5,
      image: Images.goldBars.src,
      price: currentGoldPrice * 0.5
    },
    {
      id: 3,
      name: "1/4 oz Gold Maple Leaf",
      weight: 0.25,
      image: Images.goldBars.src,
      price: currentGoldPrice * 0.25
    },
    {
      id: 4,
      name: "1/10 oz Gold Maple Leaf",
      weight: 0.1,
      image: Images.goldBars.src,
      price: currentGoldPrice * 0.1
    }
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setQuantities(prev => ({
        ...prev,
        [product.id]: (prev[product.id] || 1) + 1
      }));
    } else {
      setCart([...cart, product]);
      setCartData([...cart, product]);

      setQuantities(prev => ({
        ...prev,
        [product.id]: 1
      }));
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    setCartData(cart.filter(item => item.id !== productId));

    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  const updateQuantity = (productId, delta) => {
    setQuantities(prev => {
      const newQuantity = Math.max(1, (prev[productId] || 1) + delta);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (quantities[item.id] || 1)), 0);
  };

  const handleCheckout = () => {
    // Prepare order data for your existing order form
    const orderData = {
      type: 'gold',
      items: cart.map(item => ({
        name: item.name,
        quantity: quantities[item.id] || 1,
        price: item.price,
        totalPrice: item.price * (quantities[item.id] || 1)
      })),
      totalAmount: getCartTotal()
    };
    console.log('cart', cart)
    setCurrentOrderDetails2(orderData)
    toggleModal2();
    // Store order details for the order form
    // window.currentGoldOrder = {
    //   payAmount: getCartTotal(),
    //   currency: 'CAD',
    //   receiveAmount: cart.reduce((total, item) => total + (item.weight * (quantities[item.id] || 1)), 0),
    //   unit: 'oz',
    //   purity: '24K Gold (99.99% pure)',
    //   price: currentGoldPrice,
    //   type: 'gold'
    // };

    // // Show your existing order form
    // const orderFormContainer = document.getElementById('orderFormContainer');
    // if (orderFormContainer) {
    //   document.body.style.overflow = 'hidden';
    //   orderFormContainer.style.display = 'block';
    //   window.updateGoldOrderSummary();
    // }



    // Show your existing order form
    // const orderFormContainer = document.getElementById('orderFormContainer');
    // if (orderFormContainer) {
    //   document.body.style.overflow = 'hidden';
    //   orderFormContainer.style.display = 'block';
    //   window.updateGoldOrderSummary();
    // }
    
    // // Show your existing order form
    // const orderFormContainer = document.getElementById('orderFormContainer');
    // if (orderFormContainer) {
    //   document.body.style.overflow = 'hidden';
    //   orderFormContainer.style.display = 'block';
    //   window.updateGoldOrderSummary();
    // }
  };


  // Function to fetch live exchange rates
  const fetchExchangeRates = async () => {
    try {
      // console.log('Fetching live exchange rates...');
      const currencies = Object.keys(SUPPORTED_CURRENCIES).join(',');
      const response = await fetch(`${API_BASE_URL}/latest?apikey=${API_KEY}&base_currency=CAD&currencies=${currencies}`);
      const data = await response.json();

      const updatedExchangeRates = {};
      Object.keys(SUPPORTED_CURRENCIES).forEach(fromCurrency => {
        Object.keys(SUPPORTED_CURRENCIES).forEach(toCurrency => {
          if (fromCurrency !== toCurrency) {
            if (fromCurrency === 'CAD') {
              updatedExchangeRates[`${fromCurrency}-${toCurrency}`] = data.data[toCurrency].value;
            } else if (toCurrency === 'CAD') {
              updatedExchangeRates[`${fromCurrency}-${toCurrency}`] = 1 / data.data[fromCurrency].value;
            } else {
              const rateFromCAD = data.data[toCurrency].value;
              const rateToCAD = 1 / data.data[fromCurrency].value;
              updatedExchangeRates[`${fromCurrency}-${toCurrency}`] = rateFromCAD * rateToCAD;
            }
          }
        });
      });

      setExchangeRates(updatedExchangeRates);
      // console.log('Exchange rates updated:', updatedExchangeRates);

      // Update rate display
      const currentTime = new Date().toLocaleTimeString();
      const rateDisplay = document.querySelector('#currencyForm .rate-display .rate-refresh');
      if (rateDisplay) {
        rateDisplay.textContent = `(Updated ${currentTime})`;
      }
      // Check if the form is active before calculating
      if (isFormActive) {
        calculateExchange();
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      // Fallback to static rates if API fails
      setExchangeRates({
        'CAD-USD': 0.74,
        'USD-CAD': 1.35,
        // Add other static rates as needed
      });
    }
  };

  // Handle selection change
  // const handleChange = (selectedOption) => {
  //   console.log("Selected currency:", selectedOption.value); // Selected currency code
  // };

  const calculateExchange = () => {
    const sendAmountParsed = parseFloat(sendAmount?.replace(/,/g, '')) || 0;
    const rateKey = `${sendCurrency?.value}-${receiveCurrency?.value}`;
    // console.log('rateKey', rateKey, 'exchangeRates++++', exchangeRates, exchangeRates?.["CAD-AED"])
    if (exchangeRates?.[rateKey]) {
      const result = (sendAmountParsed * exchangeRates?.[rateKey])?.toFixed(2);
      const value = parseFloat(result)?.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
      // console.log('result', result, 'value', value)
      setReceiveAmount(value);
      setCurrentOrderDetails({
        sendAmount: sendAmountParsed,
        sendCurrency: sendCurrency?.value,
        receiveAmount: parseFloat(result),
        receiveCurrency: receiveCurrency?.value,
        rate: exchangeRates?.[rateKey],
        type: 'currency'
      });
    }
  };

  // Swap currencies and recalculate
  const swapCurrencies = () => {
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(sendCurrency);
    setSendAmount(receiveAmount);
    calculateExchange();
  };

  // Update receive amount whenever send amount or currencies change
  useEffect(() => {
    calculateExchange();
  }, [sendAmount, sendCurrency, receiveCurrency, exchangeRates]);


  useEffect(() => {
    // Set the form as active on component mount
    setIsFormActive(true);

    // Fetch initial exchange rates
    fetchExchangeRates();

    // Set up rate refresh interval (every 5 minutes)
    const intervalId = setInterval(fetchExchangeRates, 300000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className='bg-white border border-gray-400 shadow-lg w-full rounded-[16px] h-fit lg:min-h-[513px] lg:w-[400px]'>
      <div className='flex mx-auto bg-gray-200 rounded-t-[16px]'>
        <div className={`flex-1 flex justify-center items-center py-5 px-5 md:px-0 text-sm whitespace-nowrap cursor-pointer hover:text-blue1 md:text-lg font-bold ${activeTab === 1 ? "border-b-2 border-blue1" : ""}`} onClick={() => { setActiveTab(1); setCartData([]); setCart([]) }}>Currency Exchange</div>
        <div className={`flex-1 flex justify-center items-center py-5 px-5 md:px-0 text-sm whitespace-nowrap cursor-pointer hover:text-blue1 md:text-lg font-bold ${activeTab === 2 ? "border-b-2 border-blue1" : ""}`} onClick={() => setActiveTab(2)}>Buy Gold</div>
      </div>
      {activeTab === 2 ? <div className="p-4">
        <div className="flex mx-auto justify-between items-center mb-2">
          <div className="text-lg text-black">Current gold price: CAD ${currentGoldPrice.toFixed(2)}/oz</div>
          <div className="flex items-center space-x-3">
            <span className="font-medium text-black ">Cart ({cart.length})</span>
            <span className="text-white font-bold">${getCartTotal().toFixed(2)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-y-5 mx-auto mb-2">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white rounded-md border border-gray-300 shadow-md">
              <div className="p-3">
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex space-x-2">
                    <img
                      src={product.image}
                      alt={'icon'}
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
                      <p className="text-blue-600 font-medium text-sm">
                        CAD ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="">
            <div className="bg-white rounded-md border border-gray-300 shadow-md">
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-2">Cart Items</h3>
                <div className='md:max-h-[140px] max-w-[500px] sm:max-w-full sm:max-w-auto scrollbar-hide overflow-y-auto'>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-9 h-9 object-contain" />
                        <div>
                          <h4 className="sm:min-w-auto min-w-40 font-medium">{item.name}</h4>
                          <p className="text-blue-600">${item.price.toFixed(2)} each</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{quantities[item.id] || 1}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-lg font-medium">
                    Total: ${getCartTotal().toFixed(2)}
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div> :
        <div className={`exchange-form ${isFormActive ? 'active' : ''}`} id="currencyForm">
          <div className="form-group">
            <label className="form-label">You send</label>
            <div className="input-group">
              <input
                type="text"
                className="amount-input"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
              />
              <Select
                options={options.map((currency) => ({
                  value: currency.value,
                  label: (
                    <>
                      <CurrencyFlag currency={currency.code} size="lg" /> {currency.code}
                    </>
                  ),
                }))}
                styles={customStyles}
                placeholder="Select Currency"
                value={sendCurrency}
                onChange={(currency) => setSendCurrency(currency)}
              />
            </div>
          </div>

          <div className="rate-display">
            <span className="rate-text">
              1 {sendCurrency.value}→{exchangeRates[`${sendCurrency.value}-${receiveCurrency.value}`]?.toFixed(4)} {receiveCurrency.value}
            </span>
            <button className="swap-button" onClick={swapCurrencies}>
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M7 10l5-5 5 5M7 14l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">You receive</label>
            <div className="input-group">
              <input
                type="text"
                className="amount-input"
                value={receiveAmount}
                readOnly
              />
              <Select
                options={options.map((currency) => ({
                  value: currency.value,
                  label: (
                    <>
                      <CurrencyFlag currency={currency.code} size="lg" /> {currency.code}
                    </>
                  ),
                }))}
                styles={customStyles}
                placeholder="Select Currency"
                value={receiveCurrency}
                onChange={(currency) => setReceiveCurrency(currency)}
              />
            </div>
          </div>

          <div className="payment-section">
            <div>
              <div className="payment-method">Pay with: E-Transfer</div>
              <div className="free-text">Free first exchange</div>
            </div>
            <div className="pickup-info">
              <div>Available for pickup</div>
              <div className="font-medium">Today</div>
            </div>
          </div>

          <button className="submit-button" onClick={() => toggleModal()}>Lock in rate & order</button>
        </div>
      }
      <OrderFormModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentOrderDetails={currentOrderDetails} />
      <OrderFormModal2 isModalOpen={isModalOpen2} setIsModalOpen={setIsModalOpen2} currentOrderDetails={currentOrderDetails2} />
    </div>
  );
};

export default Calculator;