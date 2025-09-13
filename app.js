// simple modal image viewer and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  // smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // modal
  const modal=document.getElementById('modal');
  const modalImg=document.getElementById('modalImg');
  const closeBtn=document.getElementById('modalClose');

  document.querySelectorAll('.card .link').forEach(link=>{
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      const src=link.dataset.img || link.getAttribute('href');
      modalImg.src=src;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    });
  });

  closeBtn.addEventListener('click', ()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modalImg.src='';});
  modal.addEventListener('click', (e)=>{ if(e.target===modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modalImg.src=''; }});
});
