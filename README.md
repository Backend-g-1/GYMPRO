
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/GYMPRO-00E676?style=for-the-badge&logo=react&logoColor=white&labelColor=111">
    <img src="https://img.shields.io/badge/GYMPRO-00E676?style=for-the-badge&logo=react&logoColor=white&labelColor=f5f5f5" alt="GYMPRO" height="60">
  </picture>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.7-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8.1.1-646CFF?logo=vite&logoColor=white" alt="Vite 8">
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.12.0-764ABC?logo=redux&logoColor=white" alt="Redux Toolkit">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.3.2-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-12.42.2-0055FF?logo=framer&logoColor=white" alt="Framer Motion">
  <br>
  <img src="https://img.shields.io/badge/Router-DOM_7-FF4154?logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/Status-Development-yellow" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/Netlify-Deploy_Ready-00C7B7?logo=netlify&logoColor=white" alt="Netlify">
</p>

---

# 🏋️ GYMPRO — Fitness Studio Management Frontend

**GYMPRO** - zamonaviy fitnes studiyasi uchun yaratilgan bir sahifali (SPA) web-ilova. Ushbu frontend React ekotizimida qurilgan bo'lib, foydalanuvchilarga trenerlar, mashg'ulot turlari, a'zolik rejalari va boshqa imkoniyatlarni ko'rish va boshqarish imkonini beradi.

> **Holati:** Hozirda loyiha **frontend prototip** bosqichida. Barcha ma'lumotlar statik (mahalliy) fayllardan olinadi. Backend API hali ulanmagan.

---

## 📸 Sahifalar Ko'rinishi

| Sahifa | Tavsif | Holati |
|--------|--------|--------|
| 🏠 **Bosh Sahifa** | Hero, statistika, trenerlar, a'zolik rejalari, fikrlar, CTA | ✅ To'liq |
| 👨‍🏫 **Trenerlar** | Qidirish va filtr bilan trenerlar ro'yxati | ✅ To'liq |
| 👤 **Trener Profili** | Trener haqida batafsil ma'lumot, dasturlar, bron qilish | ✅ To'liq |
| 💪 **Mashg'ulotlar** | Kategoriya va daraja bo'yicha filtrlash | ✅ To'liq |
| 📋 **Mashg'ulot Detallari** | Jadvallar, instruktor, narx | ✅ To'liq |
| 💳 **A'zolik Rejalari** | 3 xil tarif, oylik/yillik to'lov | ✅ To'liq |
| ⭐ **Fikrlar** | Fikrlar galereyasi va qo'shish formasi | ✅ To'liq |
| 📞 **Aloqa** | Kontakt forma, xarita, ma'lumot | ✅ To'liq |
| 🔑 **Kirish/Ro'yxat** | Login va Register | 🚧 Stub |
| 📅 **Bron Qilish** | Mashg'ulot bron qilish | 🚧 Stub |
| 👤 **Profil** | Foydalanuvchi profili | 🚧 Stub |
| 🔧 **Admin Panel** | Dashboard, trenerlar, a'zolik, mashg'ulotlar | 🚧 Stub |
| ❌ **404** | Topilmadi sahifasi | ✅ To'liq |

---

## 🚀 Texnologiyalar

