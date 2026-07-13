# Gamma AI uchun Master Prompt: GYM-PRO — Fitness Management System

## Taqdimot maqsadi

Ushbu taqdimot **React va Zamonaviy Frontend** texnologiyalari yordamida qurilayotgan **GYM-PRO** fitness klub boshqaruv tizimining hozirgi holatini o'rganish uchun mo'ljallangan. Taqdimot o'quvchilarga (frontend dasturlash o'rganayotgan talabalar) real loyiha arxitekturasi, komponent yondashuvi va hozirgi zamonaviy React ekotizimini tushunishga yordam beradi.

> **Muhim:** Bu loyiha hali **tugallanmagan** — qanday qismlari ishlangan va qaysilari hali placeholder ekanligi taqdimotda ochiq ko'rsatilishi kerak.

---

## Taqdimot mazmuni

### 1. Loyiha haqida umumiy ma'lumot

- **Loyiha:** GYM-PRO — Fitness Club Management System (Frontend qismi)
- **Maqsad:** Fitnes klub a'zolari va adminlari uchun to'liq boshqaruv tizimi
- **Holati:** Ishlanmoqda (hozircha ~40% tayyor)
- **Loyiha turi:** O'quv/Portfolio loyihasi

### 2. Texnologik Stack (to'liq ko'rinish)

| Texnologiya | Versiya | Vazifasi |
|---|---|---|
| **React** | 19.2.7 | UI kutubxonasi |
| **Vite** | 8.1.1 | Bundler va dev server |
| **Tailwind CSS** | 4.3.2 | Stilizatsiya |
| **Framer Motion** | 12.42.2 | Animatsiyalar |
| **React Router** | 7.18.1 | Routing |
| **Redux Toolkit** | 2.12 | Global state |
| **React Hook Form + Zod** | 7.81 / 4.4 | Formalar va validatsiya |
| **MUI** | 9.2 | UI kit (qisman) |
| **Axios** | 1.18.1 | API so'rovlari |
| **Swiper** | 14.0.2 | Slayderlar |
| **Lucide React** | — | Ikonkalar |
| **Sonner** | 2.0.7 | Toast bildirishnomalar |
| **Dayjs** | 1.11.21 | Sana va vaqt bilan ishlash |

> 💡 **Nega aynan shu stack?** — React 19 eng so'nggi versiya, Vite 8 ultra-tez, Tailwind CSS 4 zero-config, Framer Motion professional animatsiyalar uchun.

### 3. Loyiha tuzilishi (Folder Structure)

Loyiha `client/` papkasida joylashgan, asosiy kod `client/src/` ichida:

```
src/
├── app/
│   ├── router/index.jsx     → Barcha routing sozlamalari
│   └── store/index.js       → Redux store (hali bo'sh)
├── components/
│   ├── cards/               → Takrorlanuvchi kartochkalar
│   │   ├── MembershipCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── TrainerCard.jsx
│   ├── layouts/             → Layout komponentlari
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── sections/            → Sahifa sectionlari
│   │   ├── home/            → 7 ta section (Hero, Stats, ...)
│   │   ├── trainer-details/ → 5 ta section
│   │   └── trainers/        → 5 ta section
│   └── ui/                  → Universal UI komponentlar
│       ├── AnimatedCounter.jsx
│       ├── Button.jsx
│       ├── Container.jsx
│       └── SectionTitle.jsx
├── data/                    → Static mock ma'lumotlar
│   ├── memberships.js
│   ├── testimonials.js
│   ├── trainers.js          → 10 ta trainer
│   └── trustMetrics.js
├── layouts/
│   ├── MainLayout.jsx       → Asosiy layout (Navbar + Footer)
│   └── AdminLayout.jsx      → Admin layout (hali MainLayout bilan bir xil)
├── pages/
│   ├── Admin/               → 4 ta admin page (hammasi placeholder)
│   ├── Auth/                → Login/Register (placeholder)
│   ├── Booking/             → Booking (placeholder)
│   ├── Classes/             → Classes (placeholder)
│   ├── Home/                → ✓ To'liq ishlangan
│   ├── Memberships/         → Placeholder
│   ├── Profile/             → Placeholder
│   └── Trainers/            → ✓ To'liq ishlangan
├── services/                → API servislar (hammasi bo'sh)
├── styles/global.css        → Tailwind import
├── App.jsx                  → Root komponent
└── main.jsx                 → Entry point
```

