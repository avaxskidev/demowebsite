(this.webpackJsonpchaintoadz=this.webpackJsonpchaintoadz||[]).push([[0],{136:function(e,t,n){},243:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"},{"internalType":"uint256","name":"mintPrice","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"address","name":"admin2","type":"address"},{"internalType":"address","name":"admin3","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_tokenIdTracker","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReflectionBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastDividendAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectToOwners","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"reflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividend","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},252:function(e,t,n){},265:function(e,t){},290:function(e,t){},292:function(e,t){},310:function(e,t){},311:function(e,t){},372:function(e,t){},374:function(e,t){},385:function(e,t){},387:function(e,t){},412:function(e,t){},414:function(e,t){},415:function(e,t){},420:function(e,t){},422:function(e,t){},428:function(e,t){},430:function(e,t){},443:function(e,t){},455:function(e,t){},458:function(e,t){},469:function(e,t){},478:function(e,t){},480:function(e,t){},557:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),s=n(240),r=n.n(s),c=(n(136),n(6)),l=n(7),o=n(12),p=n(11),d=(n(252),n(49)),u=n(16),y=n(18),m=n.n(y),b=n(50),j=n(43),h=n(98),x=n.n(h),f=n(243),v=function(){var e=Object(b.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.eth.getAccounts();case 2:return window.user=e.sent[0],window.instanceAvaxSki=new t.eth.Contract(f,"0x13c7361a895F2873D7DdceB00227084f8a6A2Bdb",{from:window.user}),e.abrupt("return",window.instanceAvaxSki);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(577),O=n(576),w=n.p+"static/media/skiteampromo.f6418538.png",k=n.p+"static/media/skiteamfulllogo.a04c1547.png",T=n.p+"static/media/background1.169bca43.png",C=n.p+"static/media/background2.4caf927d.png",S=n.p+"static/media/background3.f14869db.png",M=n.p+"static/media/chart.e6464046.png",A=n.p+"static/media/skiteamlogo.1d871a68.png",N=n.p+"static/media/wsb.b5a74781.png",I=n.p+"static/media/skigif.dcc5c4d3.gif",R=n.p+"static/media/rotatingif.bab78d97.gif",B=n(0),D=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(b.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(b.a)(m.a.mark((function e(t,n){var a,i,s,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){a=new x.a(window.ethereum);try{t(a)}catch(c){n(c)}}else window.web3?(i=window.web3,console.log("Injected web3 detected."),t(i)):(s=new x.a.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc"),r=new x.a(s),console.log("No web3 instance injected, using Local web3."),t(r));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:return t=e.sent,window.web3=t,e.next=7,v(window.web3);case 7:return n=e.sent,a.setState({user:window.user}),a.setState({contractInstanceAvaxSki:n}),e.next=12,a.loadData();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error",e.t0);case 17:return e.prev=17,a.setState({isLoadingHomepageData:!1}),e.finish(17);case 20:a.interval=setInterval((function(){return a.tick()}),250);case 21:case"end":return e.stop()}}),e,null,[[0,14,17,20]])}))),a.state={hasHomepageData:!1,isLoadingHomepageData:!0,nftIndexAvaxSki:-100,avaxSkiSelect:1,isMintingAvaxSki:!1,isClaimingRewards:!1,myRewards:0,totalSupply:0,price:0,timeLeft:""},a.mint=a.mint.bind(Object(j.a)(a)),a.tick=a.tick.bind(Object(j.a)(a)),a.decreaseSelect=a.decreaseSelect.bind(Object(j.a)(a)),a.increaseSelect=a.increaseSelect.bind(Object(j.a)(a)),a.claimRewards=a.claimRewards.bind(Object(j.a)(a)),a.loadData=a.loadData.bind(Object(j.a)(a)),a}return Object(l.a)(n,[{key:"tick",value:function(){var e=1635255e6-(new Date).getTime(),t=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);e<0?this.setState({timeLeft:"Minting live!"}):this.setState({timeLeft:t+"D:"+n+"H:"+a+"M:"+i+"S"})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"loadData",value:function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.state.contractInstanceAvaxSki.methods.totalSupply().call();case 3:t=e.sent,this.setState({totalSupply:t}),this.setState({hasHomepageData:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"increaseSelect",value:function(){this.state.avaxSkiSelect<20&&this.setState({avaxSkiSelect:this.state.avaxSkiSelect+1})}},{key:"decreaseSelect",value:function(){this.state.avaxSkiSelect>1&&this.setState({avaxSkiSelect:this.state.avaxSkiSelect-1})}},{key:"mint",value:function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isMinting:!0}),t=window.web3.utils.toWei(2.5*this.state.avaxSkiSelect+"","ether"),e.next=5,this.state.contractInstanceAvaxSki.methods.mint(this.state.avaxSkiSelect).send({value:t});case 5:return e.next=7,this.loadData();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error",e.t0);case 12:return e.prev=12,this.setState({isMinting:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"claimRewards",value:function(){var e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isClaimingRewards:!0}),e.next=4,this.state.contractInstanceAvaxSki.methods.claimRewards().send();case 4:return e.next=6,this.loadData();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:return e.prev=11,this.setState({isClaimingRewards:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(g.a,{children:Object(B.jsxs)("header",{className:"header-ski",children:[Object(B.jsx)("div",{className:"logo-holder",children:Object(B.jsx)("img",{className:"logo",src:k})}),Object(B.jsxs)("div",{className:"rest-holder",children:[Object(B.jsx)("div",{className:"mobile-hide",children:Object(B.jsx)("a",{href:"https://twitter.com/AvaxSkiTeam",target:"_blank",children:Object(B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(B.jsx)("path",{fill:"black",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})})}),Object(B.jsx)("div",{className:"mobile-hide",style:{marginRight:"15px"},children:Object(B.jsx)("a",{href:"https://discord.com/invite/XykWhX5vn7",target:"_blank",children:Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"22",viewBox:"0 0 71 55",fill:"none",children:[Object(B.jsx)("g",{"clip-path":"url(#clip0)",children:Object(B.jsx)("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",fill:"black"})}),Object(B.jsx)("defs",{children:Object(B.jsx)("clipPath",{id:"clip0",children:Object(B.jsx)("rect",{width:"71",height:"55",fill:"white"})})})]})})}),Object(B.jsx)("div",{className:"invisible",children:"Hall of fame"}),Object(B.jsx)("div",{children:Object(B.jsx)(d.c,{to:"/",className:"menu-link disabled",children:"My Skiers"})}),Object(B.jsx)("div",{children:Object(B.jsx)(d.c,{to:"/",className:"menu-link disabled",children:"Market"})}),Object(B.jsx)("div",{children:Object(B.jsx)(d.c,{to:"/",className:"menu-link",children:"Home"})})]}),Object(B.jsxs)("div",{className:"mobile-show menu-mobile",children:[Object(B.jsx)("div",{style:{float:"left"},children:Object(B.jsx)("a",{href:"https://twitter.com/AvaxSkiTeam",target:"_blank",children:Object(B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(B.jsx)("path",{fill:"black",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})})}),Object(B.jsx)("div",{style:{marginRight:"15px",float:"left"},children:Object(B.jsx)("a",{href:"https://discord.com/invite/XykWhX5vn7",target:"_blank",children:Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"22",viewBox:"0 0 71 55",fill:"none",children:[Object(B.jsx)("g",{"clip-path":"url(#clip0)",children:Object(B.jsx)("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",fill:"black"})}),Object(B.jsx)("defs",{children:Object(B.jsx)("clipPath",{id:"clip0",children:Object(B.jsx)("rect",{width:"71",height:"55",fill:"white"})})})]})})})]})]})}),Object(B.jsx)(g.a,{style:{padding:"0px"},children:Object(B.jsx)("div",{className:"background-promo",style:{backgroundImage:"url(".concat(w,")")}})}),Object(B.jsxs)(g.a,{style:{margin:"25px"},children:[Object(B.jsxs)("p",{className:"original-skiers",children:["Original Skiers ",Object(B.jsx)("br",{})," on the"]}),Object(B.jsx)("p",{className:"avax-blockchain-skiers",children:"AVAX BLOCKCHAIN"}),null==window.ethereum||void 0==window.ethereum?Object(B.jsx)("p",{style:{textAlign:"center"},children:Object(B.jsx)("a",{className:"install-metamask",href:"https://metamask.io/download",target:"_blank",children:"Install Metamask"})}):Object(B.jsx)(B.Fragment,{children:null==window.user?Object(B.jsx)("p",{style:{textAlign:"center"},children:Object(B.jsx)("a",{onClick:function(){},className:"install-metamask",target:"_blank",children:"Connect Metamask"})}):null}),Object(B.jsxs)("p",{className:"time-till-mint",children:["Time till mint - ",this.state.timeLeft]})]}),Object(B.jsx)(g.a,{className:"meet-skiers-container align-items-center",style:{backgroundImage:"url(".concat(T,")")},children:Object(B.jsxs)(O.a,{container:!0,spacing:2,children:[Object(B.jsx)(O.a,{item:!0,md:8,xs:12,style:{textAlign:"center"},children:Object(B.jsxs)("div",{children:[Object(B.jsx)("p",{className:"meet-skiers",style:{color:"#435b5b"},children:"Meet the skiers"}),Object(B.jsxs)("span",{className:"meet-skiers-text",children:["The Avalanche Ski Team are hitting the slopes! ",Object(B.jsx)("br",{}),"They are 10.000 randomly generated Skiers using over 100 unique assets!",Object(B.jsx)("br",{}),"Each Skier comes with a fresh, unique look, meaning no two Skiers are alike. ",Object(B.jsx)("br",{}),"Let's hit the slopes!"]})]})}),Object(B.jsx)(O.a,{item:!0,md:4,xs:12,style:{marginTop:"-40px"},children:Object(B.jsx)("div",{style:{textAlign:"center"},children:Object(B.jsx)("img",{style:{height:"300px",marginBottom:"-10vh"},className:"dynamic-image",src:R})})})]})}),Object(B.jsx)(g.a,{style:{padding:"35px",paddingTop:"10vh",paddingBottom:"10vh",minHeight:"200px"},children:Object(B.jsxs)(O.a,{container:!0,spacing:2,children:[Object(B.jsx)(O.a,{item:!0,md:2,xs:2}),Object(B.jsx)(O.a,{item:!0,md:4,xs:12,children:Object(B.jsx)("div",{style:{textAlign:"right"},className:"mobile-center mint",children:Object(B.jsx)("img",{style:{height:"250px"},className:"dynamic-image",src:I})})}),Object(B.jsxs)(O.a,{item:!0,md:4,xs:12,className:"mobile-center mint minter-component",children:[Object(B.jsxs)("div",{className:"minted-component mobile-center mint",style:{display:"inline-block"},children:[this.state.totalSupply,"/",1e4," ",Object(B.jsx)("br",{}),"skiers minted ",Object(B.jsx)("br",{}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("span",{className:"skier-select",children:[Object(B.jsx)("a",{onClick:function(){e.decreaseSelect()},children:"-"}),Object(B.jsx)("div",{children:this.state.avaxSkiSelect}),Object(B.jsx)("a",{onClick:function(){e.increaseSelect()},children:"+"})]}),Object(B.jsx)("a",{onClick:function(){e.mint()},className:"skier-jumpin",children:"Jump in"})]})]}),Object(B.jsx)("p",{className:"skier-price",children:"2.5 AVAX / Skier"})]}),Object(B.jsx)(O.a,{item:!0,md:2,xs:2})]})}),Object(B.jsx)(g.a,{className:"tokenomics-container align-items-center",style:{backgroundImage:"url(".concat(C,")")},children:Object(B.jsxs)(O.a,{container:!0,spacing:2,children:[Object(B.jsx)(O.a,{item:!0,md:8,xs:12,style:{textAlign:"center"},children:Object(B.jsxs)("div",{children:[Object(B.jsx)("p",{className:"meet-skiers",style:{color:"#435b5b"},children:"Tokenomics"}),Object(B.jsxs)("span",{className:"meet-skiers-text",children:["You can earn 3 different ways with the Avax Ski Team! ",Object(B.jsx)("br",{}),"10% of every minting fee is given back to existing AvaxSkiTeam holders. ",Object(B.jsx)("br",{}),"Original minters of a Skier earn 1% royalty each time their Skier is resold on our marketplace.",Object(B.jsx)("br",{}),"And finally, 3% of EACH transaction on our marketplace is distributed to Skier holders!"]})]})}),Object(B.jsx)(O.a,{item:!0,md:4,xs:12,style:{marginTop:"-65px"},children:Object(B.jsx)("div",{style:{textAlign:"center"},children:Object(B.jsx)("img",{style:{height:"300px",marginBottom:"-10vh"},className:"dynamic-image",src:N})})})]})}),Object(B.jsx)(g.a,{className:"tokenomics-container",children:Object(B.jsxs)(O.a,{container:!0,spacing:2,children:[Object(B.jsx)(O.a,{item:!0,md:4,xs:12,style:{textAlign:"center"},children:Object(B.jsxs)("div",{children:[Object(B.jsx)("p",{className:"meet-skiers",style:{color:"black"},children:"Rarity"}),Object(B.jsxs)("span",{className:"meet-skiers-text",children:["Skier rarity is determined by how many points the assets add up to. ",Object(B.jsx)("br",{}),"Your skier can have anywhere from 2 to 14 points. The rarer an asset on the Skier is, the more points it gives towards the ranking!"]})]})}),Object(B.jsx)(O.a,{item:!0,md:8,xs:12,children:Object(B.jsx)("div",{style:{textAlign:"center"},children:Object(B.jsx)("img",{style:{width:"100%"},src:M})})})]})}),Object(B.jsx)(g.a,{className:"roadmap-container align-items-center",style:{backgroundImage:"url(".concat(S,")")},children:Object(B.jsx)(O.a,{container:!0,spacing:2,children:Object(B.jsx)(O.a,{item:!0,md:12,xs:12,children:Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{className:"roadmap-title",children:"Roadmap"}),Object(B.jsxs)("p",{className:"roadmap-paragraphs",children:[Object(B.jsx)("div",{style:{color:"#78ffff"},children:"25% Minted:"}),Object(B.jsx)("br",{}),"Skier holders will have a chance to receive $AVAX rewarded to them! ",Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("div",{style:{color:"#78ffff"},children:" 50% Minted:"}),Object(B.jsx)("br",{})," We will hold a Skier giveaway! 10 Skiers will be given away to Skier holders! ",Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("div",{style:{color:"#78ffff"},children:"75% Minted:"}),Object(B.jsx)("br",{})," More giveaways! 5 more Skiers will be given away to holders! ",Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("div",{style:{color:"#78ffff"},children:"100% Minted:"})," ",Object(B.jsx)("br",{}),"Our exclusive Marketplace goes live! ",Object(B.jsx)("br",{})," Buy and sell Skiers only on our market and earn rewards doing so! ",Object(B.jsx)("br",{}),"We will also integrate floor sweeping on a weekly basis. ",Object(B.jsx)("br",{}),"These Skiers will be given back to holders who have not listed their Skier on the market!"]})]})})})}),Object(B.jsx)("div",{style:{textAlign:"center",paddingTop:"100px"},children:Object(B.jsx)("img",{className:"floating-logo",style:{height:"75px"},src:A})})]})}}]),n}(i.a.Component),_=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(B.jsx)(d.b,{children:Object(B.jsxs)(u.c,{children:[Object(B.jsx)(u.a,{exact:!0,path:"/",component:D}),Object(B.jsx)(u.a,{exact:!0,path:"/home",component:D}),Object(B.jsx)(u.a,{render:function(){return Object(B.jsx)("h1",{children:"Not Found"})}})]})})}}]),n}(i.a.Component),F=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(B.jsx)(d.a,{children:Object(B.jsx)(_,{})})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(B.jsx)(F,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[557,1,2]]]);
//# sourceMappingURL=main.c8f6edc5.chunk.js.map