| Texnologiya | Versiya | Vazifasi |
|-------------|---------|----------|
| **React** | 19.2.7 | UI framework (funksional komponentlar, hooks) |
| **Vite** | 8.1.1 | Yuklanuvchi va tezkor build vositasi |
| **React Router DOM** | 7.18.1 | Sahifalar routingi (nested layouts) |
| **Redux Toolkit** | 2.12.0 | Global holat boshqaruvi |
| **React Redux** | 9.3.0 | Redux bilan React integratsiyasi |
| **Tailwind CSS** | 4.3.2 | Utility-first CSS framework (dark mode bilan) |
| **Framer Motion** | 12.42.2 | Animatsiyalar, sahifa o'tish effektlari |
| **Lucide React** | 1.23.0 | Belgilar (icons) to'plami |
| **react-helmet-async** | 3.0.0 | SEO meta teglar |
| **Axios** | 1.18.1 | HTTP so'rovlar (tayyor, hali ulanmagan) |
| **oxlint** | 1.71.0 | Linter (dev dependency) |
| **MUI** | 9.2.0 | Material UI komponentlari (o'rnatilgan, kam ishlatilgan) |
| **react-hook-form** + **zod** | 7.81 / 4.4 | Forma validatsiyasi (o'rnatilgan, hali ishlatilmagan) |
| **sonner** | 2.0.7 | Toast xabarlar (o'rnatilgan, hali ishlatilmagan) |
| **swiper** | 14.0.2 | Karusel/slayder (o'rnatilgan, hali ishlatilmagan) |
| **dayjs** | 1.11.21 | Sana formatlash (o'rnatilgan, hali ishlatilmagan) |

---

## 📁 Loyiha Tuzilishi

```
client/
├── index.html                       # Kirish HTML fayli
├── vite.config.js                   # Vite konfiguratsiyasi
├── netlify.toml                     # Netlify deploy sozlamalari
├── package.json                     # Bog'liqliklar va skriptlar
│
└── src/
    ├── main.jsx                     # Ilova kirish nuqtasi (Helmet → Redux → Theme → App)
    ├── App.jsx                      # RouterProvider
    │
    ├── styles/
    │   └── global.css               # Tailwind import, CSS custom properties, dark mode
    │
    ├── context/
    │   └── ThemeContext.jsx          # Mavzu sozlamalari (light/dark/system) + localStorage
    │
    ├── app/
    │   ├── router/
    │   │   └── index.jsx            # Routelar (createBrowserRouter)
    │   └── store/
    │       ├── index.js             # Redux store konfiguratsiyasi
    │       └── slices/              # Redux slice'lar
    │           └── trainerSlice.js  # Trenerlar filtri va selektorlari
    │
    ├── data/                        # Statik ma'lumotlar (API o'rnida)
    │   ├── trainers.js              # 10 ta trener
    │   ├── classes.js               # 10 ta mashg'ulot + kategoriya/daraja
    │   ├── memberships.js           # 3 ta a'zolik rejasi
    │   ├── testimonials.js          # 12 ta fikr
    │   ├── trustMetrics.js          # 4 ta ishonch ko'rsatkichi
    │   └── contact.js               # Kontakt ma'lumotlar
    │
    ├── services/                    # API xizmatlari (bo'sh, backend ulanishi uchun)
    │   ├── bookingService.js
    │   ├── membershipService.js
    │   └── trainerService.js
    │
    ├── components/
    │   ├── ui/                      # Qayta ishlatiladigan UI primitivlar
    │   │   ├── Button.jsx           # Tugma (primary/secondary animatsiyalar)
    │   │   ├── Container.jsx        # Markazlashtirilgan konteyner
    │   │   ├── LoadingFallback.jsx  # Yuklanmoqda spinneri
    │   │   ├── ScrollReveal.jsx     # Scroll animatsiyasi
    │   │   ├── AnimatedCounter.jsx  # Animatsion sanoq (requestAnimationFrame)
    │   │   ├── SectionTitle.jsx     # Bo'lim sarlavhasi (badge + title + description)
    │   │   ├── Breadcrumb.jsx       # Non ushoqlari navigatsiyasi
    │   │   ├── BackButton.jsx       # Orqaga qaytish tugmasi
    │   │   ├── InteractiveNetwork.jsx # Canvas zarrachalar tarmog'i
    │   │   └── Seo.jsx              # SEO meta teglar (Helmet wrapper)
    │   │
    │   ├── cards/                   # Ma'lumot kartochkalari
    │   │   ├── TrainerCard.jsx      # Trener kartasi (reyting, mutaxassislik)
    │   │   ├── MembershipCard.jsx   # A'zolik rejasi kartasi
    │   │   └── TestimonialCard.jsx  # Fikr kartasi
    │   │
    │   ├── layouts/                 # Umumiy layout elementlari
    │   │   ├── Navbar.jsx           # Responsive navbar (mobil menu + mavzu almashtirish)
    │   │   └── Footer.jsx           # Footer
    │   │
    │   └── sections/                # Sahifa bo'limlari
    │       ├── home/                # Bosh sahifa bo'limlari
    │       ├── trainers/            # Trenerlar ro'yxati bo'limlari
    │       ├── trainer-details/     # Trener detallari bo'limlari
    │       ├── classes/             # Mashg'ulotlar bo'limlari
    │       ├── memberships/         # A'zolik bo'limlari
    │       ├── testimonials/        # Fikrlar bo'limlari
    │       └── contact/             # Aloqa bo'limlari
    │
    ├── layouts/
    │   ├── MainLayout.jsx           # Umumiy layout (Navbar + Page transition + Footer)
    │   └── AdminLayout.jsx          # Admin layout (sidebar + content)
    │
    ├── pages/                       # Sahifalar
    │   ├── Home/HomePage.jsx
    │   ├── Trainers/TrainersPage.jsx & TrainerDetailsPage.jsx
    │   ├── Memberships/MembershipsPage.jsx
    │   ├── Classes/ClassesPage.jsx & ClassDetailsPage.jsx
    │   ├── Testimonials/TestimonialsPage.jsx
    │   ├── Contact/ContactPage.jsx
    │   ├── Booking/BookingPage.jsx      # Stub
    │   ├── Auth/LoginPage.jsx & RegisterPage.jsx # Stub
    │   ├── Profile/ProfilePage.jsx      # Stub
    │   ├── NotFound/NotFoundPage.jsx
    │   └── Admin/                      # Stub
    │       ├── DashboardPage.jsx
    │       ├── TrainersAdminPage.jsx
    │       ├── MembershipAdminPage.jsx
    │       └── ClassesAdminPage.jsx
    │
    ├── hooks/                      # Custom hook'lar (bo'sh)
    ├── constants/                  # Konstantalar (bo'sh)
    ├── utils/                      # Yordamchi funksiyalar (bo'sh)
    └── assets/                     # Resurslar (bo'sh)
```

---

## 🎨 Dizayn Tizimi

GYMPRO **glassmorphism** va **zamonaviy minimal** uslubda yaratilgan:

| Komponent | Tavsif |
|-----------|--------|
| 🟢 **Aksent rang** | `#00E676` (yashil) — CTA tugmalar, faol holatlar |
| 🪟 **Glass effekt** | `backdrop-blur-xl`, shaffof fonlar |
| 🌓 **Dark/Light** | 3 rejim (dark/light/system), localStorage saqlash |
| 🎬 **Animatsiyalar** | Scroll reveal, sahifa o'tishlari, hover effektlari |
| 🖼️ **Canvas Network** | Interaktiv zarrachalar tarmog'i (fonda) |

---

## ⚡ O'rnatish va Ishga Tushirish

```bash
# 1. Bog'liqliklarni o'rnatish
npm install

# 2. Ishlab chiqish serverini ishga tushirish
npm run dev

# 3. Production build
npm run build

# 4. Production buildni oldindan ko'rish
npm run preview

# 5. Lint tekshiruvi
npm run lint
```

**Talablar:**
- Node.js 18+ tavsiya etiladi
- npm 9+ yoki yarn / pnpm

---

## 📖 Mavjud Ma'lumotlar

Ilova hozirda **6 ta statik ma'lumot fayli** bilan ishlaydi:

| Fayl | Ma'lumot | Yozuvlar soni |
|------|----------|---------------|
| `trainers.js` | Trenerlar (ism, mutaxassislik, tajriba, reyting, dasturlar) | 10 ta |
| `classes.js` | Mashg'ulotlar (kategoriya, daraja, jadval, narx) | 10 ta |
| `memberships.js` | A'zolik rejalari (Basic / Standard / Premium) | 3 ta |
| `testimonials.js` | Fikrlar (reyting, matn, sana) | 12 ta |
| `trustMetrics.js` | Ishonch ko'rsatkichlari (reyting, a'zolar soni) | 4 ta |
| `contact.js` | Kontakt ma'lumotlar (manzil, telefon, xarita) | 1 ta |

---

## 🗺️ Marshrutlar (Routing)

### Umumiy sahifalar (`MainLayout` bilan)

```
/                     → HomePage         (🏠 Bosh sahifa)
/trainers             → TrainersPage     (👨‍🏫 Trenerlar ro'yxati)
/trainers/:id         → TrainerDetails   (👤 Trener profili)
/memberships          → MembershipsPage  (💳 A'zolik rejalari)
/classes              → ClassesPage      (💪 Mashg'ulotlar)
/classes/:id          → ClassDetails     (📋 Mashg'ulot detallari)
/testimonials         → TestimonialsPage (⭐ Fikrlar)
/contact              → ContactPage      (📞 Aloqa)
/booking              → BookingPage      (📅 Bron qilish — stub)
/login                → LoginPage        (🔑 Kirish — stub)
/register             → RegisterPage     (📝 Ro'yxat — stub)
/profile              → ProfilePage      (👤 Profil — stub)
*                     → NotFoundPage     (❌ 404)
```

### Admin sahifalar (`AdminLayout` bilan)

```
/admin                → Dashboard        (📊 Admin paneli — stub)
/admin/trainers       → TrainersAdmin    (👨‍🏫 Trenerlarni boshqarish — stub)
/admin/memberships    → MembershipAdmin  (💳 A'zoliklarni boshqarish — stub)
/admin/classes        → ClassesAdmin     (💪 Mashg'ulotlarni boshqarish — stub)
```

Barcha sahifalar `React.lazy()` yordamida **code splitting** qilingan.

---

## 🧠 Holat Boshqaruvi (State Management)

| Usul | Nima uchun | Tafsilot |
|------|------------|----------|
| **Redux Toolkit** | Global state | `trainerSlice` — qidiruv, mutaxassislik filtri |
| **ThemeContext** | Mavzu sozlamalari | `light/dark/system` + `localStorage` saqlash |
| **Local state (useState/useMemo)** | Sahifa ichki holat | `useSearchParams` bilan filtr, saralash |

---

## ✨ Asosiy Xususiyatlar

- ✅ **To'liq ishlaydigan sahifalar**: Bosh sahifa, Trenerlar, Mashg'ulotlar, A'zolik, Fikrlar, Aloqa
- ✅ **Shisha effektli (Glassmorphism) dizayn**: Zamonaviy, premium ko'rinish
- ✅ **Qorong'i/Yorug' mavzu**: 3 rejimli toggle (dark/light/system)
- ✅ **Animatsiyalar**: Sahifa o'tishlari, scroll reveal, sanoq animatsiyalari, hover effektlari
- ✅ **Responsive**: Barcha qurilmalarda moslashuvchan
- ✅ **SEO optimallashtirish**: react-helmet-async bilan meta teglar
- ✅ **Code Splitting**: Har bir sahifa alohida yuklanadi (lazy loading)
- ✅ **Interaktiv fon**: Canvas zarrachalar tarmog'i (InteractiveNetwork)
- 🚧 **API integratsiyasi**: Axios o'rnatilgan, service fayllar tayyor, backend kutmoqda
- 🚧 **Auth tizimi**: Login/Register sahifalari tayyor, logika yo'q
- 🚧 **Admin panel**: Layout tayyor, 4 ta sahifa stub holatida
- 🚧 **Bron qilish**: Sahifa tayyor, funksionallik yo'q
- 🚧 **Testlar**: Test frameworki o'rnatilmagan

---

## 🔮 Kelajak Rejalar

- [ ] **Backend API** bilan integratsiya (Axios orqali)
- [ ] **Authentication** — login, register, token boshqaruvi
- [ ] **Admin panel** — to'liq boshqaruv interfeysi
- [ ] **Bron qilish tizimi** — mashg'ulot va trener bron qilish
- [ ] **Foydalanuvchi profili** — shaxsiy ma'lumotlar va tarix
- [ ] **To'lov tizimi** — a'zolik uchun to'lov
- [ ] **Testlar** — unit va integration testlar
- [ ] **Real ma'lumotlar** — dinamik API ma'lumotlari

---

## 🚀 Deploy

Loyiha **Netlify** ga deploy qilishga tayyor:

```bash
npm run build
```

`netlify.toml` fayli SPA routing uchun barcha yo'nalishlarni `index.html` ga yo'naltiradi:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 👨‍💻 Ishlab Chiquvchi

Loyiha **Abdulaziz Ergashev** tomonidan ishlab chiqilmoqda.

---

## 📄 Litsenziya

MIT
