/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent } from '../astro.01be9555.mjs';
import 'html-escaper';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'express/lib/application.js';

function Navbar() {
  return /* @__PURE__ */ jsxs("div", {
    className: "navbar bg-base-ghost px-5 py-5",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "navbar-start",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "dropdown",
        children: [/* @__PURE__ */ jsx("label", {
          tabIndex: 0,
          className: "btn btn-ghost lg:hidden",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M4 6h16M4 12h8m-8 6h16"
            })
          })
        }), /* @__PURE__ */ jsxs("ul", {
          tabIndex: 0,
          className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",
          children: [/* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              children: "Item 1"
            })
          }), /* @__PURE__ */ jsxs("li", {
            tabIndex: 0,
            children: [/* @__PURE__ */ jsxs("a", {
              className: "justify-between",
              children: ["Parent", /* @__PURE__ */ jsx("svg", {
                className: "fill-current",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx("path", {
                  d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                })
              })]
            }), /* @__PURE__ */ jsxs("ul", {
              className: "p-2",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  children: "Submenu 1"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  children: "Submenu 2"
                })
              })]
            })]
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              children: "Item 3"
            })
          })]
        })]
      }), /* @__PURE__ */ jsx("a", {
        className: "btn btn-ghost normal-case text-xl"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "navbar-center hidden lg:flex",
      children: /* @__PURE__ */ jsxs("ul", {
        className: "menu menu-horizontal px-1",
        children: [/* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx("a", {
            children: "Item 1"
          })
        }), /* @__PURE__ */ jsxs("li", {
          tabIndex: 0,
          children: [/* @__PURE__ */ jsxs("a", {
            children: ["Parent", /* @__PURE__ */ jsx("svg", {
              className: "fill-current",
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", {
                d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              })
            })]
          }), /* @__PURE__ */ jsxs("ul", {
            className: "p-2",
            children: [/* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                children: "Submenu 1"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                children: "Submenu 2"
              })
            })]
          })]
        }), /* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx("a", {
            children: "Item 3"
          })
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "navbar-end",
      children: /* @__PURE__ */ jsx("a", {
        className: "btn bg-primary",
        children: "Log In"
      })
    })]
  });
}
__astro_tag_component__(Navbar, "@astrojs/react");

const landingPageImage = "/_astro/RunWay_ob1.9a4e663d.png";

const Runway = "/_astro/RunWay.cbe27d70.png";

function BudgetPage() {
  const [budget, setBudget] = useState("");
  const handleBudgetChange = (event) => {
    const regex = /^[0-9\b]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setBudget(event.target.value);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col justify-center items-center gap-5",
    children: [/* @__PURE__ */ jsx("h2", {
      className: "text-5xl col text-black",
      children: "What's your budget?"
    }), /* @__PURE__ */ jsx("input", {
      className: "bg-white text-black rounded-md w-64 h-10 p-2",
      type: "text",
      placeholder: "£3000",
      value: budget,
      onChange: handleBudgetChange
    }), /* @__PURE__ */ jsx("h2", {
      className: "text-5xl text-black",
      children: "And comfort level?"
    }), /* @__PURE__ */ jsx("div", {
      id: "comfort-level",
      children: /* @__PURE__ */ jsxs("div", {
        id: "base-level",
        children: [/* @__PURE__ */ jsx("button", {
          children: "Base"
        }), /* @__PURE__ */ jsx("span", {
          children: "Ultra Affordable"
        })]
      })
    })]
  });
}
__astro_tag_component__(BudgetPage, "@astrojs/react");

function LandingPage() {
  const [showBudgetPage, setShowBudgetPage] = useState(false);
  const handleTakeoffClick = () => {
    setShowBudgetPage(true);
    console.log("clicked");
  };
  console.log("Fuck off");
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col justify-center items-center",
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("img", {
      src: Runway,
      alt: "runway-header",
      className: "w-3/4 mt-6"
    }), /* @__PURE__ */ jsx("img", {
      src: landingPageImage,
      alt: "animated man and globe",
      className: "w-96 h-96 object-cover rounded-md mb-6"
    }), /* @__PURE__ */ jsx("p", {
      className: "text-lg text-center text-gray-700 mb-6 font-sans-serif font-bold italic subpixel-antialiased",
      children: "Welcome to Runway! Ready to travel smarter, not harder? Tell us your travel budget and we'll show you where you can go. Let's explore!"
    }), /* @__PURE__ */ jsx("button", {
      className: "btn mb-20",
      onClick: handleTakeoffClick,
      children: "Prepare for takeoff!"
    }), /* @__PURE__ */ jsx(BudgetPage, {})]
  });
}
__astro_tag_component__(LandingPage, "@astrojs/react");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>Welcome to RunWay!</title>
  ${renderHead($$result)}</head>
  <body class="bg-gradient-to-t from-blue-500">
      ${renderComponent($$result, "LandingPage", LandingPage, {})}
  </body></html>`;
}, "/home/taylorhall/Desktop/myRepos/runway-project/Runway-Frontend/src/pages/index.astro");

const $$file = "/home/taylorhall/Desktop/myRepos/runway-project/Runway-Frontend/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
