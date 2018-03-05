/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'sanctuary-computer.myshopify.com',
      apiKey: 'cf13e4a112e4131ac19e21cd2bbb1047',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [521990701092],
        node: document.getElementById('product-component-19a4cf4d479'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "BUY NOW"
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#073763",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#0c5ea8"
        },
        ":focus": {
          "background-color": "#0c5ea8"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-weight": "bold"
      },
      "description": {
        "font-weight": "bold"
      },
      "price": {
        "font-weight": "bold"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#073763",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#0c5ea8"
        },
        ":focus": {
          "background-color": "#0c5ea8"
        },
        "font-weight": "bold"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#073763",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#0c5ea8"
        },
        ":focus": {
          "background-color": "#0c5ea8"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-weight": "bold"
      },
      "description": {
        "font-weight": "bold"
      },
      "price": {
        "font-weight": "bold"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#073763",
        ":hover": {
          "background-color": "#0c5ea8"
        },
        ":focus": {
          "background-color": "#0c5ea8"
        },
        "font-weight": "bold"
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-weight": "bold"
      },
      "select": {
        "font-weight": "bold"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
