"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[935],{341:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t=r(6552),o=r(7294),a=JSON.parse('{"G":"@inproceedings{dong2025graph,\\n  title={Graph Neural Networks Are More Than Filters: Revisiting and Benchmarking from A Spectral Perspective},\\n  author={Yushun Dong and Patrick Soga and Yinhan He and Song Wang and Jundong Li},\\n  booktitle={International Conference on Learning Representations},\\n  year={2025},\\n  url={https://arxiv.org/abs/2412.07188},\\n}\\n\\n@inproceedings{soga2024deep,\\n  title = {Deep Interactions for Multimodal Molecular Property Prediction},\\n  author = {Patrick Soga and Zhenyu Lei and Camille Bilodeau and Jundong Li},\\n  booktitle={Pacific-Asia Conference on Knowledge Discovery and Data Mining}\\n  year={2025}\\n  workshop = {NeurIPS 2024 AIDrugX Workshop},\\n  url = {https://openreview.net/forum?id=s1hOUBIJWa}\\n}\\n\\n@inproceedings{he2024explaining,\\n  title = {Explaining Graph Neural Networks with Large Language Models: A Counterfactual Perspective on Molecule Graphs},\\n  author = {Yinhan He and Zaiyi Zheng and Patrick Soga and Yaochen Zhu and Yushun Dong and Jundong Li},\\n  booktitle = {Conference on Empirical Methods in Natural Language Processing (Findings)},\\n  year = {2024},\\n  url = {https://arxiv.org/abs/2410.15165}\\n}\\n\\n@article{schnur2024saludconectamxlessonslearneddeploying,\\n  title = {SaludConectaMX: Lessons Learned from Deploying a Cooperative Mobile Health System for Pediatric Cancer Care in Mexico},\\n  author = {Jennifer J. Schnur* and Angélica Garcia-Martínez* and Patrick Soga* and Karla Badillo-Urquiola* and others},\\n  booktitle = {ACM Conference on Computer-Supported Cooperative Work and Social Computing},\\n  year = {2024},\\n  url = {https://arxiv.org/abs/2408.00881}\\n}\\n\\n@article{soga2023bridging,\\n  title={Bridging Graph Position Encodings for Transformers with Weighted Graph-Walking Automata},\\n  author={Patrick Soga and David Chiang},\\n  booktitle={Transactions on Machine Learning Research},\\n  year={2023},\\n  url={https://arxiv.org/abs/2212.06898},\\n}\\n\\n@inproceedings{krieg2023dge,\\n  title = {Deep Ensembles for Graphs with Higher-Order Dependencies},\\n  author = {Steven Krieg and William Burgis and Patrick Soga and Nitesh Chawla},\\n  booktitle = {International Conference on Learning Representations},\\n  year = {2023},\\n  url = {https://arxiv.org/abs/2205.13988},\\n  codeUrl = {https://github.com/sjkrieg/dge}\\n}\\n"}'),i=r(3962),s=new Set(["IEEE Transactions on Pattern Analysis and Machine Intelligence","Transactions on Machine Learning Research"]),c=new Set(["International Conference on Machine Learning","International Conference on Learning Representations","Conference on Neural Information Processing Systems","Neural Information Processing Systems","Neural Information Processing Systems AIDrugX Workshop","Neural Information Processing Systems DBT","International Conference on Computer Vision","Conference on Computer Vision and Pattern Recognition","European Conference on Computer Vision","Association for the Advancement of Artificial Intelligence","International Joint Conference on Artificial Intelligence","Annual Meeting of the Association for Computational Linguistics","Conference on Empirical Methods in Natural Language Processing","Conference on Empirical Methods in Natural Language Processing (Findings)","North American Chapter of the Association for Computational Linguistics","International Conference on Acoustics, Speech, and Signal Processing","International Conference on Image Processing","International Conference on Data Mining","Knowledge Discovery and Data Mining","International ACM SIGIR Conference on Research and Development in Information Retrieval","International World Wide Web Conference","Conference on Information and Knowledge Management","ACM Conference on Computer-Supported Cooperative Work and Social Computing"]),l=function(){function n(n,e){this.name=n,this.abbrev=e}var e=n.prototype;return e.isConference=function(){return c.has(this.name)},e.isJournal=function(){return s.has(this.name)},n}(),u=[new l("arXiv","Preprint"),new l("coRR","Preprint"),new l("International Conference on Machine Learning","ICML"),new l("International Conference on Learning Representations","ICLR"),new l("Conference on Neural Information Processing Systems","NeurIPS"),new l("Neural Information Processing Systems","NeurIPS"),new l("Neural Information Processing Systems DBT","NeurIPS Datasets & Benchmarks Track"),new l("Neural Information Processing Systems AIDrugX Workshop","NeurIPS Workshop on AI for New Drug Modalities"),new l("International Conference on Computer Vision","ICCV"),new l("Conference on Computer Vision and Pattern Recognition","CVPR"),new l("European Conference on Computer Vision","ECCV"),new l("Association for the Advancement of Artificial Intelligence","AAAI"),new l("International Joint Conference on Artificial Intelligence","IJCAI"),new l("Annual Meeting of the Association for Computational Linguistics","ACL"),new l("Conference on Empirical Methods in Natural Language Processing","EMNLP"),new l("Conference on Empirical Methods in Natural Language Processing (Findings)","EMNLP (Findings)"),new l("North American Chapter of the Association for Computational Linguistics","NAACL"),new l("International Conference on Acoustics, Speech, and Signal Processing","ICASSP"),new l("International Conference on Image Processing","ICIP"),new l("International Conference on Data Mining","ICDM"),new l("Knowledge Discovery and Data Mining","KDD"),new l("International ACM SIGIR Conference on Research and Development in Information Retrieval","SIGIR"),new l("International World Wide Web Conference","WWW"),new l("Transactions on Pattern Analysis and Machine Intelligence","TPAMI"),new l("Transactions on Machine Learning Research","TMLR"),new l("Conference on Information and Knowledge Management","CIKM"),new l("ACM Conference on Computer-Supported Cooperative Work and Social Computing","CSCW"),new l("Pacific-Asia Conference on Knowledge Discovery and Data Mining","PAKDD")],g=function(n){if(n.includes(",")){var e=n.split(",");return e[1].trim()+" "+e[0]}return n},p=function(n){var e=n.author,r=n.booktitle,t=n.title,o=n.year,a=n.url,i=n.codeUrl,s=n.workshop;return void 0===r&&(r="Preprint"),{authors:e.split(" and ").map(g),booktitle:r,title:t,year:o,url:a,codeUrl:i,workshop:s}},f=r(5361),d=r(7606);function h(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function m(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var C=function(n){var e=n.authors,r=n.booktitle,t=n.workshop,a=n.title,s=n.year,c=n.url,l=n.codeUrl,u=n.bibtex,g=o.useState(!1),p=g[0],h=g[1],m=r+" "+s+". "+(t?"("+t+")":"");return o.createElement("section",{className:"paper"},a,o.createElement("section",null,e),o.createElement("section",null,m,o.createElement(i.Z,{className:"paperLink",href:c},"arXiv"),l&&o.createElement(i.Z,{className:"paperLink",href:l},"code"),o.createElement("button",{className:"paperLink",style:{backgroundColor:"white",cursor:"pointer"},onClick:function(){return h((function(n){return!n}))}},"BibTeX")),p&&o.createElement(o.Fragment,null,o.createElement("pre",{style:{overflowX:"scroll",backgroundColor:"#D0D0D0",padding:"4px"}},u,o.createElement("button",{className:"paperLink",style:{backgroundColor:"white",cursor:"pointer",float:"right",marginBottom:"0px"}},o.createElement(d.G,{icon:f.kZ_,onClick:function(){navigator.clipboard.writeText(u)}})))))},I=function(){var n,e,r,t=a.G.split("\n\n").map((function(n){return n.trim()})),i=(n=a.G,e=[],r=null,n.split(/\r?\n/).forEach((function(n){if(n.startsWith("@")){var t=n.split("{")[0].substring(1),o=n.split("{")[1].split("}")[0];r={type:t,key:o},e.push(r)}else if(n.startsWith("}"))r=null;else if(r){var a=n.split("=").map((function(n){return n.trim()})),i=a[0],s=a[1];r[i]=s.replace(/^{/,"").replace(/,$/,"").replace(/}$/,"")}})),e).map(p).map((function(n,e){var r,a,i,s=u.find((function(e){return e.name===n.booktitle})),c=s.abbrev;return s.isJournal()?c+=", ":c+=" ",m(m({},n),{},{authors:(r=n.authors,a=r.length>2,i=function(n){return n===r.length-1},r.map((function(n,e){return o.createElement("span",{key:e},i(e)?" and ":" ",n.includes("Soga")?o.createElement("b",null,n):n,i(e)||!a?"":", ")}))),booktitle:c,bibtex:t[e]})}));return o.createElement("section",{className:"papers"},o.createElement("h2",null,"Publications"),o.createElement("p",null,"(*) indicates equal contribution."),i.map((function(n,e){return o.createElement(C,Object.assign({key:e},n))})))}},1531:function(n,e,r){function t(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}r.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=component---src-pages-home-papers-jsx-1bd7c4531920879fe825.js.map