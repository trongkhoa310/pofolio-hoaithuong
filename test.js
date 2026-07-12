

tailwind.config = {
  darkMode: "class",
  theme: { extend: {
    colors: {"primary-fixed-dim":"#ffb4ac","on-tertiary-fixed":"#061845","secondary-fixed":"#e5e2e1","on-tertiary":"#ffffff","surface-tint":"#c00015","on-tertiary-container":"#fcfaff","on-tertiary-fixed-variant":"#364572","error-container":"#ffdad6","on-secondary-fixed":"#1c1b1b","surface-container-highest":"#e4e3d7","inverse-surface":"#303129","background":"#fbfaee","on-error-container":"#93000a","primary":"#b90014","primary-container":"#e31b23","surface-container-high":"#e9e9dd","surface-container-low":"#f5f4e8","on-primary-fixed-variant":"#93000d","on-secondary":"#ffffff","surface-bright":"#fbfaee","on-primary-fixed":"#410002","surface-variant":"#e4e3d7","outline-variant":"#e7bdb8","error":"#ba1a1a","surface":"#fbfaee","on-background":"#1b1c15","secondary":"#5f5e5e","inverse-on-surface":"#f2f1e5","on-error":"#ffffff","secondary-fixed-dim":"#c8c6c5","on-secondary-container":"#636262","secondary-container":"#e2dfde","on-surface-variant":"#5d3f3c","inverse-primary":"#ffb4ac","tertiary-container":"#6372a3","tertiary-fixed":"#dbe1ff","tertiary-fixed-dim":"#b6c5fb","tertiary":"#4b5988","outline":"#926e6b","surface-container-lowest":"#ffffff","surface-container":"#efeee3","surface-dim":"#dbdbcf","on-surface":"#1b1c15","on-primary-container":"#fff9f8","on-primary":"#ffffff","primary-fixed":"#ffdad6","on-secondary-fixed-variant":"#474746"},
    borderRadius: {"DEFAULT":"0px","lg":"0px","xl":"0px","full":"9999px"},
    spacing: {"container-max":"1440px","margin-mobile":"16px","gutter":"24px","margin-desktop":"64px","unit":"4px"},
    fontFamily: {"body-md":["Hanken Grotesk"],"label-bold":["Space Mono"],"headline-lg-mobile":["Anybody"],"headline-display":["Anybody"],"label-sm":["Space Mono"],"headline-md":["Anybody"],"headline-lg":["Anybody"],"body-lg":["Hanken Grotesk"]},
    fontSize: {"body-md":["16px",{"lineHeight":"160%","fontWeight":"400"}],"label-bold":["14px",{"lineHeight":"120%","fontWeight":"700"}],"headline-lg-mobile":["40px",{"lineHeight":"110%","fontWeight":"800"}],"headline-display":["120px",{"lineHeight":"110%","letterSpacing":"-0.04em","fontWeight":"800"}],"label-sm":["12px",{"lineHeight":"120%","fontWeight":"400"}],"headline-md":["32px",{"lineHeight":"120%","fontWeight":"700"}],"headline-lg":["64px",{"lineHeight":"110%","letterSpacing":"-0.02em","fontWeight":"800"}],"body-lg":["18px",{"lineHeight":"160%","fontWeight":"400"}]}
  }}
}



