"use strict";(self.webpackChunkproduct_website_template=self.webpackChunkproduct_website_template||[]).push([[944,123],{5110:function(e,l,d){d.r(l),d.d(l,{default:function(){return b}});var a="WOOItemDetailTemplate-module--tableRow--d28f2",i=d(1800),t=d(2616),n=d(5019),s=d(1082),r=d(7606),o=d(3168),c=d(686),j=d(4348),u=d(5587);const v=e=>{if(!e)return;const l=e.lastIndexOf("/");return e.substring(l+1)};var h=d(4460),m=d(5893);const x=e=>{var l,d,x,b,p,g,f,B,C,S,_,T,I,N,L,U,k,O,R,D,w,A,F,y,W,P,z,Q,Z,H,$,q,E,G,J,K,M,V,X,Y,ee,le,de;let{wooItemId:ae}=e;const{t:ie,i18n:te}=(0,n.$)(),ne=new c.QueryClient,se=(0,j.K)(ne).getOne(ae);return(0,m.jsx)(i.T3,{children:(0,m.jsxs)(i.JH,{className:"WOOItemDetailTemplate-module--container--ccf27",children:[(0,m.jsx)("div",{children:(0,m.jsxs)(i.rU,{className:"WOOItemDetailTemplate-module--backLink--e33aa",onClick:()=>(0,s.c4)("/"),tabIndex:0,children:[(0,m.jsx)(r.G,{icon:o.acZ})," ",(0,m.jsx)("span",{children:ie("Back to homepage")})]})}),se.isSuccess&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.nL,{id:"mainContent",children:""!==se.data.Titel?se.data.Titel:ie("No title available")}),(0,m.jsx)(h.QZ,{ariaLabels:{scrollLeftButton:ie("Scroll table to the left"),scrollRightButton:ie("Scroll table to the right")},children:(0,m.jsx)(i.iA,{className:"WOOItemDetailTemplate-module--table--d7844",children:(0,m.jsxs)(i.RM,{className:"WOOItemDetailTemplate-module--tableBody--9d96b",children:[se.data.ID&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Feature")}),(0,m.jsx)(i.pj,{children:(re=se.data.ID,/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(re)?se.data.Object_ID:se.data.ID)})]}),se.data.Titel&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Category")}),(0,m.jsx)(i.pj,{children:null!==(l=se.data.Categorie)&&void 0!==l?l:"-"})]}),se.data.Samenvatting&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Summary")}),(0,m.jsx)(i.pj,{children:se.data.Samenvatting})]}),se.data.Beschrijving&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Description")}),(0,m.jsx)(i.pj,{children:se.data.Beschrijving})]}),se.data.Termijnoverschrijding&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Exceeding the term")}),(0,m.jsx)(i.pj,{children:se.data.Termijnoverschrijding})]}),se.data.Publicatiedatum&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Publication date")}),(0,m.jsx)(i.pj,{children:se.data.Publicatiedatum?(0,t.p)(te.language,se.data.Publicatiedatum):"-"})]}),se.data.Ontvangstdatum&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Registration date")}),(0,m.jsx)(i.pj,{children:null!==(d=(0,t.p)(te.language,se.data.Ontvangstdatum))&&void 0!==d?d:"-"})]}),se.data.Besluitdatum&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsxs)(i.pj,{children:[ie("Decision date")," "]}),(0,m.jsx)(i.pj,{children:null!==(x=(0,t.p)(te.language,se.data.Besluitdatum))&&void 0!==x?x:"-"})]}),(null===(b=se.data)||void 0===b||null===(p=b.embedded)||void 0===p?void 0:p.Themas)&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Themes")}),(0,m.jsx)(i.pj,{children:null===(g=se.data)||void 0===g||null===(f=g.embedded)||void 0===f?void 0:f.Themas.map(((e,l)=>{var d,a;return(0,m.jsx)("span",{children:e.Hoofdthema+(l!==(null===(d=se.data)||void 0===d||null===(a=d.embedded)||void 0===a?void 0:a.Themas.length)-1?", ":"")},l)}))})]}),(null===(B=se.data)||void 0===B||null===(C=B.embedded)||void 0===C?void 0:C.informatieverzoek)&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Information request")}),(0,m.jsx)(i.pj,{children:(0,m.jsx)(i.rU,{href:null===(S=se.data)||void 0===S||null===(_=S.embedded)||void 0===_?void 0:_.informatieverzoek.URL_Bijlage,target:"blank",children:null===(T=se.data)||void 0===T||null===(I=T.embedded)||void 0===I||null===(N=I.informatieverzoek)||void 0===N?void 0:N.Titel_Bijlage})})]}),(se.data.Besluit||(null!==(L=null===(U=se.data)||void 0===U||null===(k=U.embedded)||void 0===k?void 0:k.besluit)&&void 0!==L?L:se.data.URL_besluit))&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Decision")}),(0,m.jsxs)(i.pj,{children:[se.data.Besluit,se.data.Besluit&&(null!==(O=null===(R=se.data)||void 0===R||null===(D=R.embedded)||void 0===D?void 0:D.besluit)&&void 0!==O?O:se.data.URL_besluit)&&","," ",(null!==(w=null===(A=se.data)||void 0===A||null===(F=A.embedded)||void 0===F?void 0:F.besluit)&&void 0!==w?w:se.data.URL_besluit)&&(0,m.jsx)(i.rU,{href:null!==(y=null===(W=se.data)||void 0===W||null===(P=W.embedded)||void 0===P||null===(z=P.besluit)||void 0===z?void 0:z.URL_Bijlage)&&void 0!==y?y:se.data.URL_besluit,target:"blank",children:null!==(Q=null===(Z=se.data)||void 0===Z||null===(H=Z.embedded)||void 0===H||null===($=H.besluit)||void 0===$?void 0:$.Titel_Bijlage)&&void 0!==Q?Q:v(se.data.URL_besluit)})]})]}),(null===(q=se.data)||void 0===q||null===(E=q.embedded)||void 0===E?void 0:E.inventarisatielijst)&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Inventory list")}),(0,m.jsx)(i.pj,{children:(0,m.jsx)(i.rU,{href:null===(G=se.data)||void 0===G||null===(J=G.embedded)||void 0===J||null===(K=J.inventarisatielijst)||void 0===K?void 0:K.URL_Bijlage,target:"blank",children:null===(M=se.data)||void 0===M||null===(V=M.embedded)||void 0===V||null===(X=V.inventarisatielijst)||void 0===X?void 0:X.Titel_Bijlage})})]}),(null===(Y=se.data)||void 0===Y||null===(ee=Y.embedded)||void 0===ee?void 0:ee.Bijlagen)&&(0,m.jsxs)(i.SC,{className:a,children:[(0,m.jsx)(i.pj,{children:ie("Attachments")}),(0,m.jsx)(i.pj,{children:(0,m.jsx)(i.QI,{children:null===(le=se.data)||void 0===le||null===(de=le.embedded)||void 0===de?void 0:de.Bijlagen.map(((e,l)=>{var d,a;return(0,m.jsx)(i.AS,{children:(0,m.jsx)(i.rU,{href:0!==(null===(d=e.URL_Bijlage)||void 0===d?void 0:d.length)?e.URL_Bijlage:"#",target:0!==(null===(a=e.URL_Bijlage)||void 0===a?void 0:a.length)?"blank":"",children:e.Titel_Bijlage})},l)}))})})]})]})})})]}),se.isLoading&&(0,m.jsx)(u.Z,{height:"200px"})]})});var re};var b=e=>(0,m.jsx)(x,{wooItemId:e.params.id})},1525:function(e,l,d){d.r(l);var a=d(5110);l.default=a.default}}]);
//# sourceMappingURL=component---src-pages-[id]-index-tsx-1095950fff8f0853a560.js.map