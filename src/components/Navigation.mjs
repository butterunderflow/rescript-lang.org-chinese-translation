// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Url from "../common/Url.mjs";
import * as Icon from "./Icon.mjs";
import * as Next from "../bindings/Next.mjs";
import * as Util from "../common/Util.mjs";
import * as Curry from "rescript/lib/es6/curry.js";
import * as Hooks from "../common/Hooks.mjs";
import * as React from "react";
import * as Constants from "../common/Constants.mjs";
import * as DocSearch from "./DocSearch.mjs";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactDOMStyle from "@rescript/react/src/ReactDOMStyle.mjs";
import * as VersionSelect from "./VersionSelect.mjs";

var link = "no-underline block text-inherit hover:cursor-pointer hover:text-fire-30 text-gray-40 mb-px";

var activeLink = "text-inherit font-medium text-fire-30 border-b border-fire";

function linkOrActiveLink(target, route) {
  if (target === route) {
    return activeLink;
  } else {
    return link;
  }
}

function linkOrActiveLinkSubroute(target, route) {
  if (route.startsWith(target)) {
    return activeLink;
  } else {
    return link;
  }
}

function linkOrActiveApiSubroute(route) {
  var url = Url.parse(route);
  var match = Belt_Array.get(url.pagepath, 0);
  if (match === "api") {
    return activeLink;
  } else {
    return link;
  }
}

var githubHref = "https://github.com/reason-association/rescript-lang.org#rescript-langorg";

var discourseHref = "https://forum.rescript-lang.org";

function Navigation$CollapsibleLink(Props) {
  var title = Props.title;
  var onStateChange = Props.onStateChange;
  var allowHoverOpt = Props.allowHover;
  var id = Props.id;
  var state = Props.state;
  var activeOpt = Props.active;
  var children = Props.children;
  var allowHover = allowHoverOpt !== undefined ? allowHoverOpt : true;
  var active = activeOpt !== undefined ? activeOpt : false;
  var onClick = function (_evt) {
    Curry._2(onStateChange, id, state >= 2 ? /* KeepOpen */0 : /* Closed */2);
  };
  var onMouseEnter = function (evt) {
    evt.preventDefault();
    if (allowHover) {
      return Curry._2(onStateChange, id, /* HoverOpen */1);
    }
    
  };
  var isOpen = state < 2;
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "relative",
                  onMouseEnter: onMouseEnter
                }, React.createElement("div", {
                      className: "flex items-center"
                    }, React.createElement("button", {
                          className: (
                            active ? activeLink : link
                          ) + (" border-none flex items-center hover:cursor-pointer " + (
                              isOpen ? " text-fire-30" : ""
                            )),
                          tabIndex: 0,
                          onClick: onClick
                        }, React.createElement("span", {
                              className: active ? "border-b border-fire" : ""
                            }, title))), React.createElement("div", {
                      className: (
                        isOpen ? "flex" : "hidden"
                      ) + " fixed left-0 overflow-y-scroll overflow-x-hidden border-gray-80 border-gray-40 min-w-320 w-full h-full bg-white sm:overflow-y-auto sm:bg-transparent sm:h-auto sm:justify-center sm:rounded-bl-xl sm:rounded-br-xl sm:shadow",
                      style: {
                        marginTop: "1rem"
                      }
                    }, React.createElement("div", {
                          className: "w-full"
                        }, children))));
}

function Navigation$DocsSection$LinkCard(Props) {
  var icon = Props.icon;
  var title = Props.title;
  var description = Props.description;
  var href = Props.href;
  var activeOpt = Props.active;
  var active = activeOpt !== undefined ? activeOpt : false;
  var isAbsolute = Util.Url.isAbsolute(href);
  var content = React.createElement("div", {
        className: "hover:bg-gray-5 hover:shadow hover:-mx-8 hover:px-8 hover:cursor-pointer active:bg-gray-20 py-4 flex space-x-4 items-start rounded-xl"
      }, icon, React.createElement("div", undefined, React.createElement("div", {
                className: "flex items-center text-16 font-medium " + (
                  active ? "text-fire" : "text-gray-80"
                ) + ""
              }, React.createElement("span", undefined, title), isAbsolute ? React.createElement(Icon.ExternalLink.make, {
                      className: "inline-block ml-2 w-4 h-4"
                    }) : null), React.createElement("div", {
                className: "block text-14 text-gray-60 " + (
                  active ? "text-fire-50" : "text-gray-60"
                ) + ""
              }, description)));
  if (isAbsolute) {
    return React.createElement("a", {
                className: "",
                href: href,
                rel: "noopener noreferrer"
              }, content);
  } else {
    return React.createElement(Next.Link.make, {
                href: href,
                children: React.createElement("a", {
                      className: ""
                    }, content)
              });
  }
}

