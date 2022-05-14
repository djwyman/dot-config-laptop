(this["webpackJsonpsn-rme"]=this["webpackJsonpsn-rme"]||[]).push([[0],{187:function(t,e,n){t.exports=n(564)},192:function(t,e,n){},193:function(t,e,n){},564:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(18),c=n.n(a),i=(n(192),n(193),n(37)),s=n(31),l=n(60),u=n(59),d=n(179),h=n(180),g=n.n(h),b=n(185),m=n(186),k=n(184),v=n.n(k),f=function(){function t(){Object(i.a)(this,t),this.updateObservers=[],this.initiateBridge()}return Object(s.a)(t,null,[{key:"get",value:function(){return null==this.instance&&(this.instance=new t),this.instance}}]),Object(s.a)(t,[{key:"addUpdateObserver",value:function(t){var e={callback:t};return this.updateObservers.push(e),e}},{key:"notifyObserversOfUpdate",value:function(){var t,e=Object(m.a)(this.updateObservers);try{for(e.s();!(t=e.n()).done;){t.value.callback()}}catch(n){e.e(n)}finally{e.f()}}},{key:"getNote",value:function(){return this.note}},{key:"initiateBridge",value:function(){var t=this;this.componentManager=new v.a([{name:"stream-context-item"}],(function(){})),this.componentManager.streamContextItem((function(e){t.note=e,t.notifyObserversOfUpdate()}))}},{key:"save",value:function(){var t=this;if(this.note){var e=this.note;e.content&&e.content.text&&(e.content.text=e.content.text.replace(/\n\\/g,"\n")),this.componentManager.saveItemWithPresave(e,(function(){e=t.note}))}}}]),t}();f.instance=null;var y=n(47),p={almostBlack:"#181A1B",lightBlack:"#2F3336",almostWhite:"#E6E6E6",white:"#FFF",white10:"rgba(255, 255, 255, 0.1)",black:"#000",black10:"rgba(0, 0, 0, 0.1)",primary:"#1AB6FF",greyLight:"#F4F7FA",grey:"#E8EBED",greyMid:"#C5CCD3",greyDark:"#DAE1E9"},w=Object(y.a)(Object(y.a)({},p),{},{fontFamily:"var(--sn-stylekit-sans-serif-font)",fontFamilyMono:"'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",fontWeight:400,zIndex:100,link:"var(--sn-stylekit-info-color)",placeholder:"var(--sn-stylekit-input-placeholder-color)",textSecondary:"#4E5C6E",textLight:p.white,textHighlight:"#ff0",selected:p.primary,codeComment:"var(--sn-stylekit-secondary-foreground-color)",codePunctuation:"var(--sn-stylekit-contrast-backround-color)",codeNumber:"#d73a49",codeProperty:"#c08b30",codeTag:"#3d8fd1",codeString:"var(--sn-stylekit-success-color)",codeSelector:"#6679cc",codeAttr:"#c76b29",codeEntity:"#22a2c9",codeKeyword:"var(--sn-stylekit-info-color)",codeFunction:"#6f42c1",codeStatement:"#22a2c9",codePlaceholder:"#3d8fd1",codeInserted:"#202746",codeImportant:"#c94922",blockToolbarBackground:p.white,blockToolbarTrigger:p.greyMid,blockToolbarTriggerIcon:p.white,blockToolbarItem:p.almostBlack,blockToolbarText:p.almostBlack,blockToolbarHoverBackground:p.greyLight,blockToolbarDivider:p.greyMid,noticeInfoBackground:"#F5BE31",noticeInfoText:p.almostBlack,noticeTipBackground:"#9E5CF7",noticeTipText:p.white,noticeWarningBackground:"#FF5C80",noticeWarningText:p.white}),O=Object(y.a)(Object(y.a)({},w),{},{background:"transparent",text:"var(--sn-stylekit-paragraph-text-color)",code:"var(--sn-stylekit-secondary-foreground-color)",cursor:"var(--sn-stylekit-contrast-foreground-color)",divider:p.greyMid,toolbarBackground:p.lightBlack,toolbarInput:p.white10,toolbarItem:p.white,tableDivider:"var(--sn-stylekit-secondary-foreground-color)",tableSelected:"var(--sn-stylekit-secondary-foreground-color)",tableSelectedBackground:"var(--sn-stylekit-contrast-background-color)",quote:"var(--sn-stylekit-secondary-foreground-color)",codeBackground:"var(--sn-stylekit-secondary-background-color)",codeBorder:"var(--sn-stylekit-secondary-foreground-color)",horizontalRule:"var(--sn-stylekit-input-placeholder-color)",imageErrorBackground:p.greyLight}),E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.attrs.matches[1];return r.a.createElement(b.a,{tweetId:t,placeholder:"Loading tweet..."})}}]),n}(r.a.Component),B=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.attrs.matches[1];return r.a.createElement("iframe",{title:"Youtube Embed ".concat(t),src:"https://www.youtube.com/embed/".concat(t,"?modestbranding=1")})}}]),n}(r.a.Component),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).onChange=Object(d.debounce)((function(t){var e=t(),n=o.state.note;n.content.text=e,o.setState({note:n}),f.get().save()})),o.state={},o.editor=null,o.setEditorRef=function(t){o.editor=t},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.get().addUpdateObserver((function(){var e=f.get().getNote(),n=!t.state.note||t.state.note&&t.state.note.uuid!==e.uuid;t.setState({note:f.get().getNote()}),n&&t.updateMarkdown()}))}},{key:"updateMarkdown",value:function(){var t=this.state.note.content.text.replace(/(\n{2})(\n+)(?!---)/g,(function(t,e,n){return e+n.replace(/(\n)/g,"\\$1")}));""===t&&(t="\n"),this.setState({markdown:t})}},{key:"getNoteContents",value:function(){return this.state.note?this.state.note.content.text:""}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(g.a,{ref:this.setEditorRef,value:this.state.markdown,placeholder:"",autoFocus:!0,onChange:this.onChange.bind(this),theme:O,className:"gKsMQS",onSearchLink:function(e){return t.editor.getHeadings().map((function(t){return{title:t.title,subtitle:"H".concat(t.level),url:"#"+t.id}})).filter((function(t){return t.title.match(e)}))},onClickLink:function(e,n){e.match(/^#/)?t.editor.scrollToAnchor(e):window.open(e,"_blank")},embeds:[{title:"Twitt",keywords:"twitter tw",matcher:function(t){return t.match(/^https?:\/\/twitter.com\/[\d\w_-]+\/status\/(\d+)/)},component:E},{title:"YouTube",keywords:"youtube video tube google",icon:function(){return r.a.createElement("img",{alt:"Youtube Logo",src:"https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",width:24,height:24})},matcher:function(t){return t.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i)},component:B}]}))}}]),n}(r.a.Component);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.464faf3d.chunk.js.map