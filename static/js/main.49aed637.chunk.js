(this['webpackJsonpdiscord-overlay-among_us'] = this['webpackJsonpdiscord-overlay-among_us'] || []).push([
	[0],
	{
		25: function (n, e, t) {},
		253: function (n, e, t) {
			'use strict';
			t.r(e);
			var a = t(0),
				r = t.n(a),
				o = t(10),
				i = t.n(o),
				s = (t(25), t(11)),
				c = t(12),
				l = t(13),
				d = t(20),
				p = t(19),
				m = t(3),
				u = t(257),
				b = t(256),
				g = t(14),
				h = (t(31), t(32), t(1)),
				j = ['red', 'blue', 'green', 'pink', 'orange', 'yellow', 'black', 'white', 'purple', 'brown', 'cyan', 'lime', 'maroon', 'rose', 'banana', 'gray', 'tan', 'coral'],
				x = (function (n) {
					Object(d.a)(t, n);
					var e = Object(p.a)(t);
					function t(n) {
						var a;
						return (
							Object(c.a)(this, t),
							((a = e.call(this, n)).handleChange = function (n) {
								a.setState(Object(s.a)({}, n.target.name, n.target.value));
							}),
							(a.genetate_css = function () {
								return (
									'/* Created by https://argo20k.github.io/notogawa-discord_overlay-among_us-fork/ */\nbody {\n  background-color: rgba(0, 0, 0, 0);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  float: right;\n}\n\n' +
									'ul[class$="voice_states"] {\n  margin: 0;\n  padding: 0;\n}\n\n' +
									'li[class$="voice_state"] img[class$="avatar"] {\n  border: 0 !important;\n  height: 100px !important;\n  width: 100px !important;\n  border-radius: 0 !important;\n}\n\n' +
									'li[class$="voice_state"] span[class*="name"] {\n  width: 100px !important;\n  position: relative;\n  overflow: visible;\n  top: -26px;\n  display: inline-block;\n}\n\n' +
									'li[class$="voice_state"][class*="speaking"] span[class*="name"] {\n  background: #41DAC6 !important;\n}\n\n' +
									'li[class$="voice_state"] span[class*="name"]:before {\n  position: absolute;\n  top: -80px;\n  left: -50px;\n  z-index: -1;\n  content: "";\n  display: block;\n  width: 90px;\n  height: 115px;\n  background-image: url(https://i.imgur.com/6kxQbIF.png);\n  background-size: 1620px auto;\n  transform: scale(-0.75, 0.75) rotate(30deg);\n}\n\n' +
									'li[class$="voice_state"] span[class*="name"]:before {\n  transition: all 0.05s 0s ease-in-out;\n}\n\n' +
									'li[class$="voice_state"][class*="speaking"] span[class*="name"]:before {\n  z-index: 1;\n  transform: translateX(-35px) scale(-1, 1);\n  animation: pyonpyon 0.5s ease 0.1s infinite alternate none running;\n}\n\n' +
									'li[class$="voice_state"] {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  display: none;\n  padding: 20px 0 0 90px;\n  position: relative;\n}\n\n' +
									'@keyframes pyonpyon {\n  0% {\n    transform: translateX(-35px) scale(-1, 1);\n  }\n  50% {\n    transform: translateX(-35px) scale(-1.1, 0.85);\n  }\n  100% {\n    transform: translateX(-35px) scale(-1, 1);\n  }\n}\n\n' +
									'@keyframes mozomozo {\n  0% {\n    transform: scale(-0.75, 0.75) rotate(30deg);\n  }\n  80% {\n    transform: scale(-0.75, 0.75) rotate(15deg);\n  }\n  100% {\n    transform: scale(-0.75, 0.75) rotate(30deg);\n  }\n}\n\n' +
									j
										.map(function (n, e) {
											return '' === a.state[n]
												? ''
												: '\n/* ' +
														n +
														' */\n' +
														'li[class$="voice_state"][data-userid*="' +
														a.state[n] +
														'"] {\n  display: block;\n}\n' +
														'li[class$="voice_state"][data-userid*="' +
														a.state[n] +
														'"] span[class*="name"]:before {\n  background-position: -' +
														90 * e +
														'px 0;\n}\n' +
														'li[class$="voice_state"][data-userid*="' +
														a.state[n] +
														'"][class*="speaking"] span[class*="name"]:before {\n  background-position: -' +
														90 * e +
														'px -115px !important;\n}\n';
										})
										.reduce(function (n, e) {
											return n + e;
										})
								);
							}),
							(a.state = { red: '', blue: '', green: '', pink: '', orange: '', yellow: '', black: '', white: '', purple: '', brown: '', cyan: '', lime: '', maroon: '', rose: '', banana: '', gray: '', tan: '', coral: '' }),
							a
						);
					}
					return (
						Object(l.a)(t, [
							{
								key: 'render',
								value: function () {
									var n = this,
										e = function (e) {
											return '' === n.state[e] ? e : e + ' used';
										};
									return Object(h.jsxs)('div', {
										className: 'App',
										children: [
											Object(h.jsx)('h1', { children: 'Discord StreamKit Overlay Custom CSS Generator for Among Us Streamer' }),
											Object(h.jsx)('div', {
												className: 'players',
												children: Object(h.jsx)('ul', {
													children: j.map(function (t, a) {
														return Object(h.jsxs)(
															'li',
															{
																className: e(t),
																children: [
																	Object(h.jsx)('div', { className: 'chara', children: Object(h.jsx)('img', { alt: ''.concat(t, ' player'), src: ''.concat('/notogawa-discord_overlay-among_us-fork', '/players.png') }) }),
																	Object(h.jsxs)('div', { className: 'form', children: [t, ' ', Object(h.jsx)('br', {}), Object(h.jsx)('input', { type: 'text', name: t, onChange: n.handleChange, value: n.state[t] })] }),
																],
															},
															t
														);
													}),
												}),
											}),
											Object(h.jsx)('div', {
												className: 'tabs',
												children: Object(h.jsxs)(m.d, {
													children: [
														Object(h.jsxs)(m.b, { children: [Object(h.jsx)(m.a, { children: 'CSS' }), Object(h.jsx)(m.a, { children: 'Demo' })] }),
														Object(h.jsx)(m.c, { children: Object(h.jsx)('div', { className: 'style', children: Object(h.jsx)(g.CopyToClipboard, { text: this.genetate_css(), children: Object(h.jsx)(u.a, { language: 'css', style: b.a, children: this.genetate_css() }) }) }) }),
														Object(h.jsx)(m.c, {
															children: Object(h.jsx)('div', {
																className: 'demo',
																children: Object(h.jsx)('iframe', { title: 'demo', width: '873', height: '491', src: 'https://www.youtube.com/embed/-4H-KxnMSKQ', frameborder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen: !0 }),
															}),
														}),
													],
												}),
											}),
										],
									});
								},
							},
						]),
						t
					);
				})(a.Component),
				f = function (n) {
					n &&
						n instanceof Function &&
						t
							.e(3)
							.then(t.bind(null, 258))
							.then(function (e) {
								var t = e.getCLS,
									a = e.getFID,
									r = e.getFCP,
									o = e.getLCP,
									i = e.getTTFB;
								t(n), a(n), r(n), o(n), i(n);
							});
				};
			i.a.render(Object(h.jsx)(r.a.StrictMode, { children: Object(h.jsx)(x, {}) }), document.getElementById('root')), f();
		},
		31: function (n, e, t) {},
	},
	[[253, 1, 2]],
]);
//# sourceMappingURL=main.49aed637.chunk.js.map
