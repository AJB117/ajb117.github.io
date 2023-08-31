"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[935],{3962:function(n,e,t){var r=t(1531),i=t(7294),a=["href","children"];e.Z=function(n){var e=n.href,t=n.children,o=(0,r.Z)(n,a);return"className"in o||(o.className="normalLink"),i.createElement("a",Object.assign({href:e,target:"_blank",rel:"noreferrer"},o),t)}},5672:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(6552),i=t(7294),a=JSON.parse('{"G":"@article{gape,\\n  doi = {10.48550/ARXIV.2212.06898},\\n  url = {https://arxiv.org/abs/2212.06898},\\n  author = {Soga, Patrick and Chiang, David},\\n  keywords = {Machine Learning (cs.LG), FOS: Computer and information sciences, FOS: Computer and information sciences},\\n  title = {Bridging Graph Position Encodings for Transformers with Weighted Graph-Walking Automata},\\n  booktitle = {Transactions on Machine Learning Research},\\n  year = {2023},\\n  codeUrl = {https://github.com/AJB117/gape}\\n}\\n@inproceedings{dge,\\n  title = {Deep Ensembles for Graphs with Higher-Order Dependencies},\\n  author = {Steven Krieg and William Burgis and Patrick Soga and Nitesh Chawla},\\n  booktitle = {International Conference on Learning Representations},\\n  year = {2023},\\n  url = {https://arxiv.org/abs/2205.13988},\\n  codeUrl = {https://github.com/sjkrieg/dge}\\n}\\n"}'),o=t(3962),c=new Set(["IEEE Transactions on Pattern Analysis and Machine Intelligence","Transactions on Machine Learning Research"]),s=new Set(["International Conference on Machine Learning","International Conference on Learning Representations","Conference on Neural Information Processing Systems","International Conference on Computer Vision","Conference on Computer Vision and Pattern Recognition","European Conference on Computer Vision","Association for the Advancement of Artificial Intelligence","International Joint Conference on Artificial Intelligence","Annual Meeting of the Association for Computational Linguistics","Conference on Empirical Methods in Natural Language Processing","North American Chapter of the Association for Computational Linguistics","International Conference on Acoustics, Speech, and Signal Processing","International Conference on Image Processing","International Conference on Data Mining","Knowledge Discovery and Data Mining","International ACM SIGIR Conference on Research and Development in Information Retrieval","International World Wide Web Conference"]),l=function(){function n(n,e){this.name=n,this.abbrev=e}var e=n.prototype;return e.isConference=function(){return s.has(this.name)},e.isJournal=function(){return c.has(this.name)},n}(),u=[new l("arXiv","Preprint"),new l("coRR","Preprint"),new l("International Conference on Machine Learning","ICML"),new l("International Conference on Learning Representations","ICLR"),new l("Conference on Neural Information Processing Systems","NeurIPS"),new l("International Conference on Computer Vision","ICCV"),new l("Conference on Computer Vision and Pattern Recognition","CVPR"),new l("European Conference on Computer Vision","ECCV"),new l("Association for the Advancement of Artificial Intelligence","AAAI"),new l("International Joint Conference on Artificial Intelligence","IJCAI"),new l("Annual Meeting of the Association for Computational Linguistics","ACL"),new l("Conference on Empirical Methods in Natural Language Processing","EMNLP"),new l("North American Chapter of the Association for Computational Linguistics","NAACL"),new l("International Conference on Acoustics, Speech, and Signal Processing","ICASSP"),new l("International Conference on Image Processing","ICIP"),new l("International Conference on Data Mining","ICDM"),new l("Knowledge Discovery and Data Mining","KDD"),new l("International ACM SIGIR Conference on Research and Development in Information Retrieval","SIGIR"),new l("International World Wide Web Conference","WWW"),new l("Transactions on Pattern Analysis and Machine Intelligence","TPAMI"),new l("Transactions on Machine Learning Research","TMLR")],f=function(n){if(n.includes(",")){var e=n.split(",");return e[1].trim()+" "+e[0]}return n},p=function(n){var e=n.author,t=n.booktitle,r=n.title,i=n.year,a=n.url,o=n.codeUrl;return void 0===t&&(t="Preprint"),{authors:e.split(" and ").map(f),booktitle:t,title:r,year:i,url:a,codeUrl:o}};function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var m=function(n){var e=n.authors,t=n.booktitle,r=n.title,a=n.year,c=n.url,s=n.codeUrl;return i.createElement("section",{className:"paper"},r,i.createElement("section",null,e),i.createElement("section",null,t," ",a,". ",i.createElement(o.Z,{className:"paperLink",href:c},"arXiv"),i.createElement(o.Z,{className:"paperLink",href:s},"code")))},C=function(){var n,e,t,r=(n=a.G,e=[],t=null,n.split(/\r?\n/).forEach((function(n){if(n.startsWith("@")){var r=n.split("{")[0].substring(1),i=n.split("{")[1].split("}")[0];t={type:r,key:i},e.push(t)}else if(n.startsWith("}"))t=null;else if(t){var a=n.split("=").map((function(n){return n.trim()})),o=a[0],c=a[1];t[o]=c.replace(/^{/,"").replace(/,$/,"").replace(/}$/,"")}})),e).map(p).map((function(n){return h(h({},n),{},{authors:(e=n.authors,t=e.length>2,r=function(n){return n===e.length-1},e.map((function(n,e){return i.createElement("span",{key:e},r(e)?" and ":" ",n.includes("Soga")?i.createElement("b",null,n):n,r(e)||!t?"":", ")}))),booktitle:u.find((function(e){return e.name===n.booktitle})).abbrev+", "});var e,t,r}));return i.createElement("section",{className:"papers"},i.createElement("h2",null,"Publications"),r.map((function(n,e){return i.createElement(m,Object.assign({key:e},n))})))}},1531:function(n,e,t){function r(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-home-papers-jsx-a8c55005a47c351fe625.js.map