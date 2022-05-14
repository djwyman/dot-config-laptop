(this["webpackJsonpsn-rme"]=this["webpackJsonpsn-rme"]||[]).push([[0],{130:function(e,t,o){e.exports=o(373)},135:function(e,t,o){},136:function(e,t,o){},373:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),r=o(17),c=o.n(r),i=(o(135),o(136),o(32)),s=o(26),l=o(56),u=o(54),d=o(24),h=o(124),g=o.n(h),b=o(129),m=o(128),k=o.n(m),v=function(){function e(){Object(i.a)(this,e),this.updateObservers=[],this.initiateBridge()}return Object(s.a)(e,null,[{key:"get",value:function(){return null==this.instance&&(this.instance=new e),this.instance}}]),Object(s.a)(e,[{key:"addUpdateObserver",value:function(e){var t={callback:e};return this.updateObservers.push(t),t}},{key:"notifyObserversOfUpdate",value:function(){var e,t=Object(b.a)(this.updateObservers);try{for(t.s();!(e=t.n()).done;){e.value.callback()}}catch(o){t.e(o)}finally{t.f()}}},{key:"getNote",value:function(){return this.note}},{key:"initiateBridge",value:function(){var e=this;this.componentManager=new k.a([{name:"stream-context-item"}],(function(){})),this.componentManager.streamContextItem((function(t){e.note=t,e.notifyObserversOfUpdate()})),this.componentManager.streamItems(["SN|Component","SN|Theme","SF|Extension"],(function(t){e.items=t.filter((function(e){return!e.isMetadataUpdate}))}))}},{key:"save",value:function(){var e=this;if(this.note){var t=this.note;this.componentManager.saveItemWithPresave(t,(function(){t=e.note}))}}}]),e}();v.instance=null;var f=o(33),y={almostBlack:"#181A1B",lightBlack:"#2F3336",almostWhite:"#E6E6E6",white:"#FFF",white10:"rgba(255, 255, 255, 0.1)",black:"#000",black10:"rgba(0, 0, 0, 0.1)",primary:"#1AB6FF",greyLight:"#F4F7FA",grey:"#E8EBED",greyMid:"#C5CCD3",greyDark:"#DAE1E9"},p=Object(f.a)(Object(f.a)({},y),{},{fontFamily:"var(--sn-stylekit-sans-serif-font)",fontFamilyMono:"'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",fontWeight:400,zIndex:100,link:"var(--sn-stylekit-info-color)",placeholder:"var(--sn-stylekit-input-placeholder-color)",textSecondary:"#4E5C6E",textLight:y.white,textHighlight:"#ff0",selected:y.primary,codeComment:"var(--sn-stylekit-secondary-foreground-color)",codePunctuation:"var(--sn-stylekit-contrast-backround-color)",codeNumber:"#d73a49",codeProperty:"#c08b30",codeTag:"#3d8fd1",codeString:"var(--sn-stylekit-success-color)",codeSelector:"#6679cc",codeAttr:"#c76b29",codeEntity:"#22a2c9",codeKeyword:"var(--sn-stylekit-info-color)",codeFunction:"#6f42c1",codeStatement:"#22a2c9",codePlaceholder:"#3d8fd1",codeInserted:"#202746",codeImportant:"#c94922",blockToolbarBackground:y.white,blockToolbarTrigger:y.greyMid,blockToolbarTriggerIcon:y.white,blockToolbarItem:y.almostBlack,blockToolbarText:y.almostBlack,blockToolbarHoverBackground:y.greyLight,blockToolbarDivider:y.greyMid,noticeInfoBackground:"#F5BE31",noticeInfoText:y.almostBlack,noticeTipBackground:"#9E5CF7",noticeTipText:y.white,noticeWarningBackground:"#FF5C80",noticeWarningText:y.white}),w=Object(f.a)(Object(f.a)({},p),{},{background:"transparent",text:"var(--sn-stylekit-paragraph-text-color)",code:"var(--sn-stylekit-secondary-foreground-color)",cursor:"var(--sn-stylekit-contrast-foreground-color)",divider:y.greyMid,toolbarBackground:y.lightBlack,toolbarInput:y.white10,toolbarItem:y.white,tableDivider:"var(--sn-stylekit-secondary-foreground-color)",tableSelected:"var(--sn-stylekit-secondary-foreground-color)",tableSelectedBackground:"var(--sn-stylekit-contrast-background-color)",quote:"var(--sn-stylekit-secondary-foreground-color)",codeBackground:"var(--sn-stylekit-secondary-background-color)",codeBorder:"var(--sn-stylekit-secondary-foreground-color)",horizontalRule:"var(--sn-stylekit-input-placeholder-color)",imageErrorBackground:y.greyLight}),O=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props.attrs.matches[1];return a.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(e,"?modestbranding=1")})}}]),o}(a.a.Component),B=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(i.a)(this,o),(n=t.call(this,e)).onChange=Object(d.debounce)((function(e){var t=e(),o=n.state.note;o.content.text=t,n.setState({note:o}),v.get().save()})),n.state={},n}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=this;v.get().addUpdateObserver((function(){var t=v.get().getNote(),o=!e.state.note||e.state.note&&e.state.note.uuid!=t.uuid;e.setState({note:v.get().getNote()}),o&&e.updateMarkdown()}))}},{key:"updateMarkdown",value:function(){var e=this.state.note.content.text;this.setState({markdown:e})}},{key:"getNoteContents",value:function(){return this.state.note?this.state.note.content.text:""}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(g.a,{value:this.state.markdown,placeholder:"",autoFocus:!0,onChange:this.onChange.bind(this),theme:w,embeds:[{title:"YouTube",keywords:"youtube video tube google",icon:function(){return a.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",width:24,height:24})},matcher:function(e){return e.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i)},component:O}]}))}}]),o}(a.a.Component);var E=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.7406e6d4.chunk.js.map