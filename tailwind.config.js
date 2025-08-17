import tailwindAnimate from "tailwindcss-animate";

export const prefix = "";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      backgroundImage: {
        'signup-bg': "url('/images/signup/signupmob.png')",
      },
      transitionDuration: {
        '1000': '1000ms',
      },
      screens: {
        "lg-1000": "1000px",
        "lg-1100": "1080px",
        "lg-1200": "1200px",
        "xl-1450": "1450px",
        "xl-1500": "1500px",
        "xl-1800": "1800px",
        "xl-1900": "1900px",
        "xl-1920": "1920px",
        "xl-2000": "2000px",
        "xl-900": "900px",
        "md-850": "850px",
        "md-710": "710px",
        "md-610": "610px",
        "xs-500": "500px",
        xs550: "550px",
        xs500: "500px",
        xs400: '400px',
      },

      // screens: {
      //   xs550: "550px",
      //   xs500: "500px",
      //   xs400: '400px',
        
      // },

      fontFamily: {
        productsans: ['productsans', 'sens-sarif'],
        productsansregular: ['productsansregular', 'sens-sarif'],
        productsansblack: ['productsansblack','sens-sarif'],
        rockwell: ['rockwell','sens-sarif'],
        productsansMedium: ['productsansmedium','sens-sarif'],
        helvet: ['helvet','sens-sarif'],
      },
      fontSize: {
        10: ["10px", { lineHeight: "14px" }],
        11: ["11px", { lineHeight: "16px" }],
        12: ["12px", { lineHeight: "18px" }],
        13: ["13px", { lineHeight: "19px" }],
        14: ["14px", { lineHeight: "20px" }],
        15: ["15px", { lineHeight: "22px" }],
        16: ["16px", { lineHeight: "25px" }],
        17: ["17px", { lineHeight: "25px" }],
        18: ["18px", { lineHeight: "28px" }],
        19: ["19px", { lineHeight: "28px" }],
        20: ["20px", { lineHeight: "30px" }],
        22: ["22px", { lineHeight: "32px" }],
        24: ["24px", { lineHeight: "34px" }],
        25: ["25px", { lineHeight: "34px" }],
        26: ["26px", { lineHeight: "36px" }],
        28: ["28px", { lineHeight: "38px" }],
        29: ["29px", { lineHeight: "40px" }],
        32: ["32px", { lineHeight: "44px" }],
        34: ["34px", { lineHeight: "48px" }],
        36: ["36px", { lineHeight: "50px" }],
        38: ["38px", { lineHeight: "52px" }],
        40: ["40px", { lineHeight: "54px" }],
        42: ["42px", { lineHeight: "56px" }],
        44: ["44px", { lineHeight: "58px" }],
        48: ["48px", { lineHeight: "62px" }],
        50: ["50px", { lineHeight: "66px" }],
        52: ["52px", { lineHeight: "66px" }],
        56: ["56px", { lineHeight: "72px" }],
        60: ["60px", { lineHeight: "76px" }],
        64: ["64px", { lineHeight: "82px" }],
        72: ["72px", { lineHeight: "88px" }],
        70: ["70px", { lineHeight: "88px" }],
        76: ["76px", { lineHeight: "88px" }],
        80: ["80px", { lineHeight: "96px" }],
        90: ["90px", { lineHeight: "100px" }],
        100: ["100px", { lineHeight: "107px" }],
        120: ["120px", { lineHeight: "130px" }],
      },
      colors: {
        
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        ping: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  extend: {
    backgroundImage: {
      'signup-bg': "url('@/assets/images/signup/signupmob.png')",
    },
    transitionDuration: {
      '1000': '1000ms',
    },
    // screens: {
    //   "lg-1000": "1000px",
    //   "lg-1100": "1080px",
    //   "lg-1200": "1200px",
    //   "xl-1500": "1500px",
    //   "xl-1800": "1800px",
    //   "xl-2000": "2000px",
    //   "xl-900": "900px",
    //   "md-850": "850px",
    //   "md-710": "710px",
    //   "xs-550": "550px",
    //   xs550: "550px",
    //   xs500: "500px",
    //   xs400: '400px',
    // },

    // screens: {
    //   xs550: "550px",
    //   xs500: "500px",
    //   xs400: '400px',
    // },
    fontFamily: {
      productsans: ['productsans', 'sens-sarif'],
      productsansregular: ['productsansregular', 'sens-sarif'],
      productsansblack: ['productsansblack', 'sens-sarif'],
      rockwell: ['rockwell', 'sens-sarif'],
      productsansMedium: ['productsansmedium', 'sens-sarif'],
    },
    colors: {},
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    boxShadow: {
      'custom': '0 0px 25px -5px rgba(0, 0, 0, 0.05)',
      'primary2': '0 0px 30px 3px rgba(31, 199, 104, 0.8)',
      'Blue': '0px 0px 40px 0px #0146DD',
      'borderRed': '0px 0px 40px 0px #F51A1A99' ,
      'green': '0px 10px 40px 0px rgba(247, 239, 138, 0.8)', // Increase opacity
      'black': '0px 0px 40px 0px #0E6900',
    },
  },
  plugins: [tailwindAnimate],

};
// export const plugins = [tailwindAnimate];

export default config;