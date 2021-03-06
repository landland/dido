! function(e, t, a) {
    ! function(t) {
        var n = "function" == typeof define && define.amd,
            i = "https:" == a.location.protocol ? "https:" : "http:",
            o = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.11/jquery.mousewheel.min.js";
        n || e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + i + "//" + o + "%3E%3C/script%3E")), t()
    }(function() {
        var n = "mCustomScrollbar",
            i = "mCS",
            o = ".mCustomScrollbar",
            r = {
                setWidth: !1,
                setHeight: !1,
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                autoHideScrollbar: !1,
                autoExpandScrollbar: !1,
                alwaysShowScrollbar: 0,
                snapAmount: null,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1,
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    enable: !1,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                advanced: {
                    autoExpandHorizontalScroll: !1,
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: !0,
                    updateOnSelectorChange: !1,
                    releaseDraggableSelectors: !1
                },
                theme: "light",
                callbacks: {
                    onInit: !1,
                    onScrollStart: !1,
                    onScroll: !1,
                    onTotalScroll: !1,
                    onTotalScrollBack: !1,
                    whileScrolling: !1,
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0,
                    onOverflowY: !1,
                    onOverflowX: !1,
                    onOverflowYNone: !1,
                    onOverflowXNone: !1
                },
                live: !1,
                liveSelector: null
            },
            s = 0,
            l = {},
            c = function(e) {
                l[e] && (clearTimeout(l[e]), p._delete.call(null, l[e]))
            },
            d = t.attachEvent && !t.addEventListener ? 1 : 0,
            u = !1,
            h = {
                init: function(t) {
                    var t = e.extend(!0, {}, r, t),
                        a = p._selector.call(this);
                    if (t.live) {
                        var n = t.liveSelector || this.selector || o,
                            d = e(n);
                        if ("off" === t.live) return c(n), void 0;
                        l[n] = setTimeout(function() {
                            d.mCustomScrollbar(t), "once" === t.live && d.length && c(n)
                        }, 500)
                    } else c(n);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p._findAxis.call(null, t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = p._findScrollButtonsType.call(null, t.scrollButtons.scrollType), p._theme.call(null, t), e(a).each(function() {
                        var a = e(this);
                        if (!a.data(i)) {
                            a.data(i, {
                                idx: ++s,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: a.css("direction"),
                                cbOffsets: null,
                                trigger: null
                            });
                            var n = a.data(i).opt,
                                o = a.data("mcs-axis"),
                                r = a.data("mcs-scrollbar-position"),
                                l = a.data("mcs-theme");
                            o && (n.axis = o), r && (n.scrollbarPosition = r), l && (n.theme = l, p._theme.call(null, n)), p._pluginMarkup.call(this), h.update.call(null, a)
                        }
                    })
                },
                update: function(t) {
                    var a = t || p._selector.call(this);
                    return e(a).each(function() {
                        var t = e(this);
                        if (t.data(i)) {
                            var a = t.data(i),
                                n = a.opt,
                                o = e("#mCSB_" + a.idx + "_container"),
                                r = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
                            if (!o.length) return;
                            a.tweenRunning && p._stop.call(null, t), t.hasClass("mCS_disabled") && t.removeClass("mCS_disabled"), t.hasClass("mCS_destroyed") && t.removeClass("mCS_destroyed"), p._maxHeight.call(this), p._expandContentHorizontally.call(this), "y" === n.axis || n.advanced.autoExpandHorizontalScroll || o.css("width", p._contentWidth(o.children())), a.overflowed = p._overflowed.call(this), p._scrollbarVisibility.call(this), n.autoDraggerLength && p._setDraggerLength.call(this), p._scrollRatio.call(this), p._bindEvents.call(this);
                            var s = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)];
                            "x" !== n.axis && (a.overflowed[0] ? r[0].height() > r[0].parent().height() ? p._resetContentPosition.call(this) : (p._scrollTo.call(this, t, s[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), a.contentReset.y = null) : (p._resetContentPosition.call(this), "y" === n.axis ? p._unbindEvents.call(this) : "yx" === n.axis && a.overflowed[1] && p._scrollTo.call(this, t, s[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== n.axis && (a.overflowed[1] ? r[1].width() > r[1].parent().width() ? p._resetContentPosition.call(this) : (p._scrollTo.call(this, t, s[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), a.contentReset.x = null) : (p._resetContentPosition.call(this), "x" === n.axis ? p._unbindEvents.call(this) : "yx" === n.axis && a.overflowed[0] && p._scrollTo.call(this, t, s[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), p._autoUpdate.call(this)
                        }
                    })
                },
                scrollTo: function(t, a) {
                    if ("undefined" != typeof t && null != t) {
                        var n = p._selector.call(this);
                        return e(n).each(function() {
                            var n = e(this);
                            if (n.data(i)) {
                                var o = n.data(i),
                                    r = o.opt,
                                    s = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    l = e.extend(!0, {}, s, a),
                                    c = p._arr.call(this, t),
                                    d = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                c[0] = p._to.call(this, c[0], "y"), c[1] = p._to.call(this, c[1], "x"), l.moveDragger && (c[0] *= o.scrollRatio.y, c[1] *= o.scrollRatio.x), l.dur = d, setTimeout(function() {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", p._scrollTo.call(this, n, c[0].toString(), l)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", p._scrollTo.call(this, n, c[1].toString(), l))
                                }, l.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var t = p._selector.call(this);
                    return e(t).each(function() {
                        var t = e(this);
                        t.data(i) && p._stop.call(null, t)
                    })
                },
                disable: function(t) {
                    var a = p._selector.call(this);
                    return e(a).each(function() {
                        var a = e(this);
                        if (a.data(i)) {
                            var n = a.data(i);
                            n.opt, p._autoUpdate.call(this, "remove"), p._unbindEvents.call(this), t && p._resetContentPosition.call(this), p._scrollbarVisibility.call(this, !0), a.addClass("mCS_disabled")
                        }
                    })
                },
                destroy: function() {
                    var t = p._selector.call(this);
                    return e(t).each(function() {
                        var a = e(this);
                        if (a.data(i)) {
                            var o = a.data(i),
                                r = o.opt,
                                s = e("#mCSB_" + o.idx),
                                l = e("#mCSB_" + o.idx + "_container"),
                                d = e(".mCSB_" + o.idx + "_scrollbar");
                            r.live && c(t), p._autoUpdate.call(this, "remove"), p._unbindEvents.call(this), p._resetContentPosition.call(this), a.removeData(i), p._delete.call(null, this.mcs), d.remove(), s.replaceWith(l.contents()), a.removeClass(n + " _" + i + "_" + o.idx + " mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
                        }
                    })
                }
            },
            p = {
                _selector: function() {
                    return "object" != typeof e(this) || e(this).length < 1 ? o : this
                },
                _theme: function(t) {
                    var a = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        i = ["minimal", "minimal-dark"],
                        o = ["minimal", "minimal-dark"],
                        r = ["minimal", "minimal-dark"];
                    t.autoDraggerLength = e.inArray(t.theme, a) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, n) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, i) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, o) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
                },
                _findAxis: function(e) {
                    return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
                },
                _findScrollButtonsType: function(e) {
                    return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
                },
                _pluginMarkup: function() {
                    var t = e(this),
                        a = t.data(i),
                        o = a.opt,
                        r = o.autoExpandScrollbar ? " mCSB_scrollTools_onDrag_expand" : "",
                        s = ["<div id='mCSB_" + a.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + r + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + a.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + a.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + a.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        c = "yx" === o.axis ? s[0] + s[1] : "x" === o.axis ? s[1] : s[0],
                        d = "yx" === o.axis ? "<div id='mCSB_" + a.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        u = o.autoHideScrollbar ? " mCS-autoHide" : "",
                        h = "x" !== o.axis && "rtl" === a.langDir ? " mCS-dir-rtl" : "";
                    o.setWidth && t.css("width", o.setWidth), o.setHeight && t.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === a.langDir ? "989999px" : o.setLeft, t.addClass(n + " _" + i + "_" + a.idx + u + h).wrapInner("<div id='mCSB_" + a.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + a.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir=" + a.langDir + " /></div>");
                    var m = e("#mCSB_" + a.idx),
                        f = e("#mCSB_" + a.idx + "_container");
                    "y" === o.axis || o.advanced.autoExpandHorizontalScroll || f.css("width", p._contentWidth(f.children())), "outside" === o.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), f.wrap(d)), p._scrollButtons.call(this);
                    var v = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
                    v[0].css("min-height", v[0].height()), v[1].css("min-width", v[1].width())
                },
                _contentWidth: function(t) {
                    return Math.max.apply(Math, t.map(function() {
                        return e(this).outerWidth(!0)
                    }).get())
                },
                _expandContentHorizontally: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = a.opt,
                        o = e("#mCSB_" + a.idx + "_container");
                    n.advanced.autoExpandHorizontalScroll && "y" !== n.axis && o.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                        position: "relative"
                    }).unwrap()
                },
                _scrollButtons: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = a.opt,
                        o = e(".mCSB_" + a.idx + "_scrollbar:first"),
                        r = ["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],
                        s = ["x" === n.axis ? r[2] : r[0], "x" === n.axis ? r[3] : r[1], r[2], r[3]];
                    n.scrollButtons.enable && o.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
                },
                _maxHeight: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = (a.opt, e("#mCSB_" + a.idx)),
                        o = t.css("max-height"),
                        r = -1 !== o.indexOf("%"),
                        s = t.css("box-sizing");
                    if ("none" !== o) {
                        var l = r ? t.parent().height() * parseInt(o) / 100 : parseInt(o);
                        "border-box" === s && (l -= t.innerHeight() - t.height() + (t.outerHeight() - t.innerHeight())), n.css("max-height", Math.round(l))
                    }
                },
                _setDraggerLength: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = e("#mCSB_" + a.idx),
                        o = e("#mCSB_" + a.idx + "_container"),
                        r = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")],
                        s = [n.height() / o.outerHeight(!1), n.width() / o.outerWidth(!1)],
                        l = [parseInt(r[0].css("min-height")), Math.round(s[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(s[1] * r[1].parent().width())],
                        c = d && l[1] < l[0] ? l[0] : l[1],
                        u = d && l[3] < l[2] ? l[2] : l[3];
                    r[0].css({
                        height: c,
                        "max-height": r[0].parent().height() - 10
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": l[0] + "px"
                    }), r[1].css({
                        width: u,
                        "max-width": r[1].parent().width() - 10
                    })
                },
                _scrollRatio: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = e("#mCSB_" + a.idx),
                        o = e("#mCSB_" + a.idx + "_container"),
                        r = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")],
                        s = [o.outerHeight(!1) - n.height(), o.outerWidth(!1) - n.width()],
                        l = [s[0] / (r[0].parent().height() - r[0].height()), s[1] / (r[1].parent().width() - r[1].width())];
                    a.scrollRatio = {
                        y: l[0],
                        x: l[1]
                    }
                },
                _onDragClasses: function(e, t, a) {
                    var n = a ? "mCSB_dragger_onDrag_expanded" : "",
                        i = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag"],
                        o = e.closest(".mCSB_scrollTools");
                    "active" === t ? (e.toggleClass(i[0] + " " + n), o.toggleClass(i[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(i[0]), o.removeClass(i[1])) : (e.addClass(i[0]), o.addClass(i[1])))
                },
                _overflowed: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = e("#mCSB_" + a.idx),
                        o = e("#mCSB_" + a.idx + "_container"),
                        r = null == a.overflowed ? o.height() : o.outerHeight(!1),
                        s = null == a.overflowed ? o.width() : o.outerWidth(!1);
                    return [r > n.height(), s > n.width()]
                },
                _resetContentPosition: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = a.opt,
                        o = e("#mCSB_" + a.idx),
                        r = e("#mCSB_" + a.idx + "_container"),
                        s = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
                    if (p._stop(t), ("x" !== n.axis && !a.overflowed[0] || "y" === n.axis && a.overflowed[0]) && (s[0].add(r).css("top", 0), p._scrollTo(t, "_resetY")), "y" !== n.axis && !a.overflowed[1] || "x" === n.axis && a.overflowed[1]) {
                        var l = dx = 0;
                        "rtl" === a.langDir && (l = o.width() - r.outerWidth(!1), dx = Math.abs(l / a.scrollRatio.x)), r.css("left", l), s[1].css("left", dx), p._scrollTo(t, "_resetX")
                    }
                },
                _bindEvents: function() {
                    function t() {
                        r = setTimeout(function() {
                            e.event.special.mousewheel ? (clearTimeout(r), p._mousewheel.call(a[0])) : t()
                        }, 1e3)
                    }
                    var a = e(this),
                        n = a.data(i),
                        o = n.opt;
                    if (!n.bindEvents) {
                        if (p._draggable.call(this), o.contentTouchScroll && p._contentDraggable.call(this), o.mouseWheel.enable) {
                            var r;
                            t()
                        }
                        p._draggerRail.call(this), p._wrapperScroll.call(this), o.advanced.autoScrollOnFocus && p._focus.call(this), o.scrollButtons.enable && p._buttons.call(this), o.keyboard.enable && p._keyboard.call(this), n.bindEvents = !0
                    }
                },
                _unbindEvents: function() {
                    var t = e(this),
                        n = t.data(i),
                        o = n.opt,
                        r = i + "_" + n.idx,
                        s = ".mCSB_" + n.idx + "_scrollbar",
                        l = e("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + s + " .mCSB_draggerContainer,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + s + ">a"),
                        c = e("#mCSB_" + n.idx + "_container");
                    o.advanced.releaseDraggableSelectors && l.add(e(o.advanced.releaseDraggableSelectors)), n.bindEvents && (e(a).unbind("." + r), l.each(function() {
                        e(this).unbind("." + r)
                    }), clearTimeout(t[0]._focusTimeout), p._delete.call(null, t[0]._focusTimeout), clearTimeout(n.sequential.step), p._delete.call(null, n.sequential.step), clearTimeout(c[0].onCompleteTimeout), p._delete.call(null, c[0].onCompleteTimeout), n.bindEvents = !1)
                },
                _scrollbarVisibility: function(t) {
                    var a = e(this),
                        n = a.data(i),
                        o = n.opt,
                        r = e("#mCSB_" + n.idx + "_container_wrapper"),
                        s = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                        l = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                        c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                    "x" !== o.axis && (n.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), s.removeClass("mCS_no_scrollbar_y mCS_y_hidden")) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[0].add(l[0].children("a")).css("display", "none"), s.removeClass("mCS_y_hidden")) : (l[0].css("display", "none"), s.addClass("mCS_y_hidden")), s.addClass("mCS_no_scrollbar_y"))), "y" !== o.axis && (n.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), s.removeClass("mCS_no_scrollbar_x mCS_x_hidden")) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[1].add(l[1].children("a")).css("display", "none"), s.removeClass("mCS_x_hidden")) : (l[1].css("display", "none"), s.addClass("mCS_x_hidden")), s.addClass("mCS_no_scrollbar_x"))), n.overflowed[0] || n.overflowed[1] ? a.removeClass("mCS_no_scrollbar") : a.addClass("mCS_no_scrollbar")
                },
                _coordinates: function(e) {
                    var t = e.type;
                    switch (t) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var a = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                n = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                            return [a.pageY, a.pageX, n > 1];
                        default:
                            return [e.pageY, e.pageX, !1]
                    }
                },
                _draggable: function() {
                    function t(e) {
                        var t = v.find("iframe");
                        if (t.length) {
                            var a = e ? "auto" : "none";
                            t.css("pointer-events", a)
                        }
                    }

                    function n(e, t, a, n) {
                        if (v[0].idleTimer = h.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                            r = (o[0].offsetLeft - t + n) * c.scrollRatio.x;
                        else var i = "y",
                            r = (o[0].offsetTop - e + a) * c.scrollRatio.y;
                        p._scrollTo(l, r.toString(), {
                            dir: i,
                            drag: !0
                        })
                    }
                    var o, r, s, l = e(this),
                        c = l.data(i),
                        h = c.opt,
                        m = i + "_" + c.idx,
                        f = ["mCSB_" + c.idx + "_dragger_vertical", "mCSB_" + c.idx + "_dragger_horizontal"],
                        v = e("#mCSB_" + c.idx + "_container"),
                        g = e("#" + f[0] + ",#" + f[1]),
                        _ = h.advanced.releaseDraggableSelectors ? g.add(e(h.advanced.releaseDraggableSelectors)) : g;
                    g.bind("mousedown." + m + " touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function(n) {
                        if (n.stopImmediatePropagation(), n.preventDefault(), p._mouseBtnLeft(n)) {
                            u = !0, d && (a.onselectstart = function() {
                                return !1
                            }), t(!1), p._stop(l), o = e(this);
                            var i = o.offset(),
                                c = p._coordinates(n)[0] - i.top,
                                m = p._coordinates(n)[1] - i.left,
                                f = o.height() + i.top,
                                v = o.width() + i.left;
                            f > c && c > 0 && v > m && m > 0 && (r = c, s = m), p._onDragClasses(o, "active", h.autoExpandScrollbar)
                        }
                    }).bind("touchmove." + m, function(e) {
                        e.stopImmediatePropagation(), e.preventDefault();
                        var t = o.offset(),
                            a = p._coordinates(e)[0] - t.top,
                            i = p._coordinates(e)[1] - t.left;
                        n(r, s, a, i)
                    }), e(a).bind("mousemove." + m + " pointermove." + m + " MSPointerMove." + m, function(e) {
                        if (o) {
                            var t = o.offset(),
                                a = p._coordinates(e)[0] - t.top,
                                i = p._coordinates(e)[1] - t.left;
                            if (r === a) return;
                            n(r, s, a, i)
                        }
                    }).add(_).bind("mouseup." + m + " touchend." + m + " pointerup." + m + " MSPointerUp." + m, function() {
                        o && (p._onDragClasses(o, "active", h.autoExpandScrollbar), o = null), u = !1, d && (a.onselectstart = null), t(!0)
                    })
                },
                _contentDraggable: function() {
                    function t(e, t) {
                        var a = [1.5 * t, 2 * t, t / 1.5, t / 2];
                        return e > 90 ? t > 4 ? a[0] : a[3] : e > 60 ? t > 3 ? a[3] : a[2] : e > 30 ? t > 8 ? a[1] : t > 6 ? a[0] : t > 4 ? t : a[2] : t > 8 ? t : a[3]
                    }

                    function a(e, t, a, n, i, o) {
                        e && p._scrollTo(g, e.toString(), {
                            dur: t,
                            scrollEasing: a,
                            dir: n,
                            overwrite: i,
                            drag: o
                        })
                    }
                    var n, o, r, s, l, c, d, h, m, f, v, g = e(this),
                        _ = g.data(i),
                        x = _.opt,
                        b = i + "_" + _.idx,
                        S = e("#mCSB_" + _.idx),
                        w = e("#mCSB_" + _.idx + "_container"),
                        C = [e("#mCSB_" + _.idx + "_dragger_vertical"), e("#mCSB_" + _.idx + "_dragger_horizontal")],
                        y = [],
                        T = [],
                        I = 0,
                        B = "yx" === x.axis ? "none" : "all",
                        M = [];
                    w.bind("touchstart." + b + " pointerdown." + b + " MSPointerDown." + b, function(e) {
                        if (p._pointerTouch(e) && !u && !p._coordinates(e)[2]) {
                            var t = w.offset();
                            n = p._coordinates(e)[0] - t.top, o = p._coordinates(e)[1] - t.left, M = [p._coordinates(e)[0], p._coordinates(e)[1]]
                        }
                    }).bind("touchmove." + b + " pointermove." + b + " MSPointerMove." + b, function(e) {
                        if (p._pointerTouch(e) && !u && !p._coordinates(e)[2]) {
                            e.stopImmediatePropagation(), c = p._getTime();
                            var t = S.offset(),
                                i = p._coordinates(e)[0] - t.top,
                                r = p._coordinates(e)[1] - t.left,
                                s = "mcsLinearOut";
                            if (y.push(i), T.push(r), M[2] = Math.abs(p._coordinates(e)[0] - M[0]), M[3] = Math.abs(p._coordinates(e)[1] - M[1]), _.overflowed[0]) var l = C[0].parent().height() - C[0].height(),
                                d = n - i > 0 && i - n > -(l * _.scrollRatio.y) && (2 * M[3] < M[2] || "yx" === x.axis);
                            if (_.overflowed[1]) var h = C[1].parent().width() - C[1].width(),
                                m = o - r > 0 && r - o > -(h * _.scrollRatio.x) && (2 * M[2] < M[3] || "yx" === x.axis);
                            (d || m) && e.preventDefault(), f = "yx" === x.axis ? [n - i, o - r] : "x" === x.axis ? [null, o - r] : [n - i, null], w[0].idleTimer = 250, _.overflowed[0] && a(f[0], I, s, "y", "all", !0), _.overflowed[1] && a(f[1], I, s, "x", B, !0)
                        }
                    }), S.bind("touchstart." + b + " pointerdown." + b + " MSPointerDown." + b, function(e) {
                        if (p._pointerTouch(e) && !u && !p._coordinates(e)[2]) {
                            e.stopImmediatePropagation(), p._stop(g), l = p._getTime();
                            var t = S.offset();
                            r = p._coordinates(e)[0] - t.top, s = p._coordinates(e)[1] - t.left, y = [], T = []
                        }
                    }).bind("touchend." + b + " pointerup." + b + " MSPointerUp." + b, function(e) {
                        if (p._pointerTouch(e) && !u && !p._coordinates(e)[2]) {
                            e.stopImmediatePropagation(), d = p._getTime();
                            var n = S.offset(),
                                i = p._coordinates(e)[0] - n.top,
                                o = p._coordinates(e)[1] - n.left;
                            if (!(d - c > 30)) {
                                m = 1e3 / (d - l);
                                var g = "mcsEaseOut",
                                    b = 2.5 > m,
                                    C = b ? [y[y.length - 2], T[T.length - 2]] : [0, 0];
                                h = b ? [i - C[0], o - C[1]] : [i - r, o - s];
                                var I = [Math.abs(h[0]), Math.abs(h[1])];
                                m = b ? [Math.abs(h[0] / 4), Math.abs(h[1] / 4)] : [m, m];
                                var M = [Math.abs(w[0].offsetTop) - h[0] * t(I[0] / m[0], m[0]), Math.abs(w[0].offsetLeft) - h[1] * t(I[1] / m[1], m[1])];
                                f = "yx" === x.axis ? [M[0], M[1]] : "x" === x.axis ? [null, M[1]] : [M[0], null], v = [4 * I[0] + x.scrollInertia, 4 * I[1] + x.scrollInertia];
                                var k = parseInt(x.contentTouchScroll) || 0;
                                f[0] = I[0] > k ? f[0] : 0, f[1] = I[1] > k ? f[1] : 0, _.overflowed[0] && a(f[0], v[0], g, "y", B, !1), _.overflowed[1] && a(f[1], v[1], g, "x", B, !1)
                            }
                        }
                    })
                },
                _mousewheel: function() {
                    function t(e) {
                        var t = null;
                        try {
                            var a = e.contentDocument || e.contentWindow.document;
                            t = a.body.innerHTML
                        } catch (n) {}
                        return null !== t
                    }
                    var a = e(this),
                        n = a.data(i);
                    if (n) {
                        var o = n.opt,
                            r = i + "_" + n.idx,
                            s = e("#mCSB_" + n.idx),
                            l = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                            c = e("#mCSB_" + n.idx + "_container").find("iframe"),
                            u = s;
                        c.length && c.each(function() {
                            var a = this;
                            t(a) && (u = u.add(e(a).contents().find("body")))
                        }), u.bind("mousewheel." + r, function(t, i) {
                            if (p._stop(a), !p._disableMousewheel(a, t.target)) {
                                var r = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : d && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
                                if ("x" === o.axis || "x" === o.mouseWheel.axis) var c = "x",
                                    u = [Math.round(r * n.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                                    h = "auto" !== o.mouseWheel.scrollAmount ? u[1] : u[0] >= s.width() ? .9 * s.width() : u[0],
                                    m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                                    f = l[1][0].offsetLeft,
                                    v = l[1].parent().width() - l[1].width(),
                                    g = t.deltaX || t.deltaY || i;
                                else var c = "y",
                                    u = [Math.round(r * n.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                                    h = "auto" !== o.mouseWheel.scrollAmount ? u[1] : u[0] >= s.height() ? .9 * s.height() : u[0],
                                    m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                                    f = l[0][0].offsetTop,
                                    v = l[0].parent().height() - l[0].height(),
                                    g = t.deltaY || i;
                                "y" === c && !n.overflowed[0] || "x" === c && !n.overflowed[1] || (o.mouseWheel.invert && (g = -g), o.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== f || 0 > g && f !== v || o.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), p._scrollTo(a, (m - g * h).toString(), {
                                    dir: c
                                }))
                            }
                        })
                    }
                },
                _disableMousewheel: function(t, a) {
                    var n = a.nodeName.toLowerCase(),
                        o = t.data(i).opt.mouseWheel.disableOver,
                        r = ["select", "textarea"];
                    return e.inArray(n, o) > -1 && !(e.inArray(n, r) > -1 && !e(a).is(":focus"))
                },
                _draggerRail: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = i + "_" + a.idx,
                        o = e("#mCSB_" + a.idx + "_container"),
                        r = o.parent(),
                        s = e(".mCSB_" + a.idx + "_scrollbar .mCSB_draggerContainer");
                    s.bind("touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function() {
                        u = !0
                    }).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function() {
                        u = !1
                    }).bind("click." + n, function(n) {
                        if (e(n.target).hasClass("mCSB_draggerContainer") || e(n.target).hasClass("mCSB_draggerRail")) {
                            p._stop(t);
                            var i = e(this),
                                s = i.find(".mCSB_dragger");
                            if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!a.overflowed[1]) return;
                                var l = "x",
                                    c = n.pageX > s.offset().left ? -1 : 1,
                                    d = Math.abs(o[0].offsetLeft) - .9 * c * r.width()
                            } else {
                                if (!a.overflowed[0]) return;
                                var l = "y",
                                    c = n.pageY > s.offset().top ? -1 : 1,
                                    d = Math.abs(o[0].offsetTop) - .9 * c * r.height()
                            }
                            p._scrollTo(t, d.toString(), {
                                dir: l,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                _focus: function() {
                    var t = e(this),
                        n = t.data(i),
                        o = n.opt,
                        r = i + "_" + n.idx,
                        s = e("#mCSB_" + n.idx + "_container"),
                        l = s.parent();
                    s.bind("focusin." + r, function() {
                        var n = e(a.activeElement),
                            i = s.find(".mCustomScrollBox").length,
                            r = 0;
                        n.is(o.advanced.autoScrollOnFocus) && (p._stop(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (r + 17) * i : 0, t[0]._focusTimeout = setTimeout(function() {
                            var e = [n.offset().top - s.offset().top, n.offset().left - s.offset().left],
                                a = [s[0].offsetTop, s[0].offsetLeft],
                                i = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - n.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - n.outerWidth(!1)],
                                c = "yx" !== o.axis || i[0] || i[1] ? "all" : "none";
                            "x" === o.axis || i[0] || p._scrollTo(t, e[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: r
                            }), "y" === o.axis || i[1] || p._scrollTo(t, e[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: r
                            })
                        }, t[0]._focusTimer))
                    })
                },
                _wrapperScroll: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = i + "_" + a.idx,
                        o = e("#mCSB_" + a.idx + "_container").parent();
                    o.bind("scroll." + n, function() {
                        (0 !== o.scrollTop() || 0 !== o.scrollLeft()) && e(".mCSB_" + a.idx + "_scrollbar").css("visibility", "hidden")
                    })
                },
                _buttons: function() {
                    var t = e(this),
                        a = t.data(i),
                        n = a.opt,
                        o = a.sequential,
                        r = i + "_" + a.idx,
                        s = (e("#mCSB_" + a.idx + "_container"), ".mCSB_" + a.idx + "_scrollbar"),
                        l = e(s + ">a");
                    l.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(i) {
                        function r(e, a) {
                            o.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, p._sequentialScroll.call(this, t, e, a)
                        }
                        if (i.preventDefault(), p._mouseBtnLeft(i)) {
                            var s = e(this).attr("class");
                            switch (o.type = n.scrollButtons.scrollType, i.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === o.type) return;
                                    u = !0, a.tweenRunning = !1, r("on", s);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" === o.type) return;
                                    u = !1, o.dir && r("off", s);
                                    break;
                                case "click":
                                    if ("stepped" !== o.type || a.tweenRunning) return;
                                    r("on", s)
                            }
                        }
                    })
                },
                _keyboard: function() {
                    var t = e(this),
                        n = t.data(i),
                        o = n.opt,
                        r = n.sequential,
                        s = i + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = e("#mCSB_" + n.idx + "_container"),
                        d = c.parent(),
                        u = "input,textarea,select,datalist,keygen,[contenteditable='true']";
                    l.attr("tabindex", "0").bind("blur." + s + " keydown." + s + " keyup." + s, function(i) {
                        function s(e, a) {
                            r.type = o.keyboard.scrollType, r.scrollAmount = o.snapAmount || o.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || p._sequentialScroll.call(this, t, e, a)
                        }
                        switch (i.type) {
                            case "blur":
                                n.tweenRunning && r.dir && s("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var l = i.keyCode ? i.keyCode : i.which,
                                    h = "on";
                                if ("x" !== o.axis && (38 === l || 40 === l) || "y" !== o.axis && (37 === l || 39 === l)) {
                                    if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                    "keyup" === i.type && (h = "off"), e(a.activeElement).is(u) || (i.preventDefault(), i.stopImmediatePropagation(), s(h, l))
                                } else if (33 === l || 34 === l) {
                                    if ((n.overflowed[0] || n.overflowed[1]) && (i.preventDefault(), i.stopImmediatePropagation()), "keyup" === i.type) {
                                        p._stop(t);
                                        var m = 34 === l ? -1 : 1;
                                        if ("x" === o.axis || "yx" === o.axis && n.overflowed[1] && !n.overflowed[0]) var f = "x",
                                            v = Math.abs(c[0].offsetLeft) - .9 * m * d.width();
                                        else var f = "y",
                                            v = Math.abs(c[0].offsetTop) - .9 * m * d.height();
                                        p._scrollTo(t, v.toString(), {
                                            dir: f,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else if ((35 === l || 36 === l) && !e(a.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (i.preventDefault(), i.stopImmediatePropagation()), "keyup" === i.type)) {
                                    if ("x" === o.axis || "yx" === o.axis && n.overflowed[1] && !n.overflowed[0]) var f = "x",
                                        v = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                    else var f = "y",
                                        v = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                    p._scrollTo(t, v.toString(), {
                                        dir: f,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                        }
                    })
                },
                _sequentialScroll: function(t, a, n) {
                    function o(e) {
                        var a = "stepped" !== c.type,
                            n = e ? a ? l.scrollInertia / 1.5 : l.scrollInertia : 1e3 / 60,
                            i = e ? a ? 7.5 : 40 : 2.5,
                            r = [Math.abs(d[0].offsetTop), Math.abs(d[0].offsetLeft)],
                            u = [s.scrollRatio.y > 10 ? 10 : s.scrollRatio.y, s.scrollRatio.x > 10 ? 10 : s.scrollRatio.x],
                            h = "x" === c.dir[0] ? r[1] + c.dir[1] * u[1] * i : r[0] + c.dir[1] * u[0] * i,
                            m = "x" === c.dir[0] ? r[1] + c.dir[1] * parseInt(c.scrollAmount) : r[0] + c.dir[1] * parseInt(c.scrollAmount),
                            f = "auto" !== c.scrollAmount ? m : h,
                            v = e ? a ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                            g = e ? !0 : !1;
                        return e && 17 > n && (f = "x" === c.dir[0] ? r[1] : r[0]), p._scrollTo(t, f.toString(), {
                            dir: c.dir[0],
                            scrollEasing: v,
                            dur: n,
                            onComplete: g
                        }), e ? (c.dir = !1, void 0) : (clearTimeout(c.step), c.step = setTimeout(function() {
                            o()
                        }, n), void 0)
                    }

                    function r() {
                        clearTimeout(c.step), p._stop(t)
                    }
                    var s = t.data(i),
                        l = s.opt,
                        c = s.sequential,
                        d = e("#mCSB_" + s.idx + "_container"),
                        u = "stepped" === c.type ? !0 : !1;
                    switch (a) {
                        case "on":
                            if (c.dir = ["mCSB_buttonRight" === n || "mCSB_buttonLeft" === n || 39 === n || 37 === n ? "x" : "y", "mCSB_buttonUp" === n || "mCSB_buttonLeft" === n || 38 === n || 37 === n ? -1 : 1], p._stop(t), p._isNumeric(n) && "stepped" === c.type) return;
                            o(u);
                            break;
                        case "off":
                            r(), (u || s.tweenRunning && c.dir) && o(!0)
                    }
                },
                _arr: function(t) {
                    var a = e(this).data(i).opt,
                        n = [];
                    return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === a.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === a.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === a.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
                },
                _to: function(t, a) {
                    if (null != t && "undefined" != typeof t) {
                        var n = e(this),
                            o = n.data(i),
                            r = o.opt,
                            s = e("#mCSB_" + o.idx + "_container"),
                            l = s.parent(),
                            c = typeof t;
                        a || (a = "x" === r.axis ? "x" : "y");
                        var d = "x" === a ? s.outerWidth(!1) : s.outerHeight(!1),
                            u = "x" === a ? s.offset().left : s.offset().top,
                            m = "x" === a ? s[0].offsetLeft : s[0].offsetTop,
                            f = "x" === a ? "left" : "top";
                        switch (c) {
                            case "function":
                                return t();
                            case "object":
                                if (t.nodeType) var v = "x" === a ? e(t).offset().left : e(t).offset().top;
                                else if (t.jquery) {
                                    if (!t.length) return;
                                    var v = "x" === a ? t.offset().left : t.offset().top
                                }
                                return v - u;
                            case "string":
                            case "number":
                                if (p._isNumeric.call(null, t)) return Math.abs(t);
                                if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                                if (-1 !== t.indexOf("-=")) return Math.abs(m - parseInt(t.split("-=")[1]));
                                if (-1 !== t.indexOf("+=")) {
                                    var g = m + parseInt(t.split("+=")[1]);
                                    return g >= 0 ? 0 : Math.abs(g)
                                }
                                if (-1 !== t.indexOf("px") && p._isNumeric.call(null, t.split("px")[0])) return Math.abs(t.split("px")[0]);
                                if ("top" === t || "left" === t) return 0;
                                if ("bottom" === t) return Math.abs(l.height() - s.outerHeight(!1));
                                if ("right" === t) return Math.abs(l.width() - s.outerWidth(!1));
                                if ("first" === t || "last" === t) {
                                    var _ = s.find(":" + t),
                                        v = "x" === a ? e(_).offset().left : e(_).offset().top;
                                    return v - u
                                }
                                if (e(t).length) {
                                    var v = "x" === a ? e(t).offset().left : e(t).offset().top;
                                    return v - u
                                }
                                return s.css(f, t), h.update.call(null, n[0]), void 0
                        }
                    }
                },
                _autoUpdate: function(t) {
                    function a() {
                        clearTimeout(u[0].autoUpdate), u[0].autoUpdate = setTimeout(function() {
                            return d.advanced.updateOnSelectorChange && (m = r(), m !== b) ? (s(), b = m, void 0) : (d.advanced.updateOnContentResize && (f = [u.outerHeight(!1), u.outerWidth(!1), g.height(), g.width(), x()[0], x()[1]], (f[0] !== S[0] || f[1] !== S[1] || f[2] !== S[2] || f[3] !== S[3] || f[4] !== S[4] || f[5] !== S[5]) && (s(), S = f)), d.advanced.updateOnImageLoad && (v = n(), v !== w && (u.find("img").each(function() {
                                o(this.src)
                            }), w = v)), (d.advanced.updateOnSelectorChange || d.advanced.updateOnContentResize || d.advanced.updateOnImageLoad) && a(), void 0)
                        }, 60)
                    }

                    function n() {
                        var e = 0;
                        return d.advanced.updateOnImageLoad && (e = u.find("img").length), e
                    }

                    function o(e) {
                        function t(e, t) {
                            return function() {
                                return t.apply(e, arguments)
                            }
                        }

                        function a() {
                            this.onload = null, s()
                        }
                        var n = new Image;
                        n.onload = t(n, a), n.src = e
                    }

                    function r() {
                        d.advanced.updateOnSelectorChange === !0 && (d.advanced.updateOnSelectorChange = "*");
                        var t = 0,
                            a = u.find(d.advanced.updateOnSelectorChange);
                        return d.advanced.updateOnSelectorChange && a.length > 0 && a.each(function() {
                            t += e(this).height() + e(this).width()
                        }), t
                    }

                    function s() {
                        clearTimeout(u[0].autoUpdate), h.update.call(null, l[0])
                    }
                    var l = e(this),
                        c = l.data(i),
                        d = c.opt,
                        u = e("#mCSB_" + c.idx + "_container");
                    if (t) return clearTimeout(u[0].autoUpdate), p._delete.call(null, u[0].autoUpdate), void 0;
                    var m, f, v, g = u.parent(),
                        _ = [e("#mCSB_" + c.idx + "_scrollbar_vertical"), e("#mCSB_" + c.idx + "_scrollbar_horizontal")],
                        x = function() {
                            return [_[0].is(":visible") ? _[0].outerHeight(!0) : 0, _[1].is(":visible") ? _[1].outerWidth(!0) : 0]
                        },
                        b = r(),
                        S = [u.outerHeight(!1), u.outerWidth(!1), g.height(), g.width(), x()[0], x()[1]],
                        w = n();
                    a()
                },
                _snapAmount: function(e, t, a) {
                    return Math.round(e / t) * t - a
                },
                _stop: function(t) {
                    var a = t.data(i),
                        n = e("#mCSB_" + a.idx + "_container,#mCSB_" + a.idx + "_container_wrapper,#mCSB_" + a.idx + "_dragger_vertical,#mCSB_" + a.idx + "_dragger_horizontal");
                    n.each(function() {
                        p._stopTween.call(this)
                    })
                },
                _scrollTo: function(t, a, n) {
                    function o(e) {
                        return l && c.callbacks[e] && "function" == typeof c.callbacks[e]
                    }

                    function r() {
                        return [c.callbacks.alwaysTriggerOffsets || b >= S[0] + C, c.callbacks.alwaysTriggerOffsets || -y >= b]
                    }

                    function s() {
                        var e = [m[0].offsetTop, m[0].offsetLeft],
                            a = [_[0].offsetTop, _[0].offsetLeft],
                            i = [m.outerHeight(!1), m.outerWidth(!1)],
                            o = [h.height(), h.width()];
                        t[0].mcs = {
                            content: m,
                            top: e[0],
                            left: e[1],
                            draggerTop: a[0],
                            draggerLeft: a[1],
                            topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(i[0]) - o[0])),
                            leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(i[1]) - o[1])),
                            direction: n.dir
                        }
                    }
                    var l = t.data(i),
                        c = l.opt,
                        d = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: !1,
                            dur: c.scrollInertia,
                            overwrite: "all",
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        },
                        n = e.extend(d, n),
                        u = [n.dur, n.drag ? 0 : n.dur],
                        h = e("#mCSB_" + l.idx),
                        m = e("#mCSB_" + l.idx + "_container"),
                        f = m.parent(),
                        v = c.callbacks.onTotalScrollOffset ? p._arr.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                        g = c.callbacks.onTotalScrollBackOffset ? p._arr.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (l.trigger = n.trigger, (0 !== f.scrollTop() || 0 !== f.scrollLeft()) && (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== a || l.contentReset.y || (o("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== a || l.contentReset.x || (o("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== a && "_resetX" !== a) {
                        switch (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (o("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (o("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), c.snapAmount && (a = p._snapAmount(a, c.snapAmount, c.snapOffset)), n.dir) {
                            case "x":
                                var _ = e("#mCSB_" + l.idx + "_dragger_horizontal"),
                                    x = "left",
                                    b = m[0].offsetLeft,
                                    S = [h.width() - m.outerWidth(!1), _.parent().width() - _.width()],
                                    w = [a, 0 === a ? 0 : a / l.scrollRatio.x],
                                    C = v[1],
                                    y = g[1],
                                    T = C > 0 ? C / l.scrollRatio.x : 0,
                                    I = y > 0 ? y / l.scrollRatio.x : 0;
                                break;
                            case "y":
                                var _ = e("#mCSB_" + l.idx + "_dragger_vertical"),
                                    x = "top",
                                    b = m[0].offsetTop,
                                    S = [h.height() - m.outerHeight(!1), _.parent().height() - _.height()],
                                    w = [a, 0 === a ? 0 : a / l.scrollRatio.y],
                                    C = v[0],
                                    y = g[0],
                                    T = C > 0 ? C / l.scrollRatio.y : 0,
                                    I = y > 0 ? y / l.scrollRatio.y : 0
                        }
                        w[1] < 0 || 0 === w[0] && 0 === w[1] ? w = [0, 0] : w[1] >= S[1] ? w = [S[0], S[1]] : w[0] = -w[0], t[0].mcs || (s(), o("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(m[0].onCompleteTimeout), (l.tweenRunning || !(0 === b && w[0] >= 0 || b === S[0] && w[0] <= S[0])) && (p._tweenTo.call(null, _[0], x, Math.round(w[1]), u[1], n.scrollEasing), p._tweenTo.call(null, m[0], x, Math.round(w[0]), u[0], n.scrollEasing, n.overwrite, {
                            onStart: function() {
                                n.callbacks && n.onStart && !l.tweenRunning && (o("onScrollStart") && (s(), c.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, p._onDragClasses(_), l.cbOffsets = r())
                            },
                            onUpdate: function() {
                                n.callbacks && n.onUpdate && o("whileScrolling") && (s(), c.callbacks.whileScrolling.call(t[0]))
                            },
                            onComplete: function() {
                                if (n.callbacks && n.onComplete) {
                                    "yx" === c.axis && clearTimeout(m[0].onCompleteTimeout);
                                    var e = m[0].idleTimer || 0;
                                    m[0].onCompleteTimeout = setTimeout(function() {
                                        o("onScroll") && (s(), c.callbacks.onScroll.call(t[0])), o("onTotalScroll") && w[1] >= S[1] - T && l.cbOffsets[0] && (s(), c.callbacks.onTotalScroll.call(t[0])), o("onTotalScrollBack") && w[1] <= I && l.cbOffsets[1] && (s(), c.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, m[0].idleTimer = 0, p._onDragClasses(_, "hide")
                                    }, e)
                                }
                            }
                        }))
                    }
                },
                _tweenTo: function(e, a, n, i, o, r, s) {
                    function l() {
                        C.stop || (b || v.call(), b = p._getTime() - x, c(), b >= C.time && (C.time = b > C.time ? b + m - (b - C.time) : b + m - 1, C.time < b + 1 && (C.time = b + 1)), C.time < i ? C.id = f(l) : _.call())
                    }

                    function c() {
                        i > 0 ? (C.currVal = h(C.time, S, y, i, o), w[a] = Math.round(C.currVal) + "px") : w[a] = n + "px", g.call()
                    }

                    function d() {
                        m = 1e3 / 60, C.time = b + m, f = t.requestAnimationFrame ? t.requestAnimationFrame : function(e) {
                            return c(), setTimeout(e, .01)
                        }, C.id = f(l)
                    }

                    function u() {
                        null != C.id && (t.requestAnimationFrame ? t.cancelAnimationFrame(C.id) : clearTimeout(C.id), C.id = null)
                    }

                    function h(e, t, a, n, i) {
                        switch (i) {
                            case "linear":
                            case "mcsLinear":
                                return a * e / n + t;
                            case "mcsLinearOut":
                                return e /= n, e--, a * Math.sqrt(1 - e * e) + t;
                            case "easeInOutSmooth":
                                return e /= n / 2, 1 > e ? a / 2 * e * e + t : (e--, -a / 2 * (e * (e - 2) - 1) + t);
                            case "easeInOutStrong":
                                return e /= n / 2, 1 > e ? a / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, a / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return e /= n / 2, 1 > e ? a / 2 * e * e * e + t : (e -= 2, a / 2 * (e * e * e + 2) + t);
                            case "easeOutSmooth":
                                return e /= n, e--, -a * (e * e * e * e - 1) + t;
                            case "easeOutStrong":
                                return a * (-Math.pow(2, -10 * e / n) + 1) + t;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var o = (e /= n) * e,
                                    r = o * e;
                                return t + a * (.499999999999997 * r * o + -2.5 * o * o + 5.5 * r + -6.5 * o + 4 * e)
                        }
                    }
                    e._malihuTween || (e._malihuTween = {
                        top: {},
                        left: {}
                    });
                    var m, f, s = s || {},
                        v = s.onStart || function() {},
                        g = s.onUpdate || function() {},
                        _ = s.onComplete || function() {},
                        x = p._getTime(),
                        b = 0,
                        S = e.offsetTop,
                        w = e.style,
                        C = e._malihuTween[a];
                    "left" === a && (S = e.offsetLeft);
                    var y = n - S;
                    C.stop = 0, "none" !== r && u(), d()
                },
                _getTime: function() {
                    return t.performance && t.performance.now ? t.performance.now() : t.performance && t.performance.webkitNow ? t.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                },
                _stopTween: function() {
                    var e = this;
                    e._malihuTween || (e._malihuTween = {
                        top: {},
                        left: {}
                    }), e._malihuTween.top.id && (t.requestAnimationFrame ? t.cancelAnimationFrame(e._malihuTween.top.id) : clearTimeout(e._malihuTween.top.id), e._malihuTween.top.id = null, e._malihuTween.top.stop = 1), e._malihuTween.left.id && (t.requestAnimationFrame ? t.cancelAnimationFrame(e._malihuTween.left.id) : clearTimeout(e._malihuTween.left.id), e._malihuTween.left.id = null, e._malihuTween.left.stop = 1)
                },
                _delete: function(e) {
                    try {
                        delete e
                    } catch (t) {
                        e = null
                    }
                },
                _mouseBtnLeft: function(e) {
                    return !(e.which && 1 !== e.which)
                },
                _pointerTouch: function(e) {
                    var t = e.originalEvent.pointerType;
                    return !(t && "touch" !== t && 2 !== t)
                },
                _isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                }
            };
        e.fn[n] = function(t) {
            return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist"), void 0) : h.init.apply(this, arguments)
        }, e[n] = function(t) {
            return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist"), void 0) : h.init.apply(this, arguments)
        }, e[n].defaults = r, t[n] = !0, e(t).load(function() {
            e(o)[n]()
        })
    })
}(jQuery, window, document),
function(e) {
    e.flexslider = function(t, a) {
        var n = e(t);
        n.vars = e.extend({}, e.flexslider.defaults, a);
        var i, o = n.vars.namespace,
            r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            s = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
            l = "click touchend MSPointerUp",
            c = "",
            d = "vertical" === n.vars.direction,
            u = n.vars.reverse,
            h = n.vars.itemWidth > 0,
            p = "fade" === n.vars.animation,
            m = "" !== n.vars.asNavFor,
            f = {},
            v = !0;
        e.data(t, "flexslider", n), f = {
            init: function() {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = e(n.vars.selector, n), n.container = e(n.containerSelector, n), n.count = n.slides.length, n.syncExists = e(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function() {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t)
                        if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).length > 0 && e(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = e(n.vars.manualControls).length > 0 && e(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === e(n.containerSelector).length || n.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!n.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
                        n.flexAnimate(a, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function(e, t) {
                    e.preventDefault();
                    var a = 0 > t ? n.getTarget("next") : n.getTarget("prev");
                    n.flexAnimate(a, n.vars.pauseOnAction)
                }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                    n.manualPlay || n.manualPause || n.pause()
                }, function() {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), s && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && e(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                    n.vars.start(n)
                }, 200)
            },
            asNav: {
                setup: function() {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(o + "active-slide").eq(n.currentItem).addClass(o + "active-slide"), r ? (t._slider = n, n.slides.each(function() {
                        var t = this;
                        t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), t.addEventListener("MSGestureTap", function(t) {
                            t.preventDefault();
                            var a = e(this),
                                i = a.index();
                            e(n.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(l, function(t) {
                        t.preventDefault();
                        var a = e(this),
                            i = a.index(),
                            r = a.offset().left - e(n).scrollLeft();
                        0 >= r && a.hasClass(o + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : e(n.vars.asNavFor).data("flexslider").animating || a.hasClass(o + "active-slide") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t, a, i = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                        r = 1;
                    if (n.controlNavScaffold = e('<ol class="' + o + "control-nav " + o + i + '"></ol>'), n.pagingCount > 1)
                        for (var s = 0; s < n.pagingCount; s++) {
                            if (a = n.slides.eq(s), t = "thumbnails" === n.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                var d = a.attr("data-thumbcaption");
                                "" != d && void 0 != d && (t += '<span class="' + o + 'caption">' + d + "</span>")
                            }
                            n.controlNavScaffold.append("<li>" + t + "</li>"), r++
                        }
                    n.controlsContainer ? e(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function(t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var a = e(this),
                                i = n.controlNav.index(a);
                            a.hasClass(o + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                        }
                        "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(l, function(t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var a = e(this),
                                i = n.controlNav.index(a);
                            a.hasClass(o + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                        }
                        "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = e("." + o + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
                },
                active: function() {
                    n.controlNav.removeClass(o + "active").eq(n.animatingTo).addClass(o + "active")
                },
                update: function(t, a) {
                    n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append(e("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(a).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(a, t) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + o + 'direction-nav"><li><a class="' + o + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + o + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.controlsContainer ? (e(n.controlsContainer).append(t), n.directionNav = e("." + o + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = e("." + o + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(l, function(t) {
                        t.preventDefault();
                        var a;
                        ("" === c || c === t.type) && (a = e(this).hasClass(o + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(a, n.vars.pauseOnAction)), "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = o + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + o + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + o + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + o + 'pauseplay"><a></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = e("." + o + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = e("." + o + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? o + "pause" : o + "play"), n.pausePlay.bind(l, function(t) {
                        t.preventDefault(), ("" === c || c === t.type) && (e(this).hasClass(o + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    "play" === e ? n.pausePlay.removeClass(o + "pause").addClass(o + "play").html(n.vars.playText) : n.pausePlay.removeClass(o + "play").addClass(o + "pause").html(n.vars.pauseText)
                }
            },
            touch: function() {
                function e(e) {
                    n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), v = d ? n.h : n.w, _ = Number(new Date), b = e.touches[0].pageX, S = e.touches[0].pageY, f = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : h && n.currentSlide === n.last ? n.limit : h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * v : (n.currentSlide + n.cloneOffset) * v, c = d ? S : b, m = d ? b : S, t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", i, !1))
                }

                function a(e) {
                    b = e.touches[0].pageX, S = e.touches[0].pageY, g = d ? c - S : c - b, x = d ? Math.abs(g) < Math.abs(b - m) : Math.abs(g) < Math.abs(S - m);
                    var t = 500;
                    (!x || Number(new Date) - _ > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (g /= 0 === n.currentSlide && 0 > g || n.currentSlide === n.last && g > 0 ? Math.abs(g) / v + 2 : 1), n.setProps(f + g, "setTouch")))
                }

                function i() {
                    if (t.removeEventListener("touchmove", a, !1), n.animatingTo === n.currentSlide && !x && null !== g) {
                        var e = u ? -g : g,
                            o = e > 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.canAdvance(o) && (Number(new Date) - _ < 550 && Math.abs(e) > 50 || Math.abs(e) > v / 2) ? n.flexAnimate(o, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", i, !1), c = null, m = null, g = null, f = null
                }

                function o(e) {
                    e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, v = d ? n.h : n.w, _ = Number(new Date), f = h && u && n.animatingTo === n.last ? 0 : h && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : h && n.currentSlide === n.last ? n.limit : h ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * v : (n.currentSlide + n.cloneOffset) * v)
                }

                function s(e) {
                    e.stopPropagation();
                    var a = e.target._slider;
                    if (a) {
                        var n = -e.translationX,
                            i = -e.translationY;
                        return w += d ? i : n, g = w, x = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? (setImmediate(function() {
                            t._gesture.stop()
                        }), void 0) : ((!x || Number(new Date) - _ > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (g = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / v + 2 : 1)), a.setProps(f + g, "setTouch"))), void 0)
                    }
                }

                function l(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !x && null !== g) {
                            var a = u ? -g : g,
                                n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - _ < 550 && Math.abs(a) > 50 || Math.abs(a) > v / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        c = null, m = null, g = null, f = null, w = 0
                    }
                }
                var c, m, f, v, g, _, x = !1,
                    b = 0,
                    S = 0,
                    w = 0;
                r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", o, !1), t._slider = n, t.addEventListener("MSGestureChange", s, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
            },
            resize: function() {
                !n.animating && n.is(":visible") && (h || n.doMath(), p ? f.smoothHeight() : h ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            },
            smoothHeight: function(e) {
                if (!d || p) {
                    var t = p ? n : n.viewport;
                    e ? t.animate({
                        height: n.slides.eq(n.animatingTo).height()
                    }, e) : t.height(n.slides.eq(n.animatingTo).height())
                }
            },
            sync: function(t) {
                var a = e(n.vars.sync).data("flexslider"),
                    i = n.animatingTo;
                switch (t) {
                    case "animate":
                        a.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        a.playing || a.asNav || a.play();
                        break;
                    case "pause":
                        a.pause()
                }
            },
            uniqueID: function(t) {
                return t.find("[id]").each(function() {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                }), t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (f.pauseInvisible.visProp = e[t] + "Hidden");
                    if (f.pauseInvisible.visProp) {
                        var a = f.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(a, function() {
                            f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                },
                isHidden: function() {
                    return document[f.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(i), i = setTimeout(function() {
                    c = ""
                }, 3e3)
            }
        }, n.flexAnimate = function(t, a, i, r, l) {
            if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, l) || i) && n.is(":visible")) {
                if (m && r) {
                    var c = e(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === t || t === n.count - 1, c.flexAnimate(t, !0, !1, !0, l), n.direction = n.currentItem < t ? "next" : "prev", c.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t) return n.currentItem = t, n.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), !1;
                    n.currentItem = t, n.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), t = Math.floor(t / n.visible)
                }
                if (n.animating = !0, n.animatingTo = t, a && n.pause(), n.vars.before(n), n.syncExists && !l && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), h || n.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && f.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) s ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(x)) : (n.slides.eq(n.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                else {
                    var v, g, _, x = d ? n.slides.filter(":first").height() : n.computedW;
                    h ? (v = n.vars.itemMargin, _ = (n.itemW + v) * n.move * n.animatingTo, g = _ > n.limit && 1 !== n.visible ? n.limit : _) : g = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * x : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * x : u ? (n.count - 1 - t + n.cloneOffset) * x : (t + n.cloneOffset) * x, n.setProps(g, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(x)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                        n.wrapup(x)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                        n.wrapup(x)
                    })
                }
                n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function(e) {
            p || h || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function() {
            !n.animating && v && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function() {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
        }, n.play = function() {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
        }, n.stop = function() {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function(e, t) {
            var a = m ? n.pagingCount - 1 : n.last;
            return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
        }, n.getTarget = function(e) {
            return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function(e, t, a) {
            var i = function() {
                var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                    i = function() {
                        if (h) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
                        switch (t) {
                            case "setTotal":
                                return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                            case "setTouch":
                                return u ? e : e;
                            case "jumpEnd":
                                return u ? e : n.count * e;
                            case "jumpStart":
                                return u ? n.count * e : e;
                            default:
                                return e
                        }
                    }();
                return -1 * i + "px"
            }();
            n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
        }, n.setup = function(t) {
            if (p) n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (s ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
            else {
                var a, i;
                "init" === t && (n.viewport = e('<div class="' + o + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (i = e.makeArray(n.slides).reverse(), n.slides = e(i), n.container.empty().append(n.slides))), n.vars.animationLoop && !h && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), f.uniqueID(n.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(n.container), f.uniqueID(n.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(n.container)), n.newSlides = e(n.vars.selector, n), a = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !h ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    n.newSlides.css({
                        display: "block"
                    }), n.doMath(), n.viewport.height(n.h), n.setProps(a * n.h, "init")
                }, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(a * n.computedW, "init"), setTimeout(function() {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        height: 2 * n.computedW + 20,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && f.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            h || n.slides.removeClass(o + "active-slide").eq(n.currentSlide).addClass(o + "active-slide"), n.vars.init(n)
        }, n.doMath = function() {
            var e = n.slides.first(),
                t = n.vars.itemMargin,
                a = n.vars.minItems,
                i = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), h ? (n.itemT = n.vars.itemWidth + t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
        }, n.update = function(e, t) {
            n.doMath(), h || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !h || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !h || n.pagingCount < n.controlNav.length) && (h && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
        }, n.addSlide = function(t, a) {
            var i = e(t);
            n.count += 1, n.last = n.count - 1, d && u ? void 0 !== a ? n.slides.eq(n.count - a).after(i) : n.container.prepend(i) : void 0 !== a ? n.slides.eq(a).before(i) : n.container.append(i), n.update(a, "add"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function(t) {
            var a = isNaN(t) ? n.slides.index(e(t)) : t;
            n.count -= 1, n.last = n.count - 1, isNaN(t) ? e(t, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(a, "remove"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, f.init()
    }, e(window).blur(function() {
        focused = !1
    }).focus(function() {
        focused = !0
    }), e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, e.fn.flexslider = function(t) {
        if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
            var a = e(this),
                n = t.selector ? t.selector : ".slides > li",
                i = a.find(n);
            1 === i.length && t.allowOneSlide === !0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
        });
        var a = e(this).data("flexslider");
        switch (t) {
            case "play":
                a.play();
                break;
            case "pause":
                a.pause();
                break;
            case "stop":
                a.stop();
                break;
            case "next":
                a.flexAnimate(a.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                a.flexAnimate(a.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && a.flexAnimate(t, !0)
        }
    }
}(jQuery),
function() {
    var e = jQuery,
        t = function() {
            function e() {
                this.fadeDuration = 500, this.fitImagesInViewport = !0, this.resizeDuration = 700, this.positionFromTop = 50, this.showImageNumberLabel = !0, this.alwaysShowNavOnTouchDevices = !1, this.wrapAround = !1
            }
            return e.prototype.albumLabel = function(e, t) {
                return "Image " + e + " of " + t
            }, e
        }(),
        a = function() {
            function t(e) {
                this.options = e, this.album = [], this.currentImageIndex = void 0, this.init()
            }
            return t.prototype.init = function() {
                this.enable(), this.build()
            }, t.prototype.enable = function() {
                var t = this;
                e("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(a) {
                    return t.start(e(a.currentTarget)), !1
                })
            }, t.prototype.build = function() {
                var t = this;
                e("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(e("body")), this.$lightbox = e("#lightbox"), this.$overlay = e("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
                    return t.end(), !1
                }), this.$lightbox.hide().on("click", function(a) {
                    return "lightbox" === e(a.target).attr("id") && t.end(), !1
                }), this.$outerContainer.on("click", function(a) {
                    return "lightbox" === e(a.target).attr("id") && t.end(), !1
                }), this.$lightbox.find(".lb-prev").on("click", function() {
                    return t.changeImage(0 === t.currentImageIndex ? t.album.length - 1 : t.currentImageIndex - 1), !1
                }), this.$lightbox.find(".lb-next").on("click", function() {
                    return t.changeImage(t.currentImageIndex === t.album.length - 1 ? 0 : t.currentImageIndex + 1), !1
                }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
                    return t.end(), !1
                })
            }, t.prototype.start = function(t) {
                function a(e) {
                    n.album.push({
                        link: e.attr("href"),
                        title: e.attr("data-title") || e.attr("title")
                    })
                }
                var n = this,
                    i = e(window);
                i.on("resize", e.proxy(this.sizeOverlay, this)), e("select, object, embed").css({
                    visibility: "hidden"
                }), this.sizeOverlay(), this.album = [];
                var o, r = 0,
                    s = t.attr("data-lightbox");
                if (s) {
                    o = e(t.prop("tagName") + '[data-lightbox="' + s + '"]');
                    for (var l = 0; l < o.length; l = ++l) a(e(o[l])), o[l] === t[0] && (r = l)
                } else if ("lightbox" === t.attr("rel")) a(t);
                else {
                    o = e(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
                    for (var c = 0; c < o.length; c = ++c) a(e(o[c])), o[c] === t[0] && (r = c)
                }
                var d = i.scrollTop() + this.options.positionFromTop,
                    u = i.scrollLeft();
                this.$lightbox.css({
                    top: d + "px",
                    left: u + "px"
                }).fadeIn(this.options.fadeDuration), this.changeImage(r)
            }, t.prototype.changeImage = function(t) {
                var a = this;
                this.disableKeyboardNav();
                var n = this.$lightbox.find(".lb-image");
                this.$overlay.fadeIn(this.options.fadeDuration), e(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
                var i = new Image;
                i.onload = function() {
                    var o, r, s, l, c, d, u;
                    n.attr("src", a.album[t].link), o = e(i), n.width(i.width), n.height(i.height), a.options.fitImagesInViewport && (u = e(window).width(), d = e(window).height(), c = u - a.containerLeftPadding - a.containerRightPadding - 20, l = d - a.containerTopPadding - a.containerBottomPadding - 120, (i.width > c || i.height > l) && (i.width / c > i.height / l ? (s = c, r = parseInt(i.height / (i.width / s), 10), n.width(s), n.height(r)) : (r = l, s = parseInt(i.width / (i.height / r), 10), n.width(s), n.height(r)))), a.sizeContainer(n.width(), n.height())
                }, i.src = this.album[t].link, this.currentImageIndex = t
            }, t.prototype.sizeOverlay = function() {
                this.$overlay.width(e(window).width()).height(e(document).height())
            }, t.prototype.sizeContainer = function(e, t) {
                function a() {
                    n.$lightbox.find(".lb-dataContainer").width(r), n.$lightbox.find(".lb-prevLink").height(s), n.$lightbox.find(".lb-nextLink").height(s), n.showImage()
                }
                var n = this,
                    i = this.$outerContainer.outerWidth(),
                    o = this.$outerContainer.outerHeight(),
                    r = e + this.containerLeftPadding + this.containerRightPadding,
                    s = t + this.containerTopPadding + this.containerBottomPadding;
                i !== r || o !== s ? this.$outerContainer.animate({
                    width: r,
                    height: s
                }, this.options.resizeDuration, "swing", function() {
                    a()
                }) : a()
            }, t.prototype.showImage = function() {
                this.$lightbox.find(".lb-loader").hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
            }, t.prototype.updateNav = function() {
                var e = !1;
                try {
                    document.createEvent("TouchEvent"), e = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
                } catch (t) {}
                this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), e && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), e && this.$lightbox.find(".lb-next").css("opacity", "1"))))
            }, t.prototype.updateDetails = function() {
                var t = this;
                "undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function() {
                    location.href = e(this).attr("href")
                }), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
                    return t.sizeOverlay()
                })
            }, t.prototype.preloadNeighboringImages = function() {
                if (this.album.length > this.currentImageIndex + 1) {
                    var e = new Image;
                    e.src = this.album[this.currentImageIndex + 1].link
                }
                if (this.currentImageIndex > 0) {
                    var t = new Image;
                    t.src = this.album[this.currentImageIndex - 1].link
                }
            }, t.prototype.enableKeyboardNav = function() {
                e(document).on("keyup.keyboard", e.proxy(this.keyboardAction, this))
            }, t.prototype.disableKeyboardNav = function() {
                e(document).off(".keyboard")
            }, t.prototype.keyboardAction = function(e) {
                var t = 27,
                    a = 37,
                    n = 39,
                    i = e.keyCode,
                    o = String.fromCharCode(i).toLowerCase();
                i === t || o.match(/x|o|c/) ? this.end() : "p" === o || i === a ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === o || i === n) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
            }, t.prototype.end = function() {
                this.disableKeyboardNav(), e(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), e("select, object, embed").css({
                    visibility: "visible"
                })
            }, t
        }();
    e(function() {
        var e = new t;
        new a(e)
    })
}.call(this);