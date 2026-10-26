(function(){
var d=document,root=d.documentElement,$=function(s){return d.querySelector(s)};
try{var s=localStorage.getItem('theme');if(s)root.dataset.theme=s}catch(e){}
var tb=$('#theme');
if(tb)tb.addEventListener('click',function(){var dk=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches,t=dk?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}});
var side=$('#side'),nav=$('#nav'),bar=$('#bar'),items=[];
if(side&&nav){
 d.querySelectorAll('article h2,article h3').forEach(function(h){
  if(!h.id)h.id=h.textContent.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  var a=d.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;
  if(h.tagName==='H3')a.className='sub';
  a.addEventListener('click',function(){side.classList.remove('open')});
  nav.appendChild(a);items.push([h,a]);
 });
 var m=$('#menu');if(m)m.addEventListener('click',function(){side.classList.toggle('open')});
 addEventListener('keydown',function(e){if(e.key==='Escape')side.classList.remove('open')});
}
function onScroll(){
 var max=root.scrollHeight-innerHeight;
 if(bar)bar.style.width=(max>0?scrollY/max*100:0)+'%';
 var cur=null;items.forEach(function(p){if(p[0].getBoundingClientRect().top<140)cur=p[1]});
 items.forEach(function(p){p[1].classList.toggle('active',p[1]===cur)});
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
var els=d.querySelectorAll('article p,article h2,article blockquote,.about p');
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('vis');io.unobserve(x.target)}})},{threshold:.08});
 els.forEach(function(e){e.classList.add('rv');io.observe(e)});
}
/* Comments via Giscus: fill these after enabling Discussions (see giscus.app) */
var G={repo:'',repoId:'',category:'Announcements',categoryId:''};
var gm=$('#giscus');
if(gm&&G.repo){var sc=d.createElement('script');sc.src='https://giscus.app/client.js';
 [['repo',G.repo],['repo-id',G.repoId],['category',G.category],['category-id',G.categoryId],['mapping','pathname'],['reactions-enabled','1'],['theme','preferred_color_scheme'],['lang','en']].forEach(function(p){sc.setAttribute('data-'+p[0],p[1])});
 sc.crossOrigin='anonymous';sc.async=true;gm.appendChild(sc);}
var f=$('#rf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var v=function(n){return f.elements[n].value};
 location.href='mailto:renukaullegaddi03@gmail.com?subject='+encodeURIComponent('Review of Not Unloved ('+v('rating')+'/5)')+'&body='+encodeURIComponent(v('msg')+'\n\n- '+v('name'));});
})();