function Navigation$DocsSection(Props) {
  var router = Next.Router.useRouter(undefined);
  var url = Url.parse(router.route);
  var match = React.useState(function () {
        var version = url.version;
        if (typeof version === "number") {
          return "latest";
        } else {
          return version._0;
        }
      });
  var setVersion = match[1];
  var version = match[0];
  var languageManual = Constants.languageManual(version);
  var documentation = [
    {
      imgSrc: "/static/ic_manual@2x.png",
      title: "Language Manual",
      description: "Reference for all language features",
      href: "/docs/manual/" + version + "/introduction",
      isActive: (function (url) {
          var match = url.base;
          if (match.length !== 2) {
            return false;
          }
          var match$1 = match[0];
          if (match$1 !== "docs") {
            return false;
          }
          var match$2 = match[1];
          if (match$2 === "manual") {
            return true;
          } else {
            return false;
          }
        })
    },
    {
      imgSrc: "/static/ic_rescript_react@2x.png",
      title: "ReScript & React",
      description: "First class bindings for ReactJS",
      href: "/docs/react/latest/introduction",
      isActive: (function (url) {
          var match = url.base;
          if (match.length !== 2) {
            return false;
          }
          var match$1 = match[0];
          if (match$1 !== "docs") {
            return false;
          }
          var match$2 = match[1];
          if (match$2 === "react") {
            return true;
          } else {
            return false;
          }
        })
    },
    {
      imgSrc: "/static/ic_gentype@2x.png",
      title: "GenType",
      description: "Seamless TypeScript & Flow integration",
      href: "/docs/gentype/latest/introduction",
      isActive: (function (url) {
          var match = url.base;
          if (match.length !== 2) {
            return false;
          }
          var match$1 = match[0];
          if (match$1 !== "docs") {
            return false;
          }
          var match$2 = match[1];
          if (match$2 === "gentype") {
            return true;
          } else {
            return false;
          }
        })
    },
    {
      imgSrc: "/static/ic_reanalyze@2x.png",
      title: "Reanalyze",
      description: "Dead Code & Termination analysis",
      href: "https://github.com/reason-association/reanalyze",
      isActive: (function (param) {
          return false;
        })
    }
  ];
  var languageManualColumn = React.createElement("div", {
        className: "flex px-4 sm:justify-center border-r border-gray-10 pt-8 pb-10"
      }, React.createElement("div", undefined, React.createElement("div", {
                className: "text-12 font-medium text-gray-100 tracking-wide uppercase subpixel-antialiased"
              }, "Quick Links"), React.createElement("div", undefined, React.createElement("ul", {
                    className: "space-y-2 ml-2 mt-6"
                  }, languageManual.map(function (item) {
                        var href = item[1];
                        var text = item[0];
                        var linkClass = router.route === href ? "text-fire-50" : "hover:text-fire-50";
                        return React.createElement("li", {
                                    key: text
                                  }, React.createElement("span", {
                                        className: "text-fire mr-2"
                                      }, "-"), React.createElement(Next.Link.make, {
                                        href: href,
                                        children: React.createElement("a", {
                                              className: linkClass
                                            }, text)
                                      }));
                      })))));
  var ecosystemColumn = React.createElement("div", {
        className: "flex px-4 sm:h-full sm:justify-center border-r border-gray-10 pt-8"
      }, React.createElement("div", {
            className: "w-full pb-16",
            style: {
              maxWidth: "19.625rem"
            }
          }, React.createElement("div", {
                className: "text-12 font-medium text-gray-100 tracking-wide uppercase subpixel-antialiased"
              }, "Documentation"), React.createElement("div", undefined, React.createElement("div", {
                    className: "mt-6"
                  }, documentation.map(function (item) {
                        var title = item.title;
                        var icon = React.createElement("img", {
                              style: {
                                width: "2.1875rem"
                              },
                              src: item.imgSrc
                            });
                        return React.createElement(Navigation$DocsSection$LinkCard, {
                                    icon: icon,
                                    title: title,
                                    description: item.description,
                                    href: item.href,
                                    active: Curry._1(item.isActive, url),
                                    key: title
                                  });
                      })))));
  var icon = React.createElement("div", {
        className: "w-6 h-6"
      }, React.createElement("img", {
            className: "w-full",
            src: "/static/ic_package.svg"
          }));
  var match$1 = url.base;
  var active;
  if (match$1.length !== 1) {
    active = false;
  } else {
    var match$2 = match$1[0];
    active = match$2 === "packages" ? true : false;
  }
  var packageLink = React.createElement(Navigation$DocsSection$LinkCard, {
        icon: icon,
        title: "Packages",
        description: "Explore third party libraries and bindings",
        href: "/packages",
        active: active
      });
  var match$3 = url.base;
  var active$1;
  if (match$3.length !== 1) {
    active$1 = false;
  } else {
    var match$4 = match$3[0];
    active$1 = match$4 === "syntax-lookup" ? true : false;
  }
  var icon$1 = React.createElement("div", {
        className: "-mr-2 flex w-6 h-6 justify-center items-center"
      }, React.createElement("img", {
            className: "w-4 h-4",
            src: "/static/ic_search.svg"
          }));
  var syntaxLookupLink = React.createElement(Navigation$DocsSection$LinkCard, {
        icon: icon$1,
        title: "Syntax Lookup",
        description: "Discover all syntax constructs",
        href: "/syntax-lookup",
        active: active$1
      });
  var quickReferenceColumn = React.createElement("div", {
        className: "flex px-4 sm:h-full sm:justify-center pb-12 pt-8 pb-10"
      }, React.createElement("div", {
            className: "w-full",
            style: {
              maxWidth: "19.625rem"
            }
          }, React.createElement("div", {
                className: "text-12 font-medium text-gray-100 tracking-wide uppercase subpixel-antialiased"
              }, "Exploration"), React.createElement("div", {
                className: "mt-6"
              }, React.createElement(React.Fragment, undefined, packageLink, syntaxLookupLink))));
  var onVersionChange = function (evt) {
    evt.preventDefault();
    var version = evt.target.value;
    var match = url.base;
    if (match.length === 2) {
      var match$1 = match[0];
      if (match$1 === "docs") {
        var match$2 = match[1];
        if (match$2 === "manual") {
          var targetUrl = "/" + (url.base.join("/") + ("/" + (version + ("/" + url.pagepath.join("/")))));
          Next.Router.push(router, targetUrl);
        }
        
      }
      
    }
    Curry._1(setVersion, (function (param) {
            return version;
          }));
  };
  var tmp = version === "latest" ? React.createElement("span", {
          className: "text-gray-40 text-12"
        }, "This is the latest docs version") : null;
  return React.createElement("div", {
              className: "relative w-full bg-white pb-32 min-h-full sm:pb-0 text-gray-60 text-14 rounded-bl-xl rounded-br-xl"
            }, React.createElement("div", {
                  className: "flex justify-center w-full py-2 border-b border-gray-10"
                }, React.createElement("div", {
                      className: "px-4 w-full space-x-2 max-w-1280 "
                    }, React.createElement(VersionSelect.make, {
                          onChange: onVersionChange,
                          version: version,
                          availableVersions: Constants.allManualVersions
                        }), tmp)), React.createElement("div", {
                  className: "flex justify-center"
                }, React.createElement("div", {
                      className: "w-full sm:grid sm:grid-cols-3 max-w-1280"
                    }, languageManualColumn, ecosystemColumn, quickReferenceColumn)), React.createElement("img", {
                  className: "hidden xl:block absolute bottom-0 right-0",
                  style: {
                    maxWidth: "27.8rem"
                  },
                  src: "/static/illu_index_rescript@2x.png"
                }));
}