// ==========================================
// KHO DỮ LIỆU BÀI VIẾT - UPDATE Ở ĐÂY
// ==========================================
const POSTS = [
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "12 Thg 7, 2026",
    title: "Tất tần tật những thứ bạn cần biết về Google sheet",
    summary: "Google Sheet: Từ công cụ đến tư duy &#8211; Những gì bạn thực sự cần biết Có một sự thật mà sau nhiều năm đi làm mình phát hiện ra, cái dòng chữ thành tạo tin học văn phòng trong...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-12-luc-08.49.09.png?w=1024",
    link: "tat-tan-tat-nhung-thu-ban-can-biet-ve-google-sheet.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "12 Thg 7, 2026",
    title: "Email Marketing: Vì sao vào được Inbox chưa chắc đã thoát Spam",
    summary: "Nhiều người nghĩ Email Marketing đơn giản: soạn nội dung, bấm gửi, xong. Thực tế đây là một trong những kênh &#8220;khó tính&#8221; nhất &#8211; vì khách hàng là người chủ động quyết định có muốn nhìn thấy bạn nữa...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-12-luc-08.42.14.png?w=860",
    link: "email-marketing-vi-sao-vao-duoc-inbox-chua-chac-da-thoat-spam.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "11 Thg 7, 2026",
    title: "4 Cấp Độ Quản Lý Thời Gian: Từ Ghi Chú Đến Cân Bằng Cuộc Sống",
    summary: "Nếu bạn đang đọc bài này vì cảm thấy ngày nào cũng thiếu thời gian, deadline nào cũng cận kề, và cuối ngày nhìn lại chẳng biết mình đã làm gì &#8211; bài viết này viết cho bạn. Quản lý...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-11-luc-17.23.59.png?w=1024",
    link: "4-cap-do-quan-ly-thoi-gian-tu-ghi-chu-den-can-bang-cuoc-song.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "11 Thg 7, 2026",
    title: "Lạm Phát AI: Vật Tế Thần Hoàn Hảo Cho Cuộc Đại Thanh Trừng Nhân Sự Toàn Cầu",
    summary: "Thế giới đang chứng kiến một trong những đợt tái cấu trúc lao động dữ dội nhất kể từ giai đoạn hậu Covid. Và lần này, có một cái tên được nhắc đến trong gần như mọi thông cáo báo...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-11-luc-17.41.06.png?w=1024",
    link: "lam-phat-ai-vat-te-than-hoan-hao-cho-cuoc-dai-thanh-trung-nhan-su-toan-cau.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "11 Thg 7, 2026",
    title: "Câu chuyện “vẽ voi”",
    summary: "Lại tiếp tục là một concept siêu hay từ TOPICA =)) ôi có thể nói là viết hoài về concept mình học được ở đây không chán ý. 1. Tại sao phải &#8220;vẽ voi&#8221; khi giải quyết vấn đề? Cái...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-11-luc-11.49.23.png?w=800",
    link: "cau-chuyen-ve-voi.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "11 Thg 7, 2026",
    title: "Vòng xoáy 4H: Mô hình giúp sản phẩm ngày càng “đúng” với khách hàng hơn",
    summary: "Với mình, TOPICA không chỉ là nơi mang lại trải nghiệm công việc đầu tiên, mà còn là nơi xây dựng cho mình những concept, những định nghĩa mà đến tận bây giờ &#8211; sau gần 10 năm đi làm...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-11-luc-10.54.03.png?w=1024",
    link: "vong-xoay-4h-mo-hinh-giup-san-pham-ngay-cang-dung-voi-khach-hang-hon.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "10 Thg 7, 2026",
    title: "Hệ thống Level: Phương pháp biến một phễu bán hàng mơ hồ thành dữ liệu tối ưu được",
    summary: "Rất nhiều đội Sales và Marketing chỉ báo cáo bằng 2 con số: &#8220;có bao nhiêu lead&#8221; và &#8220;chốt được bao nhiêu đơn&#8221;. Cách báo cáo này che giấu toàn bộ phần quan trọng nhất: lead bị rơi ở đâu,...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-10-luc-17.16.00.png?w=1024",
    link: "he-thong-level-phuong-phap-bien-mot-pheu-ban-hang-mo-ho-thanh-du-lieu-toi-uu-duoc.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "10 Thg 7, 2026",
    title: "Quy trình viết content chất lượng",
    summary: "Một bài content tốt không bắt đầu từ việc &#8220;ngồi xuống và viết&#8221;. Nó bắt đầu từ việc chọn đúng chủ đề, đặt đúng tiêu đề, và sau đó mới đến kỹ thuật diễn đạt sao cho người đọc không...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-11-luc-17.47.06.png?w=1024",
    link: "quy-trinh-viet-content-chat-luong.html"
  },
  {
    category: "life",
    categoryLabel: "Nghề nhiều chuyện",
    date: "10 Thg 7, 2026",
    title: "Bí quyết viết content Facebook hiệu quả",
    summary: "Hai bài trước đã bàn về Marketing tổng quan và cách Facebook vận hành ở tầng cơ chế. Bài này đi vào phần thực chiến nhất: viết một mẫu quảng cáo Facebook như thế nào để vừa thu hút, vừa...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2026/07/anh-man-hinh-2026-07-10-luc-16.33.29.png?w=1024",
    link: "bi-quyet-viet-content-facebook-hieu-qua.html"
  },
  {
    category: "life",
    categoryLabel: "Uống trà đá",
    date: "14 Thg 1, 2021",
    title: "Hội Chứng “Em Tưởng”: Điểm Mù Khiến Nhiều Bạn Trẻ Mãi Chưa Trưởng Thành Trong Công Việc",
    summary: "Một bạn khẳng định chắc nịch mọi thứ đã &#8220;chốt&#8221;. Nhưng đến bước nghiệm thu, bạn ấy lại hỏi về một khoản chi phí giải ngân 1 triệu đồng với lý do &#8220;đã trao đổi qua điện thoại&#8221;. Một cuộc...",
    image: "https://hoaithuongluu.wordpress.com/wp-content/uploads/2021/01/anh-man-hinh-2026-07-11-luc-17.56.18.png?w=858",
    link: "example-post-3.html"
  },
];

