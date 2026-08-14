import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Clock, D as ChevronDown, E as ChevronUp, O as Award, S as Cog, T as CircleCheck, _ as Menu, a as Truck, b as Eye, c as Smartphone, d as Scissors, f as Ruler, g as MessageCircle, h as MessageSquare, i as Users, l as Shield, m as Phone, n as X, o as Star, p as Quote, r as Wrench, s as Sparkles, t as Zap, u as ShieldCheck, v as MapPin, w as CircleQuestionMark, x as Droplets, y as FileCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-7cee6tOo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_lg_light_default = "/assets/logo-lg-light-DfbZ0Vy-.png";
var WHATSAPP_URL = "https://wa.me/5561999566677?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20persianas.";
var PHONE_DISPLAY = "(61) 99956-6677";
var PHONE_HREF = "tel:+5561999566677";
var NAV_LINKS = [
	{
		href: "#quem-somos",
		label: "Quem Somos"
	},
	{
		href: "#produtos",
		label: "Produtos"
	},
	{
		href: "#servicos",
		label: "Serviços"
	},
	{
		href: "#como-funciona",
		label: "Como Funciona"
	},
	{
		href: "#portfolio",
		label: "Portfólio"
	},
	{
		href: "#depoimentos",
		label: "Depoimentos"
	},
	{
		href: "#onde-estamos",
		label: "Onde Estamos"
	},
	{
		href: "#contato",
		label: "Contato"
	}
];
var TRUST_ITEMS = [
	{
		value: "5.0",
		label: "Avaliação dos clientes",
		icon: "star"
	},
	{
		value: "+22 anos",
		label: "De experiência",
		icon: "award"
	},
	{
		value: "Todo o DF",
		label: "Atendimento",
		icon: "pin"
	},
	{
		value: "Até 2 anos",
		label: "De garantia",
		icon: "shield"
	},
	{
		value: "+3.000",
		label: "Projetos entregues",
		icon: "users"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${scrolled ? "bg-navy/95 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-gold/20" : "bg-gradient-to-b from-navy/90 via-navy/50 to-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#hero",
					className: "flex min-w-0 items-center",
					"aria-label": "LG Persianas — página inicial",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_lg_light_default,
						alt: "LG Persianas Logo",
						className: `w-auto shrink-0 transition-all duration-500 ${scrolled ? "h-11 lg:h-12" : "h-14 lg:h-16"}`,
						width: 776,
						height: 545
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Navegação principal",
					className: "hidden lg:flex lg:items-center lg:gap-7",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-base font-medium tracking-wide text-cream transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-cream shadow-md transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						}), "Orçamento no WhatsApp"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-label": open ? "Fechar menu de navegação" : "Abrir menu de navegação",
					"aria-expanded": open,
					className: "justify-self-end flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl border-2 border-cream/30 p-3 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-fade-in border-t border-cream/20 bg-navy/98 backdrop-blur-2xl lg:hidden shadow-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Navegação móvel",
				className: "flex flex-col px-6 py-5 space-y-1",
				children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "flex min-h-[52px] items-center border-b border-cream/15 text-lg font-medium text-cream hover:text-gold transition-colors",
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/5561999566677?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20persianas.",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setOpen(false),
						className: "flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-whatsapp px-6 py-4 text-base font-bold text-cream shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "h-6 w-6",
							"aria-hidden": "true"
						}), "Orçamento no WhatsApp"]
					})
				})]
			})
		})]
	});
}
var hero_img_default = "/assets/hero-img-DKs1tQBZ.png";
var hero_video_default = "/assets/hero-video-DVCrSS0f.mp4";
var ICONS = {
	star: Star,
	award: Award,
	pin: MapPin,
	shield: Shield,
	users: Users
};
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "animate-fade-up rounded-2xl border border-cream/20 bg-navy/80 px-3 py-3 backdrop-blur-md sm:px-6",
		style: {
			animationDelay: "700ms",
			animationFillMode: "both"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-2 divide-cream/15 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x",
			children: TRUST_ITEMS.map((item) => {
				const Icon = ICONS[item.icon];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3.5 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-7 w-7 shrink-0 text-gold",
						strokeWidth: 1.5,
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-xl sm:text-2xl font-semibold leading-tight text-cream",
								children: item.value
							}),
							item.icon === "star" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-gold font-bold",
								"aria-hidden": "true",
								children: "★★★★★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm font-medium leading-snug text-cream/90",
								children: item.label
							})
						]
					})]
				}, item.label);
			})
		})
	});
}
function Hero() {
	const [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setPrefersReducedMotion(mediaQuery.matches);
		const handleChange = (e) => setPrefersReducedMotion(e.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative min-h-[100svh] w-full overflow-hidden bg-navy",
		children: [
			prefersReducedMotion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_img_default,
				alt: "Sala de estar contemporânea com persianas rolô sob medida e vista panorâmica de Brasília",
				fetchPriority: "high",
				decoding: "async",
				className: "absolute inset-0 h-full w-full object-cover object-[60%_center] pointer-events-none"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				poster: hero_img_default,
				className: "absolute inset-0 h-full w-full object-cover object-[60%_center] pointer-events-none select-none",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: hero_video_default,
					type: "video/mp4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_img_default,
					alt: "Sala de estar contemporânea com persianas sob medida",
					className: "h-full w-full object-cover object-[60%_center]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-hero-veil pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-hero-base pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-8 pt-32 sm:px-8 lg:px-10 lg:pb-10 lg:pt-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "animate-fade-up text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold uppercase bg-navy/70 border border-gold/40 px-3.5 py-1.5 rounded-full inline-block",
								style: {
									animationDelay: "150ms",
									animationFillMode: "both"
								},
								children: "LG PERSIANAS • BRASÍLIA / DF"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "animate-fade-up mt-5 font-serif text-[2.4rem] leading-[1.08] tracking-tight text-cream sm:text-6xl lg:text-[4.25rem] font-medium",
								style: {
									animationDelay: "260ms",
									animationFillMode: "both"
								},
								children: [
									"Persianas, Cortinas,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									" Box e Vidros",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1.5 block text-gold font-serif",
										children: "Sob Medida em Brasília"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-fade-up mt-6 space-y-2 text-lg font-normal leading-relaxed text-cream sm:text-xl",
								style: {
									animationDelay: "380ms",
									animationFillMode: "both"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Instalação, manutenção e lavagem com mais de 22 anos de experiência." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-gold-soft",
									children: "Orçamento gratuito pelo WhatsApp no seu endereço."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "animate-fade-up mt-5 flex items-center gap-2 text-base font-medium text-cream",
								style: {
									animationDelay: "460ms",
									animationFillMode: "both"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-5 w-5 shrink-0 text-gold",
									strokeWidth: 2,
									"aria-hidden": "true"
								}), "Atendemos todo o Distrito Federal sem custo de deslocamento"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-fade-up mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center",
								style: {
									animationDelay: "560ms",
									animationFillMode: "both"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-whatsapp px-7 py-4 text-base sm:text-lg font-semibold text-cream shadow-lg transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									}), "Solicitar orçamento pelo WhatsApp"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PHONE_HREF,
									className: "inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border-2 border-gold/80 bg-navy/80 px-7 py-4 text-base sm:text-lg font-medium text-cream backdrop-blur-md transition-colors duration-300 hover:border-gold hover:bg-gold/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "h-5 w-5 text-gold",
											"aria-hidden": "true"
										}),
										"Ligar agora: ",
										PHONE_DISPLAY
									]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {})
				})]
			})
		]
	});
}
var MAIN_HIGHLIGHTS = [
	{
		value: "+22 anos",
		label: "De tradição no DF",
		icon: Award
	},
	{
		value: "+3.000",
		label: "Projetos entregues",
		icon: Sparkles
	},
	{
		value: "Equipe própria",
		label: "Sem terceirização",
		icon: Users
	},
	{
		value: "Todo o DF",
		label: "Sem taxa de deslocamento",
		icon: MapPin
	}
];
var COMPLEMENTARY_DIFFERENTIALS = [
	{
		icon: Sparkles,
		title: "Soluções 100% Sob Medida",
		desc: "Cada peça é desenhada para a medida exata da sua janela com acabamento perfeito."
	},
	{
		icon: Award,
		title: "Materiais de Alta Qualidade",
		desc: "Tecidos, lâminas e motores das marcas líderes de mercado para durar muitos anos."
	},
	{
		icon: Wrench,
		title: "Instalação Especializada",
		desc: "Técnicos próprios com vasta experiência em residências e ambientes corporativos."
	},
	{
		icon: Shield,
		title: "Garantia de até 2 Anos",
		desc: "Tranquilidade total em produtos e serviços com suporte rápido pós-venda."
	}
];
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "quem-somos",
		className: "relative bg-[#FAF7F2] py-16 lg:py-24 text-slate-800 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 animate-fade-up",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-navy uppercase bg-gold/20 px-4 py-1.5 rounded-full border border-gold/40 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold-deep animate-pulse" }), " QUEM SOMOS E DIFERENCIAIS"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-navy",
									children: [
										"Mais de 22 anos transformando ambientes com",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold italic font-serif",
											children: "sofisticação e qualidade."
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base sm:text-lg font-normal leading-relaxed text-slate-700 animate-fade-up",
								style: { animationDelay: "150ms" },
								children: [
									"A ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-semibold text-navy",
										children: "LG Persianas"
									}),
									" oferece soluções completas em persianas, cortinas, boxes e vidros sob medida. Unimos materiais nobres, medição a laser gratuita e instalação técnica própria para transformar casas e escritórios em todo o Distrito Federal."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2",
								children: MAIN_HIGHLIGHTS.map((item, idx) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-xl border border-amber-900/15 bg-white shadow-sm flex flex-col justify-between space-y-1.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-gold/50 group",
										style: { animationDelay: `${200 + idx * 100}ms` },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-lg sm:text-xl font-bold text-navy leading-tight",
												children: item.value
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-slate-600 leading-snug",
												children: item.label
											})
										]
									}, item.label);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3",
								children: COMPLEMENTARY_DIFFERENTIALS.map((diff) => {
									const Icon = diff.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-xl border border-amber-900/10 bg-white/90 shadow-sm flex items-start gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/60 group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors duration-300",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-base font-bold text-navy group-hover:text-gold transition-colors",
											children: diff.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm font-normal text-slate-600 mt-0.5 leading-relaxed",
											children: diff.desc
										})] })]
									}, diff.title);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 flex flex-wrap items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-800 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 transition-transform hover:scale-105",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600" }), " Visita Técnica Grátis"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 transition-transform hover:scale-105",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600" }), " Orçamento Sem Compromisso"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3 text-sm sm:text-base font-semibold text-cream shadow-md hover:scale-105 hover:shadow-emerald-500/20 transition-all duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5 animate-pulse" }), "Falar com Especialista"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-md lg:max-w-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/30 via-navy/10 to-gold/20 blur-md opacity-75 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: hero_img_default,
										alt: "Projeto de Persianas e Cortinas LG Persianas em Brasília",
										className: "w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-108"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-navy/95 backdrop-blur-md border border-gold/40 text-cream shadow-2xl transition-transform duration-300 group-hover:translate-y-[-4px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif text-2xl font-bold shrink-0 border border-gold/40 animate-float-subtle",
												children: "22+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-base font-semibold text-gold",
												children: "Mais de 22 Anos no DF"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs sm:text-sm text-cream/90 font-normal",
												children: "Garantia, pontualidade e atendimento personalizado em Brasília."
											})] })]
										})
									})
								]
							})]
						})
					})]
				})
			})
		]
	});
}
var rolo_default = "/assets/rolo-CoIUjyYU.png";
var double_vision_default = "/assets/double-vision-5w2dMsk_.png";
var painel_japones_default = "/assets/painel-japones-BjR2SLZx.png";
var screen_solar_default = "/assets/screen-solar-CUF6TYhM.png";
var blackout_default = "/assets/blackout-DTk2KzSe.png";
var PRODUCTS = [
	{
		id: "rolo",
		name: "Rolô",
		category: "rolo",
		tagline: "Design clean e moderno",
		description: "Tecido único que enrola sobre si mesmo em um tubo superior de alumínio. Design clean e discreto, perfeito para quem deseja controlar a luminosidade com alta praticidade.",
		image: rolo_default,
		idealFor: [
			"Sala de Estar",
			"Quarto",
			"Escritório",
			"Varanda"
		],
		features: [
			"Acionamento suave",
			"Fácil higienização",
			"Diversidade de tecidos e tramas"
		],
		isPrimary: true
	},
	{
		id: "double-vision",
		name: "Double Vision",
		category: "rolo",
		tagline: "Controle gradual de luz",
		description: "Faixas translúcidas e opacas que se alternam com facilidade, permitindo regular a visibilidade e a claridade sem perder a linda vista externa.",
		image: double_vision_default,
		idealFor: [
			"Sala",
			"Home Office",
			"Sacada",
			"Suíte"
		],
		features: [
			"Efeito estético contemporâneo",
			"Controle de visibilidade em 2 níveis",
			"Proteção UV"
		],
		isPrimary: true
	},
	{
		id: "painel-japones",
		name: "Painel Japonês",
		category: "especial",
		tagline: "Elegância para grandes vãos",
		description: "Painéis largos de tecido que deslizam suavemente sobre trilhos múltiplos. Solução perfeita para portas de varanda, divisórias e grandes vãos de vidro.",
		image: painel_japones_default,
		idealFor: [
			"Grandes vãos",
			"Salas amplas",
			"Portas de correr",
			"Escritórios"
		],
		features: [
			"Recolhimento lateral suave",
			"Excelente caimento",
			"Modular e elegante"
		],
		isPrimary: true
	},
	{
		id: "screen-solar",
		name: "Screen / Tela Solar",
		category: "blackout",
		tagline: "Proteção térmica com visão externa",
		description: "Tela técnica microperfurada que bloqueia de 95% a 99% dos raios UV e reduz o calor no ambiente mantendo a transparência e visão para fora.",
		image: screen_solar_default,
		idealFor: [
			"Varandas Gourmet",
			"Ambientes ensolarados",
			"Escritórios",
			"Salas com TV"
		],
		features: [
			"Redução da carga térmica",
			"Proteção de móveis e pisos",
			"Retenção UV extrema"
		],
		isPrimary: true
	},
	{
		id: "blackout",
		name: "Blackout Total",
		category: "blackout",
		tagline: "Escuridão absoluta e privacidade",
		description: "Bloqueio total da luz solar (100%). Indicada para quem busca escuridão completa, privacidade absoluta e melhoria acústica no ambiente.",
		image: blackout_default,
		idealFor: [
			"Quartos de casal",
			"Quartos infantis",
			"Home Theater",
			"Salas de Reunião"
		],
		features: [
			"Bloqueio 100% de luminosidade",
			"Isolamento térmico extra",
			"Conforto para o sono"
		],
		isPrimary: true
	},
	{
		id: "romana",
		name: "Romana",
		category: "especial",
		tagline: "Aconchego com dobras suaves",
		description: "Estruturada em dobras horizontais suaves que se recolhem em gomos elegantes quando acionada. Traz textura calorosa e toque sofisticado.",
		image: "/assets/romana-bYqDnWi5.png",
		idealFor: [
			"Sala de Jantar",
			"Quarto",
			"Cozinha gourmet",
			"Salas de estar"
		],
		features: [
			"Gomos dobráveis simétricos",
			"Ampla variedade de tecidos nobres",
			"Acabamento artesanal"
		],
		isPrimary: true
	},
	{
		id: "plissada",
		name: "Plissada (Plissê)",
		category: "especial",
		tagline: "Versatilidade para janelas difíceis",
		description: "Compacta e altamente versátil. Adapta-se perfeitamente a formatos especiais, janelas recortadas, clarabóias e estruturas inclinadas.",
		image: "/assets/plissada-BzIaD7QU.png",
		idealFor: [
			"Janelas pequenas",
			"Clarabóias",
			"Tetos de vidro",
			"Banheiros"
		],
		features: [
			"Mínimo espaço de recolhimento",
			"Instalação em vãos estruturados",
			"Leve e delicada"
		],
		isPrimary: false
	},
	{
		id: "vertical",
		name: "Vertical",
		category: "especial",
		tagline: "Direcionamento preciso de luz",
		description: "Lâminas verticais orientáveis em 180° que giram para direcionar a luz natural com precisão. Ideal para janelas altas e ambientes corporativos.",
		image: "/assets/vertical-B7Xbn4dv.png",
		idealFor: [
			"Escritórios",
			"Ambientes corporativos",
			"Salas de conferência"
		],
		features: [
			"Giro de 180 graus",
			"Diversidade de cores e texturas",
			"Manutenção simplificada"
		],
		isPrimary: false
	},
	{
		id: "horizontal",
		name: "Horizontal (Madeira / Alumínio)",
		category: "especial",
		tagline: "Clássica e ajustável",
		description: "Lâminas horizontais em madeira nobre ou alumínio reforçado. Permite regulação precisa da entrada de luz e fluxo de ar com visual atemporal.",
		image: "/assets/horizontal-CNVPr2x-.png",
		idealFor: [
			"Escritórios",
			"Cozinhas",
			"Consultórios",
			"Salas executivas"
		],
		features: [
			"Lâminas basculantes",
			"Opção em madeira ecológica",
			"Resistente e durável"
		],
		isPrimary: false
	},
	{
		id: "motorizada",
		name: "Motorizada & Automatizada",
		category: "motorizada",
		tagline: "Conforto com tecnologia",
		description: "Acionamento via controle remoto multifuncional, aplicativo para smartphone ou integração completa com assistentes virtuais (Alexa / Google Home).",
		image: "/assets/motorizada-CQD0-IPx.png",
		idealFor: [
			"Smart Homes",
			"Janelas altas e vãos duplos",
			"Penthouses",
			"Corporativo"
		],
		features: [
			"Motor ultra silencioso",
			"Agendamento por horários",
			"Integração via Wi-Fi/Zigbee"
		],
		isPrimary: false
	}
];
var CATEGORIES = [
	{
		id: "all",
		label: "Todos os Modelos"
	},
	{
		id: "rolo",
		label: "Rolôs & Double Vision"
	},
	{
		id: "blackout",
		label: "Blackout & Tela Solar"
	},
	{
		id: "especial",
		label: "Romana & Especiais"
	},
	{
		id: "motorizada",
		label: "Motorizadas / Automação"
	}
];
function ProductsSection({ onSelectProduct }) {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const [showAllModels, setShowAllModels] = (0, import_react.useState)(false);
	const categoryProducts = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);
	const displayedProducts = showAllModels || activeCategory !== "all" ? categoryProducts : categoryProducts.filter((p) => p.isPrimary);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "produtos",
		className: "relative bg-navy py-16 lg:py-24 text-cream overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-10 right-0 w-96 h-96 bg-whatsapp/10 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl space-y-4 animate-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/30 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold animate-pulse" }), " NOSSOS PRODUTOS SOB MEDIDA"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream",
								children: ["Persianas e cortinas para cada ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold italic font-serif",
									children: "estilo de ambiente."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base sm:text-lg font-normal text-cream/90 leading-relaxed",
								children: "Soluções completas com controle térmico, proteção solar e design contemporâneo. Orçamento e medição gratuita em Brasília/DF."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2.5 border-b border-cream/15 pb-4",
						children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setActiveCategory(cat.id);
								if (cat.id !== "all") setShowAllModels(true);
							},
							className: `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id ? "bg-gold text-navy font-bold shadow-lg shadow-gold/25 scale-105" : "bg-navy/80 text-cream/80 border border-cream/20 hover:border-gold/60 hover:text-cream hover:scale-102"}`,
							children: cat.label
						}, cat.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
						children: displayedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative rounded-2xl bg-navy/95 border border-cream/20 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2.5 hover:border-gold/70 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.25)] animate-scale-in",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-60 w-full overflow-hidden bg-slate-900",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: product.image,
										alt: product.name,
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-3 left-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold tracking-wider text-gold uppercase bg-navy/90 backdrop-blur-md px-3 py-1 rounded-md border border-gold/40 shadow-sm",
											children: product.tagline
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 flex-1 flex flex-col justify-between space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-2xl font-bold text-cream group-hover:text-gold transition-colors duration-300",
											children: product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-normal text-cream/90 leading-relaxed",
											children: product.description
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 pt-2 border-t border-cream/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold uppercase tracking-wider text-gold",
											children: "Ideal para:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1.5",
											children: product.idealFor.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-medium bg-cream/15 text-cream px-2.5 py-1 rounded-md border border-cream/15 transition-transform hover:scale-105",
												children: item
											}, item))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 border-t border-cream/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => onSelectProduct?.(product),
											className: "flex-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border-2 border-gold/60 bg-navy/60 px-4 py-2.5 text-sm font-semibold text-cream hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-[1.02]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" }), " Detalhes"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `${WHATSAPP_URL}&text=${encodeURIComponent(`Olá! Gostaria de um orçamento para a persiana modelo ${product.name}.`)}`,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-cream shadow-md hover:scale-[1.03] transition-transform duration-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " Orçar no WhatsApp"]
										})]
									})
								]
							})]
						}, product.id))
					}),
					activeCategory === "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowAllModels((prev) => !prev),
							className: "inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-navy/90 border-2 border-gold px-8 py-3.5 text-base font-bold text-cream hover:bg-gold hover:text-navy shadow-xl transition-all duration-300 hover:scale-105",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: showAllModels ? "Mostrar menos modelos" : "Ver todos os modelos de persianas" }), showAllModels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-5 h-5 text-gold group-hover:text-navy" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 rounded-2xl bg-navy/90 border border-gold/40 p-6 sm:p-8 backdrop-blur-md shadow-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-cream/15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 pt-4 md:pt-0 md:pr-4 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0 border border-gold/40 group-hover:bg-gold group-hover:text-navy transition-colors duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "w-6 h-6 group-hover:scale-110 transition-transform" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors",
										children: "Medição Gratuita no Local"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed",
										children: "Técnicos levam o catálogo de tecidos e medem cada janela sem compromisso em todo o DF."
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 pt-6 md:pt-0 md:px-6 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0 border border-gold/40 group-hover:bg-gold group-hover:text-navy transition-colors duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-6 h-6 group-hover:scale-110 transition-transform" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors",
										children: "Garantia de até 2 Anos"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed",
										children: "Cobertura completa para mecanismos, tecidos e instalação com suporte rápido pós-venda."
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 pt-6 md:pt-0 md:pl-6 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0 border border-gold/40 group-hover:bg-gold group-hover:text-navy transition-colors duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "w-6 h-6 group-hover:scale-110 transition-transform" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors",
										children: "Instalação com Equipe Própria"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed",
										children: "Profissionais próprios com mais de 22 anos de experiência e acabamento limpo e perfeito."
									})] })]
								})
							]
						})
					})
				]
			})
		]
	});
}
var SERVICE_CATEGORIES = [
	{
		id: "instalacao-medicao",
		icon: Wrench,
		title: "1. Instalação & Medição Gratuita",
		subtitle: "Visita técnica gratuita no local e instalação sob medida sem sujeira.",
		items: [
			"Visita e medição a laser 100% gratuita em todo o DF",
			"Apresentação de mostradores e catálogo no seu endereço",
			"Fixação perfeita, nivelamento e acabamento sem poeira",
			"Instalação por equipe própria especializada"
		],
		ctaText: "Agendar Visita Grátis"
	},
	{
		id: "manutencao",
		icon: Cog,
		title: "2. Manutenção & Consertos",
		subtitle: "Conserto completo de persianas, cortinas, box, janelas e esquadrias.",
		items: [
			"Troca de comandos, cordões, correntes e mecanismo travado",
			"Manutenção preventiva e corretiva de persianas antigas",
			"Regulagem de roldanas, trilhos, box de banheiro e vidros",
			"Peças de reposição originais e com garantia"
		],
		ctaText: "Solicitar Manutenção"
	},
	{
		id: "lavagem",
		icon: Droplets,
		title: "3. Lavagem Profissional",
		subtitle: "Higienização profunda sem danificar as fibras dos tecidos.",
		items: [
			"Lavagem técnica com produtos neutros específicos",
			"Remoção profunda de poeira, manchas e fungos/ácaros",
			"Retirada e reinstalação no local com total comodidade",
			"Restauração do aspecto de novo e aumento da durabilidade"
		],
		ctaText: "Orçar Lavagem"
	},
	{
		id: "motorizacao",
		icon: Smartphone,
		title: "4. Motorização & Automação",
		subtitle: "Controle e praticidade ao seu alcance com tecnologia inteligente.",
		items: [
			"Motorização ultra silenciosa para persianas e cortinas",
			"Acionamento por controle remoto multifuncional",
			"Controle pelo smartphone de qualquer lugar",
			"Integração total com assistentes Alexa e Google Home"
		],
		ctaText: "Cotar Motorização"
	}
];
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "servicos",
		className: "relative bg-[#FAF7F2] py-16 lg:py-24 text-slate-800 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 right-0 w-[450px] h-[450px] bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl space-y-4 animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-navy uppercase bg-gold/20 px-4 py-1.5 rounded-full border border-gold/40 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold-deep animate-pulse" }), " NOSSOS SERVIÇOS ESPECIALIZADOS"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-navy",
							children: ["Soluções completas do projeto à ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic font-serif",
								children: "manutenção pós-venda."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base sm:text-lg font-normal text-slate-700 leading-relaxed",
							children: "Organizamos nossos atendimentos em 4 categorias principais para facilitar sua escolha. Atendemos todas as regiões do Distrito Federal."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-1 md:grid-cols-2 gap-8",
					children: SERVICE_CATEGORIES.map((cat) => {
						const Icon = cat.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative rounded-2xl bg-white border border-amber-900/15 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/60 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center shrink-0 shadow-md group-hover:bg-gold group-hover:text-navy transition-colors duration-300 border border-gold/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-7 h-7 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-xl sm:text-2xl font-bold text-navy group-hover:text-gold transition-colors",
										children: cat.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm font-normal text-slate-600 mt-1 leading-snug",
										children: cat.subtitle
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2.5 pt-4 border-t border-slate-100",
									children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5 text-sm sm:text-base text-slate-800 font-medium transition-transform hover:translate-x-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-6 mt-6 border-t border-slate-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `${WHATSAPP_URL}&text=${encodeURIComponent(`Olá! Gostaria de informações e orçamento sobre o serviço de ${cat.title}.`)}`,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-full inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 text-base font-semibold text-cream shadow-md hover:scale-[1.02] hover:shadow-emerald-500/20 transition-all duration-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5" }),
										cat.ctaText,
										" no WhatsApp"
									]
								})
							})]
						}, cat.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 rounded-2xl bg-navy p-6 sm:p-8 border border-gold/40 text-cream shadow-2xl transition-all duration-300 hover:border-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-cream/15 pb-6 lg:pb-0 lg:pr-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif text-2xl font-bold shrink-0 border border-gold/40 animate-float-subtle",
								children: "DF"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-gold uppercase tracking-widest",
								children: "Mais de 22 anos de tradição"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-xl sm:text-2xl font-bold text-cream mt-0.5",
								children: "Atendemos todas as regiões do Distrito Federal"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs sm:text-sm text-cream/90 font-normal flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold shrink-0" }), " Asa Sul, Asa Norte, Lago Sul/Norte, Noroeste, Águas Claras, Sudoeste e regiões."]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-gold font-semibold",
									children: "Orçamento e visita técnica gratuita sem taxa de deslocamento."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "shrink-0 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-whatsapp px-6 py-3 text-sm sm:text-base font-semibold text-cream shadow-md hover:scale-105 transition-transform",
								children: "Agendar Visita Grátis"
							})]
						})]
					})
				})
			]
		})]
	});
}
var STEPS = [
	{
		number: "01",
		icon: MessageSquare,
		title: "Primeiro contato",
		desc: "Conversamos no WhatsApp. Entendemos a necessidade do seu ambiente."
	},
	{
		number: "02",
		icon: Ruler,
		title: "Visita técnica grátis",
		desc: "Vamos até seu endereço no DF. Medimos com laser e levamos o catálogo."
	},
	{
		number: "03",
		icon: FileCheck,
		title: "Proposta personalizada",
		desc: "Enviamos orçamento claro com os melhores tecidos e opções."
	},
	{
		number: "04",
		icon: Scissors,
		title: "Fabricação sob medida",
		desc: "Produção milimétrica com materiais de alta durabilidade."
	},
	{
		number: "05",
		icon: Truck,
		title: "Entrega e instalação",
		desc: "Instalação rápida e limpa feita por nossa equipe própria."
	},
	{
		number: "06",
		icon: Sparkles,
		title: "Ambiente pronto",
		desc: "Seu espaço renovado com elegância e garantia de até 2 anos."
	}
];
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "como-funciona",
		className: "relative bg-navy py-16 lg:py-24 text-cream overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-1/4 w-[450px] h-[450px] bg-gold/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl space-y-4 text-center mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold" }), " PROCESSO SIMPLES E TRANSPARENTE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream",
							children: ["Como funciona seu atendimento em ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic font-serif",
								children: "6 passos simples."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base sm:text-lg font-normal text-cream/90 leading-relaxed",
							children: "Do orçamento inicial à entrega final, cuidamos de tudo com agilidade e transparência."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid grid-cols-6 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-gold/80 via-gold/40 to-gold/80 -z-0" }), STEPS.map((step) => {
							const Icon = step.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex flex-col items-center text-center space-y-3 group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 rounded-full bg-navy border-2 border-gold text-gold font-serif font-bold text-lg flex items-center justify-center shadow-lg group-hover:bg-gold group-hover:text-navy transition-colors duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-bold text-gold uppercase tracking-wider",
										children: ["Passo ", step.number]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors leading-snug",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-normal text-cream/80 leading-relaxed max-w-[190px]",
										children: step.desc
									})
								]
							}, step.number);
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden mt-10 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-6 bottom-6 left-6 w-1 bg-gradient-to-b from-gold via-gold/50 to-gold -z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: STEPS.map((step) => {
							const Icon = step.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex items-start gap-4 p-4 rounded-xl bg-navy/90 border border-cream/15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-full bg-gold text-navy font-bold text-base flex items-center justify-center shrink-0 shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-bold text-gold uppercase",
											children: ["Passo ", step.number]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-lg font-bold text-cream mt-0.5",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed",
										children: step.desc
									})
								] })]
							}, step.number);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 text-base sm:text-lg font-semibold text-cream shadow-xl hover:scale-105 transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-6 h-6" }), "Solicitar Orçamento Gratuito no WhatsApp"]
					})
				})
			]
		})]
	});
}
var PORTFOLIO_PROJECTS = [
	{
		id: 1,
		title: "Cobertura Duplex no Noroeste",
		category: "salas",
		location: "Noroeste, Brasília/DF",
		product: "Persiana Rolô Screen Solar Motorizada",
		image: hero_img_default,
		isPrimary: true
	},
	{
		id: 2,
		title: "Residência de Alto Padrão no Lago Sul",
		category: "salas",
		location: "Lago Sul, Brasília/DF",
		product: "Cortina Wave & Rolô Blackout",
		image: rolo_default,
		isPrimary: true
	},
	{
		id: 3,
		title: "Apartamento Gourmet em Águas Claras",
		category: "varandas",
		location: "Águas Claras, DF",
		product: "Tela Solar 5% com Proteção UV",
		image: screen_solar_default,
		isPrimary: true
	},
	{
		id: 4,
		title: "Suíte Master no Sudoeste",
		category: "quartos",
		location: "Sudoeste, Brasília/DF",
		product: "Blackout 100% com Acionamento Silencioso",
		image: blackout_default,
		isPrimary: false
	},
	{
		id: 5,
		title: "Escritório Advocacia no SIG",
		category: "escritorios",
		location: "SIG, Brasília/DF",
		product: "Persiana Romana & Painel Japonês",
		image: painel_japones_default,
		isPrimary: false
	},
	{
		id: 6,
		title: "Casa em Condomínio no Park Way",
		category: "salas",
		location: "Park Way, DF",
		product: "Double Vision Motorizada por Controle",
		image: double_vision_default,
		isPrimary: false
	}
];
var FILTERS = [
	{
		id: "all",
		label: "Todos os Projetos"
	},
	{
		id: "salas",
		label: "Salas & Coberturas"
	},
	{
		id: "quartos",
		label: "Quartos & Suítes"
	},
	{
		id: "varandas",
		label: "Varandas Gourmet"
	},
	{
		id: "escritorios",
		label: "Corporativo & Escritórios"
	}
];
function PortfolioSection() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const filtered = filter === "all" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);
	const displayed = showAll || filter !== "all" ? filtered : filtered.filter((p) => p.isPrimary);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "portfolio",
		className: "relative bg-navy py-16 lg:py-24 text-cream overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold" }), " PORTFÓLIO DE PROJETOS NO DF"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream",
							children: ["Projetos reais entregues em ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic font-serif",
								children: "Brasília."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base sm:text-lg font-normal text-cream/90 leading-relaxed",
							children: "Confira algumas das nossas instalações executadas nos bairros de maior prestígio do Distrito Federal."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2.5 border-b border-cream/15 pb-4",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setFilter(f.id);
							if (f.id !== "all") setShowAll(true);
						},
						className: `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter === f.id ? "bg-gold text-navy font-bold shadow-md shadow-gold/20" : "bg-navy/80 text-cream/80 border border-cream/20 hover:border-gold/60 hover:text-cream"}`,
						children: f.label
					}, f.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: displayed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative rounded-2xl bg-navy/95 border border-cream/20 overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-64 w-full overflow-hidden bg-slate-900",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.title,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-3 left-3 flex items-center gap-1.5 bg-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 text-gold text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.location })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 space-y-3 flex-1 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-gold uppercase tracking-wider",
									children: item.product
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors",
									children: item.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t border-cream/15 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-cream/80",
									children: "Instalação Sob Medida"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `${WHATSAPP_URL}&text=${encodeURIComponent(`Olá! Gostaria de um projeto semelhante ao de ${item.title} em Brasília.`)}`,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-[40px] items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold hover:text-cream transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " Orçar Projeto"]
								})]
							})]
						})]
					}, item.id))
				}),
				filter === "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowAll((prev) => !prev),
						className: "inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-navy/90 border-2 border-gold px-8 py-3 text-base font-bold text-cream hover:bg-gold hover:text-navy shadow-xl transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: showAll ? "Mostrar menos projetos" : "Ver todos os projetos do portfólio" }), showAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-5 h-5 text-gold group-hover:text-navy" })]
					})
				})
			]
		})]
	});
}
var TESTIMONIALS = [
	{
		id: 1,
		name: "Dr. Marcelo Fonseca",
		location: "Lago Sul, Brasília/DF",
		rating: 5,
		text: "Atendimento impecável do início ao fim. A medição no meu apartamento no Lago Sul foi pontual e a instalação das persianas motorizadas ficou perfeita. Recomendo muito!",
		date: "Avaliado no Google"
	},
	{
		id: 2,
		name: "Mariana Alencar",
		location: "Sudoeste, Brasília/DF",
		rating: 5,
		text: "Fiz o fechamento de varanda e coloquei persianas Double Vision. A equipe da LG Persianas é super caprichosa, limparam tudo após a instalação. Nota 10!",
		date: "Avaliado no Google"
	},
	{
		id: 3,
		name: "Eduardo & Camila",
		location: "Noroeste, Brasília/DF",
		rating: 5,
		text: "Precisávamos de blackout total para os quartos do nosso bebê. O atendimento foi rápido, o preço justo e a qualidade do tecido surpreendeu.",
		date: "Avaliado no Google"
	}
];
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "depoimentos",
		className: "relative bg-[#FAF7F2] py-16 lg:py-24 text-slate-800 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-navy uppercase bg-gold/20 px-4 py-1.5 rounded-full border border-gold/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold-deep" }), " DEPOIMENTOS DE CLIENTES NO DF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-navy",
						children: ["O que dizem nossos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold italic font-serif",
							children: "clientes no DF."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base sm:text-lg font-normal text-slate-700 leading-relaxed",
						children: "Mais de 3.000 clientes atendidos com avaliação 5.0 estrelas no Google."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",
				children: TESTIMONIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-white border border-amber-900/15 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-xl hover:border-gold/50 transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-amber-500",
								children: [[...Array(item.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-5 h-5 fill-amber-400" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-xs font-bold text-slate-600",
									children: "5.0 / 5.0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "w-8 h-8 text-gold/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm sm:text-base font-normal text-slate-800 leading-relaxed italic",
								children: [
									"“",
									item.text,
									"”"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t border-slate-100 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-base font-bold text-navy",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-600 font-medium",
							children: item.location
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }), " Google"]
						})]
					})]
				}, item.id))
			})]
		})
	});
}
var REGIONS_LIST = [
	"Plano Piloto (Asa Sul & Asa Norte)",
	"Lago Sul & Lago Norte",
	"Noroeste & Sudoeste",
	"Águas Claras & Park Way",
	"Guará, Cruzeiro & Octogonal",
	"Taguatinga & Vicente Pires",
	"Jardim Botânico & Manacás",
	"Sobradinho, Colorado & Regiões"
];
var FAQS = [
	{
		q: "A visita técnica e medição possuem algum custo?",
		a: "Não! A visita técnica e a medição no seu endereço em Brasília/DF são 100% gratuitas e sem compromisso. Nossos técnicos levam o catálogo de tecidos e opções no local para você escolher com conforto."
	},
	{
		q: "Quanto tempo demora entre o pedido e a instalação?",
		a: "O prazo médio de fabricação sob medida é de 7 a 12 dias úteis. A instalação é agendada no dia e horário de sua preferência com nossa equipe técnica própria."
	},
	{
		q: "Qual a garantia dos produtos e da instalação?",
		a: "Oferecemos até 2 anos de garantia cobrindo componentes, mecanismos de acionamento, tecidos e mão de obra de instalação com suporte técnico rápido."
	},
	{
		q: "Vocês realizam lavagem e conserto de persianas antigas?",
		a: "Sim! Trabalhamos com manutenção completa, troca de comandos travados, cordagens e higienização profunda antiácaro com retirada e reinstalação no local."
	},
	{
		q: "Quais as formas de pagamento aceitas?",
		a: "Aceitamos cartões de crédito em até 10x, PIX e transferência bancária, com condições facilitadas direto com o consultor."
	}
];
function LocationSection() {
	const [openFaq, setOpenFaq] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "onde-estamos",
		className: "relative bg-navy py-16 lg:py-24 text-cream overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 space-y-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-navy/90 border border-gold/40 p-6 sm:p-10 shadow-xl backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-3.5 py-1 rounded-full border border-gold/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-gold" }), " COBERTURA EM BRASÍLIA / DF"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cream",
								children: "Atendemos todo o Distrito Federal."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base font-normal text-cream/90 leading-relaxed max-w-3xl",
								children: "Realizamos visitas técnicas, medições, instalações e assistência especializada em todas as regiões administrativas do Distrito Federal sem taxa de deslocamento."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 pt-2",
								children: REGIONS_LIST.map((reg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream/10 border border-cream/15 text-xs sm:text-sm font-medium text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5 text-gold shrink-0" }), reg]
								}, reg))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4 flex flex-col justify-center items-start lg:items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "w-full sm:w-auto inline-flex min-h-[50px] items-center justify-center gap-3 rounded-xl bg-whatsapp px-7 py-3.5 text-base font-semibold text-cream shadow-lg hover:scale-105 transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5" }), "Solicitar Visita Técnica"]
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "w-4 h-4 text-gold" }), " TIRA-DÚVIDAS"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-3xl sm:text-4xl font-bold text-cream",
							children: "Perguntas Frequentes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base text-cream/80 font-normal",
							children: "Esclareça suas dúvidas sobre prazos, visitas e garantias."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 pt-4",
					children: FAQS.map((faq, idx) => {
						const isOpen = openFaq === idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-navy/90 border border-cream/20 overflow-hidden transition-all duration-300 hover:border-gold/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenFaq(isOpen ? null : idx),
								"aria-expanded": isOpen,
								className: "w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-cream hover:text-gold transition-colors min-h-[52px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: faq.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-6 h-6 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })]
							}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base font-normal text-cream/90 leading-relaxed border-t border-cream/15 animate-fade-in",
								children: faq.a
							})]
						}, faq.q);
					})
				})]
			})]
		})
	});
}
function FinalCtaSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-[#0A1424] py-16 lg:py-24 text-cream border-t border-gold/30 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10 text-center space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/40 shadow-md animate-fade-up",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 text-gold animate-spin-slow" }), " ATENDIMENTO RÁPIDO NO DF"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream max-w-3xl mx-auto animate-fade-up",
					style: { animationDelay: "150ms" },
					children: ["Fale agora com um especialista e receba um ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold italic font-serif",
						children: "orçamento gratuito."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base sm:text-lg font-normal text-cream/90 max-w-2xl mx-auto leading-relaxed animate-fade-up",
					style: { animationDelay: "300ms" },
					children: "Sem taxas ocultas ou compromisso. Nossos técnicos agendam a visita no seu endereço com catálogo completo de modelos e tecidos."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atendimento Rápido" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visita 100% Gratuita" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Garantia de até 2 Anos" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resposta via WhatsApp" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-4 animate-fade-up",
					style: { animationDelay: "450ms" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex min-h-[56px] items-center justify-center gap-3.5 rounded-full bg-whatsapp px-9 py-4 text-lg sm:text-xl font-bold text-cream shadow-[0_10px_30px_-5px_rgba(34,197,94,0.5)] hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-7 h-7 animate-pulse" }), "Falar no WhatsApp Agora"]
					})
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contato",
		className: "bg-[#050A12] text-cream border-t border-gold/30 pt-16 pb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 space-y-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#hero",
								className: "inline-block",
								"aria-label": "Voltar ao início",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_lg_light_default,
									alt: "LG Persianas Logo",
									className: "h-12 w-auto"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-normal text-cream/90 leading-relaxed max-w-sm",
								children: "Mais de 22 anos de tradição em persianas, cortinas sob medida, fechamentos de sacada, box e vidros no Distrito Federal."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-gold bg-gold/15 px-3.5 py-1.5 rounded-full border border-gold/30",
									children: "Atendimento presencial em todo o DF"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-lg font-bold text-gold",
							children: "Navegação Rápida"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5 text-sm sm:text-base font-normal text-cream/90",
							children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "hover:text-gold transition-colors",
								children: link.label
							}) }, link.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-lg font-bold text-gold",
							children: "Modelos Populares"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm font-normal text-cream/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Persiana Rolô & Screen" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Double Vision" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cortina Blackout 100%" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Romana & Plissada" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Motorização Smart" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Manutenção & Lavagem" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-serif text-lg font-bold text-gold",
								children: "Fale Conosco"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-sm sm:text-base font-normal text-cream/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atendimento presencial no DF" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: PHONE_HREF,
										className: "hover:text-gold transition-colors font-medium",
										children: PHONE_DISPLAY
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 text-sm sm:text-base font-bold text-cream shadow-lg hover:scale-105 transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5" }), "Orçamento no WhatsApp"]
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-normal text-cream/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" LG Persianas — Todos os direitos reservados. Brasília/DF."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "flex items-center gap-1 font-medium text-cream/80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mais de 22 anos transformando ambientes no DF" })
				})]
			})]
		})
	});
}
function ProductModal({ product, onClose }) {
	if (!product) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/90 backdrop-blur-md animate-fade-in overflow-y-auto",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-3xl rounded-3xl bg-navy border-2 border-gold/40 shadow-2xl overflow-hidden text-cream my-auto",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Fechar janela de detalhes",
				className: "absolute top-4 right-4 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-navy/90 border border-cream/30 text-cream hover:text-gold hover:border-gold transition-colors shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-64 md:h-full min-h-[300px] bg-slate-900",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							className: "w-full h-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-4 left-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold tracking-widest uppercase text-gold bg-navy/95 px-3 py-1.5 rounded-md border border-gold/40",
								children: product.tagline
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8 space-y-6 flex flex-col justify-between max-h-[85vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold tracking-[0.2em] text-gold uppercase",
								children: "ESPECIFICAÇÕES DO MODELO"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-3xl font-bold text-cream mt-1",
								children: product.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base font-normal text-cream/90 leading-relaxed",
								children: product.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 pt-3 border-t border-cream/15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-wider text-gold",
									children: "Destaques Técnicos:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: product.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2 text-xs sm:text-sm text-cream font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feat })]
									}, feat))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 pt-3 border-t border-cream/15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-wider text-gold",
									children: "Ambientes Recomendados:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: product.idealFor.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm font-semibold bg-gold/20 text-gold border border-gold/40 px-3 py-1 rounded-md",
										children: item
									}, item))
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t border-cream/20 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-cream/90 font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "w-4 h-4 text-gold" }), " Medição gratuita no DF"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-gold" }), " Até 2 anos de garantia"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `${WHATSAPP_URL}&text=${encodeURIComponent(`Olá! Vi a persiana modelo ${product.name} no site e gostaria de solicitar um orçamento para o meu endereço em Brasília.`)}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "w-full inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 text-base font-bold text-cream shadow-xl hover:scale-[1.02] transition-transform",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5" }),
								"Orçar ",
								product.name,
								" no WhatsApp"
							]
						})]
					})]
				})]
			})]
		})
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-4 z-50 flex items-center sm:bottom-6 sm:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-navy/90 border border-gold/30 text-cream text-xs font-medium shadow-xl backdrop-blur-md animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dúvidas? Fale conosco no WhatsApp" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: WHATSAPP_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Falar no WhatsApp com especialista da LG Persianas",
			className: "group relative inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-3.5 sm:px-5 sm:py-4 text-cream font-medium text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -inset-1 rounded-full bg-whatsapp/40 animate-ping opacity-75 pointer-events-none",
					style: { animationDuration: "3.5s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
					className: "relative h-6 w-6 shrink-0 text-cream group-hover:rotate-12 transition-transform duration-300",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative font-medium tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline sm:hidden",
						children: "WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Orçamento no WhatsApp"
					})]
				})
			]
		})]
	});
}
function Index() {
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-navy min-h-screen text-cream font-sans selection:bg-gold selection:text-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsSection, { onSelectProduct: (prod) => setSelectedProduct(prod) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductModal, {
				product: selectedProduct,
				onClose: () => setSelectedProduct(null)
			})
		]
	});
}
//#endregion
export { Index as component };
