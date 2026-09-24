const d=window.SPMB_DATA||{};const $=x=>document.getElementById(x);
const personPlaceholder="assets/placeholder-person.svg", buildingPlaceholder="assets/placeholder-building.svg", barcodePlaceholder="assets/placeholder-barcode.svg";
$("schoolName").textContent=d.schoolName;$("tagline").textContent=d.tagline;$("year").textContent=d.year;$("titleYear").textContent=d.year;$("footerYear").textContent=d.year;$("footerSchool").textContent=d.schoolName;
$("heroTitle").textContent=d.heroTitle;$("heroDescription").textContent=d.heroDescription;$("welcomeText").textContent=d.welcomeText;$("heroExtra").textContent=d.heroExtra;
$("principalName").textContent=d.principalName;$("founderName").textContent=d.founderName;
$("principalPhoto").src=d.principalPhoto||personPlaceholder;$("founderPhoto").src=d.founderPhoto||personPlaceholder;$("buildingPhoto").src=d.buildingPhoto||buildingPlaceholder;$("barcodePhoto").src=d.barcodePhoto||barcodePlaceholder;
$("pageBg").style.backgroundImage=d.buildingPhoto?`url("${d.buildingPhoto}")`:`url("${buildingPlaceholder}")`;
$("registerBtn").href=d.formUrl;$("formLink").href=d.formUrl;$("formLink2").href=d.formUrl;$("registrationDescription").textContent=d.registrationDescription;$("intro").textContent="Informasi Penerimaan Murid Baru Tahun Pelajaran "+d.year+" SMK Islam Tanfirul Ghoyyi.";
$("email").textContent=d.email;$("address").textContent=d.address;$("phoneLink").textContent=d.phone;$("phoneLink").href="https://wa.me/62"+String(d.phone).replace(/\D/g,"").replace(/^62/,"");
function list(id,a){$(id).innerHTML=(a||[]).map(x=>`<li>${esc(x)}</li>`).join("")}function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
$("scheduleGrid").innerHTML=(d.schedule||[]).map(x=>`<article class="schedule-card"><strong>${esc(x.title)}</strong><h3>${esc(x.date)}</h3><div class="benefit">${esc(x.benefit)}</div></article>`).join("");
list("documents",d.documents);list("steps",d.steps);list("daily",d.dailyActivities);list("monthly",d.monthlyActivities);list("yearly",d.yearlyActivities);
$("programList").innerHTML=(d.programs||[]).map(x=>`<div class="program-item">${esc(x)}</div>`).join("");
const mg=$("mediaGrid");const media=d.media||[];mg.innerHTML=media.length?media.map(m=>m.type==="video"?`<article class="media-card"><video controls preload="metadata" src="${m.src}"></video><div class="media-body"><h3>${esc(m.title||"Video Kegiatan")}</h3><p>${esc(m.caption||"")}</p></div></article>`:`<article class="media-card"><img loading="lazy" src="${m.src}" alt="${esc(m.title||"Kegiatan Sekolah")}"><div class="media-body"><h3>${esc(m.title||"Kegiatan Sekolah")}</h3><p>${esc(m.caption||"")}</p></div></article>`).join(""):`<div class="empty">Galeri belum diisi. Buka <b>Editor Website</b> untuk menambahkan foto dan video.</div>`;
$("menuBtn")?.addEventListener("click",()=>{document.getElementById("nav").classList.toggle("open")});