// 1. Render Bài Viết
function renderGrid() {
  const grid = document.getElementById('archive-grid');
  if(!grid) return;
  grid.innerHTML = POSTS.map(p => `
    <article data-category="${p.category}" class="archive-card flex-col gap-4 group border-4 border-on-background bg-surface p-4 hover:shadow-[8px_8px_0px_0px_#1b1c15] transition-all">
      <div class="aspect-[4/3] w-full overflow-hidden border-2 border-on-background">
        <a href="${p.link || 'post.html'}" class="w-full h-full block">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="${p.image}" alt="${p.title}"/>
        </a>
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between mb-2 border-b-2 border-on-background pb-2">
          <span class="font-label-bold text-label-bold text-primary uppercase">${p.categoryLabel}</span>
          <span class="font-label-bold text-label-bold text-on-background">${p.date}</span>
        </div>
        <a href="${p.link || 'post.html'}" class="block group-hover:text-primary">
          <h2 class="font-headline-md text-headline-md text-on-background mb-2 uppercase transition-colors">${p.title}</h2>
        </a>
        <p class="font-body-md text-body-md text-on-background line-clamp-3">${p.summary}</p>
      </div>
    </article>
  `).join('');
  applyFilter(document.querySelector('.filter-btn.active').dataset.filter);
}

// 2. Logic Filter
function applyFilter(f) {
  document.querySelectorAll('.archive-card').forEach(c => {
    c.style.display = (f === 'all' || c.dataset.category === f) ? 'flex' : 'none';
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

renderGrid(); // Initial render

// 3. UI Menu Mobile
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if(toggle){ toggle.addEventListener('click', () => mobileMenu.classList.toggle('open')); }

// 4. Fade-in
const obs = new IntersectionObserver((entries, o) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('is-visible'); o.unobserve(e.target); } });
}, {threshold:0.08});
document.querySelectorAll('.fade-in-up').forEach(el => obs.observe(el));

// 5. Tính Năng Ẩn (Secret Admin Panel)
const trigger = document.getElementById('secret-trigger');
if(trigger) {
  trigger.addEventListener('click', () => {
    document.getElementById('admin-panel').style.display = 'flex';
  });
}

// Init Quill Editor
let quill;
document.addEventListener("DOMContentLoaded", () => {
  if(typeof Quill !== 'undefined') {
    quill = new Quill('#editor-container', {
      theme: 'snow',
      placeholder: 'Bắt đầu viết nội dung bài viết ở đây...',
      modules: {
        toolbar: [
          [{ 'header': [2, 3, false] }],
          ['bold', 'italic', 'underline'],
          ['blockquote'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'image'],
          ['clean']
        ]
      }
    });
  }
});

