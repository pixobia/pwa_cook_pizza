(this.webpackJsonppwa_pizza_cook = this.webpackJsonppwa_pizza_cook || []).push([
  [0],
  {
    47: function (e, n, t) {},
    49: function (e, n, t) {},
    63: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(2),
        c = t.n(r),
        a = t(26),
        i = t.n(a),
        o = (t(47), t(20)),
        s = t.n(o),
        p = t(27),
        l = (t(49), t(38)),
        d = t(8),
        b = t(16);
      function u() {
        return { loading: 0, recipes: null };
      }
      var j,
        h,
        x,
        g,
        f,
        O,
        w,
        m,
        v,
        k,
        y,
        z,
        E = t(4),
        F = c.a.createContext(null),
        B = function (e) {
          var n = e.children,
            t = Object(b.a)(u);
          return Object(E.jsx)(F.Provider, { value: t, children: n });
        },
        D = function () {
          return c.a.useContext(F);
        },
        S = t(10),
        _ = t(11),
        C =
          (_.a.button(
            j ||
              (j = Object(S.a)([
                "\nbackground: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n  with: 200px;\n  height: 100px;\n",
              ]))
          ),
          _.a.h1(h || (h = Object(S.a)(["\ncolor: white;\n"])))),
        I =
          (_.a.div(x || (x = Object(S.a)(["\nbackground-color: grey;\n"]))),
          t.p + "static/media/starter.336f91aa.png"),
        P = t.p + "static/media/main_dish.8b10d1d7.png",
        J = t.p + "static/media/dessert.6c0d4abb.png",
        K = t.p + "static/media/shopping-cart.96c73cb4.png",
        R = _.a.div(
          g ||
            (g = Object(S.a)([
              "\nborder-radius: 20px;\nposition: relative;\n    background-color: white;\n    h2 {\n      color: #5E8E65;\n    }\n    h3 {\n      color: black;\n    }\n    p {\n      color: black;\n    }\n",
            ]))
        ),
        T = _.a.img(
          f ||
            (f = Object(S.a)([
              "\n    width: 100%;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n",
            ]))
        ),
        A = _.a.div(
          O ||
            (O = Object(S.a)([
              "\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    border-radius: 50%;\n    padding: 1rem;\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n    right: 10px;\n    bottom: 170px;\n",
            ]))
        ),
        G = _.a.img(
          w || (w = Object(S.a)(["\n  width: 50px;\n  height: 50px;\n"]))
        ),
        H = _.a.div(m || (m = Object(S.a)(["\n  padding: 2rem;\n"]))),
        L = function (e) {
          D();
          return Object(b.b)(function () {
            return Object(E.jsxs)(R, {
              children: [
                Object(E.jsx)(A, {
                  children: Object(E.jsx)(G, { src: K, alt: "Einkaufswagen" }),
                }),
                "Vorpseise" === e.recipe.category &&
                  Object(E.jsx)(T, { src: I, alt: "Bild einer Vorpseise" }),
                "Hauptspeise" === e.recipe.category &&
                  Object(E.jsx)(T, { src: P, alt: "Bild einer Hauptspeise" }),
                "Dessert" === e.recipe.category &&
                  Object(E.jsx)(T, { src: J, alt: "Bild eines Desserts" }),
                Object(E.jsxs)(H, {
                  children: [
                    Object(E.jsx)("h2", { children: e.recipe.title }),
                    Object(E.jsx)("h3", { children: e.recipe.category }),
                    Object(E.jsx)("p", { children: e.recipe.procedure }),
                  ],
                }),
              ],
            });
          });
        },
        V = _.a.ul(
          v ||
            (v = Object(S.a)([
              "\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n",
            ]))
        ),
        Y = _.a.li(
          k ||
            (k = Object(S.a)([
              "\n  background-color: white;\n  width: 40%;\n  border-radius: 20px;\n",
            ]))
        ),
        M = function () {
          var e = D().recipes.map(function (e) {
            return Object(E.jsx)(
              Y,
              { children: Object(E.jsx)(L, { recipe: e }) },
              e.title
            );
          });
          return Object(b.b)(function () {
            return Object(E.jsx)(V, { children: e });
          });
        },
        U = function () {
          D();
          return Object(b.b)(function () {
            return Object(E.jsxs)(E.Fragment, {
              children: [
                Object(E.jsx)("h2", { children: "Rezepte" }),
                Object(E.jsx)(M, {}),
              ],
            });
          });
        },
        X = Object(_.b)(
          y ||
            (y = Object(S.a)([
              "\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n",
            ]))
        ),
        q = _.a.div(
          z ||
            (z = Object(S.a)([
              '\n    & {\n        display: inline-block;\n        width: 80px;\n        height: 80px;\n    }\n    &:after {\n        content: " ";\n        display: block;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border-radius: 50%;\n        border: 6px solid black;\n        border-color: black transparent black transparent;\n        animation: ',
              " 1.2s linear infinite;\n    }\n",
            ])),
          X
        ),
        N = function () {
          return Object(E.jsx)(q, {});
        },
        Q = t(28);
      t(56);
      t(57).config();
      Q.a.initializeApp({
        apiKey: "AIzaSyBrKSryFJhsu6tz4XeUSYDYjDwvKnfRIyk",
        authDomain: "pwa-cook-pizza.firebaseapp.com",
        projectId: "pwa-cook-pizza",
        storageBucket: "pwa-cook-pizza.appspot.com",
        messagingSenderId: "4077784197",
        appId: "1:4077784197:web:87999e9d9abadf63156dec",
      }),
        Q.a
          .firestore()
          .enablePersistence({ synchronizeTabs: !0 })
          .catch(function (e) {
            return console.log(e);
          });
      var W = function () {
          try {
            return (
              console.log("connection to FB"),
              Q.a.firestore().collection("recipes").get()
            );
          } catch (e) {
            throw (console.log(e), new Error("Error: Getting Recipes"));
          }
        },
        Z = (function () {
          var e = Object(p.a)(
            s.a.mark(function e() {
              var n, t;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          console.log("connected"),
                          (e.next = 4),
                          W()
                        );
                      case 4:
                        return (
                          (n = e.sent),
                          (t = []),
                          n.forEach(function (e) {
                            t.push(e.data()), console.log(e.data());
                          }),
                          e.abrupt("return", t)
                        );
                      case 10:
                        throw (
                          ((e.prev = 10),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          new Error("Error: Getting Data"))
                        );
                      case 14:
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
        })();
      var $ = function () {
          var e = D();
          return (
            Object(r.useEffect)(
              Object(p.a)(
                s.a.mark(function n() {
                  return s.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.prev = 0), (n.next = 3), Z();
                          case 3:
                            (e.recipes = n.sent),
                              console.log(e.recipes),
                              (n.next = 10);
                            break;
                          case 7:
                            (n.prev = 7),
                              (n.t0 = n.catch(0)),
                              console.log(n.t0);
                          case 10:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 7]]
                  );
                })
              ),
              []
            ),
            Object(b.b)(function () {
              return Object(E.jsxs)(E.Fragment, {
                children: [
                  Object(E.jsx)(C, { children: "Cook & Pizza" }),
                  Object(E.jsx)(l.a, {
                    children: Object(E.jsxs)(d.c, {
                      children: [
                        Object(E.jsx)(d.a, {
                          path: "/download_work_design_comics",
                        }),
                        Object(E.jsx)(d.a, {
                          path: "/",
                          children:
                            null === e.recipes
                              ? Object(E.jsx)(N, {})
                              : Object(E.jsx)(U, {}),
                        }),
                      ],
                    }),
                  }),
                ],
              });
            })
          );
        },
        ee = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 64))
              .then(function (n) {
                var t = n.getCLS,
                  r = n.getFID,
                  c = n.getFCP,
                  a = n.getLCP,
                  i = n.getTTFB;
                t(e), r(e), c(e), a(e), i(e);
              });
        },
        ne = t(39),
        te = t(40),
        re = t(42),
        ce = t(41),
        ae = (function (e) {
          Object(re.a)(t, e);
          var n = Object(ce.a)(t);
          function t(e) {
            var r;
            return (
              Object(ne.a)(this, t),
              ((r = n.call(this, e)).state = { hasError: !1 }),
              r
            );
          }
          return (
            Object(te.a)(
              t,
              [
                {
                  key: "render",
                  value: function () {
                    return this.state.hasError
                      ? Object(E.jsx)("h1", {
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
        })(c.a.Component);
      i.a.render(
        Object(E.jsx)(c.a.StrictMode, {
          children: Object(E.jsx)(B, {
            children: Object(E.jsx)(ae, { children: Object(E.jsx)($, {}) }),
          }),
        }),
        document.getElementById("root")
      ),
        ee();
    },
  },
  [[63, 1, 2]],
]);
//# sourceMappingURL=main.6d2b6920.chunk.js.map
