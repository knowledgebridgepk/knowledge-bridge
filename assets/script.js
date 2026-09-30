var SOCIAL={Facebook:"",Instagram:"",LinkedIn:"",YouTube:"",TikTok:""}; // paste your page links here
var box=document.getElementById("social"),n=0;
for(var k in SOCIAL){if(SOCIAL[k]){var a=document.createElement("a");a.textContent=k;a.href=SOCIAL[k];a.target="_blank";a.rel="noopener";box.appendChild(a);n++}}
if(!n)box.innerHTML='<span style="color:var(--muted);font-size:.9rem">Coming soon</span>';
document.getElementById("yr").textContent=new Date().getFullYear();
document.getElementById("send").onclick=function(){
  var t="Assalam o Alaikum, I am "+(document.getElementById("fn").value||"a visitor")+". I need help with: "+document.getElementById("fs").value+". "+document.getElementById("fm").value;
  window.open("https://wa.me/923214357247?text="+encodeURIComponent(t),"_blank");
};
