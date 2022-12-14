(this.webpackJsonppwa_pizza_cook = this.webpackJsonppwa_pizza_cook || []).push([
  [0],
  {
    48: function (e, n, t) {},
    50: function (e, n, t) {},
    64: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(2),
        i = t.n(r),
        c = t(30),
        a = t.n(c),
        o = (t(48), t(14)),
        s = t.n(o),
        u = t(18),
        l = t(19),
        p = (t(50), t(29)),
        d = t(10),
        j = t(20);
      function b() {
        return {
          loading: 0,
          recipes: null,
          article_count: 0,
          addArticle: function () {
            this.article_count += 1;
          },
        };
      }
      var h = t(3),
        x = i.a.createContext(null),
        g = function (e) {
          var n = e.children,
            t = Object(j.a)(b);
          return Object(h.jsx)(x.Provider, { value: t, children: n });
        },
        f = function () {
          return i.a.useContext(x);
        },
        O = t(22);
      t(56);
      t(57).config();
      O.a.initializeApp({
        apiKey: "AIzaSyBrKSryFJhsu6tz4XeUSYDYjDwvKnfRIyk",
        authDomain: "pwa-cook-pizza.firebaseapp.com",
        projectId: "pwa-cook-pizza",
        storageBucket: "pwa-cook-pizza.appspot.com",
        messagingSenderId: "4077784197",
        appId: "1:4077784197:web:87999e9d9abadf63156dec",
      }),
        O.a
          .firestore()
          .enablePersistence({ synchronizeTabs: !0 })
          .catch(function (e) {
            return console.log(e);
          });
      var v,
        w,
        m,
        k,
        y,
        z,
        E,
        D,
        S,
        _,
        C,
        W,
        I,
        F,
        P,
        B,
        A = function () {
          try {
            return O.a.firestore().collection("recipes").get();
          } catch (e) {
            throw (console.log(e), new Error("Error: Getting Recipes"));
          }
        },
        L = (function () {
          var e = Object(u.a)(
            s.a.mark(function e() {
              var n, t;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), A();
                      case 3:
                        return (
                          (n = e.sent),
                          (t = []),
                          n.forEach(function (e) {
                            t.push(e.data());
                          }),
                          e.abrupt("return", t)
                        );
                      case 9:
                        throw (
                          ((e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          new Error("Error: Getting Data"))
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        V = (function () {
          var e = Object(u.a)(
            s.a.mark(function e() {
              var n, t;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (n = O.a
                            .firestore()
                            .collection("settings")
                            .doc("shopping_cart")),
                          (e.next = 4),
                          n.get()
                        );
                      case 4:
                        return (
                          (t = e.sent),
                          e.abrupt("return", t.data().article_count)
                        );
                      case 8:
                        throw (
                          ((e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          new Error("Error: Getting Data"))
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        T = (function () {
          var e = Object(u.a)(
            s.a.mark(function e() {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (n = O.a
                            .firestore()
                            .collection("settings")
                            .doc("shopping_cart")),
                          (e.next = 4),
                          n.update({
                            article_count:
                              O.a.firestore.FieldValue.increment(1),
                          })
                        );
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        throw (
                          ((e.prev = 6),
                          (e.t0 = e.catch(0)),
                          new Error("Error: Updating Data"))
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 6]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        U = O.a.messaging(),
        G = (function () {
          var e = Object(u.a)(
            s.a.mark(function e() {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), U.requestPermission()
                        );
                      case 3:
                        return (e.next = 5), U.getToken();
                      case 5:
                        return (
                          (n = e.sent),
                          console.log("Your token is:", n),
                          e.abrupt("return", n)
                        );
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(0)), console.error(e.t0);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        H = t(7),
        J = t(8),
        K = J.a.div(
          v ||
            (v = Object(H.a)([
              "\n  border-radius: 20px;\n  position: relative;\n  background-color: white;\n  h2 {\n    color: #5e8e65;\n  }\n  h3 {\n    color: black;\n  }\n  p {\n    color: black;\n  }\n",
            ]))
        ),
        M = J.a.img(
          w ||
            (w = Object(H.a)([
              "\n  width: 100%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n",
            ]))
        ),
        Y = J.a.div(
          m ||
            (m = Object(H.a)([
              "\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  border-radius: 50%;\n  padding: 1rem;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  right: 10px;\n  top: 102px;\n  cursor: pointer;\n",
            ]))
        ),
        N = J.a.img(
          k || (k = Object(H.a)(["\n  width: 50px;\n  height: 50px;\n"]))
        ),
        R = J.a.div(y || (y = Object(H.a)(["\n  padding: 2rem;\n"]))),
        q = function (e) {
          var n = f();
          "serviceWorker" in navigator &&
            navigator.serviceWorker
              .register("./sw.js")
              .then(function () {
                return navigator.serviceWorker.ready;
              })
              .then(function () {
                navigator.serviceWorker.addEventListener(
                  "message",
                  function (e) {
                    e.data &&
                      void 0 !== e.data.state &&
                      (n.article_count = e.data.state);
                  }
                );
              });
          var t = (function () {
            var e = Object(u.a)(
              s.a.mark(function e() {
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), n.addArticle();
                        case 3:
                          return (e.next = 5), T();
                        case 5:
                          return (
                            (e.next = 7),
                            (t = { state: n.article_count }),
                            void (
                              navigator.serviceWorker &&
                              navigator.serviceWorker.controller &&
                              navigator.serviceWorker.controller.postMessage(t)
                            )
                          );
                        case 7:
                          e.next = 13;
                          break;
                        case 9:
                          throw (
                            ((e.prev = 9),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            new Error("Error: Updating Data"))
                          );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                    var t;
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(h.jsxs)(K, {
            children: [
              Object(h.jsx)(Y, {
                onClick: function () {
                  t();
                },
                children: Object(h.jsx)(N, {
                  src: "/assets/images/shopping-cart.png",
                  alt: "Einkaufswagen",
                }),
              }),
              "Vorspeise" === e.recipe.category &&
                Object(h.jsx)(M, {
                  src: "/assets/images/starter.png",
                  alt: "Bild einer Vorpseise",
                }),
              "Hauptspeise" === e.recipe.category &&
                Object(h.jsx)(M, {
                  src: "/assets/images/main_dish.png",
                  alt: "Bild einer Hauptspeise",
                }),
              "Dessert" === e.recipe.category &&
                Object(h.jsx)(M, {
                  src: "/assets/images/dessert.png",
                  alt: "Bild eines Desserts",
                }),
              Object(h.jsxs)(R, {
                children: [
                  Object(h.jsx)("h2", { children: e.recipe.title }),
                  Object(h.jsx)("h3", { children: e.recipe.category }),
                  Object(h.jsx)("p", { children: e.recipe.procedure }),
                ],
              }),
            ],
          });
        },
        X = J.a.ul(
          z ||
            (z = Object(H.a)([
              "\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n",
            ]))
        ),
        Q = J.a.li(
          E ||
            (E = Object(H.a)([
              "\n  background-color: white;\n  width: 30%;\n  border-radius: 20px;\n  margin-bottom: 50px;\n  box-shadow: 0px 0px 9px gray;\n  \n  @media(max-width: 850px) {\n    width: 45%;\n  }\n  \n  @media(max-width: 850px) {\n    width: 45%;\n  }\n  \n  @media(max-width: 650px) {\n    width: 90%;\n  }\n",
            ]))
        ),
        Z = function () {
          var e = f().recipes.map(function (e) {
            return Object(h.jsx)(
              Q,
              { children: Object(h.jsx)(q, { recipe: e }) },
              e.title
            );
          });
          return Object(j.b)(function () {
            return Object(h.jsx)(X, { children: e });
          });
        },
        $ = J.a.div(
          D ||
            (D = Object(H.a)([
              "\n  background-color: #eaeaea;\n  padding-top: 40px;\n  padding-bottom: 20px;\n  border-top-right-radius: 40px;\n  min-height: 70vh;\n",
            ]))
        ),
        ee = J.a.div(
          S ||
            (S = Object(H.a)([
              "\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 1000px;\n  margin: 0 auto;\n",
            ]))
        ),
        ne = function () {
          return Object(h.jsx)("img", {
            onClick: function () {
              navigator.share &&
                navigator
                  .share({
                    title: "Cook & Pizza",
                    text: "Hunrig? Dann bestelle jetzt!",
                    url: "https://pwa-cook-pizza.web.app/",
                  })
                  .then(function () {
                    return console.log("Successful share");
                  })
                  .catch(function (e) {
                    return console.log("Error sharing", e);
                  });
            },
            src: "./assets/images/share.svg",
          });
        },
        te = function () {
          return Object(h.jsx)($, {
            children: Object(h.jsx)(ee, { children: Object(h.jsx)(Z, {}) }),
          });
        },
        re = J.a.ul(
          _ || (_ = Object(H.a)(["\n li {\n  padding-bottom: 20px;\n }\n"]))
        ),
        ie = function () {
          return Object(h.jsx)($, {
            children: Object(h.jsxs)(ee, {
              children: [
                Object(h.jsx)("h2", {
                  children:
                    "Hungrig??! Der ultimative Cook & Pizza Online-Shop!",
                }),
                Object(h.jsx)("h3", {
                  children: "Von der Vorspeise bis hin zum Dessert",
                }),
                Object(h.jsxs)(re, {
                  children: [
                    Object(h.jsx)("li", {
                      children:
                        "Packe deine gew\xfcnschten Gerichte in den Warenkorb!",
                    }),
                    Object(h.jsx)("li", {
                      children: "Installiere die App wenn du m\xf6chtest!",
                    }),
                    Object(h.jsx)("li", {
                      children:
                        "Bekomme Notifications, wenn dein Fenster nicht gerade im Fokus steht!",
                    }),
                    Object(h.jsx)("li", {
                      children: "Update auf die neueste Version!",
                    }),
                    Object(h.jsx)("li", {
                      children: "Deine Tabs werden automatisch synchronisiert!",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ce = J.a.div(
          C ||
            (C = Object(H.a)([
              "\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n \n  a, h1 {\n    color: white;\n    text-size: 20px;\n    display: inline;\n    text-decoration: none;\n  }\n  h1 {\n  padding-right: 20px;\n  }\n\n  img {\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n  }\n",
            ]))
        ),
        ae = function () {
          return Object(h.jsxs)(ce, {
            children: [
              Object(h.jsxs)(p.b, {
                to: "/",
                children: [
                  Object(h.jsx)("h1", { children: "Cook & Pizza" }),
                  Object(h.jsx)(ne, {}),
                ],
              }),
              Object(h.jsx)(p.b, {
                to: "/info",
                children: Object(h.jsx)("img", {
                  src: "./assets/images/info.svg",
                  alt: "Informations Icon",
                }),
              }),
            ],
          });
        },
        oe = J.a.button(
          W ||
            (W = Object(H.a)([
              "\n  background: transparent;\n  border-radius: 3px;\n  border: 1.5px solid white;\n  color: white;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n  with: 200px;\n  height: 50px;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 15px;\n",
            ]))
        ),
        se = function () {
          var e = Object(r.useState)(!1),
            n = Object(l.a)(e, 2),
            t = n[0],
            i = n[1],
            c = Object(r.useState)(null),
            a = Object(l.a)(c, 2),
            o = a[0],
            s = a[1];
          Object(r.useEffect)(function () {
            window.addEventListener("beforeinstallprompt", function (e) {
              e.preventDefault(), console.log("PWA is supported!"), i(!0), s(e);
            });
          }, []);
          return t
            ? Object(h.jsx)(oe, {
                onClick: function (e) {
                  console.log("installed"), e.preventDefault(), o && o.prompt();
                },
                children: "Installieren",
              })
            : null;
        },
        ue = J.a.footer(
          I ||
            (I = Object(H.a)([
              "\n  background-color: #5e8e65;\n  padding: 1rem;\n  position: sticky;\n  bottom: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  padding-right: 30px;\n",
            ]))
        ),
        le = J.a.div(
          F ||
            (F = Object(H.a)([
              "\n  position: relative;\n  p {\n    top: -20px;\n    right: -10px;\n    position: absolute;\n    background-color: white;\n    color: #5e8e65;\n    padding: 0.5rem;\n    border-radius: 50%;\n    font-size: 10px;\n  }\n",
            ]))
        ),
        pe = function () {
          var e = Object(r.useState)(!1),
            n = Object(l.a)(e, 2),
            t = n[0],
            i = n[1],
            c = Object(r.useState)(null),
            a = Object(l.a)(c, 2),
            o = a[0],
            s = a[1];
          Object(r.useEffect)(function () {
            "serviceWorker" in navigator &&
              navigator.serviceWorker.register("sw.js").then(function (e) {
                u(e, p);
              });
          }, []);
          var u = function (e, n) {
              function t() {
                e.installing.addEventListener("statechange", function () {
                  "installed" === this.state && n(e);
                });
              }
              if (e) {
                if (e.waiting) return n(e);
                e.installing && t(), e.addEventListener("updatefound", t);
              }
            },
            p = function (e) {
              e && (s(e), i(!0));
            };
          return t
            ? Object(h.jsx)(oe, {
                onClick: function () {
                  console.log("update button triggered"),
                    o.waiting.postMessage("skipWaiting");
                },
                children: "Update",
              })
            : null;
        },
        de = function () {
          var e = f();
          return Object(j.b)(function () {
            return Object(h.jsxs)(ue, {
              children: [
                Object(h.jsxs)("div", {
                  children: [
                    Object(h.jsx)(se, {}),
                    Object(h.jsx)(pe, {}),
                    Object(h.jsx)(oe, {
                      onClick: G,
                      children: "Notifications",
                    }),
                  ],
                }),
                Object(h.jsxs)(le, {
                  children: [
                    Object(h.jsx)(N, {
                      src: "/assets/images/shopping-cart.png",
                      alt: "Einkaufswagen",
                    }),
                    Object(h.jsx)("p", { children: e.article_count }),
                  ],
                }),
              ],
            });
          });
        },
        je = Object(J.b)(
          P ||
            (P = Object(H.a)([
              "\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n",
            ]))
        ),
        be = J.a.div(
          B ||
            (B = Object(H.a)([
              '\n  & {\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n  }\n  &:after {\n    content: " ";\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border-radius: 50%;\n    border: 6px solid black;\n    border-color: black transparent black transparent;\n    animation: ',
              " 1.2s linear infinite;\n  }\n",
            ])),
          je
        ),
        he = function () {
          return Object(h.jsx)($, {
            children: Object(h.jsx)(ee, { children: Object(h.jsx)(be, {}) }),
          });
        };
      var xe = function () {
          var e = Object(r.useState)(!1),
            n = Object(l.a)(e, 2),
            t = (n[0], n[1], Object(r.useState)({ title: "", body: "" })),
            i = Object(l.a)(t, 2),
            c = (i[0], i[1], f());
          return (
            Object(r.useEffect)(
              Object(u.a)(
                s.a.mark(function e() {
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), L();
                          case 3:
                            return (c.recipes = e.sent), (e.next = 6), V();
                          case 6:
                            (c.article_count = e.sent), (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              ),
              []
            ),
            Object(j.b)(function () {
              return Object(h.jsx)(h.Fragment, {
                children: Object(h.jsxs)(p.a, {
                  children: [
                    Object(h.jsx)(ae, {}),
                    Object(h.jsxs)(d.c, {
                      children: [
                        Object(h.jsx)(d.a, {
                          path: "/info",
                          children:
                            null === c.recipes
                              ? Object(h.jsx)(he, {})
                              : Object(h.jsx)(ie, {}),
                        }),
                        Object(h.jsx)(d.a, {
                          path: "/",
                          children:
                            null === c.recipes
                              ? Object(h.jsx)(he, {})
                              : Object(h.jsx)(te, {}),
                        }),
                      ],
                    }),
                    Object(h.jsx)(de, {}),
                  ],
                }),
              });
            })
          );
        },
        ge = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 65))
              .then(function (n) {
                var t = n.getCLS,
                  r = n.getFID,
                  i = n.getFCP,
                  c = n.getLCP,
                  a = n.getTTFB;
                t(e), r(e), i(e), c(e), a(e);
              });
        },
        fe = t(40),
        Oe = t(41),
        ve = t(43),
        we = t(42),
        me = (function (e) {
          Object(ve.a)(t, e);
          var n = Object(we.a)(t);
          function t(e) {
            var r;
            return (
              Object(fe.a)(this, t),
              ((r = n.call(this, e)).state = { hasError: !1 }),
              r
            );
          }
          return (
            Object(Oe.a)(
              t,
              [
                {
                  key: "render",
                  value: function () {
                    return this.state.hasError
                      ? Object(h.jsx)("h1", {
                          children: "Something went wrong.",
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ]
            ),
            t
          );
        })(i.a.Component);
      a.a.render(
        Object(h.jsx)(i.a.StrictMode, {
          children: Object(h.jsx)(g, {
            children: Object(h.jsx)(me, { children: Object(h.jsx)(xe, {}) }),
          }),
        }),
        document.getElementById("root")
      ),
        ge();
    },
  },
  [[64, 1, 2]],
]);
//# sourceMappingURL=main.6e9edd01.chunk.js.map