function Navigation$MobileNav(Props) {
  var route = Props.route;
  var base = "font-normal mx-4 py-5 text-gray-20 border-b border-gray-80";
  var extLink = "block hover:cursor-pointer hover:text-white text-gray-60";
  return React.createElement("div", {
              className: "border-gray-80 border-t"
            }, React.createElement("ul", undefined, React.createElement("li", {
                      className: base
                    }, React.createElement(DocSearch.Textbox.make, {
                          id: "docsearch-mobile"
                        })), React.createElement("li", {
                      className: base
                    }, React.createElement(Next.Link.make, {
                          href: "/try",
                          children: React.createElement("a", {
                                className: linkOrActiveLink("/try", route)
                              }, "Playground")
                        })), React.createElement("li", {
                      className: base
                    }, React.createElement(Next.Link.make, {
                          href: "/blog",
                          children: React.createElement("a", {
                                className: linkOrActiveLinkSubroute("/blog", route)
                              }, "Blog")
                        })), React.createElement("li", {
                      className: base
                    }, React.createElement("a", {
                          className: extLink,
                          href: "https://twitter.com/rescriptlang",
                          rel: "noopener noreferrer"
                        }, "Twitter")), React.createElement("li", {
                      className: base
                    }, React.createElement("a", {
                          className: extLink,
                          href: githubHref,
                          rel: "noopener noreferrer"
                        }, "GitHub")), React.createElement("li", {
                      className: base
                    }, React.createElement("a", {
                          className: extLink,
                          href: discourseHref,
                          rel: "noopener noreferrer"
                        }, "Forum"))));
}