// Post Template embedded
const POST_TEMPLATE = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>___TITLE___ — Lưu Hoài Thương</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
tailwind.config = {
  darkMode: "class",
  theme: { extend: {
    colors: {"primary-fixed-dim":"#ffb4ac","on-tertiary-fixed":"#061845","secondary-fixed":"#e5e2e1","on-tertiary":"#ffffff","surface-tint":"#c00015","on-tertiary-container":"#fcfaff","on-tertiary-fixed-variant":"#364572","error-container":"#ffdad6","on-secondary-fixed":"#1c1b1b","surface-container-highest":"#e4e3d7","inverse-surface":"#303129","background":"#fbfaee","on-error-container":"#93000a","primary":"#b90014","primary-container":"#e31b23","surface-container-high":"#e9e9dd","surface-container-low":"#f5f4e8","on-primary-fixed-variant":"#93000d","on-secondary":"#ffffff","surface-bright":"#fbfaee","on-primary-fixed":"#410002","surface-variant":"#e4e3d7","outline-variant":"#e7bdb8","error":"#ba1a1a","surface":"#fbfaee","on-background":"#1b1c15","secondary":"#5f5e5e","inverse-on-surface":"#f2f1e5","on-error":"#ffffff","secondary-fixed-dim":"#c8c6c5","on-secondary-container":"#636262","secondary-container":"#e2dfde","on-surface-variant":"#5d3f3c","inverse-primary":"#ffb4ac","tertiary-container":"#6372a3","tertiary-fixed":"#dbe1ff","tertiary-fixed-dim":"#b6c5fb","tertiary":"#4b5988","outline":"#926e6b","surface-container-lowest":"#ffffff","surface-container":"#efeee3","surface-dim":"#dbdbcf","on-surface":"#1b1c15","on-primary-container":"#fff9f8","on-primary":"#ffffff","primary-fixed":"#ffdad6","on-secondary-fixed-variant":"#474746"},
    borderRadius: {"DEFAULT":"0px","lg":"0px","xl":"0px","full":"9999px"},
    spacing: {"container-max":"1440px","margin-mobile":"16px","gutter":"24px","margin-desktop":"64px","unit":"4px"},
    fontFamily: {"body-md":["Hanken Grotesk"],"label-bold":["Space Mono"],"headline-lg-mobile":["Anybody"],"headline-display":["Anybody"],"label-sm":["Space Mono"],"headline-md":["Anybody"],"headline-lg":["Anybody"],"body-lg":["Hanken Grotesk"]},
    fontSize: {"body-md":["16px",{"lineHeight":"160%","fontWeight":"400"}],"label-bold":["14px",{"lineHeight":"120%","fontWeight":"700"}],"headline-lg-mobile":["40px",{"lineHeight":"110%","fontWeight":"800"}],"headline-display":["120px",{"lineHeight":"110%","letterSpacing":"-0.04em","fontWeight":"800"}],"label-sm":["12px",{"lineHeight":"120%","fontWeight":"400"}],"headline-md":["32px",{"lineHeight":"120%","fontWeight":"700"}],"headline-lg":["64px",{"lineHeight":"110%","letterSpacing":"-0.02em","fontWeight":"800"}],"body-lg":["18px",{"lineHeight":"160%","fontWeight":"400"}]}
  }}
}
<\/script>
<style>
html { scroll-behavior: smooth; }
body { background-color:#fbfaee; color:#1b1c15; }
.material-symbols-outlined { font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24; }
.fade-in-up { opacity:0; transform:translateY(30px); transition:opacity 0.8s ease-out,transform 0.8s ease-out; }
.fade-in-up.is-visible { opacity:1; transform:translateY(0); }
#mobile-menu { display:none; }
#mobile-menu.open { display:flex; }
/* Typography overrides for Brutalist feel */
.prose h2, .prose h3 { font-family: 'Anybody', sans-serif; text-transform: uppercase; border-bottom: 4px solid #1b1c15; padding-bottom: 0.5rem; margin-top: 2.5rem; }
.prose blockquote { border-left: 6px solid #b90014; background: #f5f4e8; padding: 1.5rem; font-family: 'Anybody', sans-serif; font-size: 1.25rem; color: #b90014; font-style: normal; }
.prose img { border: 4px solid #1b1c15; filter: grayscale(100%); transition: filter 0.5s ease; }
.prose img:hover { filter: grayscale(0%); }
</style>
</head>
<body class="font-body-md text-body-md antialiased min-h-screen flex flex-col">

<!-- HEADER -->
<header class="bg-background border-b-2 border-on-background flex flex-col w-full sticky top-0 z-50">
  <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
    <a class="font-headline-md text-headline-md font-extrabold text-primary uppercase tracking-tighter" href="index.html">Lưu Hoài Thương</a>
    <nav class="hidden md:flex gap-gutter items-center">
      <a href="index.html" class="font-label-bold text-label-bold text-on-background hover:bg-primary hover:text-on-primary transition-none px-2 py-1">Rosie here</a>
      <a href="archive.html" class="font-label-bold text-label-bold text-on-background hover:bg-primary hover:text-on-primary transition-none px-2 py-1">Nghề nhiều chuyện</a>
      <a href="about.html" class="font-label-bold text-label-bold text-on-background hover:bg-primary hover:text-on-primary transition-none px-2 py-1">Thương đây</a>
      <a href="about.html#contact" class="font-label-bold text-label-bold text-on-background hover:bg-primary hover:text-on-primary transition-none px-2 py-1">Contact</a>
    </nav>
    <div class="flex items-center gap-4">
      <a href="about.html#contact" class="hidden lg:inline-flex items-center justify-center border-2 border-on-background px-6 py-2 font-label-bold text-label-bold uppercase hover:bg-primary hover:text-white hover:border-primary transition-none">Hire Me</a>
      <button id="menu-toggle" aria-label="Menu" class="md:hidden text-primary">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="md:hidden flex-col border-t-2 border-on-background bg-background">
    <a href="index.html" class="block px-6 py-4 font-label-bold text-label-bold uppercase border-b border-surface-dim hover:bg-primary hover:text-white transition-none">Rosie here</a>
    <a href="archive.html" class="block px-6 py-4 font-label-bold text-label-bold uppercase border-b border-surface-dim hover:bg-primary hover:text-white transition-none">Nghề nhiều chuyện</a>
    <a href="about.html" class="block px-6 py-4 font-label-bold text-label-bold uppercase border-b border-surface-dim hover:bg-primary hover:text-white transition-none">Thương đây</a>
    <a href="about.html#contact" class="block px-6 py-4 font-label-bold text-label-bold uppercase border-b border-surface-dim hover:bg-primary hover:text-white transition-none">Contact</a>
  </div>
</header>

<main class="flex-grow max-w-container-max mx-auto w-full mb-20">
  
  <!-- POST HEADER -->
  <article class="w-full">
    <header class="px-margin-mobile md:px-margin-desktop py-12 md:py-20 border-b-4 border-on-background bg-surface-variant fade-in-up">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
        <!-- Breadcrumbs / Category -->
        <div class="flex items-center gap-4 mb-8">
          <a href="archive.html" class="font-label-bold text-label-bold uppercase hover:text-primary underline decoration-2 underline-offset-4">Blog</a>
          <span class="font-label-bold text-label-bold">/</span>
          <a href="archive.html" class="font-label-bold text-label-bold text-primary uppercase border-2 border-primary px-3 py-1 bg-white">___CATLABEL___</a>
        </div>
        
        <h1 style="font-family:Anybody;font-size:clamp(40px,6vw,80px);font-weight:800;line-height:1.1;letter-spacing:-0.02em" class="text-on-background mb-8 uppercase">
          ___TITLE___
        </h1>
        
        <div class="flex items-center justify-center gap-6 font-label-bold text-label-bold uppercase text-secondary">
          <span class="flex items-center gap-2"><span class="material-symbols-outlined text-[18px]">calendar_today</span> ___DATE___</span>
          <span class="flex items-center gap-2"><span class="material-symbols-outlined text-[18px]">schedule</span> 5 phút đọc</span>
        </div>
      </div>
    </header>

    <!-- HERO IMAGE -->
    <div class="px-margin-mobile md:px-margin-desktop my-12 max-w-5xl mx-auto fade-in-up">
      <div class="aspect-video w-full border-4 border-on-background overflow-hidden relative shadow-[12px_12px_0px_0px_#1b1c15]">
        <img src="___IMAGE___" alt="Hero Image" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
      </div>
    </div>

    <!-- POST CONTENT -->
    <div class="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto fade-in-up">
      <div class="prose prose-lg md:prose-xl prose-stone font-body-lg text-on-background w-full max-w-none">
        <p class="lead font-bold text-xl md:text-2xl mb-8">___SUMMARY___</p>
___CONTENT___
      </div>

      <!-- SHARE / AUTHOR BOX -->
      <div class="mt-16 pt-8 border-t-4 border-on-background flex flex-col md:flex-row gap-8 items-center md:items-start bg-surface-container p-8">
        <img src="https://lh3.googleusercontent.com/aida/AP1WRLtsJktvggmfRRz5GFRPhNFlVehQzzE_usvithz1zRy6LWjOthL8YMTPJwvq7PDuyrQOjwbnPqYYKnn2Im2NtPLIIXl4Hld3DBhMbXIsNMUX_UbTrV2gcrWxSWotWWml830Y-mUU6DnOyNIyRJLAq4-wYle1Lxr-tJaXpG0XhjKjlgE1iaG54EoqZJu1CWKgG7Rzkf_tj6VXEmUhBkNuBdxE6SXZ7iAkFDS1qnLzoilgloRDDpKx6WbbnQ" class="w-24 h-24 object-cover border-2 border-on-background grayscale" alt="Author">
        <div>
          <h3 class="font-headline-md text-headline-md uppercase text-primary mb-2">Lưu Hoài Thương</h3>
          <p class="font-body-md text-body-md text-on-background">Marketing Manager với hơn 10 năm kinh nghiệm. Nơi đây là chiếc chậu Tưởng Ký để lưu giữ lại những câu chuyện về nghề, về người và về mình.</p>
        </div>
      </div>
    </div>
  </article>

</main>

<footer class="bg-on-background border-t-2 border-on-background mt-auto">
  <div class="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 w-full max-w-container-max mx-auto gap-8">
    <span class="font-headline-md text-headline-md text-primary-fixed-dim uppercase tracking-tighter">Lưu Hoài Thương</span>
    <nav class="flex gap-6 flex-wrap justify-center">
      <a href="index.html"        class="font-label-bold text-label-bold text-surface-container-highest hover:text-primary transition-none underline decoration-2 underline-offset-4 uppercase">Home</a>
      <a href="archive.html"       class="font-label-bold text-label-bold text-surface-container-highest hover:text-primary transition-none underline decoration-2 underline-offset-4 uppercase">Nghề nhiều chuyện</a>
      <a href="about.html"         class="font-label-bold text-label-bold text-surface-container-highest hover:text-primary transition-none underline decoration-2 underline-offset-4 uppercase">Thương đây</a>
      <a href="about.html#contact" class="font-label-bold text-label-bold text-surface-container-highest hover:text-primary transition-none underline decoration-2 underline-offset-4 uppercase">Contact</a>
    </nav>
    <p class="font-body-md text-body-md text-primary-fixed-dim text-center md:text-right">© 2026 Lưu Hoài Thương. Built for Impact.</p>
  </div>
</footer>

<script>
// Menu toggle
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if(toggle){ toggle.addEventListener('click', () => mobileMenu.classList.toggle('open')); }

// Fade in
const obs = new IntersectionObserver((entries, o) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('is-visible'); o.unobserve(e.target); } });
}, {threshold:0.08});
document.querySelectorAll('.fade-in-up').forEach(el => obs.observe(el));
<\/script>
</body>
</html>`;

// Load Old Post Logic
function loadOldPost(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const htmlContent = evt.target.result;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    
    // Extract metadata
    try {
      document.getElementById('p-title').value = doc.querySelector('h1').innerText.trim();
      document.getElementById('p-date').value = doc.querySelector('.material-symbols-outlined.text-\[18px\]').nextSibling.nodeValue.trim();
      
      // Extract category
      const catLabel = doc.querySelector('a[href="archive.html"].border-2.border-primary').innerText.trim();
      document.getElementById('p-cat-label').value = catLabel;
      // Reverse map category
      const map = { 'Marketing': 'marketing', 'EdTech': 'edtech', 'Sự nghiệp': 'career', 'Chiêm nghiệm': 'life' };
      if(map[catLabel]) document.getElementById('p-cat').value = map[catLabel];
      
      // Extract image
      const img = doc.querySelector('img[alt="Hero Image"]');
      if(img) document.getElementById('p-img').value = img.src;
      
      // Extract summary
      const lead = doc.querySelector('.lead');
      if(lead) document.getElementById('p-summary').value = lead.innerText.trim();
      
      // Extract content
      let prose = doc.querySelector('.prose');
      if(prose) {
         // Remove the summary paragraph from prose before putting into editor
         const leadP = prose.querySelector('.lead');
         if(leadP) prose.removeChild(leadP);
         quill.root.innerHTML = prose.innerHTML;
      }
      
      // Set ID based on filename
      document.getElementById('p-link').value = file.name;
      alert("Đã tải dữ liệu bài viết thành công! Bạn có thể bắt đầu chỉnh sửa.");
    } catch(err) {
      console.error(err);
      alert("Không thể đọc file này. Đảm bảo bạn đang chọn file HTML bài viết được tạo từ hệ thống.");
    }
  };
  reader.readAsText(file);
}

function generatePostCode(e) {
  e.preventDefault();
  
  let slug = document.getElementById('p-link').value.trim();
  if(!slug.endsWith('.html')) slug += '.html';

  const obj = {
    category: document.getElementById('p-cat').value,
    categoryLabel: document.getElementById('p-cat-label').value,
    date: document.getElementById('p-date').value,
    title: document.getElementById('p-title').value.replace(/"/g, '\"'),
    summary: document.getElementById('p-summary').value.replace(/"/g, '\\"').replace(/\\n/g, ' '),
    image: document.getElementById('p-img').value,
    link: slug
  };
  
  // 1. Generate JSON for Archive
  const code = `  {
    category: "${obj.category}",
    categoryLabel: "${obj.categoryLabel}",
    date: "${obj.date}",
    title: "${obj.title}",
    summary: "${obj.summary}",
    image: "${obj.image}",
    link: "${obj.link}"
  },`;
  
  document.getElementById('code-result').style.display = 'block';
  document.getElementById('p-output').value = code;
  document.getElementById('downloaded-filename').innerText = slug;

  // 2. Build HTML Content from Quill
  let editorHtml = quill.root.innerHTML;
  if(editorHtml === '<p><br></p>') editorHtml = '';
  // Wrap summary in lead paragraph
  const contentHtml = `<p class="lead font-bold text-xl md:text-2xl mb-8">${obj.summary}</p>
` + editorHtml;

  // 3. Inject into Template
  let finalHtml = POST_TEMPLATE;
  finalHtml = finalHtml.replace(/___TITLE___/g, obj.title.replace(/\"/g, '"'));
  finalHtml = finalHtml.replace(/___DATE___/g, obj.date);
  finalHtml = finalHtml.replace(/___CATLABEL___/g, obj.categoryLabel);
  finalHtml = finalHtml.replace(/___IMAGE___/g, obj.image);
  finalHtml = finalHtml.replace(/___CONTENT___/g, contentHtml);

  // 4. Trigger Download
  const blob = new Blob([finalHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = slug;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

