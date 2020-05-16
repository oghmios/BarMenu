parcelRequire = function (e, r, t, n) {
	var i, o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;

	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = "function" == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			p.resolve = function (r) {
				return e[t][1][r] || r
			}, p.cache = {};
			var l = r[t] = new f.Module(t);
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports;

		function p(e) {
			return f(p.resolve(e))
		}
	}
	f.isParcelRequire = !0, f.Module = function (e) {
		this.id = e, this.bundle = f, this.exports = {}
	}, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
		e[r] = [function (e, r) {
			r.exports = t
		}, {}]
	};
	for (var c = 0; c < t.length; c++) try {
		f(t[c])
	} catch (e) {
		i || (i = e)
	}
	if (t.length) {
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
			return l
		}) : n && (this[n] = l)
	}
	if (parcelRequire = f, i) throw i;
	return f
}({
	"Focm": [function (require, module, exports) {
		new Vue({
			el: "#app",
			data: {
				isOpen: !1,
				view: "Bebidas",
				menu: [{
					name: "Bebidas",
					id: 1,
					list: [{
						name: "Coca Cola",
						description: "prueba",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}, {
						name: "Pepsi",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}]
				}, {
					name: "Desayunos",
					id: 2,
					list: [{
						name: "1/2 Tostada y Café",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}, {
						name: "Tostada entera y Café",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}]
				}, {
					name: "Sandwiches",
					id: 3,
					list: [{
						name: "Sandwich mixto",
						description: "Jamónmon york y queso tostado",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}, {
						name: "Sandwich especial",
						description: "Lechuga, tomate, esparragos, huevo cocido y atún con un chorrito de mayonesa",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}]
				}, {
					name: "Bocadillos",
					id: 4,
					list: [{
						name: "Tortilla de patatas",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}, {
						name: "Jamón serrano",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}, {
						name: "Lomo y queso",
						mesa: "1€",
						barra: "1€",
						terraza: "1€"
					}]
				}]
			},
			computed: {
				currentMenu: function () {
					var a = this;
					return this.menu.find(function (e) {
						return e.name == a.view
					})
				}
			},
			methods: {
				changeView: function (a) {
					console.log(a), this.isOpen = !1, this.view = a
				}
			}
		});
	}, {}]
}, {}, ["Focm"], null)
//# sourceMappingURL=/src.9bca6cea.js.map