function Navigation(Props) {
  var fixedOpt = Props.fixed;
  var overlayState = Props.overlayState;
  var fixed = fixedOpt !== undefined ? fixedOpt : true;
  var minWidth = "20rem";
  var router = Next.Router.useRouter(undefined);
  var route = router.route;
  var match = React.useState(function () {
        return [{
                  title: "Docs",
                  children: React.createElement(Navigation$DocsSection, {}),
                  isActiveRoute: (function (route) {
                      var url = Url.parse(route);
                      var match = url.base;
                      var len = match.length;
                      if (len >= 3) {
                        return false;
                      }
                      switch (len) {
                        case 0 :
                            return false;
                        case 1 :
                            var match$1 = match[0];
                            if (match$1 !== "docs") {
                              return false;
                            }
                            break;
                        case 2 :
                            var match$2 = match[0];
                            if (match$2 !== "docs") {
                              return false;
                            }
                            var match$3 = match[1];
                            switch (match$3) {
                              case "gentype" :
                              case "manual" :
                                  break;
                              default:
                                return false;
                            }
                            break;
                        
                      }
                      var match$4 = Belt_Array.get(url.pagepath, 0);
                      if (match$4 === "api") {
                        return false;
                      } else {
                        return true;
                      }
                    }),
                  href: "/docs/manual/latest/api",
                  state: /* Closed */2
                }];
      });
  var setCollapsibles = match[1];
  var collapsibles = match[0];
  var isSubnavOpen = Caml_option.undefined_to_opt(collapsibles.find(function (c) {
            return c.state !== /* Closed */2;
          })) !== undefined;
  var setOverlayOpen = overlayState[1];
  var isOverlayOpen = overlayState[0];
  var resetCollapsibles = function (param) {
    Curry._1(setCollapsibles, (function (prev) {
            return Belt_Array.map(prev, (function (c) {
                          return {
                                  title: c.title,
                                  children: c.children,
                                  isActiveRoute: c.isActiveRoute,
                                  href: c.href,
                                  state: /* Closed */2
                                };
                        }));
          }));
  };
  var navRef = React.useRef(null);
  Hooks.useOutsideClick(navRef, resetCollapsibles);
  React.useEffect((function () {
          var events = router.events;
          var onChangeComplete = function (_url) {
            resetCollapsibles(undefined);
            Curry._1(setOverlayOpen, (function (param) {
                    return false;
                  }));
          };
          Curry._2(Next.Router.Events.on, events, {
                NAME: "routeChangeComplete",
                VAL: onChangeComplete
              });
          Curry._2(Next.Router.Events.on, events, {
                NAME: "hashChangeComplete",
                VAL: onChangeComplete
              });
          return (function (param) {
                    Curry._2(Next.Router.Events.off, events, {
                          NAME: "routeChangeComplete",
                          VAL: onChangeComplete
                        });
                    Curry._2(Next.Router.Events.off, events, {
                          NAME: "hashChangeComplete",
                          VAL: onChangeComplete
                        });
                  });
        }), []);
  var fixedNav = fixed ? "fixed top-0" : "relative";
  var onStateChange = function (id, state) {
    Curry._1(setCollapsibles, (function (prev) {
            return Belt_Array.keepMap(prev, (function (next) {
                          if (next.title === id) {
                            return {
                                    title: next.title,
                                    children: next.children,
                                    isActiveRoute: next.isActiveRoute,
                                    href: next.href,
                                    state: state
                                  };
                          }
                          
                        }));
          }));
  };
  var collapsibleElements = collapsibles.map(function (coll) {
        return React.createElement(Navigation$CollapsibleLink, {
                    title: coll.title,
                    onStateChange: onStateChange,
                    allowHover: false,
                    id: coll.title,
                    state: coll.state,
                    active: Curry._1(coll.isActiveRoute, route),
                    children: coll.children,
                    key: coll.title
                  });
      });
  return React.createElement(React.Fragment, undefined, React.createElement("nav", {
                  ref: navRef,
                  className: fixedNav + " z-50 px-4 flex xs:justify-center w-full h-16 bg-gray-90 shadow text-white-80 text-14",
                  id: "header",
                  style: {
                    minWidth: minWidth
                  }
                }, React.createElement("div", {
                      className: "flex justify-between items-center h-full w-full max-w-1280"
                    }, React.createElement("div", {
                          className: "h-8 w-8 lg:h-10 lg:w-32"
                        }, React.createElement("a", {
                              className: "block hover:cursor-pointer w-full h-full flex justify-center items-center font-bold",
                              href: "/"
                            }, React.createElement("img", {
                                  className: "lg:hidden",
                                  src: "/static/nav-logo@2x.png"
                                }), React.createElement("img", {
                                  className: "hidden lg:block",
                                  src: "/static/nav-logo-full@2x.png"
                                }))), React.createElement("div", {
                          className: "flex items-center xs:justify-between w-full bg-gray-90 sm:h-auto sm:relative"
                        }, React.createElement("div", {
                              className: "flex ml-10 space-x-5 w-full max-w-320",
                              style: {
                                maxWidth: "26rem"
                              }
                            }, collapsibleElements, React.createElement(Next.Link.make, {
                                  href: "/docs/manual/latest/api",
                                  children: React.createElement("a", {
                                        className: linkOrActiveApiSubroute(route)
                                      }, "API")
                                }), React.createElement(Next.Link.make, {
                                  href: "/try",
                                  children: React.createElement("a", {
                                        className: "hidden xs:block " + linkOrActiveLink("/try", route)
                                      }, "Playground")
                                }), React.createElement(Next.Link.make, {
                                  href: "/blog",
                                  children: React.createElement("a", {
                                        className: "hidden xs:block " + linkOrActiveLinkSubroute("/blog", route)
                                      }, "Blog")
                                }), React.createElement(Next.Link.make, {
                                  href: "/community",
                                  children: React.createElement("a", {
                                        className: "hidden xs:block " + linkOrActiveLink("/community", route)
                                      }, "Community")
                                })), React.createElement("div", {
                              className: "hidden md:flex items-center"
                            }, React.createElement("div", {
                                  className: "hidden sm:block mr-6"
                                }, React.createElement(DocSearch.make, {})), React.createElement("a", {
                                  className: "mr-5 " + link,
                                  href: githubHref,
                                  rel: "noopener noreferrer"
                                }, React.createElement(Icon.GitHub.make, {
                                      className: "w-6 h-6 opacity-50 hover:opacity-100"
                                    })), React.createElement("a", {
                                  className: "mr-5 " + link,
                                  href: "https://twitter.com/rescriptlang",
                                  rel: "noopener noreferrer"
                                }, React.createElement(Icon.Twitter.make, {
                                      className: "w-6 h-6 opacity-50 hover:opacity-100"
                                    })), React.createElement("a", {
                                  className: link,
                                  href: discourseHref,
                                  rel: "noopener noreferrer"
                                }, React.createElement(Icon.Discourse.make, {
                                      className: "w-6 h-6 opacity-50 hover:opacity-100"
                                    }))))), React.createElement("button", {
                      className: "h-full px-4 xs:hidden flex items-center hover:text-white",
                      onClick: (function (evt) {
                          evt.preventDefault();
                          resetCollapsibles(undefined);
                          Curry._1(setOverlayOpen, (function (prev) {
                                  return !prev;
                                }));
                        })
                    }, React.createElement(Icon.DrawerDots.make, {
                          className: "h-1 w-auto block " + (
                            isOverlayOpen ? "text-fire" : "text-gray-60"
                          )
                        })), React.createElement("div", {
                      className: (
                        isOverlayOpen && !isSubnavOpen ? "flex" : "hidden"
                      ) + " sm:hidden flex-col fixed top-0 left-0 h-full w-full z-50 sm:w-9/12 bg-gray-100 sm:h-auto sm:flex sm:relative sm:flex-row sm:justify-between",
                      style: {
                        minWidth: minWidth,
                        top: "4rem"
                      }
                    }, React.createElement(Navigation$MobileNav, {
                          route: route
                        }))), React.createElement("div", {
                  className: (
                    isSubnavOpen ? "fixed" : "hidden"
                  ) + " z-40 bg-gray-10-tr w-full h-full bottom-0",
                  style: ReactDOMStyle.unsafeAddProp(ReactDOMStyle.unsafeAddProp({}, "backdropFilter", "blur(2px)"), "WebkitBackdropFilter", "blur(2px)")
                }));
}

var make = Navigation;

export {
  make ,
}
/* Icon Not a pure module */
