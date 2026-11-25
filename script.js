(() => {
  const intro = document.getElementById('intro');
  const word = document.getElementById('introWord');
  const progress = document.getElementById('progressFill');
  const counter = document.getElementById('introProgress');
  const words = ['QUESTIONING.', 'CLEANING.', 'CONNECTING.', 'CLARIFYING.'];
  let timers = [];
  function clearTimers(){ timers.forEach(clearTimeout); timers=[]; }
  function hideIntro(){ clearTimers(); intro.classList.add('is-gone'); intro.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  function startIntro(){
    clearTimers(); intro.classList.remove('is-gone'); intro.removeAttribute('aria-hidden'); document.body.style.overflow='hidden';
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ hideIntro(); return; }
    words.forEach((w,i)=>timers.push(setTimeout(()=>{word.textContent=w; counter.textContent=String(i+1).padStart(2,'0')+' / 04';progress.style.width=(25*(i+1))+'%';},i*620)));
    timers.push(setTimeout(hideIntro,words.length*620+330));
  }
  document.getElementById('skipIntro').addEventListener('click',hideIntro);
  document.getElementById('replayIntro').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'instant'}); startIntro();});
  document.getElementById('year').textContent=new Date().getFullYear();
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  startIntro();
})();



// Project case studies and references supplied by the portfolio owner.
const projectData = [{"id":"ab","category":"Marketing Analytics","title":"A/B Testing — Campaign Performance Analysis","period":"2026 · INDIVIDUAL BOOTCAMP CASE STUDY","desc":"Compared campaign performance across 100,000 users and evaluated whether engagement uplift was statistically significant.","tools":["Python","A/B Testing","Power BI"],"metrics":[["100K","Users analyzed"],["+33.3%","Engagement uplift"]],"images":["assets/ab-dashboard.webp","assets/ab-post-monitoring.webp"],"labels":["A/B Testing Results","Post-Implementation Monitoring"],"method":"Data quality checks · Independent t-test · Campaign dashboard","problem":"Evaluate whether a new campaign drives higher user engagement than the control group in a Spotify-themed training case.","dataset":"100,000 user records, split equally between Control and Target; experiment setup dates and random assignment were assumed for the assignment.","approach":"Cleaned two invalid negative duration values, assessed distributions and compared group engagement with an independent t-test.","finding":"Average engagement: Control 0.60 vs Target 0.80 (+33.3%), with p-value < 0.05 in the supplied analysis.","recommend":"Recommend the Target variant within the simulated case study and monitor performance after launch.","note":"Educational campaign case study using supplied data. The experiment dates and randomization details are illustrative assumptions, not a real Spotify deployment.","resources":[["View presentation","docs/ab.pdf"],["View dashboard","docs/ab-dashboard.pdf"],["View Python code","https://colab.research.google.com/drive/1TDfeBR8N5uvnDOLHvC4dHBTOo73PYgzI?usp=sharing"]]},{"id":"customer","category":"Customer Analytics","title":"Superstore Customer Segmentation — RFM Analysis","period":"2026 · INDIVIDUAL PROJECT","desc":"Developed RFM-based customer segments to reveal loyalty patterns and inform targeted retention strategies.","tools":["Power BI","DAX","RFM Analysis"],"metrics":[["793","Unique customers"],["5","RFM segments"]],"images":["assets/customer-dashboard.webp"],"labels":["Customer Segmentation Dashboard"],"method":"CustomerRFM table · DAX rank scoring · Segment analysis","problem":"Identify valuable, promising, and at-risk customers from historical purchasing behavior.","dataset":"9,994 transactions and 793 unique customers from 2014–2017 Superstore data.","approach":"Built Recency, Frequency, and Monetary metrics in Power BI, applied quintile scores and classified five customer segments.","finding":"Loyal Customers (248) and Champions (112) together account for 360 of 793 customers; 224 are Potential Loyalists.","recommend":"Prioritize retention for Champions and Loyal Customers, increase repeat purchases from Potential Loyalists, and test win-back strategies for At Risk accounts.","note":"Superstore retail RFM analysis is separate from the banking K-Means segmentation project.","resources":[["View presentation","docs/customer.pdf"],["View dashboard","docs/customer-dashboard.pdf"],["View Power BI file on Drive","https://drive.google.com/file/d/1qVS1eN6clKV9O6afLr8ALv45F03r2xMH/view?usp=sharing"]]},{"id":"retail","category":"Retail Analytics","title":"Stock Optimization Through Retail Price Forecasting Analysis","period":"2024 · STARTUP CAMPUS TEAM PROJECT","desc":"Evaluated forecasting models to estimate retail unit-price trends for five UK supermarket stores.","tools":["Python","XGBoost","Forecasting"],"metrics":[["5","Retail stores"],["42.24","Selected model MAE"]],"images":["assets/retail-forecast-chart.webp","assets/retail-forecast-examples.webp"],"labels":["Forecast Chart from Team Presentation","Forecast Examples by Store"],"method":"Time-series preparation · Feature engineering · Model comparison","problem":"Support pricing and inventory planning amid changing product price trends across five supermarkets.","dataset":"Retail unit-price time-series covering five UK supermarket stores; the project targeted a 15-day forecast horizon.","approach":"Processed outliers and missing data, created calendar/lag features, and evaluated XGBRegressor, HistGradientBoost, LightGBM, and RandomForestRegressor.","finding":"XGBRegressor achieved MAE 42.24 and MSE 4,515.62 in the team report; it was chosen for the forecast workflow.","recommend":"Use forecast trends as decision support for price reviews and promotional planning; validate stock decisions with actual demand data.","note":"Team project completed as part of Startup Campus. The displayed forecast visual is sourced from the team presentation; the linked Power BI report provides the interactive view.","resources":[["View presentation","docs/retail.pdf"],["Interactive Power BI dashboard","https://app.powerbi.com/view?r=eyJrIjoiMzY4ZmM0YjMtMmFlNi00M2E5LWI5YmYtOTJhYjA2MGFkOTFlIiwidCI6ImRlOTVkMDk4LWE3OGMtNGE1MS1iMDQ1LTJjOWYyYzQwYzc1MyIsImMiOjEwfQ%3D%3D"],["View Python Colab","https://colab.research.google.com/drive/1KdmPhK-bQY_2McyQVEOBHge4tGS-6hGY?usp=sharing"]],"embed":"https://app.powerbi.com/view?r=eyJrIjoiMzY4ZmM0YjMtMmFlNi00M2E5LWI5YmYtOTJhYjA2MGFkOTFlIiwidCI6ImRlOTVkMDk4LWE3OGMtNGE1MS1iMDQ1LTJjOWYyYzQwYzc1MyIsImMiOjEwfQ%3D%3D"},{"id":"marketing","category":"Marketing Analytics","title":"Marketing Channel Performance & Customer Targeting","period":"2026 · INDIVIDUAL BOOTCAMP PROJECT","desc":"Compared reach, CTR, conversions, and acquisition costs across marketing channels and audience segments.","tools":["Power BI","Marketing KPIs","Segmentation"],"metrics":[["8.56%","Top CTR · Google"],["22.20%","Top CVR · Instagram"]],"images":["assets/marketing-overview.webp","assets/marketing-performance.webp","assets/marketing-segments.webp"],"labels":["Marketing Channel Overview","Channel Financial Performance","Customer Segment Analysis"],"method":"KPI development · Channel comparisons · Audience targeting","problem":"Find the right marketing channels and target audiences for awareness, conversion, and efficiency.","dataset":"Campaign-level data across six digital channels and customer segments, July 2024–June 2025.","approach":"Checked missing values and campaign IDs; visualized impressions, clicks, conversion, revenue, profit, and acquisition costs in Power BI.","finding":"Google led CTR (8.56%), Instagram led conversion rate (22.20%), and Email had the lowest average acquisition cost ($364.90).","recommend":"Select channel strategy according to campaign goals; for the example women’s bag campaign, assess Email targeting Working Women.","note":"Analysis based on a bootcamp dataset. Recommendations are proposed strategies, not measured real-world outcomes.","resources":[["View presentation","docs/marketing.pdf"],["View dashboard PDF","docs/marketing-dashboard.pdf"]]},{"id":"sales","category":"Sales Analytics","title":"UMKM Sales Performance & Order Insights","period":"2026 · EXCEL DASHBOARD PROJECT","desc":"Created an interactive stationery sales dashboard covering sales trends, product ranking, order status, and regional performance.","tools":["Microsoft Excel","Pivot Tables","Slicers"],"metrics":[["Rp455M","Gross product sales"],["7,015","Total orders"]],"images":["assets/umkm-sales-dashboard.webp"],"labels":["UMKM Sales Performance Dashboard"],"method":"Pivot Tables · Pivot Charts · Interactive slicers","problem":"Help a small stationery business monitor product sales, city-level performance, payment preferences, and order fulfillment.","dataset":"Stationery sales transaction data from a training assignment, with year and city slicers.","approach":"Organized data in Excel, built pivot-based summaries, and designed an interactive dashboard with KPI cards and charts.","finding":"The dashboard reports approximately Rp455M in gross product sales and 7,015 total orders; roughly 70% of displayed orders are completed.","recommend":"Investigate top-performing products and cities while monitoring cancellation, pending, and return rates.","note":"Excel dashboard from a learning project. Individual customer records from the workbook have not been published.","resources":[["Open full dashboard image","assets/umkm-sales-dashboard.webp"]]},{"id":"banking","category":"Banking Analytics","title":"Unlocking Customer Value Through Banking Segmentation","period":"2026 · DIBIMBING FINAL PROJECT","desc":"Integrated eight banking datasets and grouped 4,500 customers into four segments using K-Means clustering to support targeted business decisions.","tools":["SQL","Python","K-Means","Power BI"],"metrics":[["4,500","Customers"],["4","Clusters"]],"images":["assets/banking-dashboard-1.webp","assets/banking-dashboard-2.webp","assets/banking-dashboard-3.webp"],"labels":["Czech Banking Customer Segmentation — Overview","Customer Segment Analysis","Customer Strategy Recommendation"],"method":"SQL data integration · Cleaning · Feature engineering · Standardization · K-Means · Elbow & Silhouette evaluation · Power BI","problem":"A one-size-fits-all customer strategy does not account for differences in transaction activity, financial value and credit-product usage. Build segments to inform better business decisions.","dataset":"Eight connected banking tables consolidated into 4,500 customer records with 30 features spanning demographics, account history, transactions, cards and loans.","approach":"Checked missing and duplicate data, joined customer-level records with SQL, engineered behavior and financial variables, transformed skewed features, standardized the model inputs and selected four clusters based on evaluation and interpretability.","finding":"K-Means identified Low Engagement (1,968; 43.73%), High Value Active Saver (1,850; 41.11%), Active Borrower (606; 13.47%) and High-Risk Borrower (76; 1.69%).","recommend":"Use activation campaigns for low-engagement users, retention and cross-selling for high-value savers, relevant product offers for active borrowers, and more cautious risk monitoring for high-risk borrowers.","note":"Dibimbing final-project educational case study using the Czech banking dataset; not an analysis of internal Bank Syariah Indonesia customer data.","resources":[["View presentation","docs/banking.pdf"],["View dashboard PDF","docs/banking-dashboard.pdf"],["View Python Notebook","https://colab.research.google.com/drive/1LnlWeFg7DI4wsd358sqpSVAIF-kVBOGk?usp=sharing"],["View SQL Script","https://drive.google.com/file/d/1_2x-24BkQ_N0x3uYPcG8yOVOLDLxBr-M/view?usp=sharing"],["View Power BI dashboard","https://drive.google.com/file/d/1vUW9LolxMV1nO2czNs8cXikwVXv87FGL/view?usp=sharing"]]}];
const modal = document.getElementById('caseDialog');
const byId = id => document.getElementById(id);
const escapeHtml = s => String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
let currentProject=null,currentSlide=0;
function updateVisual(){
 if(!currentProject)return;
 byId('caseImage').src=currentProject.images[currentSlide];
 byId('caseImage').alt=currentProject.labels[currentSlide];
 byId('caseVisualName').textContent=currentProject.labels[currentSlide];
 byId('galleryCounter').textContent=`${currentSlide+1} / ${currentProject.images.length}`;
 const hasMany=currentProject.images.length>1;
 byId('galleryPrev').disabled=!hasMany;byId('galleryNext').disabled=!hasMany;
 byId('galleryPrev').style.opacity=hasMany?'1':'.35';byId('galleryNext').style.opacity=hasMany?'1':'.35';
}
function openProject(id){
 const project=projectData.find(x=>x.id===id);if(!project)return;
 currentProject=project;currentSlide=0;
 byId('caseEyebrow').textContent=project.period;
 byId('caseTitle').textContent=project.title;
 byId('caseSummary').textContent=project.desc;
 byId('caseTags').innerHTML=project.tools.map(x=>`<span>${escapeHtml(x)}</span>`).join('');
 const parts=[['Business Problem',project.problem],['Dataset',project.dataset],['Approach & Methodology',project.approach],['Key Findings',project.finding],['Business Recommendation',project.recommend],['Workflow',project.method]];
 byId('caseSections').innerHTML=parts.map(([h,body])=>`<div class="case-block"><h3>${escapeHtml(h)}</h3><p>${escapeHtml(body)}</p></div>`).join('');
 byId('caseResources').innerHTML=project.resources.map(([label,href])=>`<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>`).join('');
 byId('caseNote').textContent='Project context: '+project.note;

 const embedBox=byId('caseEmbed');
 if(embedBox){
   embedBox.replaceChildren();
   if(project.embed){
      const title=document.createElement('h3');title.textContent='Interactive Power BI dashboard';
      const btn=document.createElement('button');btn.type='button';btn.className='embed-button';btn.textContent='Load interactive dashboard ↗';
      btn.addEventListener('click',()=>{
         btn.remove(); const frame=document.createElement('iframe');frame.src=project.embed;
         frame.loading='lazy';frame.title='Interactive dashboard for '+project.title;
         frame.allowFullscreen=true; frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
         embedBox.append(frame);
      });
      embedBox.append(title,btn);
   }
 }
 updateVisual();modal.showModal();
}
document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>openProject(el.dataset.open)));
byId('closeCase').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
byId('galleryPrev').addEventListener('click',()=>{if(!currentProject)return;currentSlide=(currentSlide+currentProject.images.length-1)%currentProject.images.length;updateVisual();});
byId('galleryNext').addEventListener('click',()=>{if(!currentProject)return;currentSlide=(currentSlide+1)%currentProject.images.length;updateVisual();});
const filterButtons=[...document.querySelectorAll('[data-filter]')];
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
 const key=btn.dataset.filter;filterButtons.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});
 document.querySelectorAll('.project-card').forEach(card=>card.hidden=key!=='all'&&card.dataset.category!==key);
}));
