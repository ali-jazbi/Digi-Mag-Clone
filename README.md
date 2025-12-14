# پارین صنعت - مجله دیجیتالی

## ساختار فایل‌ها

### فایل‌های اصلی HTML

- `landing.html` - صفحه اصلی / فرودی
- `single.html` - صفحه مقالة منفرد
- `category.html` - صفحة دسته‌بندی / لیست مقالات

### فایل‌های کاهش تکرار (DRY - Don't Repeat Yourself)

#### `styles.css`

شامل تمام CSS مشترک میان 3 صفحه:

- `.scrollbar-hide` - پنهان کردن scrollbar
- `.menu-item` - استایل‌های منو (Landing page)
- `.article-content` - استایل‌های متن مقالات (Single page)

#### `colors.css`

تعریف متغیرهای CSS برای رنگ‌ها:

- رنگ‌های اولیه (Blue, Red, Green, Dark, Gray)
- رنگ‌های متن و پس‌زمینه
- سایه‌ها (Shadows)

#### `tailwind-config.js`

تنظیمات مشترک Tailwind CSS:

- فونت‌ها (Vazirmatn)
- تعریف رنگ‌های Custom
- Box Shadows
- Screen sizes

---

## نحوة استفاده

### در HTML Files:

```html
<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fonts -->
<link
  href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.0.3/misc/Farsi-Digits/font-face.css"
  rel="stylesheet" />

<!-- Shared Styles -->
<link href="styles.css" rel="stylesheet" />

<!-- Colors (Optional) -->
<link href="colors.css" rel="stylesheet" />

<!-- Tailwind Config -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { sans: ["Vazirmatn", "sans-serif"] },
        colors: {
          psBlue: "#0ea5e9",
          psRed: "#ef394e",
          // ... more colors
        },
      },
    },
  };
</script>
```

---

## رنگ‌های مورد استفاده

| نام       | کد        | استفاده                     |
| --------- | --------- | --------------------------- |
| `psBlue`  | `#0ea5e9` | رنگ اصلی، دکمه‌ها، لینک‌ها  |
| `psRed`   | `#ef394e` | رنگ فوکوس، Hover، دکمه ویژه |
| `psGreen` | `#10b981` | نکات مثبت، Success          |
| `psGray`  | `#f8f8f8` | پس‌زمینة پیش‌فرض            |
| `psDark`  | `#1c1c1c` | متن تیره، هدر، فوتر         |

---

## نکات مهم

### Tailwind Configuration

تمام فایل‌ها استفاده می‌کنند از Tailwind CDN و کانفیگ یکسانی دارند. این موارد در هر فایل تعریف شده‌اند:

- Color extensions
- Font family configuration
- Custom shadow definitions

### CSS Utilities

کلاس‌های مشترک که در `styles.css` تعریف شده‌اند:

- `scrollbar-hide` - برای مخفی‌کردن scrollbar
- `menu-item` - برای انیمیشن منو
- `article-content` - برای استایل محتوای مقالات

### بهتری‌های آینده

برای بهتر شدن بیشتر می‌تواند:

- استفاده از Tailwind کانفیگ فایل اصلی (tailwind.config.js)
- استفاده از CSS Modules یا Tailwind @apply directives
- Minification و بهینه‌سازی عملکرد

---

## مشخصات تکنیکی

- **Framework**: HTML5 + Tailwind CSS
- **Font**: Vazirmatn
- **Direction**: RTL (راست به چپ)
- **Color Scheme**: Custom Parin Sanat palette
- **Responsive**: Mobile-first design