> **🗺️ Routing tuzilishi:**
> - Public: `/`, `/trainers`, `/trainers/:id`, `/memberships`, `/classes`, `/booking`, `/login`, `/register`, `/profile`
> - Admin: `/admin`, `/admin/trainers`, `/admin/memberships`, `/admin/classes`

### 4. Tugallangan qismlar (Batafsil)

#### 4.1. Layout tizimi

**MainLayout.jsx** — Barcha public sahifalarni o'rab turuvchi layout:
- **Navbar** — Scroll-aware, shaffofligi scroll bilan o'zgaradi (`scrolled` state), glassmorphism effekt
- **Footer** — 4-column grid, logo, navigatsiya va kontakt
- `<Outlet />` — React Router orqali sahifalarni render qiladi
- Dark tema: `bg-[#030712]`

#### 4.2. UI Komponentlar (Reusable)

**Button.jsx** — 2 variant: `primary` (#00E676, hover glow) va `secondary` (glassmorphism)
**Container.jsx** — `max-w-7xl` markazlashtirilgan wrapper
**SectionTitle.jsx** — Badge + title + description (markazlashtirilgan)
**AnimatedCounter.jsx** — IntersectionObserver orqali trigger bo'luvchi animatsion sanoq (0 dan N gacha)

#### 4.3. Home Page (7 section)

**HeroSection** — Full-screen hero:
- Fon: 3 ta glow blur element (green/emerald)
- Chap: badge + sarlavha + matn + 2 button + brand logos (Nike, Gymshark, Technogym, Adidas)
- O'ng: rasm + floating stat kartalar (Active Members, Trainers, Success Rate, Calories)
- Scroll indikator (animatsion)

**StatsSection** — 4 ta stat: 5000+ Members, 50+ Trainers, 20+ Programs, 15+ Years
- AnimatedCounter bilan scroll-trigger animation
- Hover effekt: y=-8, scale, glow border

**FeaturedTrainersSection** — Swiper slayder:
- Autoplay (3s), loop, breakpoint responsive (1/2/3 cards)
- TrainerCard komponenti bilan

**MembershipPreviewSection** — 3 ta plan:
- Monthly/Yearly toggle (yearly = 20% chegirma)
- MembershipCard komponentlari
- "Most Popular" badge

**TestimonialsSection** — Swiper slayder (5 ta testimonial)
**TrustSection** — 4 ta trust metric (Star, Users, Trophy, ShieldCheck iconkalar)
**CTASection** — CTA block: floating Dumbbell, "5000+ Active Members", "98% Success Rate"

#### 4.4. Trainers Page

**TrainersHero** — Sarlavha qismi
**TrainersFilter** — Search + specialty filter (query params bilan sync)
**TrainersGrid** — TrainerCard grid (3 column)
**TrainersEmpty** — Empty state
**TrainersLoading** — Loading state (hali to'ldirilmagan)

Trainers data'dan (10 ta) filter qilish: `input` bo'yicha name, `select` bo'yicha specialty — URL search params orqali.

#### 4.5. Trainer Details Page

**TrainerProfileHero** — Rasm + ism + specialty + rating + Book Session tugma
**TrainerStats** — Clients, Experience, Rating, Programs (Framer Motion stagger)
**TrainerAbout** — Bio + Certifications
**TrainerPrograms** — Grid (stagger animation)
**TrainerBooking** — CTA block (Train with x, Book Session)

> ⚠️ Trainer Details da purple rang (#purple-600) ishlatilgan, Home da esa green (#00E676). Bu — dizayn kelishmovchiligi.

### 5. Placeholder (Hali ishlanmagan) qismlar

| Sahifa | Fayl | Holati |
|---|---|---|
| `/memberships` | MembershipsPage.jsx | `<div>MembershipsPage</div>` |
| `/classes` | ClassesPage.jsx | `<div>ClassesPage</div>` |
| `/booking` | BookingPage.jsx | `<div>BookingPage</div>` |
| `/login` | LoginPage.jsx | `<div>LoginPage</div>` |
| `/register` | RegisterPage.jsx | `<div>RegisterPage</div>` |
| `/profile` | ProfilePage.jsx | `<div>ProfilePage</div>` |
| `/admin` | DashboardPage.jsx | `<div>DashboardPage</div>` |
| `/admin/trainers` | TrainersAdminPage.jsx | `<div>TrainersAdminPage</div>` |
| `/admin/memberships` | MembershipAdminPage.jsx | `<div>MembershipAdminPage</div>` |
| `/admin/classes` | ClassesAdminPage.jsx | `<div>ClassesAdminPage</div>` |

Bundan tashqari:
- **Redux store** (`app/store/index.js`) — bo'sh
- **Services** (`bookingService.js`, `trainerService.js`, `membershipService.js`) — bo'sh
- **Sidebar.jsx** — faqat "Admin Sidebar" matni bor
- **AdminLayout.jsx** — MainLayout bilan bir xil (Sidebar ishlatilmagan)

### 6. Design System

| Komponent | CSS xususiyati |
|---|---|
| **Background** | `bg-[#030712]` (dark) |
| **Primary rang** | `#00E676` (green neon) |
| **Secondary rang** | Purple (`trainer-details` da) |
| **Kartalar** | `border-white/10 bg-white/5 backdrop-blur-xl` (glassmorphism) |
| **Glow effektlar** | `blur-[120px]`, `shadow-[0_0_25px_rgba(0,230,118,.5)]` |
| **Animatsiyalar** | Framer Motion: `whileHover`, `whileInView`, `staggerChildren` |
| **Scroll trigger** | IntersectionObserver orqali AnimatedCounter |
| **Typography** | Tailwind default white/gray-400 |

### 7. Arxitektura naqshlari

1. **Component-based** — Har bir UI qismi alohida fayl, section'larga ajratilgan
2. **Static data phase** — Hozircha mock ma'lumotlar (keyin API ga o'tadi)
3. **URL-based state** — Filter parametrlari URL search params da saqlanadi
4. **Reusable UI kit** — Button, Container, SectionTitle, AnimatedCounter
5. **CSS-in-JS** emas, Tailwind CSS utility classes
6. **No TypeScript** — JSX da yozilgan, hozircha typesiz

### 8. O'quvchilar uchun muhim jihatlar

Taqdimot davomida quyidagi savollarga javob berish kerak:

- Nima uchun **React 19** va **Vite 8** tanlangan?
- **Tailwind CSS 4** nima bilan farq qiladi (zero config, CSS-first)?
- **Framer Motion** animatsiyalarini qanday ishlatish kerak (`whileHover`, `whileInView`, `AnimatePresence`)?
- **React Router v7** da nested routing qanday ishlaydi? `Outlet`, `createBrowserRouter`, `NavLink`?
- **Glassmorphism** va **neon glow** CSS effektlarini qanday yasash mumkin?
- **Swiper** slayderni responsive qilish (breakpoints)?
- **IntersectionObserver** orqali scroll-trigger animation?
- **Query params** orqali filter state ni saqlash?
- **Komponent tuzilishi**: cards vs sections vs ui — farqi nima?
- **Real loyiha vs o'quv loyihasi** farqi — nima uchun placeholder sahifalar bor?

### 9. Rejalashtirilgan keyingi qadamlar

1. **API integratsiyasi** — Axios orqali backend bilan bog'lanish
2. **Redux store** — Auth va global state uchun
3. **Auth tizimi** — Login/Register, JWT token
4. **Booking tizimi** — Trainer va Class lar uchun bron qilish
5. **Admin panel** — CRUD operatsiyalar
6. **Memberships** — To'lov tizimi
7. **Profile** — Foydalanuvchi profili

---

## Taqdimot formati bo'yicha tavsiyalar

**Taqdimotni 3 qismga bo'ling:**

1. **Kirish (25%)** — Loyiha maqsadi, stack, arxitektura
2. **Ishlangan qismlar (50%)** — Har bir komponentni kod bilan ko'rsatish, live demo
3. **Xulosa (25%)** — Placeholderlar, rejalar, o'rganilgan texnologiyalar

**Har bir komponent uchun:**
- Kod snippet + ekran ko'rinishi
- Nima vazifasi, qanday ishlatiladi
- Qanday takomillashtirish mumkin

**Dizayn nuanslari:**
- `group-hover:` parent hover da child ni o'zgartirish
- `backdrop-blur-xl` glassmorphism uchun
- `bg-linear-to-t` gradient overlay
- `before:` pseudo-element orqali effektlar

---

## Muhim eslatma

> Ushbu loyiha **ishlanmoqda** — o'quvchilar uni real rivojlanayotgan kod bazasi sifatida ko'rishi kerak. Ham to'liq ishlangan, ham placeholder qismlar mavjud. Bu ularga real dasturlash jarayoni, refactoring va incremental development haqida tushuncha beradi.
