"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[916,205],{9701:function(e,n,t){t.r(n);var a=t(7294);n.default=function(){var e=a.useState(!1),n=e[0],t=e[1];return a.createElement("section",{className:"description"},a.createElement("div",{className:"nameText",style:{visibility:n?"visible":"hidden"}},a.createElement("ruby",null," ","曽我 ",a.createElement("rt",null,"そが"))," ","パトリック"," ",a.createElement("ruby",null,"守杜",a.createElement("rt",null,"もりと"))),a.createElement("h2",{style:{margin:0,padding:0},className:"name",onMouseEnter:function(){return t(!n)},onMouseLeave:function(){return t(!n)}},"Patrick Soga"))}},6306:function(e,n,t){t.r(n);var a=t(7294),r=t(3962);n.default=function(){return a.createElement("section",{className:"interests"},a.createElement("p",null,"I'm a first-year PhD student at the University of Virginia's"," ",a.createElement(r.Z,{href:"https://engineering.virginia.edu/departments/computer-science/"},"CS department")," ","currently advised by"," ",a.createElement(r.Z,{href:"https://jundongli.github.io"},"Prof. Jundong Li"),". My interests are broadly in machine learning on graphs and its applications."),a.createElement("p",null,"I did my undergrad at the"," ",a.createElement(r.Z,{href:"https://nd.edu"},"University of Notre Dame "),"where I received degrees in ",a.createElement(r.Z,{href:"https://cse.nd.edu/"},"CS")," and"," ",a.createElement(r.Z,{href:"https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/"},"philosophy of math/logic")," ","and worked under professors"," ",a.createElement(r.Z,{href:"https://niteshchawla.nd.edu/"},"Nitesh Chawla")," and"," ",a.createElement(r.Z,{href:"https://www3.nd.edu/~dchiang/"},"David Chiang"),"."))}},341:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(6552),r=t(7294),i=JSON.parse('{"G":"@article{gape,\\n  doi = {10.48550/ARXIV.2212.06898},\\n  url = {https://arxiv.org/abs/2212.06898},\\n  author = {Soga, Patrick and Chiang, David},\\n  keywords = {Machine Learning (cs.LG), FOS: Computer and information sciences, FOS: Computer and information sciences},\\n  title = {Bridging Graph Position Encodings for Transformers with Weighted Graph-Walking Automata},\\n  booktitle = {Transactions on Machine Learning Research},\\n  year = {2023},\\n  codeUrl = {https://github.com/AJB117/gape}\\n}\\n@inproceedings{dge,\\n  title = {Deep Ensembles for Graphs with Higher-Order Dependencies},\\n  author = {Steven Krieg and William Burgis and Patrick Soga and Nitesh Chawla},\\n  booktitle = {International Conference on Learning Representations},\\n  year = {2023},\\n  url = {https://arxiv.org/abs/2205.13988},\\n  codeUrl = {https://github.com/sjkrieg/dge}\\n}\\n"}'),o=t(3962),A=new Set(["IEEE Transactions on Pattern Analysis and Machine Intelligence","Transactions on Machine Learning Research"]),c=new Set(["International Conference on Machine Learning","International Conference on Learning Representations","Conference on Neural Information Processing Systems","International Conference on Computer Vision","Conference on Computer Vision and Pattern Recognition","European Conference on Computer Vision","Association for the Advancement of Artificial Intelligence","International Joint Conference on Artificial Intelligence","Annual Meeting of the Association for Computational Linguistics","Conference on Empirical Methods in Natural Language Processing","North American Chapter of the Association for Computational Linguistics","International Conference on Acoustics, Speech, and Signal Processing","International Conference on Image Processing","International Conference on Data Mining","Knowledge Discovery and Data Mining","International ACM SIGIR Conference on Research and Development in Information Retrieval","International World Wide Web Conference"]),s=function(){function e(e,n){this.name=e,this.abbrev=n}var n=e.prototype;return n.isConference=function(){return c.has(this.name)},n.isJournal=function(){return A.has(this.name)},e}(),l=[new s("arXiv","Preprint"),new s("coRR","Preprint"),new s("International Conference on Machine Learning","ICML"),new s("International Conference on Learning Representations","ICLR"),new s("Conference on Neural Information Processing Systems","NeurIPS"),new s("International Conference on Computer Vision","ICCV"),new s("Conference on Computer Vision and Pattern Recognition","CVPR"),new s("European Conference on Computer Vision","ECCV"),new s("Association for the Advancement of Artificial Intelligence","AAAI"),new s("International Joint Conference on Artificial Intelligence","IJCAI"),new s("Annual Meeting of the Association for Computational Linguistics","ACL"),new s("Conference on Empirical Methods in Natural Language Processing","EMNLP"),new s("North American Chapter of the Association for Computational Linguistics","NAACL"),new s("International Conference on Acoustics, Speech, and Signal Processing","ICASSP"),new s("International Conference on Image Processing","ICIP"),new s("International Conference on Data Mining","ICDM"),new s("Knowledge Discovery and Data Mining","KDD"),new s("International ACM SIGIR Conference on Research and Development in Information Retrieval","SIGIR"),new s("International World Wide Web Conference","WWW"),new s("Transactions on Pattern Analysis and Machine Intelligence","TPAMI"),new s("Transactions on Machine Learning Research","TMLR")],u=function(e){if(e.includes(",")){var n=e.split(",");return n[1].trim()+" "+n[0]}return e},p=function(e){var n=e.author,t=e.booktitle,a=e.title,r=e.year,i=e.url,o=e.codeUrl;return void 0===t&&(t="Preprint"),{authors:n.split(" and ").map(u),booktitle:t,title:a,year:r,url:i,codeUrl:o}};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.authors,t=e.booktitle,a=e.title,i=e.year,A=e.url,c=e.codeUrl;return r.createElement("section",{className:"paper"},r.createElement("em",null,a),r.createElement("section",null,n),r.createElement("section",null,t," ",i,". ",r.createElement(o.Z,{className:"paperLink",href:A},"arXiv"),r.createElement(o.Z,{className:"paperLink",href:c},"Code")))},m=function(){var e,n,t,a=(e=i.G,n=[],t=null,e.split(/\r?\n/).forEach((function(e){if(e.startsWith("@")){var a=e.split("{")[0].substring(1),r=e.split("{")[1].split("}")[0];t={type:a,key:r},n.push(t)}else if(e.startsWith("}"))t=null;else if(t){var i=e.split("=").map((function(e){return e.trim()})),o=i[0],A=i[1];t[o]=A.replace(/^{/,"").replace(/,$/,"").replace(/}$/,"")}})),n).map(p).map((function(e){return d(d({},e),{},{authors:(n=e.authors,t=n.length>2,a=function(e){return e===n.length-1},n.map((function(e,n){return r.createElement("span",{key:n},a(n)?" and ":" ",e.includes("Soga")?r.createElement("b",null,e):e,a(n)||!t?"":", ")}))),booktitle:l.find((function(n){return n.name===e.booktitle})).abbrev+", "});var n,t,a}));return r.createElement("section",{className:"papers"},r.createElement("h2",null,"Publications"),a.map((function(e,n){return r.createElement(f,Object.assign({key:n},e))})))}},1984:function(e,n,t){t.r(n);var a=t(7294),r=t(6306),i=t(9701),o=t(8101),A=t(341),c=t(5414),s=t(410);n.default=function(){return a.createElement("section",null,a.createElement(c.q,null,a.createElement("meta",{name:"author",content:"Patrick Soga, AJB117"})),a.createElement("section",{className:"home"},a.createElement(s.S,{className:"photo-side",src:"../../../static/IMG_5084-cropped.jpg",alt:"me",title:"me",height:320,layout:"fixed",imgStyle:{objectFit:"contain"},placeholder:"blurred",__imageData:t(5480)}),a.createElement("section",{className:"home-content"},a.createElement("section",null,a.createElement(i.default,null),a.createElement(o.default,null),a.createElement(r.default,null),a.createElement(A.default,null)))))}},5480:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwIAAf/aAAwDAQACEAMQAAABevsm5Ueiayl0ysekOFH/xAAcEAACAgMBAQAAAAAAAAAAAAABAgADBBEhEyL/2gAIAQEAAQUCN+ouSGnuJayIqXIsJBlx+96SrteUOr06An//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIRITH/2gAIAQMBAT8BVNcFIi8LP//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAIAQIBAT8BScSXL//EAB0QAAICAQUAAAAAAAAAAAAAAAABEUEhAhAiUWH/2gAIAQEABj8C35XRMFGehoWDSxL0hH//xAAdEAEAAwADAAMAAAAAAAAAAAABABEhMUFhUYGh/9oACAEBAAE/IRCph5L5CL8lfUcmqZ8pwBxWTU/Ud6qgZFU+R6BmQDuIwXncBQKCf//aAAwDAQACAAMAAAAQ3xNN/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQMBAT8QSGBhwvROnS//xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAgEBPxBBDbR9btkEL//EACAQAQACAQQCAwAAAAAAAAAAAAEAESExQVGBYXGR0eH/2gAIAQEAAT8QbpVa2JaUhViNnUVu5wJjE3cHL+PMqy1hgpvV6iYElY5QuBoAMyPEWwuOHaOxGQXcIRAAH5PuDokDHuAQBQT/2Q=="},"images":{"fallback":{"src":"/static/bd6a53bb119a1ab2e0873d9fce8d3d6e/654e0/IMG_5084-cropped.jpg","srcSet":"/static/bd6a53bb119a1ab2e0873d9fce8d3d6e/654e0/IMG_5084-cropped.jpg 230w,\\n/static/bd6a53bb119a1ab2e0873d9fce8d3d6e/c2e11/IMG_5084-cropped.jpg 460w","sizes":"230px"},"sources":[{"srcSet":"/static/bd6a53bb119a1ab2e0873d9fce8d3d6e/fe04d/IMG_5084-cropped.webp 230w,\\n/static/bd6a53bb119a1ab2e0873d9fce8d3d6e/c30b9/IMG_5084-cropped.webp 460w","type":"image/webp","sizes":"230px"}]},"width":230,"height":320}')}}]);
//# sourceMappingURL=component---src-pages-home-index-jsx-a9b981e9ae1c1444ad9e.js.map